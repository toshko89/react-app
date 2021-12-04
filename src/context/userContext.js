import { onAuthStateChanged } from "@firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../utils/firebase.js";

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {

    const [userData, setUser] = useState(null);

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            setUser(user);
        })
    }, []);

    const user = {
        isLoggedIn: Boolean(userData),
        userEmail: userData?.email,
        userId: userData?.uid
    };

    return (
        <UserContext.Provider value={user}>
            {children}
        </UserContext.Provider>
    )

}
