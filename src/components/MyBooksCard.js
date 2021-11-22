import { useState, useContext, useEffect } from "react";
import { booksSnapShot, deleteBook, getMyBooks } from "../services/bookService.js";
import UserContext from "../context/userContext.js";


export default function MyBooksCard({ bookId, book }) {

  const { isLogedIn, userEmail, userId } = useContext(UserContext);
  const [myBooks, setMyBooks] = useState([]);
  const userData = JSON.parse(sessionStorage.user) || userId;

  useEffect(() => {
    (async function fetchData() {
      const myBooks = await getMyBooks(userData);
      setMyBooks(myBooks);
    })();
  }, []);

  async function deleteCurrentBook(e) {
    const bookId = e.target.parentElement.id;
    await deleteBook(bookId);
    const change = booksSnapShot(userData);
    console.log(change);
    console.log(myBooks);
    setMyBooks(change=>{
      return {...change}
    });
    console.log(myBooks);
  }

  return (
    <div className="col-md-6 col-lg-4">
      <div className="feature-block" id={bookId}>
        <img src={book.img} alt="img" className="img-fluid" />
        <h4>{book.title}</h4>
        <p>{book.description}</p>
        <ul className="list-unstyled">
          <li>Author: {book.author}</li>
          <li>Age: {book.age}</li>
          <li>Likes: {book.likes}</li>
        </ul>
        <button type="button" className="btn btn-success">Edit</button>
        <button type="button" className="btn btn-danger" onClick={deleteCurrentBook}>Delete</button>
      </div>
    </div>
  )
}