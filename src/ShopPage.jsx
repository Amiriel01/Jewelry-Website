import React from "react";
import Header from './Header.jsx'
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom'
import Cart from "./Cart.jsx";


export default function ShopPage() {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [data, setData] = useState([])
    const { pathname } = useLocation();
    const [val, setVal] = useState(0);

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [pathname]);

    useEffect(() => {
        fetch("https://fakestoreapi.com/products/category/jewelery?limit=3")
            .then((response) => {
                if (!response) {
                    throw new Error(
                        `This is an HTTP error: The status is $(response.status)`
                    );
                }
                return response.json();
            })
            // .then((json) => console.log(json))
            .then((actualData) => {
                setData(actualData);
                setError(null);
                console.log(actualData)
            })
            .catch((err) => {
                setError(err.message)
                setData(null)
                console.log(err.message)
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);

    return (
        <div>
            <header className="homepage">
                <Header
                    val={val}
                />
            </header>
            <main>
                <h1>
                    SHOP CURRENT INVENTORY
                </h1>
                <div className="items-container">
                    {data.map((item) => {

                        return <div key={item.id}>
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
                                {/* <div className="add-subt-button-container">
                                    <button className="subtract-button"
                                        onClick={() => {
                                            setVal(Math.max(val - 1, 0))
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
                                        value={val}
                                        onChange={(e) =>
                                            setVal((v) => (e.target.validity.valid ? e.target.value : v))}
                                    />
                                    <button className="add-button"
                                        onClick={() => {
                                            setVal(Math.max(val + 1))
                                        }}
                                    >
                                        <span id="add" className="material-symbols-outlined">
                                            add
                                        </span>
                                    </button>
                                </div> */}
                            </div>
                            <div className="add-subt-button-container">
                                <button className="subtract-button"
                                    onClick={() => {
                                        setVal(Math.max(val - 1, 0))
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
                                    value={val}
                                    onChange={(e) =>
                                        setVal((v) => (e.target.validity.valid ? e.target.value : v))}
                                />
                                <button className="add-button"
                                    onClick={() => {
                                        setVal(Math.max(val + 1))
                                    }}
                                >
                                    <span id="add" className="material-symbols-outlined">
                                        add
                                    </span>
                                </button>
                            </div>
                        </div>
                    })
                    }
                </div>
                <div className="shop-footer">
                    <span className="material-symbols-outlined" id="diamond" >
                        diamond
                    </span>
                    <h2>
                        ONLY THE BEST FOR OUR CUSTOMERS
                    </h2>
                    <span className="material-symbols-outlined" id="diamond" >
                        diamond
                    </span>
                </div>
                <div id="cart-button-container">
                    <Link id="link" className="link" to="/Cart">
                        <button id="cart-button">
                            View Cart
                        </button>
                    </Link>
                </div>
            </main>
        </div>
    )
}