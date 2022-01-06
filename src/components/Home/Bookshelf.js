import { useEffect, useState } from 'react';
import { getAllBooks } from "../../services/bookService.js"
import BookCard from '../BookCard.js';
import Search from './Search.js';

const spinner = (
  <div className="d-flex justify-content-center">
    <div className="spinner-border" role="status">
      <span className="visually-hidden">Loading...</span>
    </div>
  </div>
)

export default function Bookshelf() {

  const [books, setBooks] = useState({});
  const [search, setSeatch] = useState('');

  useEffect(() => {
    async function fetchData() {
      try {
        const result = await getAllBooks();
        setBooks(result);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);

  return (
    <section id="blog" className="padd-section wow fadeInUp">
      <div className="container">
        <div className="section-title text-center">
          <h2>Bookshelf</h2>
          {books.length > 0
            ? <Search setSeatch={setSeatch} />
            : <h3 className="separator">No books yet</h3>}
        </div>
      </div>

      <div className="container">
        <div className="row">
          {books.length > 0
            ?
            books.filter((book) => {
              if (search === '') {
                return book;
              } else if (book.age === search) {
                return book;
              }
            }).map(book => <BookCard key={book.id} book={book} />)
            : spinner
          }
        </div>
      </div>
    </section>
  )
}
