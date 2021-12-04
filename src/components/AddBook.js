import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { UserContext } from '../context/userContext.js';
import { addBook } from '../services/bookService.js';
import BookForm from './BookForm.js';

export default function AddBook() {

  const [book, setBook] = useState({ title: '', author: '', age: '', description: '' });
  const [file, setFile] = useState([]);
  const [error, setError] = useState(null);
  const user = useContext(UserContext);
  const navigate = useNavigate();
  const userData = sessionStorage.user || user.userId;

  useEffect(() => {
    if (!userData) {
      return navigate('/login');
    }
  }, [userData]);

  const submitForm = async (e) => {
    e.preventDefault();
    e.target.disabled = 'true';
    if (book.title.trim() === '' || book.author.trim() === '' ||
      book.age.trim() === '' || book.description.trim() === '') {
      e.target.disabled = false;
      setBook({ title: '', author: '', age: '', description: '' });
      setError('All fields are required!');
      return;
    }

    if (file.length === 0) {
      e.target.disabled = false;
      setError('Please add file');
      return;
    }

    try {
      await addBook(book.title, book.author, book.age, book.description, file, user.userId);
      navigate('/my-books');
    } catch (error) {
      setError(error);
    }
  }

  const handleChangeFile = (e) => {
    setError(null);
    const file = e.target.files[0];
    setFile(file);
  }

  return (
    <BookForm
      book={book}
      title={'Add new book'}
      handleChangeFile={handleChangeFile}
      submitForm={submitForm}
      setBook={setBook}
      setError={setError}
      error={error}
      btnName={'Add'}
    />
  );
}