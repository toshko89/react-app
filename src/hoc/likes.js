// import { useParams } from "react-router";
// import { useContext, useEffect, useState } from "react";
// import { UserContext } from "../context/userContext.js";
// import { getOne } from "../services/bookService.js";


// export default function liked(Component) {

//     function WrappedBookDetails(props) {
//         const user = useContext(UserContext);
//         const [canLike, setCanLike] = useState(true);
//         const params = useParams();

//         useEffect(() => {
//             (async function fetchData() {
//                 const book = await getOne(params.bookId);
//                 const currentUserLiked = book.totalLikes.some(id => id === user.userId);
//                 if (currentUserLiked) {
//                     setCanLike(false);
//                 }
//             })();
//         }, [params.bookId,canLike]);

//         return <Component {...props} canLike={canLike} setCanLike={setCanLike} />
//     }
//     return WrappedBookDetails;
// }