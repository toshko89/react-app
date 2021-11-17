import { db, imagesRef } from "../utils/firebase.js";
import { collection, addDoc, getDoc, getDocs } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

const addBook = async (title, age, description, file) => {
    try {
        const imageRef = ref(imagesRef, file.name);
        await uploadBytes(imageRef, file);
        const imgUrl = await getDownloadURL(ref(imagesRef, file.name))
        const docRef = await addDoc(collection(db, "books"), {
            title,
            age,
            description,
            likes: 0,
            img: imgUrl,
        });
        const docSnap = await getDoc(docRef);
        console.log(docSnap.data());
        return docSnap.data();
    } catch (e) {
        console.error("Error adding document: ", e);
        return e;
    }
}

const getAllBooks = async () => {
    const querySnapshot = await getDocs(collection(db, "books"));
    const allBooks = querySnapshot.docs.map((doc) => {
        return { id: doc.id, ...doc.data() }
    });

    return allBooks;
}

export { addBook, getAllBooks }