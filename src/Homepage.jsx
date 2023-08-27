import React from "react";
import Header from './Header.jsx'
import { BrowserRouter, Route, Link, Routes } from 'react-router-dom';
import App from "./App.jsx";
import About from "./About.jsx";
import ring from './images/ring.png'
import logolarge from './images/logolarge.png'

export default function HomePage() {
    return (
        <div>
            <header className="homepage">
                <Header />
            </header>
            <main>
                <div className="ring-container">
                    <img id="ring-img" src={ring} alt="yellow diamond ring" />
                </div>
                <div className="welcome-container">
                    <div id="welcome-title">
                        WELCOME TO OUR STORE
                    </div>
                    <div id="welcome-info">
                        Unique Design has been located in Jewerly City for 50 years. This long-lived, family owned business has been a staple of the community for many years. Unique Design's staff has over 100 years of combined jewelry experience. You can trust that you will leave Unique Design with the highest quality future family heirloom money can buy. Our store offers a full service jewelery shop, appraisals for insurance and resale purposes, custom jewerly design support, and a beautiful showroom display of custom jewerly to meet all of your jewelry needs.
                    </div>
                </div>
                <div className="footer">
                    <div className="care-ship-gift-container">
                        <div className="care-container">
                            <span class="material-symbols-outlined">
                                medical_services
                            </span>
                            <div id="care-title">
                                LIFETIME CARE PLAN
                            </div>
                            <div id="care-info">
                                Protect your valuable jewelrey, with a lifetime care plan. Ask your sales consultant for details.
                            </div>
                        </div>
                        <div className="shipping-container">
                            <span class="material-symbols-outlined">
                                local_shipping
                            </span>
                            <div id="shipping-title">
                                FREE SHIPPING
                            </div>
                            <div id="shipping-info">
                                On orders over $200
                            </div>
                        </div>
                        <div className="gift-container">
                            <span class="material-symbols-outlined">
                                redeem
                            </span>
                            <div id="gift-title">
                                FREE GIFT WRAPPING
                            </div>
                            <div id="gift-info">
                                Let us know if you would like free gift wrapping!
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bottom-footer">
                    <div className="logo-small">
                        <img id='logo-small' src={logolarge} alt="Store Logo"></img>
                    </div>
                    <div class="contact-container">
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
                            <i class="devicon-facebook-plain"></i>
                            <div id="facebook">
                                Facebook
                            </div>
                        </div>
                        <div className="instagram-info">
                            <span id="instagram-icon" class="material-symbols-outlined">
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
                </div>
            </main>

        </div>
    )
}