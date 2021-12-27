
export default function WishListCard({book}) {
  console.log(book);
  return (
    <div className="col-md-6 col-lg-3">
      <div className="block-pricing">
        <div className="table">
          <h4>{book.title}</h4>
          <h2>{book.author}</h2>
          <ul className="list-unstyled">
            <li><b>4 GB</b> Ram</li>
            <li><b>7/24</b> Tech Support</li>
            <li><b>40 GB</b> SSD Cloud Storage</li>
            <li>Monthly Backups</li>
            <li>Palo Protection</li>
          </ul>
          <div className="table_btn">
            <button type="submit" className="btn btn-info px-3"><i className="fa fa-shopping-cart"></i>Order</button>
          </div>
        </div>
      </div>
    </div>
  )

}