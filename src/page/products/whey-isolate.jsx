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

export default function WheyIsolate() {
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
                                    Whey Isolate
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
                                            src={getAssetPath("/assets/images/product-images/inner-page-img/whey-isolate-inner-page.webp")}
                                            // src={getAssetPath("/assets/images/service-6.jpg")}
                                            alt="whey-isolate"
                                        />
                                    </figure>
                                </div>

                                <div className="section-title m-4 mx-0 ">
                                    <h2 className="text-anime-style-2 m-0 fs-2 text-bold" data-cursor="-opaque">
                                        Whey <span>Isolate</span>
                                    </h2>

                                    <h4 className="m-3 mx-0 mb-4" data-cursor="-opaque">Price : ₹ 3000</h4>

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
                                                    window.location.href = '/booking-page?product=whey-isolate';
                                                } else {
                                                    setShowLoginModal(true);
                                                }
                                            }} className="btn-default">Add to cart</button>
                                        </div>
                                    </div>
                                </div>

                                <div className="service-entry">
                                    <p className="wow fadeInUp">
                                        This Premium Whey Isolate Protein Powder from Gomzi Lifescience LLP represents the purest form of whey, delivering exceptional quality nutrition for athletes and fitness enthusiasts aiming for maximum performance and results. With an impressive 90% protein content, this whey isolate provides high bioavailability and rapid absorption, ensuring muscles get the fuel they need immediately after training.
                                    </p>
                                    <p className="wow fadeInUp" data-wow-delay="0.2s">
                                        Each 35 g serving delivers approximately 136.53 kcal of energy and a powerful 27.33 g of protein, making it one of the leanest and most effective protein sources available. With just 4.17 g of carbohydrates and 0 g added sugar, it is perfectly suited for individuals following strict calorie-controlled, low-carb, or keto diets. The 1.17 g fat content is exceptionally low, with balanced healthy fatty acids, while cholesterol and trans fat are almost negligible. Added minerals like Potassium (149 mg) and Sodium (120 mg) help maintain electrolyte balance, hydration, and endurance during intense workouts.
                                    </p>
                                    <p className="wow fadeInUp" data-wow-delay="0.4s">
                                        Formulated for those seeking a high-protein, low-fat, and low-lactose solution, this whey isolate is ideal for building lean muscle, accelerating recovery, and supporting fat loss goals. Its clean profile makes it gentle on digestion and suitable even for those with lactose sensitivities.
                                    </p>
                                    <p className="wow fadeInUp" data-wow-delay="0.6s">
                                        Available in 1 kg, 2 kg, and 5 kg jars, this protein powder comes in a variety of delicious flavours to suit different preferences. With a shelf life of 18 months and premium jar packaging, it offers both convenience and long-lasting freshness. This product is the ultimate choice for serious athletes striving for purity, performance, and results.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-5">
                            <div className="service-sidebar">
                                <div className="service-catagery-list wow fadeInUp">
                                    <h3>Nutrients per 35g</h3>
                                    <ul>
                                        <li>Energy (kcal) <span>136.53</span></li>
                                        <li>Total Protein (g) <span>27.33</span></li>
                                        <li>Carbohydrates (g) <span>4.17</span></li>
                                        <li>Added Sugar (g) <span>0</span></li>
                                        <li>Dietary Fibre (g) <span>2.01</span></li>
                                        <li>Total Fat (g) <span>1.17</span></li>
                                        <li>Saturated fatty acid (mg) <span>0.66</span></li>
                                        <li>Polyunsaturated fatty acid (g) <span>0.52</span></li>
                                        <li>Monounsaturated fatty acid (mg) <span>1.54</span></li>
                                        <li>Trans Fatty Acid (g) <span>0.04</span></li>
                                        <li>Cholesterol (g) <span>0.01</span></li>
                                        <li>Potassium (mg) <span>149.0</span></li>
                                        <li>Sodium (mg) <span>120.0</span></li>
                                    </ul>
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
