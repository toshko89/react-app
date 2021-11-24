import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from '../utils/firebase.js'

function registerUser(email, password) {
    const userData = createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            return user;
        })
        .catch((signUpError) => {
            alert(signUpError.message);
            return signUpError;
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
            alert('Wrong user name or password');
            return signUpError;
        });

    return userData;
}

function logout() {
    const userData = signOut(auth)
        .then(() => {
            return 'Sign-out successful.';
        })
        .catch((signUpError) => {
            return signUpError.message;
        });

    return userData;
}

export { registerUser, login, logout }