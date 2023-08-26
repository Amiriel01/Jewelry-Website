import React from "react";
import Header from './Header.jsx'
import { BrowserRouter, Route, Link, Routes } from 'react-router-dom';
import App from "./App.jsx";
import About from "./About.jsx";

export default function HomePage() {
    return (
        <div>
            <header className="homepage">
                <Header />
            </header>
            <main>
                <p>Homepage</p>
            </main>
           
        </div>
    )
}