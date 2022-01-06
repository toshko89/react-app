

export default function OrderCard({ order }) {

  return (
    <div className="col-md-6 col-lg-3">
      <div className="feature-block">
        <img src="img/svg/design-tool.svg" alt="img" className="img-fluid" />
        <h4>Book title: {order.bookTitle}</h4>
        <ul className="list-unstyled">
          <li><i className="fa fa-angle-right"></i>Customer Name: {order.orderData.customerName}</li>
          <li><i className="fa fa-angle-right"></i>Phone: {order.orderData.customerPhone}</li>
          <li><i className="fa fa-angle-right"></i>Ship to: {order.orderData.customerAddress}</li>
        </ul>
      </div>
    </div>
  )
}