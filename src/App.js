import { Routes, Route } from 'react-router-dom';
import { UserProvider } from './context/userContext.js';
import Header from './components/Header/Header.js';
import Footer from './components/Home/Footer.js';
import Home from './components/Home/Home.js';
import AddBook from './components/AddBook.js';
import Bookshelf from './components/Home/Bookshelf.js';
import BookDetails from './components/BookDetails.js';
import MyBooks from './components/MyBooks/MyBooks.js';
import MyBooksEdit from './components/MyBooks/MyBooksEdit.js';
import Register from './components/AuthComponents/Register.js';
import Login from './components/AuthComponents/Login.js';
import Logout from './components/AuthComponents/Logout.js';
import ErrorPage from './components/errorBoundary/ErrorPage.js'
import ErrorBoundary from './components/errorBoundary/ErrorBoundary.js'
import AboutUs from './components/AboutComponents/AboutUs.js';
import AboutMe from './components/AboutComponents/AboutMe.js';
import WishList from './components/WishList/WishList.js';
import OrderBookForm from './components/Orders/OrderBookForm.js';
import Orders from './components/Orders/Orders.js';

function App() {

  return (
    <>
      <ErrorBoundary>

        <UserProvider>

          <Header />
          <Routes >
            <Route path="/" exact element={<Home />}></Route>
            <Route path="/add-book" element={<AddBook />}></Route>
            <Route path="/bookshelf" element={<Bookshelf />}></Route>
            <Route path="/my-books" element={<MyBooks />}></Route>
            <Route path="/my-books/:bookId/edit" element={<MyBooksEdit />}></Route>
            <Route path="/wish-list/:bookId/order" element={<OrderBookForm />}></Route>
            <Route path="/orders" element={<Orders />}></Route>
            <Route path="/wish-list" element={<WishList />}></Route>
            <Route path="/details/:bookId" element={<BookDetails />}></Route>
            <Route path="/register" element={<Register />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/logout" element={<Logout />}></Route>
            <Route path="/about-us" element={<AboutUs />}></Route>
            <Route path="/about-me" element={<AboutMe />}></Route>
            <Route path="*" element={<ErrorPage />}></Route>
          </Routes >
          <Footer />

        </UserProvider>

      </ErrorBoundary>
    </>
  );
}

export default App;
