import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from 'firebase/auth';


const firebaseConfig = initializeApp({
    apiKey: "AIzaSyCurNw2mEhoo2-l6PCZgQqtyQELxCyLnLU",
    authDomain: "first-react-project-8439a.firebaseapp.com",
    databaseURL: "https://first-react-project-8439a-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "first-react-project-8439a",
    storageBucket: "first-react-project-8439a.appspot.com",
    messagingSenderId: "807909954010",
    appId: "1:807909954010:web:6e3a0470a42917eb24f0e3",
    measurementId: "G-MLCFV0Q93F"
});

const db = getFirestore();
const auth = getAuth();
export { db, auth };