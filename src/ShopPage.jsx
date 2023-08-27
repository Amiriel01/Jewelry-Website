import React from "react";
import Header from './Header.jsx'
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function ShopPage() {
    const [items, setItems] = useState([])

    useEffect(() => {

        const getItems = async () => {

        const response = await 
            fetch("https://fakestoreapi.com/products/category/jewelery?limit=3")
            .then((res) => res.json())
            .then((json) => console.log(json))
            // .then((data) => setItems(data))
        }
        getItems();
    }, [])


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
                    {items.map((item) => {

                        return <div key={item.id}>
                            <img className="item-image" src={item.image} />
                            <p className="item-title">{item.title}</p>
                            <p className="item-name">{item.description}</p>
                            <p className="item-title">{item.price}</p>
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