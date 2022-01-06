import { Link } from "react-router-dom";
import { useCallback, useState } from "react";
import { deleteBook } from "../../services/bookService.js";
import { Modal, Button } from "react-bootstrap";
import "./MyBooksCard.css"

export default function MyBooksCard({ bookId, book, setMyBooks }) {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const deleteCurrentBook = useCallback(async () => {
    try {
      await deleteBook(bookId, book.img);
      setMyBooks(oldValues => oldValues.filter(book => book.id !== bookId));
    } catch (error) {
      console.log(error);
    }
  }, [book, setMyBooks, bookId])

  return (
    <div className="col-md-6 col-lg-4">
      <div className="feature-block">
        <img src={book.img} alt="img" className="img-fluid" />
        <h4>{book.title}</h4>
        <p>{book.description}</p>
        <ul className="list-unstyled">
          <li>Author: {book.author}</li>
          <li>Age: {book.age}</li>
          <li>Likes: {book.likes}</li>
        </ul>
        <Link to={`/my-books/${bookId}/edit`} className="btn btn-success">Edit</Link>
        <button type="button" className="btn btn-danger" onClick={handleShow}>Delete</button>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Delete Book</Modal.Title>
          </Modal.Header>
          <Modal.Body>Are you sure you want to delete this book?</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="flat" onClick={deleteCurrentBook}>
              Confirm
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  )
}