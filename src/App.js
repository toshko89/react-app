import { Routes, Route, useNavigate, Navigate } from 'react-router-dom';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import Home from './components/Home.js';
import AddBook from './components/AddBook.js';
import Bookshelf from './components/Bookshelf.js';
import BookDetails from './components/BookDetails.js';
import Register from './components/Register.js';
import Login from './components/Login.js';
import ErrorPage from './components/ErrorPage.js'
import { logout } from './services/authService.js';

function App() {

  return (
    <>

      <Header />
      //TODO ERROR HANDLING FOR EMAIL and pass when login and register!!!
      <Routes >
        <Route path="/" exact element={<Home />}></Route>
        <Route path="/add-book" element={<AddBook />}></Route>
        <Route path="/bookshelf" element={<Bookshelf />}></Route>
        <Route path="/details/:bookId" element={<BookDetails />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="*" element={<ErrorPage />}></Route>
      </Routes >

      <Footer />

    </>
  );
}

export default App;
