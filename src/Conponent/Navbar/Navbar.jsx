import React from 'react';
import './Navbar.css'

const Navbar = () => {
    return (
        <nav className="navbar">
            {/* <img src="/tumins.jpg" alt="Tumins Loan Logo" className='logo' /> */}
            <div className="navbar-tumins">Tumins Loan</div>

            <ul className="navbar-links">
                <li>About Us</li>
                <li>Loan</li>
                <li>Service</li>
                <li>FAQ</li>
                <li>Contact</li>
            </ul>
            <button className="navbar-login">Log In</button>
        </nav>
    );
};

export default Navbar;
