import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import UserContext from "../context/userContext.js";
import { getMyBooks } from "../services/bookService.js";
import MyBooksCard from "./MyBooksCard.js";

export default function MyBooks() {

  const { isLogedIn, userEmail, userId } = useContext(UserContext);
  const navigate = useNavigate();
  const [myBooks, setMyBooks] = useState({});

  const userData = JSON.parse(sessionStorage.user) || userId;

  useEffect(() => {
    (async function fetchData() {
      const myBooks = await getMyBooks(userData);
      setMyBooks(myBooks);
    })();
  }, [userData]);

  return (

    <section id="get-started" className="padd-section text-center wow fadeInUp">

      <div className="container">
        <div className="section-title text-center">
          <h2>My Books</h2>
        </div>
      </div>

      <div className="container">
        <div className="row">
          {
            myBooks.length > 0
              ? myBooks.map(book => <MyBooksCard key={book.id} bookId={book.id} book={book} />)
              : <img src="img/kid-reading-a-book.jpg" className="center" alt="img" />
          }
        </div>
      </div>

    </section>
  )

}