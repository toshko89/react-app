import { Link } from "react-router-dom";

export default function BookCard ({book}){
    return(
        <div className="col-md-6 col-lg-4">
        <div className="block-blog text-left">
          <img src={book.img} className="img-responsive" alt="img"/>   
          <div className="content-blog">
            <h4><Link to={`/details/${book.id}`}>{book.title}</Link></h4>
            <Link className="pull-right readmore" to={`/details/${book.id}`}>read more</Link>
          </div>
        </div>
      </div>
    )
}