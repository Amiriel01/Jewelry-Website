import React, { useEffect } from "react";

export default function Card({ item, removeFromCart, addToCart, setQuantity }) {
    const copyItem = {...item};

    useEffect(() => {
        copyItem.count = item.count;
    }, [item])

    return (
        <>
            <div className="items-container">
                <div className="item-card">
                    <div className="img-container">
                        <img className="item-image" src={item.image} />
                    </div>
                    <p className="item-title">{item.title}</p>
                    <p className="item-description">{item.description}</p>
                    <div className="price-rating-container">
                        <p className="item-rating">{item.rating.rate}&#9733; / {item.rating.count} ratings</p>
                        <p className="item-price">${item.price}</p>
                    </div>
                </div>
            </div>
            <div className="all-add-subt-button-container">
                <div className="add-subt-button-container">
                    <button className="subtract-button"
                        onClick={() => {
                            removeFromCart(item);
                        }}>
                        <span id="subtract" className="material-symbols-outlined">
                            remove
                        </span>
                    </button>
                    <input className="item-input-count"
                        type="text"
                        maxLength={2}
                        pattern="[0-9]*"
                        onKeyDown={(e) => ["e", "E", "+", "-"].includes(e.key) && e.preventDefault()}
                        value={copyItem.count}
                        onChange={(e) =>
                            setQuantity(item, e.target.validity.valid ? e.target.value : 0)}
                    />
                    <button className="add-button"
                        onClick={() => {
                            addToCart(item);
                        }}
                    >
                        <span id="add" className="material-symbols-outlined">
                            add
                        </span>
                    </button>
                </div>
            </div>
        </>
    )
}