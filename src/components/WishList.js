import { useContext, useEffect, useState } from "react"
import { UserContext } from "../context/userContext.js";
import { getCurrentUserFromDB } from "../services/userService.js";


export default function WishList() {

  const [userWishList, setUserWishList] = useState({});
  const user = useContext(UserContext);

  useEffect(() => {
    (async function fetchData() {
      try {
        const wishList = await getCurrentUserFromDB(user.userId);
        console.log(wishList);
        setUserWishList(wishList);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [user.userId])

  return (
    <section id="pricing" className="padd-section text-center wow fadeInUp">

      <div className="container">
        <div className="section-title text-center">
          <h2>My Wish List</h2>
          <p className="separator">Integer cursus bibendum augue ac cursus .</p>
        </div>
      </div>

      <div className="container">
        <div className="row">

          <div className="col-md-6 col-lg-3">
            <div className="block-pricing">
              <div className="table">
                <h4>basic</h4>
                <h2>$29</h2>
                <ul className="list-unstyled">
                  <li><b>4 GB</b> Ram</li>
                  <li><b>7/24</b> Tech Support</li>
                  <li><b>40 GB</b> SSD Cloud Storage</li>
                  <li>Monthly Backups</li>
                  <li>Palo Protection</li>
                </ul>
                <div className="table_btn">
                  <a href="#" className="btn"><i className="fa fa-shopping-cart"></i> Buy Now</a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-3">
            <div className="block-pricing">
              <div className="table">
                <h4>PERSONAL</h4>
                <h2>$29</h2>
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

          <div className="col-md-6 col-lg-3">
            <div className="block-pricing">
              <div className="table">
                <h4>BUSINESS</h4>
                <h2>$29</h2>
                <ul className="list-unstyled">
                  <li><b>4 GB</b> Ram</li>
                  <li><b>7/24</b> Tech Support</li>
                  <li><b>40 GB</b> SSD Cloud Storage</li>
                  <li>Monthly Backups</li>
                  <li>Palo Protection</li>
                </ul>
                <div className="table_btn">
                  <a href="#" className="btn"><i className="fa fa-shopping-cart"></i> Buy Now</a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-3">
            <div className="block-pricing">
              <div className="table">
                <h4>profeesional</h4>
                <h2>$29</h2>
                <ul className="list-unstyled">
                  <li><b>4 GB</b> Ram</li>
                  <li><b>7/24</b> Tech Support</li>
                  <li><b>40 GB</b> SSD Cloud Storage</li>
                  <li>Monthly Backups</li>
                  <li>Palo Protection</li>
                </ul>
                <div className="table_btn">
                  <a href="#" className="btn"><i className="fa fa-shopping-cart"></i> Buy Now</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}