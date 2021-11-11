import { Link } from "react-router-dom";

export default function Home() {
    return (

        <section id="hero" className="wow fadeIn">
            <div className="hero-container">
                <h1>Operation Book For Every Child</h1>
                <h2>Platfom for Sharing Children's Books</h2>
                <img src="img/children-reading-books.jpg" alt="Book Imgs"/>
                <Link to="/bookshelf" className ="btn-get-started scrollto">Bookshelf</Link>
            </div>
        </section>
    );
}