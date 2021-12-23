import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { auth, db } from '../utils/firebase.js'


function registerUser(email, password) {
    const userData = createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            setDoc(doc(db, "users", user.uid), {
                email: user.email,
                wishList: [],
                orders: [],
            });
            return user;
        })
        .catch((signUpError) => {
            if (signUpError.code === 'auth/email-already-in-use') {
                throw Error('Email taken, please chose diffrent email');
            } else if (signUpError.code === 'auth/invalid-email') {
                throw Error('Please provide a valid email');
            } else if (signUpError.code === 'auth/weak-password') {
                throw Error('The password is too weak.');
            } else {
                throw Error(signUpError.code);
            }
        });

    return userData;
}

function login(email, password) {
    const userData = signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            return user;
        })
        .catch((signUpError) => {
            if (signUpError.code === 'auth/wrong-password') {
                throw Error('Wrong username or password')
            } else if (signUpError.code === 'auth/user-not-found') {
                throw Error('Wrong username or password')
            } else {
                throw Error(signUpError.code);
            }
        });

    return userData;
}

function logout() {
    const userData = signOut(auth)
        .then(() => {
            return 'Sign-out successful.';
        })
        .catch((signUpError) => {
            throw Error(signUpError.message);
        });

    return userData;
}

export { registerUser, login, logout }