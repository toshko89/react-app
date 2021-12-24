import { doc, getDoc } from "firebase/firestore";

// const getAllBooks = async () => {
//     try {
//         const querySnapshot = await getDocs(collection(db, "books"));
//         const allBooks = querySnapshot.docs.map((doc) => {
//             return { id: doc.id, ...doc.data() }
//         });

//         return allBooks;
//     } catch (error) {
//         console.log(error);
//         throw Error(error);
//     }
// }

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

export {
    getCurrentUserFromDB,  
}