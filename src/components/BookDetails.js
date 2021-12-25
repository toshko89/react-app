import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { UserContext } from "../context/userContext.js";
import { disLikeBook, getOne, likeBook } from "../services/bookService.js";
import { addBookToWishList, removeBookFromWishList } from "../services/userService.js";

export default function BookDetails() {

  const user = useContext(UserContext);
  const [book, setBook] = useState({});
  const [canLike, setCanLike] = useState(true);
  const params = useParams();

  useEffect(() => {
    (async function fetchData() {
      try {
        const currentBook = await getOne(params.bookId);
        setBook(currentBook);
        const currentUserLiked = currentBook.totalLikes.some(id => id === user.userId);
        if (currentUserLiked) {
          setCanLike(false);
        }
      } catch (error) {
        console.log(error);
      }
    })();
  }, [params.bookId, user.userId]);

  const like = async (e) => {
    if (!user.isLoggedIn || user.userId === book.ownerId) {
      return;
    }
    try {
      await likeBook(params.bookId, user.userId);
      setCanLike(false);
      setBook(oldValue => {
        return { ...book, likes: oldValue.likes + 1, totalLikes: [...book.totalLikes, user.userId] }
      })
    } catch (error) {
      console.log(error);
    }
  }

  const disLike = async (e) => {
    if (!user.isLoggedIn || user.userId === book.ownerId) {
      return;
    }
    try {
      await disLikeBook(params.bookId, user.userId);
      setCanLike(false);
      setBook(oldValue => {
        return { ...book, likes: oldValue.likes - 1, totalLikes: [...book.totalLikes, user.userId] }
      })
    } catch (error) {
      console.log(error);
    }
  }

  const addToWishList = async (e) => {
    console.log(book);
    await addBookToWishList(book,user.userId);
  }

  return (
    <section id="about-us" className="about-us padd-section wow fadeInUp">
      <div className="container">
        <div className="row justify-content-center">

          <div className="col-md-5 col-lg-3">
            <img src={book.img} alt="About" />
            <div className="table_btn">
              <button className="btn btn-info" onClick={addToWishList}><i className="fa fa-shopping-cart"></i>  wish list</button>
            </div>
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
              {(user.isLoggedIn && user.userId !== book.ownerId && canLike)
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
