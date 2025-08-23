import React, { useEffect, useState } from "react";
import NutritionHeader from "../../components/partials/Header/nutritionsheader";
import LoginModal from "../../components/popup/login";
import { isUserLoggedIn } from "../../utils/auth";
import WhatsappBtn from "../../components/whatsapp-btn";
import { useRef } from "react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Footer from "../../components/partials/Footer/footer";

export default function WheyProtein() {
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
                                    Whey Protein
                                </h1>
                                {/* <nav className="wow fadeInUp">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item">
                                            <a href="./">home</a>
                                        </li>
                                        <li className="breadcrumb-item">
                                            <a href="services.html">product</a>
                                        </li>
                                        <li className="breadcrumb-item active" aria-current="page">
                                            whey protein
                                        </li>
                                    </ol>
                                </nav> */}
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
                                            src={getAssetPath("/assets/images/product-images/inner-page-img/whey-protein-inner-page.webp")}
                                            alt="whey-protein"
                                        />
                                    </figure>
                                </div>

                                <div className="section-title m-4 mx-0 ">

                                    <h2 className="text-anime-style-2 m-0 fs-2 text-bold" data-cursor="-opaque">
                                        Whey <span>Protein</span>
                                    </h2>

                                    <h4 className="m-3 mx-0 mb-4" data-cursor="-opaque">Price : ₹ 1170</h4>

                                    <div className="about-list-box mt-4">

                                        <div className="about-list wow fadeInUp" data-wow-delay="0.4s">
                                            <ul>
                                                <li>Manufacturer - <span>Gomzi Lifescience LLP</span></li>
                                                <li>Packaging Size - <span>Customized (500 Gm, 1 Kg, 2 Kg)</span></li>
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
                                                    window.location.href = '/booking-page?product=whey-protein';
                                                } else {
                                                    setShowLoginModal(true);
                                                }
                                            }} className="btn-default">Add to cart</button>
                                        </div>

                                    </div>
                                </div>

                                <div className="service-entry">

                                    <p className="wow fadeInUp">
                                        This premium health supplement from Gomzi Lifescience LLP is a scientifically formulated protein-rich powder designed to support fitness, muscle growth, and overall well-being. Each 35 g serving provides approximately 139.97 kcal of energy, making it an ideal option for individuals looking for balanced nutrition without excess calories. With a powerful 18 g of protein per serving, it helps in faster muscle recovery, improved strength, and lean muscle development.
                                    </p>
                                    <p className="wow fadeInUp" data-wow-delay="0.2s">
                                        The supplement is crafted with 11.3 g of carbohydrates and absolutely 0 g added sugar, ensuring sustained energy release while being safe for those monitoring sugar intake. Enriched with 2.8 g of dietary fibre, it also promotes better digestion and gut health. The fat profile is kept minimal at 2.53 g, with a healthy balance of saturated, polyunsaturated, and monounsaturated fatty acids. Cholesterol and trans fats are negligible, making it a heart-friendly choice. Additionally, essential electrolytes like Potassium (158.8 mg) and Sodium (138 mg) help maintain hydration and support active lifestyles.
                                    </p>

                                    <p className="wow fadeInUp" data-wow-delay="0.4s">
                                        Available in customized packaging sizes (500 g, 1 kg, and 2 kg) with attractive jar packaging, this powder comes in a variety of delicious flavours to suit different preferences. With a shelf life of 18 months, it ensures both freshness and convenience. Designed with flexible composition as per requirement, it is a versatile health product suitable for fitness enthusiasts, athletes, and individuals aiming for a healthier lifestyle.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-5">
                            <div className="service-sidebar">

                                <div className="service-catagery-list wow fadeInUp">
                                    <h3>Nutrients per 35g</h3>
                                    <ul>
                                        <li>Energy (kcal) <span>139.97</span></li>
                                        <li>Total Protein (g) <span>18</span></li>
                                        <li>Carbohydrates (g) <span>11.3</span></li>
                                        <li>Added Sugar (g) <span>0</span></li>
                                        <li>Dietary Fibre (g) <span>2.8</span></li>
                                        <li>Total Fat (g) <span>2.53</span></li>
                                        <li>Saturated fatty acid (mg) <span>1.7</span></li>
                                        <li>Polyunsaturated fatty acid (g) <span>0.83</span></li>
                                        <li>Monounsaturated fatty acid (mg) <span>1.66</span></li>
                                        <li>Trans Fatty Acid (g) <span>0.04</span></li>
                                        <li>Cholesterol (g) <span>0.03</span></li>
                                        <li>Potassium (mg) <span>158.8</span></li>
                                        <li>Sodium (mg) <span>138.0</span></li>
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
