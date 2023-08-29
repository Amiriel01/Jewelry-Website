import React from "react";
import Header from './Header.jsx'
import repair1 from './images/repair1.png'
import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom'
import { useEffect } from "react";

export default function Services() {

    const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname]);
  
    return (
        <div>
            <main>
                <div className="repair-container1">
                    <img id="repair1-photo" src={repair1} />
                    <div className="repair-info-container">
                        <h1 id="repair-page-title">
                            REPAIR + RESIZE SERVICES
                        </h1>
                        <p id="repair-paragraph">
                            Choose Unique Jewelry for all of your repair and sizing needs. Our master jewelers are well trained and complete requests ranging from simple fixes to fully restoring heirloom pieces.
                        </p>
                        <h2 id="services-title">
                            JEWELRY SERVICES OFFERED:
                        </h2>
                        <ul className="repair-services-list">
                            <li>Cleaning and Inspection</li>
                            <li>Ring Sizing</li>
                            <li>Replating</li>
                            <li>Loose Stone Repair</li>
                            <li>Change Watch Batteries</li>
                            <li>Chain Link Repair</li>
                            <li>Clasp Replacement</li>
                            <li>Pearl/Bead Stringing</li>
                            <li>Ring Removal</li>
                            <li>Earring Post Repair</li>
                            <li>Engraving</li>
                        </ul>
                    </div>
                </div>
                <div className="repair-footer">
                    <span className="material-symbols-outlined" id="diamond" >
                        diamond
                    </span>
                    <h2>
                        WE BUILD QUALITY EVERYTIME
                    </h2>
                    <span className="material-symbols-outlined" id="diamond" >
                        diamond
                    </span>
                </div>
                <div id="appraisal-button-container">
                    <Link id="link" className="link" to="/Appraisals">
                        <button id="appraisal-button">
                            Appraisal Information
                        </button>
                    </Link>
                </div>
            </main >

        </div >
    )
}