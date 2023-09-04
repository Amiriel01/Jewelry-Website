import React from "react";
import logolarge from './images/logolarge.png'
import { BrowserRouter, Route, Link, Routes } from 'react-router-dom';
import Cart from "./Cart";


export default function Header({totalValue, handleClick}) {
    // console.log(totalValue)
    return (
        <div>
            <div className="header">
                <div className="appt-schedule">
                    <p id="appt-text">
                        <Link id="link" className="link" to="/FormPage">
                            Schedule a Custom Design Appointment Today
                        </Link>
                    </p>
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
                                Repair Services
                            </Link>
                        </li>
                        <li>
                            <Link id="link" className="link" to="/Appraisals">
                                Appraisals
                            </Link>
                        </li>
                        <li>
                            <Link id="link" className="link" to="/ShopPage">
                                Shop Inventory
                            </Link>
                        </li>
                        <li className="bag-hover">
                            <Link id="link" className="link" to="/Cart">
                                <span className="material-symbols-outlined">
                                    shopping_bag
                                </span>
                            </Link>
                            <p 
                            // onClick={handleClick}  
                            className="badge">{totalValue}</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}