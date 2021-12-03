import { useContext } from "react";
import UserContext from "../../context/userContext.js";
import HeaderLoggedIn from "../Header/HeaderLoggedIn.js";
import HeaderGuest from "../Header/HeaderGuest.js";

export default function Header() {

  const { isLoggedIn, userEmail } = useContext(UserContext);

  return (
    <>
      {isLoggedIn ? <HeaderLoggedIn userEmail={userEmail} /> : <HeaderGuest />}
    </>
  );
}