import { arrayRemove, arrayUnion, doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "../utils/firebase.js";



const canAddToWishList = async (userId, book) => {
    try {
        const docRef = doc(db, "users", userId);
        const docSnap = await getDoc(docRef);
        const userData = docSnap.data();
        const canAdd = userData.wishList.some(books => books.title === book.title);
        return canAdd;

    } catch (error) {
        console.log(error);
        throw Error(error);
    }
}

const getCurrentUserFromDB = async (userId) => {
    try {
        const docRef = doc(db, "users", userId);
        const docSnap = await getDoc(docRef);
        return docSnap.data();
    } catch (error) {
        console.log(error);
        throw Error(error);
    }
}

const addBookToWishList = async (book, bookId, userId) => {
    const docRef = doc(db, "users", userId);
    const newBook = { _bookId: bookId, ...book }
    try {
        await updateDoc(docRef, {
            wishList: arrayUnion(newBook)
        });
    } catch (error) {
        console.log(error);
        throw Error(error);
    }
}

const removeBookFromWishList = async (book, userId) => {
    const docRef = doc(db, "users", userId);
    try {
        await updateDoc(docRef, {
            wishList: arrayRemove(book)
        });
    } catch (error) {
        console.log(error);
        throw Error(error);
    }
}

const addUserDataToOrderList = async (ownerId, bookTitle, orderData) => {
    const docRef = doc(db, "users", ownerId);
    const userData = {
        bookTitle,
        orderData
    }
    console.log(userData);
    try {
        await updateDoc(docRef, {
            orders: arrayUnion(userData)
        });
    } catch (error) {
        console.log(error);
        throw Error(error);
    }
}

export {
    getCurrentUserFromDB,
    addBookToWishList,
    removeBookFromWishList,
    addUserDataToOrderList,
    canAddToWishList
}