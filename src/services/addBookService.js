import { db } from "../utils/firebase.js";
import { collection, addDoc, getDoc } from "firebase/firestore";

const addBook = async (title, age, description) => {
    try {
        const docRef = await addDoc(collection(db, "books"), {
            title,
            age,
            description,
            likes: 0
        });
        console.log("Document written with ID: ", docRef.id);
        const docSnap = await getDoc(docRef);
        return docSnap.data();
    } catch (e) {
        console.error("Error adding document: ", e);
        return e;
    }
}

export { addBook }