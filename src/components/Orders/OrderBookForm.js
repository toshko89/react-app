import { useContext, useEffect, useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router";
import { UserContext } from "./../../context/userContext.js";
import { addUserDataToOrderList, removeBookFromWishList } from "../../services/userService.js";

export default function OrderBookForm() {

  const location = useLocation();
  const book = location.state;
  const user = useContext(UserContext);
  const userData = sessionStorage.user || user.userId;
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const [orderData, setOrderData] = useState({ customerName: '', customerPhone: '', customerAddress: '' });
  const [show, setShow] = useState(false);
  const regexCheckForNames = /^[a-zA-Z]+(?:[\s.]+[a-zA-Z]+)*$/i;

  useEffect(() => {
    if (!userData) {
      return navigate('/login');
    }
  }, [userData, navigate]);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const confirmOrder = async (e) => {
    if (!regexCheckForNames.test(orderData.customerName)) {
      setError('Please enter a valid name');
      setOrderData({ ...orderData, customerName: '' });
      handleClose();
      return;
    } else if (orderData.customerPhone.trim() === '' || orderData.customerPhone.length < 6) {
      setError('Please enter a valid number');
      setOrderData({ ...orderData, customerPhone: '' });
      handleClose();
      return;
    } else if (orderData.customerAddress.trim() === '' || orderData.customerAddress.length < 6) {
      setError('Please enter shipping information');
      setOrderData({ ...orderData, customerAddress: '' });
      handleClose();
      return;
    }

    try {
      await addUserDataToOrderList(book.ownerId, book.title, orderData);
      await removeBookFromWishList(book, userData);
      return navigate('/wish-list');
    } catch (error) {
      setError('There was problem with your order please try again');
      handleClose();
      console.log(error);
    }

  }

  return (
    <section id="contact" className="padd-section wow fadeInUp">
      <div className="container">
        <div className="section-title text-center">
          <h3>Order Book</h3>
          <h3>{book.title}</h3>
        </div>
      </div>
      {error && <div className="error-container" role="alert"><p>{error}</p></div>}
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-5 col-md-8">
            <div className="form">
              <form className="contactForm">
                <div className="form-group">
                  <input type="text" autoComplete="on" className="form-control" name="name" id="name" placeholder="Your name" data-rule="minlen:6"
                    value={orderData.customerName}
                    onChange={(e) => { setOrderData({ ...orderData, customerName: e.target.value }) }}
                    onBlur={() => setError(null)}
                  />
                  <div className="validation"></div>
                </div>
                <div className="form-group">
                  <input type="number" autoComplete="on" className="form-control" name="phone" id="phone" placeholder="Your phone number" data-rule="minlen:6"
                    value={orderData.customerPhone}
                    onChange={(e) => { setOrderData({ ...orderData, customerPhone: e.target.value }) }}
                    onBlur={() => setError(null)}
                  />
                  <div className="validation"></div>
                </div>
                <div className="form-group">
                  <textarea className="form-control" name="shipping" rows="5" data-rule="required" data-msg="Please add shipping instructions"
                    placeholder="Shipping instructions and address"
                    value={orderData.customerAddress}
                    onChange={(e) => { setOrderData({ ...orderData, customerAddress: e.target.value }) }}
                    onBlur={() => setError(null)} />
                  <div className="validation"></div>
                </div>
                <div className="text-center">
                  <button className="btn btn-info px-3" type="button" onClick={handleShow}>
                    <i className="fa fa-shopping-cart"></i> Confirm</button>
                  <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                      <Modal.Title>Order confirmation</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Please confirm your order</Modal.Body>
                    <Modal.Footer>
                      <Button variant="secondary" onClick={handleClose}>
                        Close
                      </Button>
                      <Button variant="flat" onClick={confirmOrder}>
                        Confirm
                      </Button>
                    </Modal.Footer>
                  </Modal>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}