import React, { useState } from "react";
import NutritionHeader from "../../components/partials/Header/nutritionsheader";
import LoginModal from "../../components/popup/login";
import { isUserLoggedIn } from "../../utils/auth";
import WhatsappBtn from "../../components/whatsapp-btn";
import { useRef } from "react";
import Footer from "../../components/partials/Footer/footer";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function MassGainer() {
    const [showLoginModal, setShowLoginModal] = useState(false);
    const whatsappBtnRef = useRef(null);

    const getAssetPath = (path) => `${process.env.PUBLIC_URL}${path}`;

    return (
        <>
            {showLoginModal && (
                <LoginModal onClose={() => setShowLoginModal(false)} />
            )}
            <NutritionHeader />
            <WhatsappBtn
                ref={whatsappBtnRef}
                message={`Hello, I would like to know more information about your white labeling service. Could you please share the details regarding how it works, pricing, and customization options? Thank you. , ${window.location.href}`}
                options={{ pageRef: true }}
                style={{ display: "none" }}
            />
            <div className="page-header parallaxie">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-12">
                            <div className="page-header-box">
                                <h1 className="text-anime-style-2" data-cursor="-opaque">
                                    Mass Gainer
                                </h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="our-scrolling-ticker">
                <div className="scrolling-ticker-box">
                    <div className="scrolling-content">
                        <span>
                            <img
                                src={getAssetPath("/assets/images/asterisk-icon.svg")}
                                alt=""
                            />
                            Peanut Butter
                        </span>
                        <span>
                            <img
                                src={getAssetPath("/assets/images/asterisk-icon.svg")}
                                alt=""
                            />
                            Energy Drink
                        </span>
                        <span>
                            <img
                                src={getAssetPath("/assets/images/asterisk-icon.svg")}
                                alt=""
                            />
                            Protein Bar
                        </span>
                        <span>
                            <img
                                src={getAssetPath("/assets/images/asterisk-icon.svg")}
                                alt=""
                            />
                            Whey Protein
                        </span>
                        <span>
                            <img
                                src={getAssetPath("/assets/images/asterisk-icon.svg")}
                                alt=""
                            />
                            Mass Gainer
                        </span>
                        <span>
                            <img
                                src={getAssetPath("/assets/images/asterisk-icon.svg")}
                                alt=""
                            />
                            Creatine
                        </span>
                        <span>
                            <img
                                src={getAssetPath("/assets/images/asterisk-icon.svg")}
                                alt=""
                            />
                            Ignite
                        </span>
                    </div>

                    <div className="scrolling-content">
                        <span>
                            <img
                                src={getAssetPath("/assets/images/asterisk-icon.svg")}
                                alt=""
                            />
                            Peanut Butter
                        </span>
                        <span>
                            <img
                                src={getAssetPath("/assets/images/asterisk-icon.svg")}
                                alt=""
                            />
                            Energy Drink
                        </span>
                        <span>
                            <img
                                src={getAssetPath("/assets/images/asterisk-icon.svg")}
                                alt=""
                            />
                            Protein Bar
                        </span>
                        <span>
                            <img
                                src={getAssetPath("/assets/images/asterisk-icon.svg")}
                                alt=""
                            />
                            Whey Protein
                        </span>
                        <span>
                            <img
                                src={getAssetPath("/assets/images/asterisk-icon.svg")}
                                alt=""
                            />
                            Mass Gainer
                        </span>
                        <span>
                            <img
                                src={getAssetPath("/assets/images/asterisk-icon.svg")}
                                alt=""
                            />
                            Creatine
                        </span>
                        <span>
                            <img
                                src={getAssetPath("/assets/images/asterisk-icon.svg")}
                                alt=""
                            />
                            Ignite
                        </span>
                    </div>
                </div>
            </div>

            <div className="page-service-single">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7">
                            <div className="service-single-content">
                                <div className="service-feature-image">
                                    <figure className="image-anime reveal">
                                        <img
                                            src={getAssetPath("/assets/images/product-images/inner-page-img/mass-gainer-inner-page.webp")}
                                            alt="mass-gainer"
                                        />
                                    </figure>
                                </div>

                                <div className="section-title m-4 mx-0 ">
                                    <h2 className="text-anime-style-2 m-0 fs-2 text-bold" data-cursor="-opaque">
                                        Mass <span>Gainer</span>
                                    </h2>

                                    <h4 className="m-3 mx-0 mb-4" data-cursor="-opaque">Price : ₹ 420</h4>

                                    <div className="about-list-box mt-4">
                                        <div className="about-list wow fadeInUp" data-wow-delay="0.4s">
                                            <ul>
                                                <li>Manufacturer - <span>Gomzi Lifescience LLP</span></li>
                                                <li>Packaging Size - <span>1kg, 2kg, 5kg</span></li>
                                                <li>Packaging Type - <span>Jar</span></li>
                                                <li>Composition - <span>As Per Requirement</span></li>
                                                <li>Form - <span>Powder</span></li>
                                                <li>Flavour - <span>Different Type Of Flavours Are Available</span></li>
                                                <li>Shelf Life - <span>18 Months</span></li>
                                                <li>Design & Packaging - <span>Included</span></li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="hero-content-body wow fadeInUp" data-wow-delay="0.4s">
                                        <div className="hero-btn">
                                            <button onClick={() => {
                                                if (isUserLoggedIn()) {
                                                    window.location.href = '/booking-page?product=mass-gainer';
                                                } else {
                                                    setShowLoginModal(true);
                                                }
                                            }} className="btn-default">Add to cart</button>
                                        </div>
                                    </div>
                                </div>

                                <div className="service-entry">
                                    <p className="wow fadeInUp">
                                        This High-Calorie Mass Gainer from Gomzi Lifescience LLP is specially developed for individuals who struggle to meet their daily calorie and nutrient requirements through regular diet alone. Designed to support muscle growth, healthy weight gain, and improved energy levels, this formula delivers the perfect balance of proteins, carbohydrates, and essential nutrients.
                                    </p>

                                    <p className="wow fadeInUp" data-wow-delay="0.2s">
                                        Each 35 g serving provides around 135.45 kcal of energy, with 17.5 g of protein to aid muscle repair and growth. To complement this, it offers a substantial 26.88 g of carbohydrates, ensuring a steady supply of energy to fuel workouts and recovery. Importantly, the formula contains 0 g of added sugar, making it a clean source of calories without unwanted spikes. With 1.15 g of dietary fibre, it also supports healthy digestion and nutrient absorption.
                                    </p>

                                    <p className="wow fadeInUp" data-wow-delay="0.4s">
                                        The fat content remains minimal at just 1.09 g, with a balanced ratio of healthy fatty acids, while cholesterol is completely absent. Essential minerals like Potassium (172.69 mg) and Sodium (138.89 mg) further enhance hydration, endurance, and muscle function, making this supplement ideal for athletes and hard gainers alike.
                                    </p>

                                    <p className="wow fadeInUp" data-wow-delay="0.6s">
                                        Available in 1 kg, 2 kg, and 5 kg jar packaging, this mass gainer comes in multiple flavour options to suit individual preferences. With a shelf life of 18 months and premium design & packaging, it offers both convenience and freshness.
                                    </p>

                                    <p className="wow fadeInUp" data-wow-delay="0.8s">
                                        Whether you're an athlete aiming to bulk up or someone looking to add healthy weight, this High-Calorie Mass Gainer provides the nutritional support you need to achieve your fitness goals.
                                    </p>
                                </div>


                            </div>
                        </div>

                        <div className="col-lg-5">
                            <div className="service-sidebar">
                                <div className="service-catagery-list wow fadeInUp">
                                    <h3>Nutrients per 35g</h3>
                                    <ul>
                                        <li>Energy (kcal) <span>135.45</span></li>
                                        <li>Total Protein (g) <span>17.5</span></li>
                                        <li>Carbohydrates (g) <span>26.88</span></li>
                                        <li>Added Sugar (g) <span>0</span></li>
                                        <li>Dietary Fibre (g) <span>1.15</span></li>
                                        <li>Total Fat (g) <span>1.09</span></li>
                                        <li>Saturated fatty acid (mg) <span>0.47</span></li>
                                        <li>Polyunsaturated fatty acid (g) <span>0.36</span></li>
                                        <li>Monounsaturated fatty acid (mg) <span>0.97</span></li>
                                        <li>Trans Fatty Acid (g) <span>0.07</span></li>
                                        <li>Cholesterol (g) <span>0</span></li>
                                        <li>Potassium (mg) <span>172.69</span></li>
                                        <li>Sodium (mg) <span>138.89</span></li>
                                    </ul>

                                    {/* <h3>Recovery Blend</h3>
                                    <ul>
                                        <li>BCAA 2:1:1 <span>-</span></li>
                                        <li>L Leucine (mg) <span>399</span></li>
                                        <li>L Isoleucine (mg) <span>199</span></li>
                                        <li>L Valine (mg) <span>199</span></li>
                                    </ul> */}
                                </div>


                                <div
                                    className="sidebar-cta-box wow fadeInUp"
                                    data-wow-delay="0.25s"
                                >
                                    <div className="icon-box">
                                        <img src={getAssetPath('/assets/images/icon-sidebar-cta.svg')} alt="" />
                                    </div>

                                    <div className="cta-contact-content">
                                        <h3>You have different questions?</h3>
                                        <p>
                                            Our team will answer all your questions. we ensure a quick
                                            response.
                                        </p>
                                    </div>

                                    <div
                                        className="cta-contact-btn"
                                        onClick={() => {
                                            if (whatsappBtnRef.current) {
                                                whatsappBtnRef.current.click();
                                            }
                                        }}
                                    >
                                        <a href="tel:123456789">
                                            <img src={getAssetPath('/assets/images/icon-sidebar-cta-phone.svg')} alt="" />
                                            +91 83200 77993
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}
