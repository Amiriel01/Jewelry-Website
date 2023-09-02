import React, { useEffect, useState } from "react";

export default function CartCard({ item }) {

    // useEffect(() => {
    //     let count = (item.count);
    //     let price = (item.price);
    //     let totalItemCost = count * price;
    //     console.log(count)
    //     console.log(price)
    //     console.log(totalItemCost);
    // }, [item])

    return (
        <>
            <div className="checkout-cart-container">
                <img id="checkout-cart-image" src={item.image} />
                <div className="checkout-all-info-container">
                    <p id="checkout-cart-title">{item.title}</p>
                    <div className="checkout-quantity-and-price-container">
                        <p id="checkout-cart-quantity">Quantity: {item.count}</p>
                        <p id="checkout-cart-price">${item.price} each</p>
                    </div>
                </div>
            </div>
        </>

    )
}