import { useContext } from "react";
import { UserContext } from "../context/userContext.js";
import { addBookToWishList } from "../services/userService.js";


export default function AddToWishListButton({ book }) {

    const user = useContext(UserContext);

    //TODO finish the buttn 

    const addToWishList = async (e) => {
        if (!user.isLoggedIn || user.userId === book.ownerId) {
            return;
        }
        try {
            await addBookToWishList(book, user.userId);
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <button className="btn btn-info" onClick={addToWishList}><i className="fa fa-shopping-cart">
        </i>  wish list</button>
    )
}