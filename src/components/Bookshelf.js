import { useEffect, useState } from 'react';
import { getAllBooks } from "../services/bookService.js"
import BookCard from './BooksCard.js';


export default function Bookshelf() {

  const [books, setBooks] = useState({});

  useEffect(() => {
    async function fetchData() {
      const allBooks = await getAllBooks();
      setBooks(allBooks);
    }
    fetchData();
  }, [])


  return (

    <section id="blog" className="padd-section wow fadeInUp">

      <div className="container">
        <div className="section-title text-center">

          <h2>Bookshelf</h2>
          {books.length > 0
            ? <p className="separator">Our Latest Arrivals</p>
            : <p className="separator">No books yet</p>}

        </div>
      </div>

      <div className="container">
        <div className="row">
          {books.length > 0
            ? books.map(book => <BookCard key={book.id} book={book} />)
            : <img src="img/kid-reading-a-book.jpg" className="center" alt="img" />
          }
        </div>
      </div>
    </section>
  )
}