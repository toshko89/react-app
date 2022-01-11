import { useCallback } from "react";
import { CloseButton } from "react-bootstrap";
import { removeUserDataFromOrderList } from "../../services/userService.js";

export default function OrderCard({ order, ownerId, bookID, setOrderList }) {

  const clearBook = useCallback(async () => {
    try {
      await removeUserDataFromOrderList(ownerId, order);
      setOrderList(oldValues => {
        return oldValues.filter(book => book.bookId !== bookID)
      })
    } catch (error) {
      console.log(error);
    }
  }, [ownerId, order, bookID, setOrderList])

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
        <CloseButton onClick={clearBook} />
      </div>
    </div>
  )
}