import React from "react";
import Header from './Header.jsx'
import { useState } from "react";
import owner1 from './images/owner1.png'
import owner2 from './images/owner2.png'
import owner3 from './images/owner3.png'
import manager1 from './images/manager1.png'
import sales1 from './images/sales1.png'
import sales2 from './images/sales2.png'
import bookkeeper from './images/bookkeeper.png'
import marketing from './images/marketing.png'
import custom from './images/custom.png'
import finance from './images/finance.png'
import jeweler1 from './images/jeweler1.png'
import jeweler2 from './images/jeweler2.png'
import { Link } from "react-router-dom";

export default function Team() {
    const employees = ([
        {
            id: 1,
            name: "Sally Smith",
            image: owner1,
            title: "Owner/Gemologist"
        },
        {
            id: 2,
            name: "Terran Smith",
            image: owner2,
            title: "Owner/Appraiser"
        },
        {
            id: 3,
            name: "Jennifer Smith",
            image: owner3,
            title: "Owner/Custom Design"
        },
        {
            id: 4,
            name: "Anthony Jones",
            image: manager1,
            title: "Sales Manager"
        },
        {
            id: 5,
            name: "Shannon Murphy",
            image: sales1,
            title: "Jewelry Sales"
        },
        {
            id: 6,
            name: "Ashley Jefferson",
            image: sales2,
            title: "Jewelry Sales"
        },
        {
            id: 7,
            name: "Brooklyn Parker",
            image: bookkeeper,
            title: "Bookkeeper/Office Manager"
        },
        {
            id: 8,
            name: "Valorie Jackson",
            image: marketing,
            title: "Marketing & Design"
        },
        {
            id: 9,
            name: "Amara Jane",
            image: custom,
            title: "Custom Jewelry Design"
        },
        {
            id: 10,
            name: "Karen Walker",
            image: finance,
            title: "Jewelry Appraiser"
        },
        {
            id: 11,
            name: "Erika Stevenson",
            image: jeweler1,
            title: "Shop Manager/Jeweler"
        },
        {
            id: 12,
            name: "Seth Stevenson",
            image: jeweler2,
            title: "Jeweler"
        },
    ]
    );

    return (
        <div>
            <header className="homepage">
                <Header />
            </header>
            <main>
                <h1>
                    MEET THE TEAM
                </h1>
                <div className="employee-container">
                    {employees.map((employee) => {

                        return <div key={employee.id}>
                            <img className="employee-image" src={employee.image}/>
                            <p className="employee-name">{employee.name}</p>
                            <p className="employee-title">{employee.title}</p>
                        </div>
                    })
                    }
                </div>
                <div className="repair-footer">
                        <span className="material-symbols-outlined" id="diamond" >
                            diamond
                        </span>
                        <h2>
                            GUARENTEED REPAIR SERVICES
                        </h2>
                        <span className="material-symbols-outlined" id="diamond" >
                            diamond
                        </span>
                    </div>
                    <div id="repair-button-container">
                        <Link id="link" className="link" to="/Services">
                            <button id="repair-button">
                                Repair Services
                            </button>
                        </Link>
                    </div>
            </main >

        </div >
    )
}