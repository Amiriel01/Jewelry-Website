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
                    <img id="ring-img" src={ring} alt="yellow diamond ring"/>
                </div>
            </main>
           
        </div>
    )
}