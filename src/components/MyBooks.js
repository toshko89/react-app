import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { UserContext } from "../context/userContext.js";
import { getMyBooks } from "../services/bookService.js";
import MyBooksCard from "./MyBooksCard/MyBooksCard.js";

export default function MyBooks() {

  const user = useContext(UserContext);
  const [myBooks, setMyBooks] = useState({});
  const userData = sessionStorage.user || user.userId;

  const navigate = useNavigate();

  useEffect(() => {
    if (!userData) {
      return navigate('/login');
    }
    (async function fetchData() {
      try {
        const result = await getMyBooks(userData);
        setMyBooks(result);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [userData,navigate]);

  return (

    <section id="get-started" className="padd-section text-center wow fadeInUp">

      <div className="container">
        <div className="section-title text-center">
          <h2>My Books</h2>
          {
            myBooks.length === 0
              ? <p className="separator">No books yet</p>
              : ''
          }
        </div>
      </div>

      <div className="container">
        <div className="row">
          {
            myBooks.length > 0
              ? myBooks.map(book => <MyBooksCard key={book.id} bookId={book.id} setMyBooks={setMyBooks} book={book} />)
              : <img src="img/kid-reading-a-book.jpg" className="center" alt="img" />
          }
        </div>
      </div>

    </section>
  )

}