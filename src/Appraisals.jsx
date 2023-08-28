import React from "react";
import Header from './Header.jsx'
import jewelrybox from './images/jewelrybox.png'
import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom'
import { useEffect } from "react";

export default function Appraisals() {

    const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0)
    }, [pathname]);

    return (
        <div>
            <header className="homepage">
                <Header />
            </header>
            <main>
                <div className="appraisal-container">
                    <img id="appraisal-photo" src={jewelrybox} />
                    <div className="appraisal-info-container">
                        <h1 id="appraisal-page-title">
                            APPRAISAL SERVICES
                        </h1>
                        <p className="appraisal-paragraph">
                        Unique Jewelry has a licensed Appraiser/Gemologist on staff to assist customers with their appraisal needs. Appraisals for insurance, resale, and and estate pricing can be scheduled by contacting or stopping by the store.
                    </p>
                    <p className="appraisal-paragraph">
                        Please remmeber that the prices of metals and gems fluctuate based on market conditions. Gold for instance, has had an significant increase in the past ten years, doubling in price. Having an accurate up-to-date appraisal will ensure that your valuable jewelry will stay fully insured. Unique Design recomends updating jewelry appraisals every three to five years.
                    </p>
                    <p className="appraisal-pricing">
                        The appraisal fee is $100 per piece of jewelry.
                    </p>
                    </div>
                </div>
                <div className="appraisal-footer">
                    <span className="material-symbols-outlined" id="diamond" >
                        diamond
                    </span>
                    <h2>
                        LIFETIME QUALITY YOU CAN TRUST
                    </h2>
                    <span className="material-symbols-outlined" id="diamond" >
                        diamond
                    </span>
                </div>
                <div id="shop-button-container">
                    <Link id="link" className="link" to="/ShopPage">
                        <button id="shop-button">
                            Ready to Shop
                        </button>
                    </Link>
                </div>
            </main>

        </div>
    )
}