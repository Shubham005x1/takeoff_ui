import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="navbar">
            <Link to="/">
                <img
                    src="https://assets-global.website-files.com/5bae8135302dd6256e0ea7ff/5bbe3d8d5a3ddcd662ac2ac0_Takeoff%20LOGO%20-%20Primary%20Mark%20-%20Final%20Artwork%20-%20COLOR%20-%20RGB%20-%20FOR%20SCREENS%20-%20v1%20051817%20copy.png"
                    className="logo"
                    alt="takeoff-logo"
                />
            </Link>
            <div className="nav-links">
                <Link to="/login">
                    <h3>Login</h3>
                </Link>
                <Link to="/creategrocery">
                    <h3>CreateGrocery</h3>
                </Link>
                <Link to="/about">
                    <h3>About Us</h3>
                </Link>
                <Link to="/JoinOurTeam">
                    <h3>Join our Team</h3>
                </Link>
                <Link to="/contact">
                    <h3>Contact Us</h3>
                </Link>
            </div>
        </div>
    );
};

export default Navbar;
