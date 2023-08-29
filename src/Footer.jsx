import React from "react";
import logolarge from './images/logolarge.png'
import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <footer>
            <div className="bottom-footer">
                <div className="logo-small">
                <Link to="/Homepage">
                            <img id='logo-small' src={logolarge} alt="Store Logo"></img>
                        </Link>
                </div>
                <div className="contact-container">
                    <div id="contact-title">
                        CONTACT US
                    </div>
                    <div id="location-title">
                        Location
                    </div>
                    <div id="location-info">
                        555 West 55th St
                        <br></br>
                        Jewelry City, CT
                    </div>
                    <div id="phone-title">
                        Call or Text
                    </div>
                    <div id="phone-info">
                        555-555-5555
                    </div>
                </div>
                <div className="social-media-container">
                    <div id="social-title">
                        GET CONNECTED
                    </div>
                    <div className="facebook-info">
                        <i className="devicon-facebook-plain"></i>
                        <div id="facebook">
                            Facebook
                        </div>
                    </div>
                    <div className="instagram-info">
                        <span id="instagram-icon" className="material-symbols-outlined">
                            photo_camera
                        </span>
                        <div id="instagram">
                            Instagram
                        </div>
                    </div>
                </div>
                <div className="hours-container">
                    <div id="hours-title">
                        STORE HOURS
                    </div>
                    <div id="hours-info">
                        Mon-Fri 10am-6pm
                        <br></br>
                        Sat 11am-5pm
                        <br></br>
                        Sun Closed
                    </div>
                </div>
                <div className="links-container">
                    <div id="links">
                        <Link to="/About">
                            <p id="footer-links">
                                About the Store
                            </p>
                        </Link>
                        <Link to="/Team">
                            <p id="footer-links">
                                Meet the Team
                            </p>
                        </Link>
                        <Link to="/Services">
                            <p id="footer-links">
                                Repair & Resize Information
                            </p>
                        </Link>
                        <Link to="/ShopPage">
                            <p id="footer-links">
                                Shop Current Inventory
                            </p>
                        </Link>
                        <Link to="/Cart">
                            <p id="footer-links">
                                View Shopping Cart
                            </p>
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}