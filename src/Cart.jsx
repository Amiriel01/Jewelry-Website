import React from "react";
import Header from './Header.jsx'
import { useLocation } from 'react-router-dom'
import { useEffect } from "react";
import { Link } from "react-router-dom";
import cart from './images/cart.png'

export default function Cart({totalValue}) {

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
                <div className="cart-page-container">
                        <img className="cart-img" src={cart} alt="woman wearing a watch and ring" />
                        <div className="cart-items-container">
                        <h1 id="cart-page-title">
                            SHOPPING CART
                        </h1>
                        <div className="cart-items">
                            <p>{totalValue}</p>

                        </div>
                        </div>
                </div>
                <div className="cart-footer">
                    <span className="material-symbols-outlined" id="diamond" >
                        diamond
                    </span>
                    <h2>
                        BUY QUALITY FROM A TRUSTED JEWELER
                    </h2>
                    <span className="material-symbols-outlined" id="diamond" >
                        diamond
                    </span>
                </div>
                <div id="home-button-container">
                    <Link id="link" className="link" to="/Homepage">
                        <button id="home-button">
                            Return Home
                        </button>
                    </Link>
                </div>
            </main>

        </div>
    )
}