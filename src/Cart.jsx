import React, { useState } from "react";
import Header from './Header.jsx'
import { useLocation } from 'react-router-dom'
import { useEffect } from "react";
import { Link } from "react-router-dom";
import cart from './images/cart.png'
import CartCard from "./CartCard.jsx";
import ShopPage from "./ShopPage.jsx";

export default function Cart({ cartContents }) {

    const [totalCartCost, setTotalCartCost] = useState(0);

    useEffect(() => {
        setTotalCartCost(0);
        let cartCost = 0;
        cartContents.forEach(cartItem => {
            cartCost = (cartCost + (cartItem.count * cartItem.price));
            // console.log(`item ${cartItem.title} count ${cartItem.count} price ${cartItem.price} itemTotal  ${cartItem.count * cartItem.price} total ${cartCost}`);
        });
        setTotalCartCost(Intl.NumberFormat("en-US", {
            style: 'currency',
            currency: "USD",
            maximumFractionDigits: 2,
            minimumFractionDigits: 2,
        }).format(cartCost));
    }, [cartContents])

    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [pathname]);

    return (
        <div>

            <main>
                <div className="cart-page-container">
                    <img className="cart-img" src={cart} alt="woman wearing a watch and ring" />
                    <div className="cart-items-container">
                        <h1 id="cart-page-title">
                            ORDER SUMMARY
                        </h1>
                        <div>
                            <div className="cart-items">
                                <>
                                    {cartContents.map((item) => {
                                        return (<CartCard
                                            item={item}
                                            key={item.id}
                                        />
                                        )
                                    })}
                                </>

                            </div>
                            <div className="order-total-checkout-container">
                                <p id="total-cart-value"> ORDER TOTAL: {totalCartCost}</p>
                                <div className="cart-buttons">
                                    <Link id="link" className="link" to="/ShopPage"><button id="edit">Edit Cart</button></Link>
                                    <button id="checkout" onClick={() => { alert('Thank you for visiting my demo webpage. This is the end of the demo.'); }}>Continue to Checkout</button>
                                </div>
                            </div>
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