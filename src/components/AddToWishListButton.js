import { useContext } from "react";
import { UserContext } from "../context/userContext.js";
import { addBookToWishList } from "../services/userService.js";


export default function AddToWishListButton({ book }) {

    const user = useContext(UserContext);
    const userData = sessionStorage.user || user.userId;

    const addToWishList = async (e) => {
        if (!userData || userData === book.ownerId) {
            return;
        }
        try {
            await addBookToWishList(book, userData);
        } catch (error) {
            console.log(error);
        }
    }


    return (
        <button className="btn btn-info" onClick={addToWishList}><i className="fa fa-shopping-cart">
        </i>  wish list</button>
    )
}