import React from "react";
import logolarge from './images/logolarge.png'
import { BrowserRouter, Route, Link, Routes } from 'react-router-dom';

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
                        <li>
                            <Link to="Team">
                                Meet the Team
                            </Link>
                        </li>
                        <li>
                            <Link to="Services">
                                Shop Services
                            </Link>
                        </li>
                        <li>
                            <Link to="Appraisals">
                                Appraisals
                            </Link>
                        </li>
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
                    <li>
                        <Link to="ShopPage">
                            Shop Page
                        </Link>
                    </li>
                    <li>
                        <Link to="Cart">
                            Cart
                        </Link>
                    </li>
                </ul>
            </div>


        </div >
    )
}