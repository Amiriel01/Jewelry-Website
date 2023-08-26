import React from "react";
import Header from './Header.jsx'
import { BrowserRouter, Route, Link, Routes } from 'react-router-dom';
import App from "./App.jsx";
import About from "./About.jsx";
import ring from './images/ring.png'

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
            </main>

        </div>
    )
}