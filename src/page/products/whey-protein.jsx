import React, { useEffect, useState } from "react";
import NutritionHeader from "../../components/partials/Header/nutritionsheader";
import LoginModal from "../../components/popup/login";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function WheyProtein() {
    const [showLoginModal, setShowLoginModal] = useState(false);

    const getAssetPath = (path) => `${process.env.PUBLIC_URL}${path}`;

    return (
        <>
            { showLoginModal && (
                <LoginModal onClose={ () => setShowLoginModal(false) } />
            ) }
            <NutritionHeader />
            <div className="page-header parallaxie">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-12">
                            <div className="page-header-box">
                                <h1 className="text-anime-style-2" data-cursor="-opaque">
                                    Software Development
                                </h1>
                                <nav className="wow fadeInUp">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item">
                                            <a href="./">home</a>
                                        </li>
                                        <li className="breadcrumb-item">
                                            <a href="services.html">services</a>
                                        </li>
                                        <li className="breadcrumb-item active" aria-current="page">
                                            software development
                                        </li>
                                    </ol>
                                </nav>
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
                                src={ getAssetPath("/assets/images/asterisk-icon.svg") }
                                alt=""
                            />
                            Peanut Butter
                        </span>
                        <span>
                            <img
                                src={ getAssetPath("/assets/images/asterisk-icon.svg") }
                                alt=""
                            />
                            Energy Drink
                        </span>
                        <span>
                            <img
                                src={ getAssetPath("/assets/images/asterisk-icon.svg") }
                                alt=""
                            />
                            Protein Bar
                        </span>
                        <span>
                            <img
                                src={ getAssetPath("/assets/images/asterisk-icon.svg") }
                                alt=""
                            />
                            Whey Protein
                        </span>
                        <span>
                            <img
                                src={ getAssetPath("/assets/images/asterisk-icon.svg") }
                                alt=""
                            />
                            Mass Gainer
                        </span>
                        <span>
                            <img
                                src={ getAssetPath("/assets/images/asterisk-icon.svg") }
                                alt=""
                            />
                            Creatine
                        </span>
                        <span>
                            <img
                                src={ getAssetPath("/assets/images/asterisk-icon.svg") }
                                alt=""
                            />
                            Ignite
                        </span>
                    </div>

                    <div className="scrolling-content">
                        <span>
                            <img
                                src={ getAssetPath("/assets/images/asterisk-icon.svg") }
                                alt=""
                            />
                            Peanut Butter
                        </span>
                        <span>
                            <img
                                src={ getAssetPath("/assets/images/asterisk-icon.svg") }
                                alt=""
                            />
                            Energy Drink
                        </span>
                        <span>
                            <img
                                src={ getAssetPath("/assets/images/asterisk-icon.svg") }
                                alt=""
                            />
                            Protein Bar
                        </span>
                        <span>
                            <img
                                src={ getAssetPath("/assets/images/asterisk-icon.svg") }
                                alt=""
                            />
                            Whey Protein
                        </span>
                        <span>
                            <img
                                src={ getAssetPath("/assets/images/asterisk-icon.svg") }
                                alt=""
                            />
                            Mass Gainer
                        </span>
                        <span>
                            <img
                                src={ getAssetPath("/assets/images/asterisk-icon.svg") }
                                alt=""
                            />
                            Creatine
                        </span>
                        <span>
                            <img
                                src={ getAssetPath("/assets/images/asterisk-icon.svg") }
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
                                            src={ getAssetPath("/assets/images/service-6.jpg") }
                                            alt=""
                                        />
                                    </figure>
                                </div>

                                <div className="service-entry">
                                    <p className="wow fadeInUp">
                                        Our software development are designed to elevate your brand
                                        and reach your target audience effectively. We develop
                                        customized strategies that include SEO, PPC advertising,
                                        social media marketing, content marketing, and email
                                        campaigns. By leveraging data-driven insights and the latest
                                        trends, we maximize engagement, drive traffic, and boost
                                        conversions, ensuring a measurable return on your
                                        investment. Let us help you grow your digital presence and
                                        achieve your business goals.
                                    </p>

                                    <p className="wow fadeInUp" data-wow-delay="0.2s">
                                        With a focus on data-driven insights, we build customized
                                        strategies that drive traffic, boost engagement, and
                                        maximize ROI. Let us help you reach your business goals with
                                        impactful digital marketing
                                    </p>
                                </div>

                                <div className="our-faq-section">
                                    <div className="section-title">
                                        <h2 className="text-anime-style-2" data-cursor="-opaque">
                                            Lets address your <span>questions</span> today!
                                        </h2>
                                    </div>

                                    <div className="faq-accordion" id="faqaccordion">
                                        <div className="accordion-item wow fadeInUp">
                                            <h2 className="accordion-header" id="heading1">
                                                <button
                                                    className="accordion-button collapsed"
                                                    type="button"
                                                    data-bs-toggle="collapse"
                                                    data-bs-target="#collapse1"
                                                    aria-expanded="true"
                                                    aria-controls="collapse1"
                                                >
                                                    What services do you offer?
                                                </button>
                                            </h2>
                                            <div
                                                id="collapse1"
                                                className="accordion-collapse collapse"
                                                aria-labelledby="heading1"
                                                data-bs-parent="#faqaccordion"
                                            >
                                                <div className="accordion-body">
                                                    <p>
                                                        We work across industries including healthcare
                                                        education, manufacturing and more, offering
                                                        customized solutions for each sector.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                        <div
                                            className="accordion-item wow fadeInUp"
                                            data-wow-delay="0.2s"
                                        >
                                            <h2 className="accordion-header" id="heading2">
                                                <button
                                                    className="accordion-button "
                                                    type="button"
                                                    data-bs-toggle="collapse"
                                                    data-bs-target="#collapse2"
                                                    aria-expanded="false"
                                                    aria-controls="collapse2"
                                                >
                                                    What industries do you serve?
                                                </button>
                                            </h2>
                                            <div
                                                id="collapse2"
                                                className="accordion-collapse collapse show"
                                                aria-labelledby="heading2"
                                                data-bs-parent="#faqaccordion"
                                            >
                                                <div className="accordion-body">
                                                    <p>
                                                        We work across industries including healthcare
                                                        education, manufacturing and more, offering
                                                        customized solutions for each sector.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                        <div
                                            className="accordion-item wow fadeInUp"
                                            data-wow-delay="0.4s"
                                        >
                                            <h2 className="accordion-header" id="heading3">
                                                <button
                                                    className="accordion-button collapsed"
                                                    type="button"
                                                    data-bs-toggle="collapse"
                                                    data-bs-target="#collapse3"
                                                    aria-expanded="false"
                                                    aria-controls="collapse3"
                                                >
                                                    What is your pricing structure?
                                                </button>
                                            </h2>
                                            <div
                                                id="collapse3"
                                                className="accordion-collapse collapse"
                                                aria-labelledby="heading3"
                                                data-bs-parent="#faqaccordion"
                                            >
                                                <div className="accordion-body">
                                                    <p>
                                                        We work across industries including healthcare
                                                        education, manufacturing and more, offering
                                                        customized solutions for each sector.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                        <div
                                            className="accordion-item wow fadeInUp"
                                            data-wow-delay="0.6s"
                                        >
                                            <h2 className="accordion-header" id="heading4">
                                                <button
                                                    className="accordion-button collapsed"
                                                    type="button"
                                                    data-bs-toggle="collapse"
                                                    data-bs-target="#collapse4"
                                                    aria-expanded="false"
                                                    aria-controls="collapse4"
                                                >
                                                    What technologies do you use?
                                                </button>
                                            </h2>
                                            <div
                                                id="collapse4"
                                                className="accordion-collapse collapse"
                                                aria-labelledby="heading4"
                                                data-bs-parent="#faqaccordion"
                                            >
                                                <div className="accordion-body">
                                                    <p>
                                                        We work across industries including healthcare
                                                        education, manufacturing and more, offering
                                                        customized solutions for each sector.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                        <div
                                            className="accordion-item wow fadeInUp"
                                            data-wow-delay="0.8s"
                                        >
                                            <h2 className="accordion-header" id="heading5">
                                                <button
                                                    className="accordion-button collapsed"
                                                    type="button"
                                                    data-bs-toggle="collapse"
                                                    data-bs-target="#collapse5"
                                                    aria-expanded="false"
                                                    aria-controls="collapse5"
                                                >
                                                    How long does a project take?
                                                </button>
                                            </h2>
                                            <div
                                                id="collapse5"
                                                className="accordion-collapse collapse"
                                                aria-labelledby="heading5"
                                                data-bs-parent="#faqaccordion"
                                            >
                                                <div className="accordion-body">
                                                    <p>
                                                        We work across industries including healthcare
                                                        education, manufacturing and more, offering
                                                        customized solutions for each sector.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-5">
                            <div className="service-sidebar">
                                <div className="service-catagery-list wow fadeInUp">
                                    <h3>services category</h3>
                                    <ul>
                                        <li>
                                            branding and identity
                                            <span>385g</span>
                                        </li>
                                        <li>
                                            branding and identity
                                            <span>385g</span>
                                        </li>
                                        <li>
                                            branding and identity
                                            <span>385g</span>
                                        </li>
                                        <li>
                                            branding and identity
                                            <span>385g</span>
                                        </li>
                                        <li>
                                            branding and identity
                                            <span>385g</span>
                                        </li>
                                        <li>
                                            branding and identity
                                            <span>385g</span>
                                        </li>
                                        <li>
                                            branding and identity
                                            <span>385g</span>
                                        </li>
                                        <li>
                                            branding and identity
                                            <span>385g</span>
                                        </li>
                                        <li>
                                            branding and identity
                                            <span>385g</span>
                                        </li>
                                        <li>
                                            branding and identity
                                            <span>385g</span>
                                        </li>
                                        <li>
                                            branding and identity
                                            <span>385g</span>
                                        </li>
                                        <li>
                                            branding and identity
                                            <span>385g</span>
                                        </li>
                                        <li>
                                            branding and identity
                                            <span>385g</span>
                                        </li>
                                        <li>
                                            branding and identity
                                            <span>385g</span>
                                        </li>
                                        <li>
                                            branding and identity
                                            <span>385g</span>
                                        </li>
                                    </ul>
                                </div>

                                <div
                                    className="sidebar-cta-box wow fadeInUp"
                                    data-wow-delay="0.25s"
                                >
                                    <div className="icon-box">
                                        <img src={ getAssetPath('/assets/images/icon-sidebar-cta.svg') } alt="" />
                                    </div>

                                    <div className="cta-contact-content">
                                        <h3>You have different questions?</h3>
                                        <p>
                                            Our team will answer all your questions. we ensure a quick
                                            response.
                                        </p>
                                    </div>

                                    <div className="cta-contact-btn">
                                        <a href="tel:123456789">
                                            <img src={ getAssetPath('/assets/images/icon-sidebar-cta-phone.svg') } alt="" />{ " " }
                                            +123 456 789
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* <HomeNutritionFooter /> */ }
        </>
    );
}
