import React, { useEffect, useState } from "react";
import NutritionHeader from "../components/partials/Header/nutritionsheader";
import Footer from '../components/partials/Footer/footer';
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import { isUserLoggedIn } from '../utils/auth';
import LoginModal from "../components/popup/login";
import BookingModal from "../components/popup/BookingModal";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import VideoReview from "../components/video-review";
import WhyChooseUs from "../components/whyChooseUs";
import toast from "react-hot-toast";

const productsData = [
    { product_id: '68ac019606800a0384e9f883', name: "Whey Protein-1kg (35% - 40% Protein)", price: 1170, image: "/assets/images/product-images/whey-protein.webp", link: '/whey-protein', moq: "100 kg" },
    { product_id: '68a2c8e006800a0384e9cc6a', name: "Whey Blend-1kg (50% - 60% Protein)", price: 1300, image: "/assets/images/product-images/whey-blend.webp", link: '/whey-blend', moq: "100 kg" },
    { product_id: '68ad732d06800a0384ea019a', name: "Whey Concentrate-1kg (80% Protein)", price: 1630, image: "/assets/images/product-images/whey-concentrate.webp", link: '/whey-concentrate', moq: "100 kg" },
    { product_id: '68ad735906800a0384ea019e', name: "Whey Isolate-1kg (90% Protein)", price: 3000, image: "/assets/images/product-images/whey-isolate.webp", link: '/whey-isolate', moq: "100 kg" },
    { product_id: '68ad739506800a0384ea01a2', name: "Peanut Butter (500gm)", price: 150, image: "/assets/images/product-images/peanut-butter.webp", link: '/peanut-butter', moq: "100 kg (500gm)" },
    { product_id: '68ad737d06800a0384ea01a0', name: "Mass Gainer-1kg", price: 420, image: "/assets/images/product-images/mass-gainer.webp", link: '/mass-gainer', moq: "100 kg" },
    { product_id: '68ad73e006800a0384ea01ab', name: "Creatine - Flavoured (250gm)", price: 300, image: "/assets/images/product-images/creatine-flavored.webp", link: '/creatine-flavored', moq: "50 kg (250gm)" },
    { product_id: '68ad742506800a0384ea01b2', name: "Creatine - Unflavoured (250gm)", price: 270, image: "/assets/images/product-images/creatine.webp", link: '/creatine-unflavored', moq: "50 kg (250gm)" },
    { product_id: '68ad744106800a0384ea01b4', name: "Pre-Workout (250gm)", price: 440, image: "/assets/images/product-images/pre-workout.webp", link: '/pre-workout', moq: "50 kg (250gm)" },
    { product_id: '68ad746a06800a0384ea01b8', name: "EAA (250gm)", price: 490, image: "/assets/images/product-images/eaa.webp", link: '/eaa', moq: "50 kg (250gm)" },
    { product_id: '68ad748306800a0384ea01be', name: "BCAA (250gm)", price: 490, image: "/assets/images/product-images/bcaa.webp", link: '/bcaa', moq: "50 kg (250gm)" },
    { product_id: '68ad749906800a0384ea01c6', name: "Protein Bar (12gm protein)", price: 55, image: "/assets/images/product-images/protein-bar.webp", link: '/protein-bar', moq: "5000 pcs" },
    { product_id: '68ad74cc06800a0384ea01c8', name: "Energy Drink - Bottle (250ml)", price: 30, image: "/assets/images/product-images/energy-drink.webp", link: '/energy-drink', moq: "1000 pcs" },
    { product_id: '68ad74f006800a0384ea01cc', name: "Energy Drink - Can (250ml)", price: 45, image: "/assets/images/product-images/energy-drink-can.webp", link: '/energy-drink-can', moq: "24,000 pcs" },
    { product_id: '68ad750b06800a0384ea01dd', name: "Multivitamin Tablets (60tbs)", price: 170, image: "/assets/images/product-images/multivitamin.webp", link: '/multivitamin', moq: "60 tabs" },
    { product_id: '68ad752d06800a0384ea01e8', name: "Omega 3 (60tbs)", price: 225, image: "/assets/images/product-images/omega-3.webp", link: '/omega-3', moq: "60 tabs" }
];

