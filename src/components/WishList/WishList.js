import { useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router";
import { UserContext } from "../../context/userContext.js";
import { getCurrentUserFromDB } from "../../services/userService.js";
import WishListCard from "./WishListCard.js";


export default function WishList() {

  const navigate = useNavigate();
  const user = useContext(UserContext);
  const userData = sessionStorage.user || user.userId;
  const [userWishList, setUserWishList] = useState([]);

  useEffect(() => {
    if (!userData) {
      return navigate('/login');
    }
    (async function fetchData() {
      try {
        const wishList = await getCurrentUserFromDB(userData);
        setUserWishList(wishList);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [userData, navigate])

  return (
    <section id="pricing" className="padd-section text-center wow fadeInUp">

      <div className="container">
        <div className="section-title text-center">
          <h2>My Wish List</h2>
        </div>
      </div>

      <div className="container">
        <div className="row">

          {userWishList.wishList?.length > 0
            ? userWishList.wishList.map(book => <WishListCard
              key={book.title}
              book={book}
              user={userData}
              setUserWishList={setUserWishList} />)
            : <img src="img/download.png" className="center" alt="img" />
          }

        </div>
      </div>
    </section>
  )
}