import { useEffect, useState } from 'react';
import { getAllBooks } from "../services/bookService.js"
import BookCard from './BookCard.js';


export default function Bookshelf() {

  const [books, setBooks] = useState({});

  useEffect(() => {
    async function fetchData() {
      const allBooks = await getAllBooks();
      setBooks(allBooks);
    }
    fetchData();
  }, []);

  const spinner = <div className="d-flex justify-content-center">
    <div className="spinner-border" role="status">
      <span className="visually-hidden">Loading...</span>
    </div>
  </div>


  return (

    <section id="blog" className="padd-section wow fadeInUp">

      <div className="container">
        <div className="section-title text-center">

          <h2>Bookshelf</h2>
          {
            books.length > 0
              ? <p className="separator">Our Latest Arrivals</p>
              : <p className="separator">No books yet</p>
          }

        </div>
      </div>

      <div className="container">
        <div className="row">
          {books.length > 0
            ? books.map(book => <BookCard key={book.id} book={book} />)
            : spinner
          }
        </div>
      </div>
    </section>
  )
}