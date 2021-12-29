import { useState } from "react";
import { Modal, Button } from "react-bootstrap";

export default function OrderBookForm() {

  const [error, setError] = useState(null);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const confirmOrder = (e) => {
    e.preventDefault();

  }

  return (
    <section id="contact" className="padd-section wow fadeInUp">
      <div className="container">
        <div className="section-title text-center">
          <h2>Order Book Form</h2>
        </div>
      </div>
      {error && <div className="error-container" role="alert"><p>{error}</p></div>}
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-5 col-md-8">
            <div className="form">
              <form className="contactForm">
                <div className="form-group">
                  <input type="text" autoComplete="on" className="form-control" name="name" id="name" placeholder="Name" data-rule="minlen:6"
                    onBlur={() => setError(null)}
                  />
                  <div className="validation"></div>
                </div>
                <div className="form-group">
                  <input type="password" autoComplete="on" className="form-control" name="phone" id="phone" placeholder="Phone" data-rule="minlen:6"
                    onBlur={() => setError(null)}
                  />
                  <div className="validation"></div>
                </div>
                <div className="form-group">
                  <textarea className="form-control" name="shipping" rows="5" data-rule="required" data-msg="Please add shipping instructions"
                    placeholder="Shipping instructions"
                    onBlur={() => setError(null)} />
                  <div className="validation"></div>
                </div>
                <div className="text-center">
                  <button className="btn btn-info px-3" type="submit" onClick={handleShow}>
                    <i className="fa fa-shopping-cart"></i>Confirm</button>
                  <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                      <Modal.Title>Order Book</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Please confrim your order</Modal.Body>
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