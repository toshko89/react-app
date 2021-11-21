import { Navigate } from "react-router";
import { logout } from "../services/authService.js";


export default function Logout() {

    logout();

    return (
        <Navigate to="/" />
    )

}