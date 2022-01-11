import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { UserContext } from "../../context/userContext.js";
import { getOrderList } from "../../services/userService.js";
import OrderCard from "./OrderCard.js";


export default function Orders() {

  const navigate = useNavigate();
  const user = useContext(UserContext);
  const userData = sessionStorage.user || user.userId;
  const [orderList, setOrderList] = useState([]);

  useEffect(() => {
    if (!userData) {
      return navigate('/login');
    }
    (async function fetchData() {
      try {
        const orders = await getOrderList(userData);
        setOrderList(orders);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [userData, navigate])

  console.log(orderList);

  return (
    <section id="features" className="padd-section text-center wow fadeInUp">

      <div className="container">
        <div className="section-title text-center">
          <h2>Orders to be shipped</h2>
          <p className="separator">You have {orderList.length} new orderes</p>
        </div>
      </div>

      <div className="container">
        <div className="row">
          {orderList && orderList.map(order => <OrderCard key={order.bookId + Math.random()}
            ownerId={userData}
            bookID={order.bookId}
            setOrderList={setOrderList}
            order={order} />)}
        </div>
      </div>
    </section>
  )
}