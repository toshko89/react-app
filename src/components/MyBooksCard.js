import { useNavigate } from "react-router";
import { deleteBook} from "../services/bookService.js";

export default function MyBooksCard({ bookId, book }) {

  const navigate = useNavigate()

  async function deleteCurrentBook(e) {
    const bookId = e.target.parentElement.id;
    await deleteBook(bookId);
    navigate('/bookshelf');
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