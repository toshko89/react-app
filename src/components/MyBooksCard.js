import { Link } from "react-router-dom";
import { Modal } from 'antd';
import 'antd/dist/antd.css';
import { useState } from "react";
import { deleteBook } from "../services/bookService.js";

export default function MyBooksCard({ bookId, book, setMyBooks }) {

  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };
  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  async function deleteCurrentBook(e) {
    try {
      setMyBooks(oldValues => oldValues.filter(book => book.id !== bookId));
      await deleteBook(bookId, book.img);
    } catch (error) {
      e.target.disabled = false;
      console.log(error);
    }
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
        <button type="button" className="btn btn-danger" onClick={showModal}>Delete</button>
        <Modal title="Are you sure you want to delete this book?"
          visible={isModalVisible}
          onOk={deleteCurrentBook}
          onCancel={handleCancel}
        />
      </div>
    </div>
  )
}