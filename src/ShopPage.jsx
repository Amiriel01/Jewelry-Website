import React from "react";
import Header from './Header.jsx'
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom'
import Card from "./Card.jsx";



export default function ShopPage({ loading, setLoading, error, setError, data, setData, setTotalValue, cartContents, setCartContents }) {
    const { pathname } = useLocation();

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
                setData(
                    actualData.map((item) => {
                        return {...item, count: 0}
                    })
                );
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
        //check to see if item is already in the cartContents//
        if (foundItem != null) {
            let newArray = [...cartContents]
            let index = newArray.findIndex((tempItem) => tempItem.id === item.id);
            //if the item is in the cart, look for count prop on item and incriment it//
            foundItem.count++;
            newArray[index] = foundItem;
            setCartContents(newArray);
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
            let newArray = [...cartContents]
            if (foundItem.count <= 0) {
                newArray.splice(newArray.indexOf(foundItem), 1);
            } else {
                let index = newArray.findIndex((tempItem) => tempItem.id === item.id);
                newArray[index] = foundItem;
            }
            setCartContents(newArray);
        }
    }

    const setQuantity = (item, number) => {
        const foundItem = cartContents.find((cartItem) => (item.id === cartItem.id))
        if (foundItem != null) {
            let newArray = [...cartContents]
            let index = newArray.findIndex((tempItem) => tempItem.id === item.id);
            //if the item is in the cart, look for count prop on item and incriment it//
            foundItem.count = parseInt(number);
            newArray[index] = foundItem;
            setCartContents(newArray);
        } else {
            const itemCopy = { ...item, count: parseInt(number) };
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
                <div className="all-cards-container">
                    <>
                        {data.map((item) => {
                            return (<Card
                                item={item}
                                key={item.id}
                                addToCart={addToCart}
                                removeFromCart={removeFromCart}
                                setQuantity={setQuantity}
                                cartContents={cartContents}
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
