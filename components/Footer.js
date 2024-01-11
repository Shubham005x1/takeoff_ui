import React from 'react';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-section about">
                    <h2>About Us</h2>
                    <p>
                        Put online grocery orders in shoppers’ hands — faster.
                        Takeoff’s solution helps grocers like you deliver an exceptional customer experience without compromising on price or speed.
                    </p>
                    <div className="contact">
                        <span>
                            <i className="fas fa-phone"></i> © 2023
                        </span>
                        <span>
                            <i className="fas fa-envelope"></i> Takeoff Technologies Inc.
                        </span>
                    </div>
                </div>
                <div className="footer-section links">
                    <h2>Quick Links</h2>
                    <ul>
                        <li>
                            <a href="#">Home</a>
                        </li>
                        <li>
                            <a href="#">About</a>
                        </li>
                        <li>
                            <a href="#">Services</a>
                        </li>
                        <li>
                            <a href="#">Contact</a>
                        </li>
                    </ul>
                </div>

            </div>
            <div className="footer-bottom">
                &copy; 2024 | takeoff.com | All rights reserved
            </div>
        </footer>
    );
};

export default Footer;
