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

export default function Ashwagandha() {
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
                                    Ashwagandha
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
                                            src={getAssetPath("/assets/images/product-images/inner-page-img/ashwagandha-inner-page.webp")}
                                            alt="ashwagandha"
                                        />
                                    </figure>
                                </div>

                                <div className="section-title m-4 mx-0 ">
                                    <h2 className="text-anime-style-2 m-0 fs-2 text-bold" data-cursor="-opaque">
                                        Ashwagandha (60 Tablets)
                                    </h2>

                                    <h4 className="m-3 mx-0 mb-4" data-cursor="-opaque">Price : ₹ 50</h4>

                                    <div className="about-list-box mt-4">
                                        <div className="about-list wow fadeInUp" data-wow-delay="0.4s">
                                            <ul>
                                                <li>Manufacturer - <span>Gomzi Lifescience LLP</span></li>
                                                <li>Packaging Size - <span>60 tablets</span></li>
                                                <li>Packaging Type - <span>Bottle</span></li>
                                                <li>Composition - <span>As Per Requirement</span></li>
                                                <li>Form - <span>Tablets</span></li>
                                                <li>Shelf Life - <span>24 Months</span></li>
                                                <li>Design & Packaging - <span>Included</span></li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="hero-content-body wow fadeInUp" data-wow-delay="0.4s">
                                        <div className="hero-btn">
                                            <button onClick={() => {
                                                if (isUserLoggedIn()) {
                                                    window.location.href = '/booking-page?product=ashwagandha';
                                                } else {
                                                    setShowLoginModal(true);
                                                }
                                            }} className="btn-default">Add to cart</button>
                                        </div>
                                    </div>
                                </div>

                                <div className="service-entry">
                                    <p className="wow fadeInUp">
                                        The Ashwagandha Capsules by Gomzi Lifescience LLP bring the power of one of Ayurveda's most respected herbs in a convenient daily supplement. Each serving of 2 capsules provides 600 mg of pure organic Ashwagandha extract, standardized to deliver 30 mg of active Withanolides (5%), ensuring consistent potency and effectiveness.
                                    </p>

                                    <p className="wow fadeInUp" data-wow-delay="0.2s">
                                        Renowned as a natural adaptogen, Ashwagandha helps the body adapt to physical, emotional, and mental stress while promoting a sense of calm and balance. Regular supplementation supports stress management, improved energy levels, and enhanced resilience against daily challenges. In addition, Ashwagandha has been studied for its ability to boost immunity, improve sleep quality, support hormonal balance, and promote overall vitality.
                                    </p>

                                    <p className="wow fadeInUp" data-wow-delay="0.4s">
                                        This supplement is especially beneficial for those leading busy or high-pressure lifestyles, athletes seeking faster recovery, and individuals looking to improve mental clarity, focus, and endurance. The vegetarian-friendly tablets are easy to consume, and with no added sugars, fillers, or artificial ingredients, they provide a clean and natural wellness solution.
                                    </p>

                                    <p className="wow fadeInUp" data-wow-delay="0.6s">
                                        Manufactured with strict quality standards, each bottle contains 60 tablets with a 24-month shelf life, ensuring long-lasting freshness and reliability. Packaged securely in a convenient bottle format, it is designed for easy storage and daily use.
                                    </p>

                                    <p className="wow fadeInUp" data-wow-delay="0.8s">
                                        The Ashwagandha Capsules by Gomzi Lifescience LLP offer a safe and effective way to incorporate the ancient wisdom of Ayurveda into modern lifestyles — helping you achieve stress relief, balanced energy, and overall wellness naturally.
                                    </p>
                                </div>


                            </div>
                        </div>

                        <div className="col-lg-5">
                            <div className="service-sidebar">
                                <div className="service-catagery-list wow fadeInUp">
                                    <h3>Nutrients per 2 capsules</h3>
                                    <ul>
                                        <li>Organic Ashwagandha <span>600mg</span></li>
                                        <li>Withanolides (5%) <span>30mg</span></li>
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
