import React from "react";
import Header from './Header.jsx'
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function ShopPage() {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [data, setData] = useState([])

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

    // const getItems = () => {
    //     fetch("https://fakestoreapi.com/products/category/jewelery?limit=3")
    //         .then(res => {
    //             res.json()
    //             // .then((json) => console.log(json)
    //         })
    //         .then(data => {
    //             setItems(data)
    //         })
    // }

    // useEffect(() => {
    //     getItems();
    // },[])

    return (
        <div>
            <header className="homepage">
                <Header />
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
                                <p className="item-name">{item.description}</p>
                                <p className="item-title">{item.price}</p>
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