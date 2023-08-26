import React from "react";
import logolarge from './images/logolarge.png'
import { BrowserRouter, Route, Link, Routes } from 'react-router-dom';
import App from "./App";
import About from "./About";

export default function Header() {
    return (
        <div>
            <div className="header">
                <div className="appt-schedule">
                    Schedule a Viewing Appointment
                </div>

                <div >
                    <ul className="header-links">
                        <li>
                            <Link to="About">
                                About Us
                            </Link>
                        </li>
                        <li>Meet the Team</li>
                        <li>Shop Services</li>
                        <li>Appraisals</li>
                    </ul>
                </div>

            </div>

            <ul className="logo-large">
                <li>
                    <Link to="Homepage">
                        <img id='logo-large' src={logolarge} alt="Store Logo"></img>
                    </Link>
                </li>
            </ul>
            
            <div>
                <ul>
                    <li>Shop</li>
                    <li>Cart</li>
                </ul>
            </div>


        </div >
    )
}