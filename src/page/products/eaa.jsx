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

export default function Eaa() {
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
                                    Essential Amino Acids (EAA)
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
                                            src={getAssetPath("/assets/images/product-images/inner-page-img/eaa-inner-page.webp")}
                                            alt="eaa"
                                        />
                                    </figure>
                                </div>

                                <div className="section-title m-4 mx-0 ">
                                    <h2 className="text-anime-style-2 m-0 fs-2 text-bold" data-cursor="-opaque">
                                        EAA
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
                                                    window.location.href = '/booking-page?product=eaa';
                                                } else {
                                                    setShowLoginModal(true);
                                                }
                                            }} className="btn-default">Add to cart</button>
                                        </div>
                                    </div>
                                </div>

                                <div className="service-entry">
                                    <p className="wow fadeInUp">
                                        This Essential Amino Acid (EAA) Blend from Gomzi Lifescience LLP is a scientifically formulated supplement designed to provide the complete profile of amino acids crucial for muscle protein synthesis, recovery, and overall performance. Unlike the body's non-essential amino acids, EAAs must be obtained through diet or supplementation, making this blend an essential choice for athletes, bodybuilders, and fitness enthusiasts.
                                    </p>

                                    <p className="wow fadeInUp" data-wow-delay="0.2s">
                                        Each 5 g serving provides only 6.12 kcal, with zero added sugar, zero fat, and zero cholesterol, making it a lean and clean source of performance nutrition. The formula delivers a precise 7.8 g EAA blend, including key branched-chain amino acids (L-Leucine 1.73 g, L-Isoleucine 0.86 g, L-Valine 0.86 g) that drive muscle growth and reduce fatigue. It also contains other vital amino acids such as L-Lysine (288.88 mg), L-Threonine (288.88 mg), L-Phenylalanine (150.22 mg), L-Histidine (115.55 mg), L-Tryptophan (86.66 mg), and DL-Methionine (52 mg), offering a balanced profile for optimal recovery, endurance, and immune support.
                                    </p>

                                    <p className="wow fadeInUp" data-wow-delay="0.4s">
                                        This supplement is ideal for intra-workout or post-workout use, as it helps reduce muscle breakdown, accelerates recovery, and enhances performance without unnecessary calories.
                                    </p>

                                    <p className="wow fadeInUp" data-wow-delay="0.6s">
                                        Available in 250 g and 500 g jars, with multiple delicious flavour options, it is convenient, refreshing, and enjoyable. With a 24-month shelf life and premium design & packaging, it guarantees long-lasting freshness and top-notch quality.
                                    </p>

                                    <p className="wow fadeInUp" data-wow-delay="0.8s">
                                        Whether your goal is building lean muscle, improving recovery, or boosting stamina, this Complete EAA Blend is your ultimate performance partner.
                                    </p>
                                </div>


                            </div>
                        </div>

                        <div className="col-lg-5">
                            <div className="service-sidebar">
                                <div className="service-catagery-list wow fadeInUp">
                                    <h3>Nutrients per 5g</h3>
                                    <ul>
                                        <li>Calories <span>6.12 Kcal</span></li>
                                        <li>Total Carbohydrate <span>0.20 g</span></li>
                                        <li>Total Sugar <span>0.0 g</span></li>
                                        <li>Added Sugar <span>0.0 g</span></li>
                                        <li>Protein <span>0.0 g</span></li>
                                        <li>Total Fat <span>0.0 g</span></li>
                                        <li>Essential Amino Acids (EAA Blend) <span>7.8 g</span></li>
                                        <li>L-Leucine <span>1.73 g</span></li>
                                        <li>L-Isoleucine <span>0.86 g</span></li>
                                        <li>L-Valine <span>0.86 g</span></li>
                                        <li>L-Lysine <span>288.88 mg</span></li>
                                        <li>L-Threonine <span>288.88 mg</span></li>
                                        <li>L-Phenylalanine <span>150.22 mg</span></li>
                                        <li>L-Histidine <span>115.55 mg</span></li>
                                        <li>L-Tryptophan <span>86.66 mg</span></li>
                                        <li>DL-Methionine <span>52 mg</span></li>
                                    </ul>

                                    {/* <h3>Ingredients</h3>
                                    <p>
                                        EAA Blend (Essential Amino Acid), Citric Acid - INS 330,
                                        Potassium Chloride - INS 508, Silicon Dioxide - INS 551,
                                        Sucralose - INS 955, Watermelon Flavour, Carmoisine Colour - INS 122
                                    </p> */}
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
