
export default function BookForm({
  book,
  title,
  error,
  setBook,
  setError,
  submitForm,
  handleChangeFile,
  btnName
}) {
  return (
    <section id="add-book" className="padd-section wow fadeInUp">
      <div className="container">
        <div className="section-title text-center">
          <h2>{title}</h2>
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
                    onChange={(e) => { setBook({ ...book, author: e.target.value }) }}
                    onBlur={() => setError(null)} />
                </div>
                <div className="form-group">
                  <input type="number" className="form-control" name="age" id="email" placeholder="Age" data-rule="minlen:1" data-msg="Please enter a valid age"
                    value={book.age}
                    onChange={(e) => { setBook({ ...book, age: e.target.value }) }}
                    onBlur={() => setError(null)} />
                </div>
                <div className="form-group">
                  <textarea className="form-control" name="description" rows="5" data-rule="required" data-msg="Please write something for the book" placeholder="Description"
                    value={book.description}
                    onChange={(e) => { setBook({ ...book, description: e.target.value }) }}
                    onBlur={() => setError(null)} />
                </div>
                <div className="form-group">
                  <input type="file" id="myFile" name="file-name" value={undefined} onChange={handleChangeFile}
                    onBlur={() => setError(null)} />
                </div>
                {error && <div className="validation">{error}</div>}
                <div className="text-center"><button type="submit" className="btn btn-primary" onClick={submitForm}>{btnName}</button></div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}