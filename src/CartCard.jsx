import React from "react";

export default function CartCard({ item }) {

    return (
            <div className="checkout-cart-container">
                <img id="checkout-cart-image" src={item.image} />
                <div className="checkout-all-info-container">
                    <p id="checkout-cart-title">{item.title}</p>
                    <div className="checkout-quantity-and-price-container">
                        <p id="checkout-cart-quantity">Quantity: {item.count}</p>
                        <p id="checkout-cart-price">{item.price} each</p>
                    </div>
                </div>
            </div>
        
    )
}