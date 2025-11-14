import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

function Nav() {
    return (
        <nav className="navbar">
            <ul className="nav-links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/Logo">Logo</Link></li>
                <li><Link to="/Heading">Heading</Link></li>
                <li><Link to="/Login">Login</Link></li>
            </ul>
        </nav>
    );
}

export default Nav;
