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

export default function Bcaa() {
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
                                    Branched Chain Amino Acids (BCAA)
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
                                            src={getAssetPath("/assets/images/product-images/inner-page-img/bcaa-inner-page.webp")}
                                            alt="bcaa"
                                        />
                                    </figure>
                                </div>

                                <div className="section-title m-4 mx-0 ">
                                    <h2 className="text-anime-style-2 m-0 fs-2 text-bold" data-cursor="-opaque">
                                        BCAA
                                    </h2>

                                    <h4 className="m-3 mx-0 mb-4" data-cursor="-opaque">Price : ₹ 490</h4>

                                    <div className="about-list-box mt-4">
                                        <div className="about-list wow fadeInUp" data-wow-delay="0.4s">
                                            <ul>
                                                <li>Manufacturer - <span>Gomzi Lifescience LLP</span></li>
                                                <li>Packaging Size - <span>250gm, 500gm</span></li>
                                                <li>Packaging Type - <span>Jar</span></li>
                                                <li>Composition - <span>As Per Requirement</span></li>
                                                <li>Form - <span>Powder</span></li>
                                                <li>Flavour - <span>Different Type Of Flavours Are Available</span></li>
                                                <li>Shelf Life - <span>24 Months</span></li>
                                                <li>Design & Packaging - <span>Included</span></li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="hero-content-body wow fadeInUp" data-wow-delay="0.4s">
                                        <div className="hero-btn">
                                            <button onClick={() => {
                                                if (isUserLoggedIn()) {
                                                    window.location.href = '/booking-page?product=bcaa';
                                                } else {
                                                    setShowLoginModal(true);
                                                }
                                            }} className="btn-default">Add to cart</button>
                                        </div>
                                    </div>
                                </div>

                                <div className="service-entry">
                                    <p className="wow fadeInUp">
                                        This Premium BCAA Supplement by Gomzi Lifescience LLP is formulated with the scientifically proven 2:1:1 ratio of the three most important branched-chain amino acids — L-Leucine, L-Isoleucine, and L-Valine. Designed for athletes, bodybuilders, and fitness enthusiasts, it supports muscle recovery, growth, and endurance, making it an essential addition to your workout regimen.
                                    </p>

                                    <p className="wow fadeInUp" data-wow-delay="0.2s">
                                        Each 5 g serving delivers just 6.12 kcal, with 0 g added sugar, 0 g fat, and minimal carbohydrates (0.20 g), ensuring a clean and efficient supplement to fuel your performance. The blend provides 3.25 mg of Leucine, 1.65 mg of Isoleucine, and 1.65 mg of Valine, the ideal ratio to stimulate muscle protein synthesis, reduce fatigue, and minimize muscle breakdown during intense training sessions.
                                    </p>

                                    <p className="wow fadeInUp" data-wow-delay="0.4s">
                                        Whether used intra-workout to sustain energy and hydration or post-workout to accelerate recovery, this BCAA powder is a versatile choice for fitness goals ranging from muscle building to fat loss. With its refreshing flavours, it not only fuels performance but also enhances hydration and workout enjoyment.
                                    </p>

                                    <p className="wow fadeInUp" data-wow-delay="0.6s">
                                        Available in 250 g and 500 g jars, with multiple flavour options, this supplement offers flexibility to meet every athlete's need. The product comes with a 24-month shelf life and is packaged with premium design & packaging, ensuring freshness and quality.
                                    </p>

                                    <p className="wow fadeInUp" data-wow-delay="0.8s">
                                        For those who want a clean, effective, and scientifically backed supplement, this 2:1:1 BCAA formula is the perfect solution to stay strong, recover faster, and train harder.
                                    </p>
                                </div>


                            </div>
                        </div>

                        <div className="col-lg-5">
                            <div className="service-sidebar">
                                <div className="service-catagery-list wow fadeInUp">
                                    <h3>Nutrients per 5g</h3>
                                    <ul>
                                        <li>Calories <span>6.12 kcal</span></li>
                                        <li>Total Carbohydrate <span>0.20 g</span></li>
                                        <li>Total Sugar <span>0.00 g</span></li>
                                        <li>Added Sugar <span>0.00 g</span></li>
                                        <li>Protein <span>0.09 g</span></li>
                                        <li>Total Fat <span>0.00 g</span></li>
                                        <li>L-Leucine <span>3.25 mg</span></li>
                                        <li>L-Isoleucine <span>1.65 mg</span></li>
                                        <li>L-Valine <span>1.65 mg</span></li>
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
