import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className="header-main bg-primary" style ={{backgroundColor:"#F2CF81" ,justifycontent:"center",alignitems:"center" }}>
            <nav className="navbar navbar-expand-lg navbar-dark fixed-top bg-primary">
                <div className="container">
                    Corporate Classifieds

                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <Link to="/" class="nav-link">
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/contact" class="nav-link">Contact Us</Link>
                        </li>

                        <li className="nav-item">
                            <Link to="/login" class="nav-link">Login</Link>
                        </li>

                    </ul>
                </div>
            </nav>
        </div >
    )
}

export default Header;

