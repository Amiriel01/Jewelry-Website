import React from "react";
import Header from './Header.jsx'
import { useLocation } from 'react-router-dom'
import { useEffect } from "react";

export default function Cart() {

    const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0)
    }, [pathname]);
    
    return (
        <div>
            <header className="homepage">
                <Header />
            </header>
            <main>
                <p>Cart</p>
            </main>
           
        </div>
    )
}