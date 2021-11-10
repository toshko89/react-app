import { Routes, Route, Link } from 'react-router-dom';
import Footer from './components/Footer.js'
import Header from './components/Header.js'
import Home from './components/Home.js';
import AddBook from './components/AddBook.js'
import Register from './components/Register.js';

function App() {
  return (
    <>
      <Header />

      <Routes >
        <Route path="/" exact element={<Home />}></Route>
        <Route path="/add-book" element={<AddBook />}></Route>
        <Route path="/register" element={<Register />}></Route>
      </Routes >

      <Footer />

    </>
  );
}

export default App;
