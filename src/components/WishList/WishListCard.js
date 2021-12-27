import { EmailAuthCredential } from "firebase/auth";
import { useCallback } from "react";
import { CloseButton } from "react-bootstrap";
import { removeBookFromWishList } from "../../services/userService.js";

export default function WishListCard({ book, user, setUserWishList }) {

  const removeBook = useCallback(async () => {
    try {
      await removeBookFromWishList(book, user);
      setUserWishList(oldValues => {
        return {
          ...oldValues.orders,
          ...oldValues.email,
          ...oldValues.wishList.filter(books => books.title !== book.title)
        }
      })
    } catch (error) {
      console.log(error);
    };
  }, [book, user, setUserWishList])

  return (
    <div className="col-md-6 col-lg-3">
      <div className="block-pricing">
        <CloseButton onClick={removeBook} />
        <div className="table">
          <h3>{book.title}</h3>
          <h4>{book.author}</h4>
          <ul className="list-unstyled">
            <li>{book.description.substring(0, 100)}</li>
          </ul>
          <div className="table_btn">
            <button type="submit" className="btn btn-info px-3"><i className="fa fa-shopping-cart"></i>Order</button>
          </div>
        </div>
      </div>
    </div>
  )

}