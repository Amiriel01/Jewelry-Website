import React from "react";
import logolarge from './images/logolarge.png'
import { BrowserRouter, Route, Link, Routes } from 'react-router-dom';
import bag from "./images/bag.svg";

export default function Header() {
    return (
        <div>
            <div className="header">
                <div className="appt-schedule">
                    <p id="appt-text">Schedule a Viewing Appointment</p>
                </div>

                <div >
                    <ul>
                        <li>
                            <Link to="/Homepage">
                                <img id='logo-large' src={logolarge} alt="Store Logo"></img>
                            </Link>
                        </li>
                    </ul>
                    <ul className="header-links">
                        <li>
                            <Link id="link" className="link" to="/About">
                                About Us
                            </Link>
                        </li>
                        <li>
                            <Link id="link" className="link" to="/Team">
                                Meet the Team
                            </Link>
                        </li>
                        <li>
                            <Link id="link" className="link" to="/Services">
                                Jeweler Services
                            </Link>
                        </li>
                        <li>
                            <Link id="link" className="link" to="/Appraisals">
                                Appraisals
                            </Link>
                        </li>
                        <li>
                            <Link id="link" className="link" to="/ShopPage">
                                Shop Page
                            </Link>
                        </li>
                        <li className="bag-hover">
                            <Link id="link" className="link" to="/Cart">
                                <span className="material-symbols-outlined">
                                    shopping_bag
                                </span>
                            </Link>
                            <div className="badge">0</div>
                        </li>

                    </ul>
                </div>
            </div>
        </div>
    )
}