import React from "react";
import logolarge from './images/logolarge.png'

export default function Footer(){
    return (
        <footer>
                    <div className="footer">
                        <div className="care-ship-gift-container">
                            <div className="care-container">
                                <span className="material-symbols-outlined">
                                    medical_services
                                </span>
                                <div id="care-title">
                                    LIFETIME CARE PLAN
                                </div>
                                <div id="care-info">
                                    Protect your valuable jewelry, with a lifetime care plan. Ask your sales consultant for details.
                                </div>
                            </div>
                            <div className="shipping-container">
                                <span className="material-symbols-outlined">
                                    local_shipping
                                </span>
                                <div id="shipping-title">
                                    FREE SHIPPING
                                </div>
                                <div id="shipping-info">
                                    On orders over $200
                                </div>
                            </div>
                            <div className="gift-container">
                                <span className="material-symbols-outlined">
                                    redeem
                                </span>
                                <div id="gift-title">
                                    FREE GIFT WRAPPING
                                </div>
                                <div id="gift-info">
                                    Let us know if you would like free gift wrapping!
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bottom-footer">
                        <div className="logo-small">
                            <img id='logo-small' src={logolarge} alt="Store Logo"></img>
                        </div>
                        <div className="contact-container">
                            <div id="contact-title">
                                CONTACT US
                            </div>
                            <div id="location-title">
                                Location
                            </div>
                            <div id="location-info">
                                555 West 55th St
                                <br></br>
                                Jewelry City, CT
                            </div>
                            <div id="phone-title">
                                Call or Text
                            </div>
                            <div id="phone-info">
                                555-555-5555
                            </div>
                        </div>
                        <div className="social-media-container">
                            <div id="social-title">
                                GET CONNECTED
                            </div>
                            <div className="facebook-info">
                                <i className="devicon-facebook-plain"></i>
                                <div id="facebook">
                                    Facebook
                                </div>
                            </div>
                            <div className="instagram-info">
                                <span id="instagram-icon" className="material-symbols-outlined">
                                    photo_camera
                                </span>
                                <div id="instagram">
                                    Instagram
                                </div>
                            </div>
                        </div>
                        <div className="hours-container">
                            <div id="hours-title">
                                STORE HOURS
                            </div>
                            <div id="hours-info">
                                Mon-Fri 10am-6pm
                                <br></br>
                                Sat 11am-5pm
                                <br></br>
                                Sun Closed
                            </div>
                        </div>
                    </div>
                </footer>
    )
}