const testimonialsData = [
    {
        rating: 5,
        name: "Ashish",
        authorImage: "/assets/images/testimonials-images/aashis.webp",
        content:
            "Refuel Whey Protein Blend, with 33 servings per container, is a nutritional powerhouse. It's a game-changer in the world of fitness supplements, offering a perfect balance of quality protein and essential nutrients."
    },
    {
        rating: 5,
        name: "Chirag Chandlekar",
        authorImage: "/assets/images/testimonials-images/chirag.webp",
        content:
            "I've been using Gomzi Nutrition Whey Protein for the past six months, and I couldn't be happier with the results. It has truly boosted my energy and helped me achieve my fitness goals faster."
    },
    {
        rating: 5,
        name: "Pragnesh Maisuria",
        authorImage: "/assets/images/testimonials-images/pragnesh.webp",
        content:
            "Whey Protein Isolate is praised for its high protein purity and minimal lactose and fat content, making it an ideal choice for lean muscle building and post-workout recovery among users."
    }
];

const getAssetPath = (path) => `${process.env.PUBLIC_URL}${path}`;

export default function Home() {
    const [showLoginModal, setShowLoginModal] = useState(false);
    const [showBookingModal, setShowBookingModal] = useState(false);


    const handleBookSample = (product) => {
        if (isUserLoggedIn()) {
            const existingProducts = JSON.parse(localStorage.getItem("ATC_Product")) || [];

            setShowBookingModal(true);
            if (existingProducts.length >= 9) {
                toast.error('Maximum 9 products can be added');
                return;
            }

            // Check if product already exists
            if (!existingProducts.some(p => p.product_id === product.product_id)) {
                const productToStore = {
                    product_id: product.product_id,
                    quantity: 1
                };

                localStorage.setItem("ATC_Product", JSON.stringify([...existingProducts, productToStore]));
            }

        } else {
            setShowLoginModal(true);
        }
    };

    useEffect(() => {

        new Swiper('.testimonial-slider .swiper', {
            modules: [Navigation, Pagination],
            slidesPerView: 1,
            spaceBetween: 30,
            loop: true,
            navigation: {
                nextEl: '.testimonial-button-next',
                prevEl: '.testimonial-button-prev',
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
        });
    }, []);

    useEffect(() => {
        const atcProducts = JSON.parse(localStorage.getItem('ATC_Product')) || [];
        console.log('atcProducts:', atcProducts);
    }, [showLoginModal]);

    return (
        <>
            {showLoginModal && <LoginModal onClose={() => setShowLoginModal(false)} />}
            {showBookingModal && <BookingModal onClose={() => setShowBookingModal(false)} />}
            <NutritionHeader />

            <div className="hero">
                <div className="hero-bg-video">

                    {/* <video autoPlay muted loop id="myVideo"><source src="assets/media/artistic-it-company-video.mp4" type="video/mp4" /></video> */}
                </div>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="hero-content">
                                <div className="section-title">
                                    <h3 className="wow fadeInUp">welcome to our Gomzi Nutrition website</h3>
                                    <h2 className="text-anime-style-2" data-cursor="-opaque">Your Nutrition Brand,<span> Our Premium Products</span> – Launch Today !</h2>
                                    <p className="wow fadeInUp" data-wow-delay="0.2s"> Peanut Butter, Protein Bars, Whey Protein & Energy Drinks – Fully White-Labeled for Your Brand .</p>
                                </div>

                                <div className="hero-content-body wow fadeInUp" data-wow-delay="0.4s">
                                    <div className="hero-btn">
                                        <button onClick={() => {
                                            if (isUserLoggedIn()) {
                                                setShowBookingModal(true);
                                            } else {
                                                setShowLoginModal(true);
                                            }
                                        }} className="btn-default">Start Your Brand Now</button>
                                    </div>

                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="hero-images">
                                <div className="hero-img-1">
                                    <figure className="image-anime">
                                        {/* <img src={getAssetPath('/assets/images/hero-img-1.jpg')} alt="First hero section visual" /> */}
                                        <img src={getAssetPath('/assets/images/product-images/mass-gainer.webp')} alt="First hero section visual" />
                                    </figure>
                                </div>

                                <div className="hero-img-2">
                                    <figure className="image-anime">
                                        {/* <img src={getAssetPath('/assets/images/chirag-pandey.webp')} alt="Second hero section visual" /> */}
                                        <img src={getAssetPath('/assets/images/product-images/whey-isolate.webp')} alt="Second hero section visual" />
                                    </figure>
                                </div>



                                <div className="hero-image-circle">
                                    <button className="btn p-0 border-0">
                                        <img src={getAssetPath('/assets/images/our-agency-circle.png')} alt="" />
                                    </button>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <div className="our-scrolling-ticker">
                <div className="scrolling-ticker-box">
                    <div className="scrolling-content">
                        <span><img src={getAssetPath('/assets/images/asterisk-icon.svg')} alt="" />Peanut Butter</span>
                        <span><img src={getAssetPath('/assets/images/asterisk-icon.svg')} alt="" />Energy Drink</span>
                        <span><img src={getAssetPath('/assets/images/asterisk-icon.svg')} alt="" />Protein Bar</span>
                        <span><img src={getAssetPath('/assets/images/asterisk-icon.svg')} alt="" />Whey Protein</span>
                        <span><img src={getAssetPath('/assets/images/asterisk-icon.svg')} alt="" />Whey Isolate</span>
                        <span><img src={getAssetPath('/assets/images/asterisk-icon.svg')} alt="" />Whey Blend</span>
                        <span><img src={getAssetPath('/assets/images/asterisk-icon.svg')} alt="" />Mass Gainer</span>
                        <span><img src={getAssetPath('/assets/images/asterisk-icon.svg')} alt="" />Creatine</span>
                        <span><img src={getAssetPath('/assets/images/asterisk-icon.svg')} alt="" />Ignite</span>

                    </div>

                    <div className="scrolling-content">
                        <span><img src={getAssetPath('/assets/images/asterisk-icon.svg')} alt="" />Peanut Butter</span>
                        <span><img src={getAssetPath('/assets/images/asterisk-icon.svg')} alt="" />Energy Drink</span>
                        <span><img src={getAssetPath('/assets/images/asterisk-icon.svg')} alt="" />Protein Bar</span>
                        <span><img src={getAssetPath('/assets/images/asterisk-icon.svg')} alt="" />Whey Protein</span>
                        <span><img src={getAssetPath('/assets/images/asterisk-icon.svg')} alt="" />Whey Isolate</span>
                        <span><img src={getAssetPath('/assets/images/asterisk-icon.svg')} alt="" />Whey Blend</span>
                        <span><img src={getAssetPath('/assets/images/asterisk-icon.svg')} alt="" />Mass Gainer</span>
                        <span><img src={getAssetPath('/assets/images/asterisk-icon.svg')} alt="" />Creatine</span>
                        <span><img src={getAssetPath('/assets/images/asterisk-icon.svg')} alt="" />Ignite</span>
                    </div>
                </div>
            </div>

            <div className="our-services">
                <div className="container">
                    <div className="row section-row">
                        <div className="col-lg-12">
                            <div className="section-title">
                                <h3 className="wow fadeInUp">Our Products</h3>
                                <h2 className="text-anime-style-2" data-cursor="-opaque">
                                    Discover <span>Premium Products</span> Crafted for You
                                </h2>
                            </div>

                        </div>
                    </div>

                    <div className="row justify-content-center">
                        {productsData.map((product, index) => (
                            <div className="col-lg-4 col-md-6" key={index} >
                                <div className="service-item wow fadeInUp" data-wow-delay={`${index * 0.01}s`}>
                                    <div className="service-image">
                                        <div className="image-wrapper img-fluid object-fit-cover">
                                            <figure className="image-anime">
                                                <img src={getAssetPath(product.image)}
                                                    alt={product.name} className="img-fluid object-fit-cover" />
                                            </figure>
                                        </div>
                                    </div>
                                    <div className="service-body">
                                        <div className="service-content-box">
                                            <div className="service-box-content ps-3">
                                                <h5 className="mb-2 mt-2">{product.name}</h5>
                                                <p>₹ {product.price}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="pricing-btn m-3">
                                        <button
                                            onClick={() => handleBookSample(product)}
                                            className="btn-highlighted m-0 border-0"
                                        >
                                            Book Sample
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="hero-content-body d-flex justify-content-center wow fadeInUp" data-wow-delay="0.1s">
                <div className="hero-btn">
                    <button onClick={() => {
                        if (isUserLoggedIn()) {
                            setShowBookingModal(true);
                        } else {
                            setShowLoginModal(true);
                        }
                    }} className="btn-default">Book Your Sample Now</button>
                </div>

            </div>
            <WhyChooseUs />

            <div className="our-testimonials">
                <div className="container">
                    <div className="row section-row align-items-center">
                        <div className="col-lg-6">
                            <div className="section-title">
                                <h3 className="wow fadeInUp">testimonials</h3>
                                <h2 className="text-anime-style-2" data-cursor="-opaque">What our <span>client</span> says</h2>
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="satisfy-client-box testimonial-client-box">
                                <div className="satisfy-client-content">
                                    <h3><span className="counter">1200</span>+</h3>
                                    <p>reviews</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-12">
                            <div className="testimonial-slider">
                                <div className="swiper">
                                    <div className="swiper-wrapper">
                                        {testimonialsData.map((testimonial, index) => (
                                            <div className="swiper-slide" key={index} >
                                                <div className="testimonial-item">
                                                    <div className="testimonial-header">
                                                        <div className="testimonial-rating">
                                                            {Array.from({ length: testimonial.rating }).map((_, i) => (
                                                                <i className="fa-solid fa-star" key={i}></i>
                                                            ))}
                                                        </div>
                                                        <div className="testimonial-content">
                                                            <p>“{testimonial.content}”</p>
                                                        </div>
                                                    </div>
                                                    <div className="testimonial-body">
                                                        <div className="author-image">
                                                            <figure className="image-anime">
                                                                <img
                                                                    src={getAssetPath(testimonial.authorImage)}
                                                                    alt={testimonial.name}
                                                                />
                                                            </figure>
                                                        </div>
                                                        <div className="author-content">
                                                            <h3>{testimonial.name}</h3>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Navigation Buttons */}
                                    <div className="testimonial-btn">
                                        <div className="testimonial-button-prev"></div>
                                        <div className="testimonial-button-next"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <VideoReview />

            {/* <div className="our-faqs">
                <div className="container">
                    <div className="row section-row">
                        <div className="col-lg-12">
                            <div className="section-title">
                                <h3 className="wow fadeInUp">FAQ</h3>
                                <h2 className="text-anime-style-2" data-cursor="-opaque">Frequently asked <span>questions</span></h2>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-6">
                            <div className="faq-accordion" id="faqaccordion">
                                <div className="accordion-item wow fadeInUp">
                                    <h2 className="accordion-header" id="heading1">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse1" aria-expanded="true" aria-controls="collapse1">
                                            1. Is protein only used for muscle development?
                                        </button>
                                    </h2>
                                    <div id="collapse1" className="accordion-collapse collapse" aria-labelledby="heading1" data-bs-parent="#faqaccordion">
                                        <div className="accordion-body">
                                            <p>A lot of people think that protein is only used for muscle growth and repair, however it can provide a lot of other benefits, such as refueling your stores of nutrients and amino acids which have been lost during exercise.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="accordion-item wow fadeInUp" data-wow-delay="0.2s">
                                    <h2 className="accordion-header" id="heading2">
                                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse2" aria-expanded="false" aria-controls="collapse2">
                                            2. What is whey protein?
                                        </button>
                                    </h2>
                                    <div id="collapse2" className="accordion-collapse collapse show" aria-labelledby="heading2" data-bs-parent="#faqaccordion">
                                        <div className="accordion-body">
                                            <p>Whey is a "complete" protein, meaning it contains all the essential amino acids that the human body requires for proper growth and function. Whey protein is also a rich source of the branched chain amino acids: Leucine, Isoleucine and L-valine.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="accordion-item wow fadeInUp" data-wow-delay="0.4s">
                                    <h2 className="accordion-header" id="heading3">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse3" aria-expanded="false" aria-controls="collapse3">
                                            3. Difference between whey protein isolate and whey protein concentrate?
                                        </button>
                                    </h2>
                                    <div id="collapse3" className="accordion-collapse collapse" aria-labelledby="heading3" data-bs-parent="#faqaccordion">
                                        <div className="accordion-body">
                                            <p>As a protein source, whey protein isolate is about 90-95% protein, compared to whey protein concentrate at 75-85% protein. Unlike concentrate, whey protein isolate contains almost no sugar, lactose or fat. Because it contains more protein, whey protein concentrate is the most economical option per gram of protein.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="accordion-item wow fadeInUp" data-wow-delay="0.6s">
                                    <h2 className="accordion-header" id="heading4">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse4" aria-expanded="false" aria-controls="collapse4">
                                            4. Can those who are lactose intolerant eat whey protein?
                                        </button>
                                    </h2>
                                    <div id="collapse4" className="accordion-collapse collapse" aria-labelledby="heading4" data-bs-parent="#faqaccordion">
                                        <div className="accordion-body">
                                            <p>Whey protein isolate is virtually free of lactose, but may contain trace amounts (0.5g per serving). Most people who are lactose intolerant are able to safely consume whey without any negative side effects however a medical practitioner should always be consulted before taking if there are any doubts.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="faq-accordion" id="faqaccordion1">
                                <div className="accordion-item wow fadeInUp">
                                    <h2 className="accordion-header" id="heading5">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse5" aria-expanded="true" aria-controls="collapse5">
                                            5. If whey protein concentrate is 80% protein, what is the other 20%?
                                        </button>
                                    </h2>
                                    <div id="collapse5" className="accordion-collapse collapse show" aria-labelledby="heading5" data-bs-parent="#faqaccordion1">
                                        <div className="accordion-body">
                                            <p>Every protein powder, whether it's whey, soy, casein, etc., has moisture. In fact, 5% of the total formula is water. Another 3-5% is made up of naturally occurring minerals in whey. The remaining 10-12% is a combination of carbs and fat.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="accordion-item wow fadeInUp" data-wow-delay="0.2s">
                                    <h2 className="accordion-header" id="heading6">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse6" aria-expanded="false" aria-controls="collapse6">
                                            6. Will A Higher Protein Diet Harm My Kidneys?
                                        </button>
                                    </h2>
                                    <div id="collapse6" className="accordion-collapse collapse" aria-labelledby="heading6" data-bs-parent="#faqaccordion1">
                                        <div className="accordion-body">
                                            <p>According to a study published in the "American Journal of Kidney Disease," Anyone who is currently suffering from chronic kidney disease should avoid high-protein diets. For otherwise healthy folk, your current protein intake should not pose a threat to your kidneys, make sure to keep your total daily protein consumption reasonable and consume sufficient water to counteract the water loss.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="accordion-item wow fadeInUp" data-wow-delay="0.4s">
                                    <h2 className="accordion-header" id="heading7">
                                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse7" aria-expanded="false" aria-controls="collapse7">
                                            7. Will More Protein Help Me Build Muscle Faster?
                                        </button>
                                    </h2>
                                    <div id="collapse7" className="accordion-collapse collapse " aria-labelledby="heading7" data-bs-parent="#faqaccordion1">
                                        <div className="accordion-body">
                                            <p>Yes, but only to some degree. Not all dietary protein you eat goes toward protein synthesis. Once you get beyond protein needed for muscle growth and repair, it can be broken down for energy. A protein intake beyond 30-40% of your daily calories probably won't provide additional muscle-building benefits, and it will cut into your fat and carbohydrate intake, which may actually hinder your goals.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="accordion-item wow fadeInUp" data-wow-delay="0.6s">
                                    <h2 className="accordion-header" id="heading8">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse8" aria-expanded="false" aria-controls="collapse8">
                                            8. Is It True The Body Can Only Use 30 Grams Of Protein At Once?
                                        </button>
                                    </h2>
                                    <div id="collapse8" className="accordion-collapse collapse" aria-labelledby="heading8" data-bs-parent="#faqaccordion1">
                                        <div className="accordion-body">
                                            <p>You're going to want all the protein you can eat but more isn't always better. Once you turn on protein synthesis and initiate the muscle-building process, you can't turn it on "more" in one meal. While 30 grams of protein may mean across multiple meals will actually help you boost protein synthesis many times over the course of a day. It will probably be easier on your digestive system as well.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}

            <Footer />

        </>
    );
}
