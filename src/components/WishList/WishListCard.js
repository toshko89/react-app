
export default function WishListCard({book}) {
  console.log(book);
  return (
    <div className="col-md-6 col-lg-3">
      <div className="block-pricing">
        <div className="table">
          <h3>{book.title}</h3>
          <h4>{book.author}</h4>
          <ul className="list-unstyled">
            <li>{book.description.substring(0,100)}</li>
          </ul>
          <div className="table_btn">
            <button type="submit" className="btn btn-info px-3"><i className="fa fa-shopping-cart"></i>Order</button>
          </div>
        </div>
      </div>
    </div>
  )

}