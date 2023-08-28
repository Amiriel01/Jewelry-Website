import React from "react";
import Header from "./Header";
import custom2 from "./images/custom2.png";
import step1 from "./images/step1.png";
import step2 from "./images/step2.png";
import step3 from "./images/step3.png";
import custom3 from './images/custom3.png'
import { useState } from "react";
import { Link } from "react-router-dom";
import HomePage from "./Homepage";
import { useLocation } from 'react-router-dom'
import { useEffect } from "react";

export default function FormPage() {

    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [success, setSuccess] = useState("");
    const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0)
    }, [pathname]);

    const handleSubmit = (e) => {
        e.preventDefault();
        setName("");
        setPhone("");
        setEmail("");
        setDate("");
        setTime("");
        setSuccess("Your appointment request was successfully submitted.")
    }
    return (
        <div>
            <header className="homepage">
                <Header />
            </header>
            <main>
                <div className="img-info-custom-container">
                    <img id="custom-img" src={custom2} />
                    <div className="custom-info-container">
                        <h1 id="small-title">
                            UNIQUE CUSTOM DESIGNS
                        </h1>
                        <h1 id="large-title" className="custom-paragraph">
                            One-Of-A-Kind, Designed by You
                        </h1>
                        <p className="custom-paragraph">
                            Jewelry is a artistic form of self-expression. A customer cannot always find exactly what they want from a display case.
                        </p>
                        <p className="custom-paragraph">
                            Let our knowledgable design team help you to create your jewelry vision.
                        </p>
                        <p className="custom-paragraph">
                            Fill out the form below to schedule your appointment!
                        </p>
                    </div>
                </div>
                <div className="all-step-containers">
                    <h1 id="small-title">
                        THE DESIGN PROCESS
                    </h1>
                    <div className="step-container">
                        <img id="step-img" src={step1} />
                        <div className="step-info-container">
                            <div id="small-step-title">
                                RESEARCH & CONSULTATION
                            </div>
                            <div id="large-step-title">
                                STEP ONE
                            </div>
                            <p className="step-paragraph">
                                During the consultation you and your designer will discover your style. You will work together to decide on colors, shapes, and materials. During the appointment you will view items in the store and online for inspiration.
                            </p>
                            <p className="step-paragraph">
                                We will discuss your budget at the consultation appointment. Different decisions impact the total cost of the piece. Your designer will work within your budget to create your perfect vision.
                            </p>
                            <p className="step-paragraph">
                                Custom designs usually start around $1,200.
                            </p>
                        </div>
                    </div>
                    <div className="step-container">
                        <div className="step-info-container">
                            <div id="small-step-title">
                                DESIGNING & SOURCING STONES
                            </div>
                            <div id="large-step-title">
                                STEP TWO
                            </div>
                            <p className="step-paragraph">
                                Using CAD technology, your designer will create a digital rendering of your chosen piece. This process can take up to two weeks, you will get weekly updates on your digital design template.
                            </p>
                            <p className="step-paragraph">
                                When your digital design is ready you will return to the store to finalize your creation. When you commit to your design 10% of the estimated purchase price will be taken as a deposit. The deposit will be applied to your final purchase.
                            </p>
                        </div>
                        <img id="step-img" src={step2} />
                    </div>
                    <div className="step-container">
                        <img id="step-img" src={step3} />
                        <div className="step-info-container">
                            <div id="small-step-title">
                                FINALIZING DETAILS & CREATION
                            </div>
                            <div id="large-step-title">
                                STEP THREE
                            </div>
                            <p className="step-paragraph">
                                After completing any adjustments you request during your second appointment you will be asked to confirm the final design. A 3D model of your design will be available within 48 hours for you to stop in and approve before ordering can occur.
                            </p>
                            <p className="step-paragraph">
                                Once the 3D design is finalized the jewelry materials will be ordered. Production will take 6-8 weeks. You will be kept informed of each stage in the production process.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="form-container">
                    <img id="custom-img" src={custom3} />
                    <div className="custom-info-container">
                        <h1 id="large-title">
                            REQUEST AN APPOINTMENT
                        </h1>
                        <p className="custom-paragraph">
                            Fill out the form below to schedule your appointment!
                        </p>
                        <form className="form" onSubmit={handleSubmit}>
                            <label>Full Name:</label>
                            <input value={name}
                                onChange={(e) => setName(e.target.value)}
                                type='text' required />
                            <label>Phone:</label>
                            <input value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                type='phone' required />
                            <label>Email:</label>
                            <input value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                type='email' required />
                            <label>Date:</label>
                            <input type='date'
                                value={date}
                                onChange={(e) => setDate(e.target.value)}
                                required />
                            <label>Time:</label>
                            <select
                                value={time}
                                onChange={(e) => setTime(e.target.value)}
                                required>
                                <option>Choose A Time</option>
                                <option>10:00am-11:00am</option>
                                <option>1:00pm-2:00pm</option>
                                <option>3:00pm-4:00pm</option>
                            </select>
                            <div className="button-container">
                                <button id="submit-button" >Submit</button>
                            </div>
                            <span id="success" style={{ whiteSpace: 'pre-wrap' }}>{success}</span>
                        </form>
                    </div>
                </div>
                <div className="appointment-footer">
                    <span className="material-symbols-outlined" id="diamond" >
                        diamond
                    </span>
                    <h2>
                       QUALITY CUSTOM DESIGNS EVERYTIME
                    </h2>
                    <span className="material-symbols-outlined" id="diamond" >
                        diamond
                    </span>
                </div>
                <div id="repair-button-container">
                    <Link id="link" className="link" to="/Homepage">
                        <button id="repair-button">
                            Homepage
                        </button>
                    </Link>
                </div>
            </main >
        </div >
    )
}