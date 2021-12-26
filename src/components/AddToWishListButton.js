import { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/userContext.js";
import { addBookToWishList, canAddToWishList } from "../services/userService.js";


export default function AddToWishListButton({ book }) {

  const user = useContext(UserContext);
  const userData = sessionStorage.user || user.userId;
  const [canAdd, setCanAdd] = useState(false);

  useEffect(() => {
    canAddToWishList(userData, book)
      .then(result => setCanAdd(result))
      .catch(err => console.log(err))
  })

  const addToWishList = async (e) => {
    if (!userData || userData === book.ownerId || canAdd) {
      return;
    }
    try {
      await addBookToWishList(book, userData);
      setCanAdd(true)
    } catch (error) {
      console.log(error);
    }
  }


  return (
    <>
      {userData && userData !== book.ownerId && !canAdd
        ?
        <button className="btn btn-info" onClick={addToWishList}><i className="fa fa-shopping-cart">
        </i>  wish list</button>
        : null
      }
    </>
  )
}