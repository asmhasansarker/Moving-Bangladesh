import React, { useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import './Header.css'

const Header = () => {
    const [user] = useContext(UserContext)
    return (
        <div className="py-3">
            <nav className="navbar navbar-expand-md navbar-light ">
                <div className="container">
                <Link className="navbar-brand font-weight-bold" to="/">Moving Bangladesh</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul className="navbar-nav font-weight-bold">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/home">Home <span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/destination">Destination</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/blog">Blog</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/contact">Contact</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to={user.email ? `/myaccount` : `/login`}>{user.email ? `${user.name}` : 'Login' }</Link>
                        </li>
                    </ul>
                </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;