import { useState } from 'react';
import { addBook } from '../services/addBookService.js';

export default function AddBook() {
  const [title, setTitle] = useState('');
  const [age, setAge] = useState('');
  const [description, setDescription] = useState('');
  const [file, setFile] = useState([]);

  const submitForm = async (e) => {
    e.preventDefault();
    if (title.trim() === '' || age.trim() === '' || description.trim() === '') {
      alert('All fields are required!');
      return;
    }

    try {
      await addBook(title, age, description);
      setTitle('');
      setAge('');
      setDescription('');
      setFile([]);
    } catch (error) {
      console.log(error);
    }
  }

  const handleChangeFile = (e) => {
    const file = e.target.files[0];
    setFile(file);
  }

  const handleChangeForm = (e) => {
    if (e.target.name === 'description') {
      setDescription(e.target.value)
    } else if (e.target.name === 'title') {
      setTitle(e.target.value)
    } else if (e.target.name === 'age') {
      setAge(e.target.value)
    }
  }

  return (
    <section id="add-book" className="padd-section wow fadeInUp">
      <div className="container">
        <div className="section-title text-center">
          <h2>Add new book</h2>
          <p className="separator">Add new book below</p>
        </div>
      </div>

      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-5 col-md-8">
            <div className="form">
              <div id="sendmessage">New book added. Thank you!</div>
              <div id="errormessage"></div>
              <form role="form" role="form" className="contactForm">
                <div className="form-group">
                  <input type="text" name="title" className="form-control" id="name" placeholder="Title" value={title} onChange={handleChangeForm} data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                  <div className="validation"></div>
                </div>
                <div className="form-group">
                  <input type="number" className="form-control" name="age" id="email" placeholder="Age" value={age} onChange={handleChangeForm} data-rule="minlen:1" data-msg="Please enter a valid age" />
                  <div className="validation"></div>
                </div>
                <div className="form-group">
                  <textarea className="form-control" name="description" rows="5" data-rule="required" value={description} onChange={handleChangeForm} data-msg="Please write something for the book" placeholder="Description"></textarea>
                  <div className="validation"></div>
                </div>
                <div className="form-group">
                  <input type="file" id="myFile" name="file-name" onChange={handleChangeFile} />
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