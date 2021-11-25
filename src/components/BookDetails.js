import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getOne, likeBook } from "../services/bookService.js";


export default function BookDetails() {

  const params = useParams();
  const [book, setBook] = useState({});

  useEffect(() => {
    (async function fetchData() {
      const book = await getOne(params.bookId);
      setBook(book);
    })();
  }, [params.bookId]);

  const like = async (e) => {
    e.target.disabled = 'true';
    try {
      await likeBook(params.bookId);
      setBook(oldValue=>{
        return { ...book, likes: oldValue.likes + 1 }
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
                {/* <li><i className="fa fa-angle-right"></i>Easy to Use</li>
              <li><i className="fa fa-angle-right"></i>Unlimited Features</li>
              <li><i className="fa fa-angle-right"></i>Unlimited Features</li> */}
              </ul>
              <button type="button" className="btn btn-success px-3" onClick={like}><i className="far fa-thumbs-up" aria-hidden="true"></i></button>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}