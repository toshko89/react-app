import { useState } from 'react';
import { addBook } from '../services/addBookService.js';

export default function AddBook() {
  const [book, setBook] = useState({ title: '', age: '', description: '' });
  const [file, setFile] = useState([]);

  const submitForm = async (e) => {
    e.preventDefault();
    if (book.title.trim() === '' || book.age.trim() === '' || book.description.trim() === '') {
      setBook({ title: '', age: '', description: '' });
      alert('All fields are required!');
      return;
    }

    try {
      await addBook(book.title, book.age, book.description, file);
      setBook({ title: '', age: '', description: '' });
      setFile([]);
    } catch (error) {
      console.log(error);
    }
  }

  const handleChangeFile = (e) => {
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
              <form role="form" className="contactForm">
                <div className="form-group">
                  <input type="text" name="title" className="form-control" id="name" placeholder="Title" data-rule="minlen:4" data-msg="Please enter at least 4 chars"
                    value={book.title}
                    onChange={(e) => { setBook({ ...book, title: e.target.value }) }} />
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
                  <input type="file" id="myFile" name="file-name" value={undefined} onChange={handleChangeFile} />
                </div>

                <div className="text-center"><button type="submit" onClick={submitForm}>Add</button></div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}