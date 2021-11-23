import { useContext, useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import { deleteOldImg, getOne, updateBook } from "../services/bookService.js";
import UserContext from "../context/userContext.js";

export default function MyBooksEdit() {

  const [book, setBook] = useState({ title: '', author: '', age: '', description: '' });
  const [file, setFile] = useState([]);
  const user = useContext(UserContext);
  const navigate = useNavigate();
  const params = useParams();

  const userData = sessionStorage.user || user.userId;

  useEffect(() => {
    if (!userData) {
      return navigate('/login');
    }
    (async function fetchData() {
      const book = await getOne(params.bookId);
      setBook(book);
    })();
  }, [params.bookId]);

  console.log(book);
  const editBook = async (e) => {
    e.preventDefault();
    e.target.disabled = 'true';

    if (book.title.trim() === '' || book.author.trim() === '' ||
      book.age.trim() === '' || book.description.trim() === '') {
      e.target.disabled = false;
      setBook({ title: '', author: '', age: '', description: '' });
      alert('All fields are required!');
      return;
    }

    if (file.length === 0) {
      e.target.disabled = false;
      setBook({ title: '', author: '', age: '', description: '' });
      alert('Please add file');
      return;
    }

    try {
      await deleteOldImg(book.img);
      await updateBook(params.bookId, book.title, book.author, book.age, book.description, file);
      navigate('/my-books');
    } catch (error) {
      console.log(error);
    }
  }

  const editFile = (e) => {
    const file = e.target.files[0];
    setFile(file);
  }

  return (
    <section id="edit-book" className="padd-section wow fadeInUp">
      <div className="container">
        <div className="section-title text-center">
          <h2>Edit book</h2>
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
                    onChange={(e) => { setBook({ ...book, title: e.target.value }) }} />
                  <div className="validation"></div>
                </div>
                <div className="form-group">
                  <input type="text" name="author" className="form-control" id="subject" placeholder="Author" data-rule="minlen:4" data-msg="Please enter at least 4 chars"
                    value={book.author}
                    onChange={(e) => { setBook({ ...book, author: e.target.value }) }} />
                  <div className="validation"></div>
                </div>
                <div className="form-group">
                  <input type="number" className="form-control" name="age" id="email" placeholder="Age" data-rule="minlen:1" data-msg="Please enter a valid age"
                    value={book.age}
                    onChange={(e) => { setBook({ ...book, age: e.target.value }) }} />
                  <div className="validation"></div>
                </div>
                <div className="form-group">
                  <textarea className="form-control" name="description" rows="5" data-rule="required" data-msg="Please write something for the book" placeholder="Description"
                    value={book.description}
                    onChange={(e) => { setBook({ ...book, description: e.target.value }) }} />
                  <div className="validation"></div>
                </div>
                <div className="form-group">
                  <input type="file" id="myFile" name="file-name" value={undefined} onChange={editFile} />
                </div>

                <div className="text-center"><button type="submit" className="btn btn-primary" onClick={editBook}>Submit</button></div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )

}