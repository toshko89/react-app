import { db, imagesRef } from "../utils/firebase.js";
import { doc, collection, addDoc, getDoc, getDocs, onSnapshot, query, where } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

const addBook = async (title, author, age, description, file, ownerId) => {
    try {
        const imageRef = ref(imagesRef, file.name);
        await uploadBytes(imageRef, file);
        const imgUrl = await getDownloadURL(ref(imagesRef, file.name))
        const docRef = await addDoc(collection(db, "books"), {
            ownerId,
            title,
            author,
            age,
            description,
            likes: 0,
            img: imgUrl
        });
        const docSnap = await getDoc(docRef);
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

const getOne = async (bookId) => {
    const docRef = doc(db, "books", bookId);
    const docSnap = await getDoc(docRef);
    return docSnap.data();
}

const booksSnapShot = async () => {
    const q = query(collection(db, "books"));
    const currentBooks = onSnapshot(q, (querySnapshot) => {
        const books = [];
        querySnapshot.forEach((doc) => {
            books.push(doc.data());
        });

        return books;
    });

    return currentBooks;
}

const getMyBooks = async (userId) => {
    const booksRef = collection(db, "books");
    const q = query(booksRef, where("ownerId", "==", userId));
    const querySnapshot = await getDocs(q);
    const myBooks = querySnapshot.docs.map((doc) => {
        return { id: doc.id, ...doc.data() }
    });

    return myBooks;
}

export { addBook, getAllBooks, getOne, booksSnapShot, getMyBooks }