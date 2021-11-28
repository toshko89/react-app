import { db, imagesRef, storage } from "../utils/firebase.js";
import { doc, collection, addDoc, getDoc, getDocs, query, where, deleteDoc, updateDoc, increment, arrayUnion } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL, deleteObject } from "firebase/storage";

const addBook = async (title, author, age, description, file, ownerId) => {
    try {
        const imgName = file.name;
        const imageRef = ref(imagesRef, imgName);
        await uploadBytes(imageRef, file);
        const imgUrl = await getDownloadURL(ref(imagesRef, imgName))
        const docRef = await addDoc(collection(db, "books"), {
            ownerId,
            title,
            author,
            age,
            description,
            likes: 0,
            totalLikes: [],
            img: imgUrl,
            imgName
        });
        const docSnap = await getDoc(docRef);
        return docSnap.data();
    } catch (error) {
        console.log(error);
        throw Error(error);
    }
}

const updateBook = async (bookId, title, author, age, description, file) => {
    try {
        const docRef = doc(db, "books", bookId);
        const imgName = file.name;
        const imageRef = ref(imagesRef, imgName);
        await uploadBytes(imageRef, file);
        const imgUrl = await getDownloadURL(ref(imagesRef, imgName))
        await updateDoc(docRef, {
            title,
            author,
            age,
            description,
            img: imgUrl,
            imgName
        });
        const docSnap = await getDoc(docRef);
        return docSnap.data();
    } catch (error) {
        console.log(error);
        throw Error(error);
    }
}

const getAllBooks = async () => {
    try {
        const querySnapshot = await getDocs(collection(db, "books"));
        const allBooks = querySnapshot.docs.map((doc) => {
            return { id: doc.id, ...doc.data() }
        });

        return allBooks;
    } catch (error) {
        console.log(error);
        throw Error(error);
    }
}

const getOne = async (bookId) => {
    try {
        const docRef = doc(db, "books", bookId);
        const docSnap = await getDoc(docRef);
        return docSnap.data();
    } catch (error) {
        console.log(error);
        throw Error(error);
    }
}

// const booksSnapShot = (userId) => {
//     const books = [];
//     const q = query(collection(db, "books"), where("ownerId", "==", userId));
//     const unsubscribe = onSnapshot(q, (querySnapshot) => {
//         querySnapshot.forEach((doc) => {
//             books.push({ id: doc.id, ...doc.data() });
//         });
//     });
//     return books;
// }

const getMyBooks = async (userId) => {
    try {
        const booksRef = collection(db, "books");
        const q = query(booksRef, where("ownerId", "==", userId));
        const querySnapshot = await getDocs(q);
        const myBooks = querySnapshot.docs.map((doc) => {
            return { id: doc.id, ...doc.data() }
        });

        return myBooks;
    } catch (error) {
        console.log(error);
        throw Error(error);
    }
}

const deleteOldImg = async (imgName) => {
    try {
        const imgRef = ref(storage, imgName);
        await deleteObject(imgRef);
    } catch (error) {
        console.log(error);
        throw Error(error);
    }
}

const deleteBook = async (bookId, imgName) => {
    try {
        await deleteDoc(doc(db, "books", bookId));
        if (imgName) {
            const imgRef = ref(storage, imgName);
            await deleteObject(imgRef);
        }
    } catch (error) {
        console.log(error);
        throw Error(error);
    }
}

const likeBook = async (bookId, userId) => {
    const bookRef = doc(db, "books", bookId);
    try {
        await updateDoc(bookRef, {
            likes: increment(1),
            totalLikes: arrayUnion(userId)
        });
    } catch (error) {
        console.log(error);
        throw Error(error);
    }
}

const disLikeBook = async (bookId, userId) => {
    const bookRef = doc(db, "books", bookId);
    try {
        await updateDoc(bookRef, {
            likes: increment(-1),
            totalLikes: arrayUnion(userId)
        });
    } catch (error) {
        console.log(error);
        throw Error(error);
    }
}

export { addBook, getAllBooks, getOne, getMyBooks, deleteBook, updateBook, deleteOldImg, likeBook, disLikeBook }