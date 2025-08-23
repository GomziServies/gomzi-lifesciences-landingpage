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

export default function PeanutButter() {
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
                                    Peanut Butter
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
                                            src={getAssetPath("/assets/images/product-images/inner-page-img/peanut-butter-inner-page.webp")}
                                            alt="peanut-butter"
                                        />
                                    </figure>
                                </div>

                                <div className="section-title m-4 mx-0 ">
                                    <h2 className="text-anime-style-2 m-0 fs-2 text-bold" data-cursor="-opaque">
                                        Peanut <span>Butter</span>
                                    </h2>

                                    <h4 className="m-3 mx-0 mb-4" data-cursor="-opaque">Price : ₹ 150</h4>

                                    <div className="about-list-box mt-4">
                                        <div className="about-list wow fadeInUp" data-wow-delay="0.4s">
                                            <ul>
                                                <li>Manufacturer - <span>Gomzi Lifescience LLP</span></li>
                                                <li>Packaging Size - <span>500g, 1kg</span></li>
                                                <li>Packaging Type - <span>Jar</span></li>
                                                <li>Composition - <span>As Per Requirement</span></li>
                                                <li>Form - <span>Creamy/Crunchy (Butter)</span></li>
                                                <li>Shelf Life - <span>12 Months</span></li>
                                                <li>Design & Packaging - <span>Included</span></li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="hero-content-body wow fadeInUp" data-wow-delay="0.4s">
                                        <div className="hero-btn">
                                            <button onClick={() => {
                                                if (isUserLoggedIn()) {
                                                    window.location.href = '/booking-page?product=peanut-butter';
                                                } else {
                                                    setShowLoginModal(true);
                                                }
                                            }} className="btn-default">Add to cart</button>
                                        </div>
                                    </div>
                                </div>

                                <div className="service-entry">
                                    <p className="wow fadeInUp">
                                        This Natural Peanut Butter from Gomzi Lifescience LLP is a wholesome and nutritious spread made from carefully selected high-quality peanuts. Rich in protein and healthy fats, it is designed to fuel active lifestyles and provide long-lasting energy while supporting overall health.
                                    </p>

                                    <p className="wow fadeInUp" data-wow-delay="0.2s">
                                        Each 32 g serving delivers approximately 166.4 kcal of energy, making it a nutrient-dense option for breakfast, snacks, or pre/post-workout meals. With 6.46 g of protein, it contributes to muscle repair and growth, while 13.18 g of healthy fats (including 3.23 g polyunsaturated and 4.77 g monounsaturated fatty acids) promote heart health and sustained energy release. The spread also contains 2.56 g of dietary fibre, supporting digestive health, and minimal 1.28 g of saturated fats with zero trans fats and cholesterol, making it a clean and safe choice.
                                    </p>

                                    <p className="wow fadeInUp" data-wow-delay="0.4s">
                                        With 6.56 g of carbohydrates and 3.2 g of total sugar (of which just 2.24 g is added sugar), this peanut butter provides a balanced macronutrient profile for both fitness enthusiasts and everyday consumers. Its low sodium content (4 mg) ensures it remains suitable for individuals monitoring their salt intake.
                                    </p>

                                    <p className="wow fadeInUp" data-wow-delay="0.6s">
                                        Available in both creamy and crunchy textures, and packed in hygienic 500 g and 1 kg jars, this product offers convenience, freshness, and versatility. With a 12-month shelf life, it can be enjoyed over time without compromising quality.
                                    </p>

                                    <p className="wow fadeInUp" data-wow-delay="0.8s">
                                        Whether spread on toast, blended into smoothies, or eaten straight from the jar, this Natural Peanut Butter is a delicious, protein-rich superfood for a healthy and active lifestyle.
                                    </p>
                                </div>


                            </div>
                        </div>

                        <div className="col-lg-5">
                            <div className="service-sidebar">
                                <div className="service-catagery-list wow fadeInUp">
                                    <h3>Nutrients per 32g</h3>
                                    <ul>
                                        <li>Energy (kcal) <span>166.4</span></li>
                                        <li>Total Protein (g) <span>6.46</span></li>
                                        <li>Carbohydrates (g) <span>6.56</span></li>
                                        <li>Dietary Fiber (g) <span>2.56</span></li>
                                        <li>Total Sugar (g) <span>3.2</span></li>
                                        <li>Added Sugar (g) <span>2.24</span></li>
                                        <li>Total Fats (g) <span>13.18</span></li>
                                        <li>Saturated Fats (g) <span>1.28</span></li>
                                        <li>Poly Unsaturated Fats (g) <span>3.23</span></li>
                                        <li>Mono Unsaturated Fats (g) <span>4.77</span></li>
                                        <li>Trans Fats (g) <span>0.0</span></li>
                                        <li>Cholesterol (mg) <span>0.0</span></li>
                                        <li>Sodium (mg) <span>4</span></li>
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
