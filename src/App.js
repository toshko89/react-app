import { onAuthStateChanged } from '@firebase/auth';
import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { auth } from './utils/firebase.js';
import UserContext from './context/userContext.js';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import Home from './components/Home.js';
import AddBook from './components/AddBook.js';
import Bookshelf from './components/Bookshelf.js';
import BookDetails from './components/BookDetails.js';
import MyBooks from './components/MyBooks.js';
import Register from './components/Register.js';
import Login from './components/Login.js';
import Logout from './components/Logout.js';
import ErrorPage from './components/ErrorPage.js'


function App() {

  const [userData, setUser] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
    })
  }, []);

  const user = {
    isLogedIn: Boolean(userData),
    userEmail: userData?.email,
    userId: userData?.uid
  };

  return (
    <>
      <UserContext.Provider value={user}>

        <Header />

        <Routes >
          <Route path="/" exact element={<Home />}></Route>
          <Route path="/add-book" element={<AddBook />}></Route>
          <Route path="/bookshelf" element={<Bookshelf />}></Route>
          <Route path="/my-books" element={<MyBooks />}></Route>
          <Route path="/details/:bookId" element={<BookDetails />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/logout" element={<Logout />}></Route>
          <Route path="*" element={<ErrorPage />}></Route>
        </Routes >

        <Footer />

      </UserContext.Provider>
    </>
  );
}

export default App;
