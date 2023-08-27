import React from "react";
import Header from './Header.jsx'

export default function ShopPage() {
    fetch("https://fakestoreapi.com/products/category/jewelery?limit=3")
        .then((res) => res.json())
        .then((json) => console.log(json));
    return (
        <div>
            <header className="homepage">
                <Header />
            </header>
            <main>
                <p>Shop Page</p>
            </main>

        </div>
    )
}