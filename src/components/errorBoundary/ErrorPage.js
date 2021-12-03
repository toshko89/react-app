import { Link } from "react-router-dom";

export default function ErrorPage() {
    return (
        <section id="hero" className="wow fadeIn">
            <div className="hero-container">   
                <img src="img/error404.png" alt="Book Imgs"/>
                <Link to="/" className ="btn-get-started scrollto">Back to Home Page</Link>
            </div>
        </section>
    );
}