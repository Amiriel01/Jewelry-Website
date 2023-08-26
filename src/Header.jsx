import React from "react";
import { Link } from "react-router-dom"
import logolarge from './images/logolarge.png'

export default function Header() {
    return (
        <div className="home-page">
            <div className="header">
                <div className="appt-schedule">
                    Schedule a Viewing Appointment
                </div>
                <div className="header-links">
                    <ul>
                        <li>About Us</li>
                        <li>Meet the Team</li>
                        <li>Shop Services</li>
                        <li>Appraisals</li>
                    </ul>
                </div>
            </div>
            <div className="logo-large">
                {/* <Link to={"./Homepage"}> */}
                    <img id='logo-large' src={logolarge} alt="Store Logo"></img>
                {/* </Link> */}
            </div>
        </div>
    )
}