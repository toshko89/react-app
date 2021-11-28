import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import UserContext from '../context/userContext.js';
import { addBook } from '../services/bookService.js';

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
    <section id="add-book" className="padd-section wow fadeInUp">
      <div className="container">
        <div className="section-title text-center">
          <h2>Add new book</h2>
        </div>
      </div>

      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-5 col-md-8">
            <div className="form">
              <form className="contactForm">
                <div className="form-group">
                  <input type="text" name="title" className="form-control" id="name" placeholder="Title" data-rule="minlen:4" data-msg="Please enter at least 4 chars"
                    value={book.title}
                    onChange={(e) => { setBook({ ...book, title: e.target.value }) }}
                    onBlur={() => setError(null)} />
                </div>
                <div className="form-group">
                  <input type="text" name="author" className="form-control" id="subject" placeholder="Author" data-rule="minlen:4" data-msg="Please enter at least 4 chars"
                    value={book.author}
                    onChange={(e) => { setBook({ ...book, author: e.target.value }) }} />
                </div>
                <div className="form-group">
                  <input type="number" className="form-control" name="age" id="email" placeholder="Age" data-rule="minlen:1" data-msg="Please enter a valid age"
                    value={book.age}
                    onChange={(e) => { setBook({ ...book, age: e.target.value }) }} />
                </div>
                <div className="form-group">
                  <textarea className="form-control" name="description" rows="5" data-rule="required" data-msg="Please write something for the book" placeholder="Description"
                    value={book.description}
                    onChange={(e) => { setBook({ ...book, description: e.target.value }) }} />
                </div>
                <div className="form-group">
                  <input type="file" id="myFile" name="file-name" value={undefined} onChange={handleChangeFile} />
                </div>
                {error && <div className="validation">{error}</div>}
                <div className="text-center"><button type="submit" className="btn btn-primary" onClick={submitForm}>Add</button></div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}