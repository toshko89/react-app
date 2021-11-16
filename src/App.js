import { Routes, Route, useNavigate, Navigate } from 'react-router-dom';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import Home from './components/Home.js';
import AddBook from './components/AddBook.js';
import Register from './components/Register.js';
import Login from './components/Login.js';
import { logout } from './services/authService.js';

function App() {

  const navigate = useNavigate();

  return (
    <>
      <Header />

      <Routes >
        <Route path="/" exact element={<Home />}></Route>
        <Route path="/add-book" element={<AddBook />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes >

      <Footer />

    </>
  );
}

export default App;
