

// TODO:

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

// const getOne = async (bookId) => {
//     try {
//         const docRef = doc(db, "books", bookId);
//         const docSnap = await getDoc(docRef);
//         return docSnap.data();
//     } catch (error) {
//         console.log(error);
//         throw Error(error);
//     }
// }