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
import toast, { Toaster } from "react-hot-toast";

const productsData = [

    {
        product_id: "68a2c8e006800a0384e9cc6a",
        name: "Whey Blend-1kg",
        flavoured: ["Mawa Kulfi", "Chocolate", "Mango", "Mocha Coffee"],
        protein: ["35%", "40%", "50%", "60%"],
        priceMatrix: {
            "35%": { "Mawa Kulfi": 930, "Chocolate": 1100, "Mocha Coffee": 1210, "Mango": 930 },
            "40%": { "Mawa Kulfi": 1170, "Chocolate": 1250, "Mocha Coffee": 1360, "Mango": 1170 },
            "50%": { "Mawa Kulfi": 1665, "Chocolate": 1745, "Mocha Coffee": 1855, "Mango": 1665 },
            "60%": { "Mawa Kulfi": 2115, "Chocolate": 2195, "Mocha Coffee": 2305, "Mango": 2115 },
        },
        price: 1300,
        image: "/assets/images/product-images/whey-blend.webp",
        link: "/whey-blend",
        moq: "100 kg"
    },
    {
        product_id: "68ad732d06800a0384ea019a",
        name: "Whey Concentrate-1kg",
        flavoured: ["Mawa Kulfi", "Chocolate", "Mocha Coffee", "Mango"],
        protein: ["35%", "50%", "60%", "70%", "80%"],
        priceMatrix: {
            "35%": { "Mawa Kulfi": 1295, "Chocolate": 1360, "Mocha Coffee": 1465, "Mango": 1295 },
            "50%": { "Mawa Kulfi": 1565, "Chocolate": 1625, "Mocha Coffee": 1730, "Mango": 1565 },
            "60%": { "Mawa Kulfi": 1742, "Chocolate": 1805, "Mocha Coffee": 1911, "Mango": 1742 },
            "70%": { "Mawa Kulfi": 1920, "Chocolate": 1985, "Mocha Coffee": 2090, "Mango": 1920 },
            "80%": { "Mawa Kulfi": 2100, "Chocolate": 2165, "Mocha Coffee": 2270, "Mango": 2100 }
        },
        price: 1295,
        image: "/assets/images/product-images/whey-concentrate.webp",
        link: "/whey-concentrate",
        moq: "100 kg"
    },
    {
        product_id: "68ad735906800a0384ea019e",
        name: "Whey Isolate-1kg",
        flavoured: ["Mawa Kulfi", "Chocolate", "Mocha Coffee", "Mango"],
        protein: ["35%", "40%", "50%", "60%", "70%", "80%"],
        priceMatrix: {
            "35%": { "Mawa Kulfi": 1900, "Chocolate": 1963, "Mocha Coffee": 2068, "Mango": 1900 },
            "40%": { "Mawa Kulfi": 2076, "Chocolate": 2140, "Mocha Coffee": 2245, "Mango": 2076 },
            "50%": { "Mawa Kulfi": 2429, "Chocolate": 2492, "Mocha Coffee": 2598, "Mango": 2429 },
            "60%": { "Mawa Kulfi": 2782, "Chocolate": 2845, "Mocha Coffee": 2950, "Mango": 2782 },
            "70%": { "Mawa Kulfi": 3135, "Chocolate": 3198, "Mocha Coffee": 3303, "Mango": 3135 },
            "80%": { "Mawa Kulfi": 3487, "Chocolate": 3551, "Mocha Coffee": 3656, "Mango": 3487 }
        },
        price: 1900,
        image: "/assets/images/product-images/whey-isolate.webp",
        link: "/whey-isolate",
        moq: "100 kg"
    },
    // {
    //     product_id: "68ac019606800a0384e9f883",
    //     name: "Whey Protein-1kg (35% - 40% Protein)",
    //     price: 1170,
    //     image: "/assets/images/product-images/whey-protein.webp",
    //     link: "/whey-protein",
    //     moq: "100 kg"
    // },
    {
        product_id: "68ad737d06800a0384ea01a0",
        name: "Mass Gainer-1kg",
        price: 420,
        image: "/assets/images/product-images/mass-gainer.webp",
        link: "/mass-gainer",
        moq: "100 kg"
    },
    {
        product_id: "68ad739506800a0384ea01a2",
        name: "Peanut Butter (500gm)",
        price: 150,
        image: "/assets/images/product-images/peanut-butter.webp",
        link: "/peanut-butter",
        moq: "100 kg (500gm)"
    },
    {
        product_id: "68ad73e006800a0384ea01ab",
        name: "Creatine - Flavoured (250gm)",
        price: 300,
        image: "/assets/images/product-images/creatine-flavored.webp",
        link: "/creatine-flavored",
        moq: "50 kg (250gm)"
    },
    {
        product_id: "68ad742506800a0384ea01b2",
        name: "Creatine - Unflavoured (250gm)",
        price: 270,
        image: "/assets/images/product-images/creatine.webp",
        link: "/creatine-unflavored",
        moq: "50 kg (250gm)"
    },
    {
        product_id: "68ad744106800a0384ea01b4",
        name: "Pre-Workout (250gm)",
        price: 440,
        image: "/assets/images/product-images/pre-workout.webp",
        link: "/pre-workout",
        moq: "50 kg (250gm)"
    },
    {
        product_id: "68ad746a06800a0384ea01b8",
        name: "EAA (250gm)",
        price: 490,
        image: "/assets/images/product-images/eaa.webp",
        link: "/eaa",
        moq: "50 kg (250gm)"
    },
    {
        product_id: "68ad748306800a0384ea01be",
        name: "BCAA (250gm)",
        price: 490,
        image: "/assets/images/product-images/bcaa.webp",
        link: "/bcaa",
        moq: "50 kg (250gm)"
    },
    {
        product_id: "68ad749906800a0384ea01c6",
        name: "Protein Bar (12gm protein)",
        price: 55,
        image: "/assets/images/product-images/protein-bar.webp",
        link: "/protein-bar",
        moq: "5000 pcs"
    },
    {
        product_id: "68ad74cc06800a0384ea01c8",
        name: "Energy Drink - Bottle (250ml)",
        price: 30,
        image: "/assets/images/product-images/energy-drink.webp",
        link: "/energy-drink",
        moq: "1000 pcs"
    },
    {
        product_id: "68ad74f006800a0384ea01cc",
        name: "Energy Drink - Can (250ml)",
        price: 45,
        image: "/assets/images/product-images/energy-drink-can.webp",
        link: "/energy-drink-can",
        moq: "24000 pcs"
    },
    {
        product_id: "68ad750b06800a0384ea01dd",
        name: "Multivitamin Tablets (60tbs)",
        price: 170,
        image: "/assets/images/product-images/multivitamin.webp",
        link: "/multivitamin",
        moq: "30000 nos"
    },
    {
        product_id: "68ad752d06800a0384ea01e8",
        name: "Omega 3 (60tbs)",
        price: 225,
        image: "/assets/images/product-images/omega-3.webp",
        link: "/omega-3",
        moq: "30000 nos"
    }
];
const Whey_Concentrate = {
    "Chocolate": [
        { percent: "35%", product_id: "68aef32e06800a0384ea3faf" },
        { percent: "50%", product_id: "68aef3a806800a0384ea4080" },
        { percent: "60%", product_id: "68aef4a706800a0384ea4095" },
        { percent: "70%", product_id: "68aef5b806800a0384ea40a9" },
        { percent: "80%", product_id: "68aef66406800a0384ea40cd" }
    ],
    "Mawa Kulfi": [
        { percent: "35%", product_id: "68aef29506800a0384ea3e42" },
        { percent: "50%", product_id: "68aef36c06800a0384ea4075" },
        { percent: "60%", product_id: "68aef47006800a0384ea4090" },
        { percent: "70%", product_id: "68aef58c06800a0384ea40a5" },
        { percent: "80%", product_id: "68aef63606800a0384ea40c9" }
    ],
    "Mocha Coffee": [
        { percent: "35%", product_id: "68aef30106800a0384ea3f35" },
        { percent: "50%", product_id: "68aef39406800a0384ea407e" },
        { percent: "60%", product_id: "68aef48906800a0384ea4092" },
        { percent: "70%", product_id: "68aef5a906800a0384ea40a7" },
        { percent: "80%", product_id: "68aef65006800a0384ea40cb" }
    ],
    "Mango": [
        { percent: "35%", product_id: "68b029fe06800a0384ea45e4" },
        { percent: "50%", product_id: "68b02a2606800a0384ea45ea" },
        { percent: "60%", product_id: "68b02a5806800a0384ea45f6" },
        { percent: "70%", product_id: "68b02a6806800a0384ea45f8" },
        { percent: "80%", product_id: "68b02a7c06800a0384ea45fa" }
    ]
};
const Whey_Isolate = {
    "Chocolate": [
        { percent: "35%", product_id: "68aef71b06800a0384ea40e5" },
        { percent: "40%", product_id: "68aef76906800a0384ea40eb" },
        { percent: "50%", product_id: "68aef80406800a0384ea4112" },
        { percent: "60%", product_id: "68aef88306800a0384ea4124" },
        { percent: "70%", product_id: "68aef8d606800a0384ea412a" },
        { percent: "80%", product_id: "68aef96e06800a0384ea4153" }
    ],
    "Mawa Kulfi": [
        { percent: "35%", product_id: "68aef70c06800a0384ea40e3" },
        { percent: "40%", product_id: "68aef75306800a0384ea40e9" },
        { percent: "50%", product_id: "68aef7ea06800a0384ea4110" },
        { percent: "60%", product_id: "68aef86c06800a0384ea4122" },
        { percent: "70%", product_id: "68aef8c206800a0384ea4128" },
        { percent: "80%", product_id: "68aef95306800a0384ea4151" }
    ],
    "Mocha Coffee": [
        { percent: "35%", product_id: "68aef72d06800a0384ea40e7" },
        { percent: "40%", product_id: "68aef77b06800a0384ea40ed" },
        { percent: "50%", product_id: "68aef81106800a0384ea4114" },
        { percent: "60%", product_id: "68aef89b06800a0384ea4126" },
        { percent: "70%", product_id: "68aef8e806800a0384ea412c" },
        { percent: "80%", product_id: "68aef98106800a0384ea4155" }
    ],
    "Mango": [
        { percent: "35%", product_id: "68b02a9d06800a0384ea4605" },
        { percent: "40%", product_id: "68b02ab106800a0384ea460b" },
        { percent: "50%", product_id: "68b02ad606800a0384ea460f" },
        { percent: "60%", product_id: "68b02b4006800a0384ea4602" },
        { percent: "70%", product_id: "68b02aee06800a0384ea4613" },
        { percent: "80%", product_id: "68b02b1e06800a0384ea4619" }
    ]
};

