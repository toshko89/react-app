import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from '../firebase.js'

function registerUser(email, password) {
    return createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            return user;
        })
        .catch((error) => {
            return error;
        });
}

function login(email, password) {
    return signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            return user;
        })
        .catch((error) => {
            return error;
        });
}

function logout() {
    return signOut(auth).then(() => {
        return 'Sign-out successful.';
    }).catch((error) => {
        return error;
    });
}

export { registerUser, login, logout }