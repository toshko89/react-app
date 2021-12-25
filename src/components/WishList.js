import { useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router";
import { UserContext } from "../context/userContext.js";
import { getCurrentUserFromDB } from "../services/userService.js";
import WishListCard from "./WishListCard.js";


export default function WishList() {

  const user = useContext(UserContext);
  const [userWishList, setUserWishList] = useState({});
  const navigate = useNavigate();
  const userData = sessionStorage.user || user.userId;

  useEffect(() => {
    if (!userData) {
      return navigate('/login');
    }
    (async function fetchData() {
      try {
        const wishList = await getCurrentUserFromDB(user.userId);
        console.log(userWishList);
        setUserWishList(wishList);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [user.userId, userData, navigate])

  return (
    <section id="pricing" className="padd-section text-center wow fadeInUp">

      <div className="container">
        <div className="section-title text-center">
          <h2>My Wish List</h2>
        </div>
      </div>

      <div className="container">
        <div className="row">

          {userWishList && <WishListCard />}

        </div>
      </div>
    </section>
  )
}