const Whey_Blend = {
    "Chocolate": [
        { percent: "35%", product_id: "68b03cd406800a0384ea478c" },
        { percent: "40%", product_id: "68b03cf206800a0384ea478e" },
        { percent: "50%", product_id: "68b03d2606800a0384ea479b" },
        { percent: "60%", product_id: "68b03d4206800a0384ea479d" },
    ],
    "Mawa Kulfi": [
        { percent: "35%", product_id: "68b03b9406800a0384ea476f" },
        { percent: "40%", product_id: "68b03baf06800a0384ea4771" },
        { percent: "50%", product_id: "68b03bbd06800a0384ea4773" },
        { percent: "60%", product_id: "68b03bcd06800a0384ea4775" },
    ],
    "Mocha Coffee": [
        { percent: "35%", product_id: "68b03ddd06800a0384ea47e5" },
        { percent: "40%", product_id: "68b03deb06800a0384ea47e7" },
        { percent: "50%", product_id: "68b03df506800a0384ea47e9" },
        { percent: "60%", product_id: "68b03e0206800a0384ea47eb" },
    ],
    "Mango": [
        { percent: "35%", product_id: "68b03a6306800a0384ea4750" },
        { percent: "40%", product_id: "68b03ab206800a0384ea4752" },
        { percent: "50%", product_id: "68b03b0706800a0384ea4754" },
        { percent: "60%", product_id: "68b03b1306800a0384ea4756" },
    ]
};


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
    const [productSelections, setProductSelections] = useState({});

    const updateProductSelection = (productId, type, value) => {
        setProductSelections(prev => ({
            ...prev,
            [productId]: {
                ...prev[productId],
                [type]: value
            }
        }));
    };


    const handleBookSample = (product) => {
        if (isUserLoggedIn()) {
            const existingProducts = JSON.parse(localStorage.getItem("ATC_Product")) || [];

            if (existingProducts.length >= 9) {
                toast.error('Maximum 9 products can be added');
                return;
            }

            const selections = productSelections[product.product_id] || {};
            let finalProductId = product.product_id;
            let canAdd = true;

            // If it's a Whey product that requires selections
            if ((product.name.includes("Whey Concentrate") || product.name.includes("Whey Isolate") || product.name.includes("Whey Blend"))) {
                if (!selections.protein || !selections.flavor) {
                    toast.error('Please select both protein percentage and flavor');
                    canAdd = false;
                } else {
                    let productType;
                    if (product.name.includes("Whey Concentrate")) {
                        productType = Whey_Concentrate;
                    } else if (product.name.includes("Whey Isolate")) {
                        productType = Whey_Isolate;
                    } else if (product.name.includes("Whey Blend")) {
                        productType = Whey_Blend;
                    }
                    const variantList = productType[selections.flavor];
                    const variant = variantList.find(v => v.percent === selections.protein);
                    if (variant) {
                        finalProductId = variant.product_id;
                    }
                }
            }

            // Check if this specific variant already exists
            if (existingProducts.some(p => p.product_id === finalProductId)) {
                toast.error('This product variant is already in your cart');
                canAdd = false;
            }

            if (canAdd) {
                const productToStore = {
                    product_id: finalProductId,
                    quantity: 1,
                };

                localStorage.setItem("ATC_Product", JSON.stringify([...existingProducts, productToStore]));

                // Trigger event to update cart count and button text
                window.dispatchEvent(new Event('cartUpdated'));

                setShowBookingModal(true);
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

    // Set default values for protein and flavor on component mount
    useEffect(() => {
        productsData.forEach(product => {
            if (product.protein && product.flavoured) {
                setProductSelections(prev => ({
                    ...prev,
                    [product.product_id]: {
                        protein: "35%",
                        flavor: "Mawa Kulfi"
                    }
                }));
            }
        });
    }, []);

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
                                        <img src={getAssetPath('/assets/images/product-images/mass-gainer.webp')} alt="First hero section visual" />
                                    </figure>
                                </div>

                                <div className="hero-img-2">
                                    <figure className="image-anime">
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
                                                <p>
                                                    ₹ {product.priceMatrix?.[
                                                        productSelections[product.product_id]?.protein ?? ""
                                                    ]?.[
                                                        productSelections[product.product_id]?.flavor ?? ""
                                                    ] ?? product.price}
                                                </p>
                                                <div className="row mt-3 w-100 ">
                                                    <div className="col-6">
                                                        {product.protein && (
                                                            <select
                                                                className="form-select text-white border-0 "
                                                                style={{
                                                                    backgroundColor: '#3C3C3C',
                                                                    backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%23ffffff' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='m2 5 6 6 6-6'/%3e%3c/svg%3e")`,
                                                                    cursor: 'pointer',
                                                                    width: '100%'
                                                                }}
                                                                onChange={(e) => updateProductSelection(product.product_id, 'protein', e.target.value)}
                                                                value={productSelections[product.product_id]?.protein || ""}
                                                            >
                                                                <option value="">Select Protein</option>
                                                                {product.protein.map((protein) => (
                                                                    <option key={protein} value={protein} style={{ backgroundColor: '#3C3C3C' }}>{protein}</option>
                                                                ))}
                                                            </select>
                                                        )}
                                                    </div>
                                                    <div className="col-6 pr-0">
                                                        {product.flavoured && (
                                                            <select
                                                                className="form-select text-white border-0 "
                                                                style={{
                                                                    backgroundColor: '#3C3C3C',
                                                                    backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%23ffffff' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='m2 5 6 6 6-6'/%3e%3c/svg%3e")`,
                                                                    cursor: 'pointer',
                                                                    width: '100%'
                                                                }}
                                                                onChange={(e) => updateProductSelection(product.product_id, 'flavor', e.target.value)}
                                                                value={productSelections[product.product_id]?.flavor || ""}
                                                            >
                                                                <option value="" >Select Flavor</option>
                                                                {product.flavoured.map((flavor) => (
                                                                    <option key={flavor} value={flavor} style={{ backgroundColor: '#3C3C3C' }}>{flavor}</option>
                                                                ))}
                                                            </select>
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="pricing-btn m-3">
                                        <button
                                            onClick={() => handleBookSample(product)}
                                            className="btn-highlighted m-0 border-0"
                                        >{(() => {
                                            const cartProducts = JSON.parse(localStorage.getItem("ATC_Product")) || [];

                                            // Check if it's a regular product
                                            if (cartProducts.some(p => p.product_id === product.product_id)) {
                                                return "Item Added";
                                            }

                                            // If it's a Whey Concentrate, Isolate, or Blend check all variants
                                            if (product.name.includes("Whey Concentrate")) {
                                                // Check if any variant of this concentrate is in cart
                                                for (const flavor in Whey_Concentrate) {
                                                    if (Whey_Concentrate[flavor].some(variant =>
                                                        cartProducts.some(p => p.product_id === variant.product_id)
                                                    )) {
                                                        return "Item Added";
                                                    }
                                                }
                                            }

                                            if (product.name.includes("Whey Isolate")) {
                                                // Check if any variant of this isolate is in cart
                                                for (const flavor in Whey_Isolate) {
                                                    if (Whey_Isolate[flavor].some(variant =>
                                                        cartProducts.some(p => p.product_id === variant.product_id)
                                                    )) {
                                                        return "Item Added";
                                                    }
                                                }
                                            }

                                            if (product.name.includes("Whey Blend")) {
                                                // Check if any variant of this blend is in cart
                                                for (const flavor in Whey_Blend) {
                                                    if (Whey_Blend[flavor].some(variant =>
                                                        cartProducts.some(p => p.product_id === variant.product_id)
                                                    )) {
                                                        return "Item Added";
                                                    }
                                                }
                                            }

                                            return "Book Sample";
                                        })()}
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
            <Toaster
                position="top-right"
                toastOptions={{
                    duration: 3000,
                    style: {
                        background: '#fff',
                        color: '#333',
                    },
                }}
            />
        </>
    );
}
