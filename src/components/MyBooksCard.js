import { useContext } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import UserContext from "../context/userContext.js";
import { deleteBook } from "../services/bookService.js";

export default function MyBooksCard({ bookId, book, setMyBooks }) {

  const { isLogedIn, userEmail, userId } = useContext(UserContext);
  const userData = sessionStorage.user || userId;
  const navigate = useNavigate();

  if (!userData) {
    return navigate('/login');
  }

  console.log(book);

  async function deleteCurrentBook(e) {
    console.log(e.target);
    e.target.disabled = 'true';
    await deleteBook(bookId,book.img);
    setMyBooks(oldValues => oldValues.filter(book => book.id !== bookId))
  }

  return (
    <div className="col-md-6 col-lg-4">
      <div className="feature-block" >
        <img src={book.img} alt="img" className="img-fluid" />
        <h4>{book.title}</h4>
        <p>{book.description}</p>
        <ul className="list-unstyled">
          <li>Author: {book.author}</li>
          <li>Age: {book.age}</li>
          <li>Likes: {book.likes}</li>
        </ul>
        <Link to={`/my-books/${bookId}/edit`} className="btn btn-success">Edit</Link>
        <button type="button" className="btn btn-danger" onClick={deleteCurrentBook}>Delete</button>
      </div>
    </div>
  )
}