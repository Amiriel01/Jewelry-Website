import React from "react";
import Header from './Header.jsx'
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom'
import Card from "./Card.jsx";



export default function ShopPage({ loading, setLoading, error, setError, data, setData, setTotalValue, cartContents, setCartContents }) {
    const { pathname } = useLocation();
    // const [loading, setLoading] = useState(true);
    // const [error, setError] = useState(null);
    // const [data, setData] = useState([])
    // const { pathname } = useLocation();
    // const [totalValue, setTotalValue] = useState(0);
    // const [val1, setVal1] = useState(0);
    // const [val2, setVal2] = useState(0);
    // const [val3, setVal3] = useState(0);
    // const [showCart, setShowCart] = useState(false)

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

    useEffect(() => {
        // setTotalValue(cartContents.length)
        let sum = 0;
        for (let i = 0; i < cartContents.length; i++) {
            let item = cartContents[i];
            sum = sum + item.count;
        }
        setTotalValue(sum);
    }, [cartContents])

    const addToCart = (item) => {
        const foundItem = cartContents.find((cartItem) => (item.id === cartItem.id))
        console.log("something")
        //check to see if item is already in the cartContents//
        if (foundItem != null) {
            //if the item is in the cart, look for count prop on item and incriment it//
            foundItem.count++;
        } else {
            //if the item is not in the cart, add to the cart and add count prop to item with value of 1//
            const itemCopy = { ...item, count: 1 };
            // setCartContents(cartContents)
            // cartContents.push(itemCopy);
            let newArray = [...cartContents]
            newArray.push(itemCopy);
            console.log(newArray);
            setCartContents(newArray);
        }
    }


    const removeFromCart = (item) => {
        const foundItem = cartContents.find((cartItem) => (item.id === cartItem.id))
        //check to see if item is already in the cartContents//
        if (foundItem != null) {
            //if the item is in the cart, look for count prop on item and incriment it//
            foundItem.count--;
            if (foundItem.count <= 0) {
                let newArray = [...cartContents]
                newArray.splice(newArray.indexOf(foundItem), 1);
                console.log(newArray);
                setCartContents(newArray);
            }
        } 
    }

    const setQuantity = (item, number) => {
        const foundItem = cartContents.find((cartItem) => (item.id === cartItem.id))
        if (foundItem != null) {
            foundItem.count = parseInt(number);
        } else {
            const itemCopy = { ...item, count: parseInt(number)};
            let newArray = [...cartContents]
            newArray.push(itemCopy);
            console.log(newArray);
            setCartContents(newArray);
        }
    }

    return (
        <div>
            <main>

                <h1>
                    SHOP CURRENT INVENTORY
                </h1>
                <div className=".all-cards-container">
                    <>
                        {data.map((item) => {
                            return (<Card
                                item={item}
                                key={item.id}
                                addToCart={addToCart}
                                removeFromCart={removeFromCart}
                                setQuantity={setQuantity}
                            />)
                        })}
                    </>
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
