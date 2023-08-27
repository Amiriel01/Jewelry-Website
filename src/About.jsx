import React from "react";
import Header from "./Header";
import store from './images/store.png';
import Team from "./Team";
import { Link } from "react-router-dom";

export default function About() {
    return (
        <div>
            <header className="homepage">
                <Header />
            </header>
            <main>
                <div className="about-container">
                    <div className="store-img-container">
                        <img id="store-img" src={store} alt="indoor store picture" />
                    </div>
                    <h1>
                        ABOUT THE STORE
                    </h1>
                    <p className="about-paragraph">
                        Unique Jewerly was founded in 1955 by Jon and Jane Smith. The siblings trained at their family business before branching off and opening a store of their own across the country.
                    </p>
                    <p className="about-paragraph">
                        The original store was 500sq. feet and contained only one jewelry case for showing pieces. The siblings hired two employees their opening year. Both employees have since retired from business and it has been passed down through the Smith family generations.
                    </p>
                    <p className="about-paragraph">
                        The Unique Jewerly store is currently ran by Jon and Jane's great grandson and granddaughter. The store current has twelve full-time employees.
                    </p>
                    <div className="about-footer">
                        <span className="material-symbols-outlined" id="diamond" >
                            diamond
                        </span>
                        <h2>
                            OUR QUALITY STANDS THE TEST OF TIME
                        </h2>
                        <span className="material-symbols-outlined" id="diamond" >
                            diamond
                        </span>
                    </div>
                    <div id="team-button-container">
                        <Link id="link" className="link" to="/Team">
                            <button id="team-button">
                                Meet the Team
                            </button>
                        </Link>
                    </div>
                </div>
            </main>
        </div>
    )
}