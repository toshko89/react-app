import { useContext, useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import { UserContext } from "../../context/userContext.js";
import { deleteOldImg, getOne, updateBook } from "../../services/bookService.js";
import BookForm from "../AddBook/BookForm.js";

export default function MyBooksEdit() {

  const [book, setBook] = useState({ title: '', author: '', age: '', description: '' });
  const [file, setFile] = useState([]);
  const [error, setError] = useState(null);
  const user = useContext(UserContext);
  const navigate = useNavigate();
  const params = useParams();
  const userData = sessionStorage.user || user.userId;

  useEffect(() => {
    if (!userData) {
      return navigate('/login');
    }
    (async function fetchData() {
      try {
        const result = await getOne(params.bookId);
        setBook(result);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [userData, params.bookId, navigate]);

  const submitForm = async (e) => {
    e.preventDefault();
    e.target.disabled = 'true';

    if (book.title.trim() === '' || book.author.trim() === '' ||
      book.age.trim() === '' || book.description.trim() === '') {
      e.target.disabled = false;
      setError('All fields are required!');
      return;
    }

    if (file.length === 0) {
      e.target.disabled = false;
      setError('Please add file');
      return;
    }

    try {
      await deleteOldImg(book.img);
      await updateBook(params.bookId, book.title, book.author, book.age, book.description, file);
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
      title={'Edit book'}
      error={error}
      setBook={setBook}
      setError={setError}
      submitForm={submitForm}
      handleChangeFile={handleChangeFile}
      btnName={'Edit'}
    />
  )
}