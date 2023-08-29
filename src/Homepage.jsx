import React from "react";
import Header from './Header.jsx'
import { BrowserRouter, Route, Link, Routes } from 'react-router-dom';
import App from "./App.jsx";
import About from "./About.jsx";
import ring from './images/ring.png'
import logolarge from './images/logolarge.png'
import { useLocation } from 'react-router-dom'
import { useEffect } from "react";

export default function HomePage() {

    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [pathname]);

    return (
        <div>
            <main>
                <div className="ring-container">
                    <img id="ring-img" src={ring} alt="yellow diamond ring" />
                </div>
                <div className="welcome-container">
                    <div id="welcome-title">
                        WELCOME TO OUR STORE
                    </div>
                    <div id="welcome-info">
                        Unique Design has been located in Jewerly City for 50 years. This long-lived, family owned business has been a staple of the community for many years. Unique Design's staff has over 100 years of combined jewelry experience. You can trust that you will leave Unique Design with the highest quality future family heirloom money can buy. Our store offers a full service jewelry shop, appraisals for insurance and resale purposes, custom jewerly design support, and a beautiful showroom display of custom jewerly to meet all of your jewelry needs.
                    </div>
                </div>
                <footer>
                    <div className="footer">
                        <div className="care-ship-gift-container">
                            <div className="care-container">
                                <span className="material-symbols-outlined">
                                    medical_services
                                </span>
                                <div id="care-title">
                                    LIFETIME CARE PLAN
                                </div>
                                <div id="care-info">
                                    Protect your valuable jewelry, with a lifetime care plan. Ask your sales consultant for details.
                                </div>
                            </div>
                            <div className="shipping-container">
                                <span className="material-symbols-outlined">
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
                                <span className="material-symbols-outlined">
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
                </footer>
            </main>

        </div >
    )
}