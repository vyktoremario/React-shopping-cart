import React from 'react';
import './Navbar.css'

const Navbar = () => {
    return (
        <div>
            <nav className="container">
            <h2 className="logo">stillChi's Apparel</h2>
            <ul className="nav">
                <li className="text-space">Shop</li>
                <li className="text-space">Meet the CEO</li>
                <li className="text-space">Contact Us</li>
            </ul>
            </nav>
        </div>
    )
}

export default Navbar