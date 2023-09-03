import React, { useEffect, useState } from "react";

export default function CartCard({ item }) {

    const [cartTotalItemCost, setCartTotalItemCost] = useState(0);

    useEffect(() => {
        let count = (item.count);
        let price = (item.price);
        // setCartTotalItemCost(0)
        let totalItemCost = count * price;
        setCartTotalItemCost(Intl.NumberFormat("en-US", {
            style: 'currency',
            currency: "USD",
            maximumFractionDigits: 2,
            minimumFractionDigits: 2,
        }).format(totalItemCost));
    }, [item])

    return (
        <>
            <div className="checkout-cart-container">
                <img id="checkout-cart-image" src={item.image} />
                <div className="checkout-all-info-container">
                    <p id="checkout-cart-title">{item.title}</p>
                    <div className="checkout-quantity-and-price-container">
                        <p id="checkout-cart-quantity">Quantity: {item.count}</p>
                        <p id="checkout-cart-price"> ${item.price} each</p>
                        <p id="checkout-cart-total-item-cost">Total: {cartTotalItemCost}</p>
                    </div>
                </div>
            </div>
        </>

    )
}