import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="nav-wrapper">
            <div className="container">
                <Link to="/" className="brand-logo" >AMBERLEEDHIA</Link>
                <ul className="right">
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/membership">Membership</Link></li>
                    <li><Link to="/customercare">Customer Care</Link></li>
                    
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;