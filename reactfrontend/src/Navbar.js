import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom'; // Import Link along with NavLink
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './image/nlogo.jpg';
import './Navbar.css';

const Navbar = () => {
    const [expanded, setExpanded] = useState(false);

    const toggleNavbar = () => {
        setExpanded(!expanded);
    };

    return (
        <nav className={`navbar navbar-expand-lg  ${expanded ? 'expanded' : ''}`}>
            <div className="container">
                <NavLink className="navbar-brand" to="/">
                    <img src={logo} alt="Logo" className="navbar-logo" /> 
                    
                </NavLink>
                <NavLink className="navbar-brand" to="/">
                <span className="logo-text">System Heuristics</span>
                </NavLink>
                <button
                    className="navbar-toggler"
                    type="button"
                    onClick={toggleNavbar}
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className={`collapse navbar-collapse justify-content-end ${expanded ? 'show' : ''}`}>
                    <ul className="navbar-nav">
                    <li className="nav-item">
                            <NavLink className="nav-link menu-item" activeClassName="active" to="/about">About</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link menu-item" activeClassName="active" to="/services">Services</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link menu-item" activeClassName="active" to="/industry">Industries</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link menu-item" activeClassName="active" to="/portfolio">Portfolio</NavLink>
                        </li>
                      
                       
                        <li className="nav-item">
                            <NavLink className="nav-link menu-item" activeClassName="active" to="/career">Career</NavLink>
                        </li>
                    </ul>
                    <div className="navbar-text">
                        <Link to="/contact">
                            <button className="nav-btn">Free Strategy Call</button>
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
