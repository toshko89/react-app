import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../context/userContext.js";
import { addBookToWishList, canAddToWishList } from "../../services/userService.js";


export default function AddToWishListButton({ book, bookId }) {

  const user = useContext(UserContext);
  const userData = sessionStorage.user || user.userId;
  const [canNotAdd, setCanNotAdd] = useState(false);

  useEffect(() => {
    if (userData) {
      canAddToWishList(userData, book)
        .then(result => setCanNotAdd(result))
        .catch(err => console.log(err))
    }
  }, [userData, book])

  const addToWishList = async (e) => {
    if (!userData || userData === book.ownerId || canNotAdd) {
      return;
    }
    try {
      await addBookToWishList(book, bookId, userData);
      setCanNotAdd(true)
    } catch (error) {
      console.log(error);
    }
  }


  return (
    <>
      {userData && userData !== book.ownerId && !canNotAdd
        ?
        <button className="btn btn-info" onClick={addToWishList}><i className="fa fa-shopping-cart">
        </i>  wish list</button>
        : null
      }
    </>
  )
}