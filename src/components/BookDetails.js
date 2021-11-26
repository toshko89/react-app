import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { disLikeBook, getOne, likeBook } from "../services/bookService.js";
import UserContext from '../context/userContext.js';


export default function BookDetails() {

  const user = useContext(UserContext);
  const params = useParams();
  const [book, setBook] = useState({});

  useEffect(() => {
    (async function fetchData() {
      const book = await getOne(params.bookId);
      setBook(book);
    })();
  }, [params.bookId]);

  const canLike = (user, book) => {
    if (user.isLogedIn = false) {
      return false;
    } else if (book.totalLikes.some(x => x == user.userId)) {
      return false;
    } else if (book.ownerId == user.userId) {
      return false;
    }
    return true;
  }

  console.log(book.totalLikes.find(x => x !== user.userId));
  
  const like = async (e) => {
    try {
      await likeBook(params.bookId, user.userId);
      setBook(oldValue => {
        return { ...book, likes: oldValue.likes + 1, totalLikes: [...book.totalLikes, user.userId] }
      })
    } catch (error) {
      console.log(error);
    }
  }

  const disLike = async (e) => {
    try {
      await disLikeBook(params.bookId, user.userId);
      setBook(oldValue => {
        return { ...book, likes: oldValue.likes - 1, totalLikes: [...book.totalLikes, user.userId] }
      })
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <section id="about-us" className="about-us padd-section wow fadeInUp">
      <div className="container">
        <div className="row justify-content-center">

          <div className="col-md-5 col-lg-3">
            <img src={book.img} alt="About" />
          </div>

          <div className="col-md-7 col-lg-5">
            <div className="about-content">

              <h2><span>{book.title}</span></h2>
              <p>{book.description}</p>

              <ul className="list-unstyled">
                <li><i className="fa fa-angle-right"></i>Author: {book.author}</li>
                <li><i className="fa fa-angle-right"></i>Age: {book.age}</li>
                <li><i className="fa fa-angle-right"></i>Likes: {book.likes}</li>
              </ul>
              {user.isLogedIn && user.userId !== book.ownerId
                ?
                <div id="likes">
                  <button type="button" className="btn btn-success px-3" onClick={like}><i className="far fa-thumbs-up" aria-hidden="true"></i></button>
                  <button type="button" className="btn btn-danger px-3" onClick={disLike}><i className="far fa-thumbs-down" aria-hidden="true"></i></button>
                </div>
                : ''
              }
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}