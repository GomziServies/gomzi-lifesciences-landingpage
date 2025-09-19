import React, { useEffect, useState } from "react";
import NutritionHeader from "../components/partials/Header/nutritionsheader";
import Footer from "../components/partials/Footer/footer";
import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";
import "../assets/css/whey-products.css";
import { isUserLoggedIn } from "../utils/auth";
import LoginModal from "../components/popup/login";
import BookingModal from "../components/popup/BookingModal";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import VideoReview from "../components/video-review";
import WhyChooseUs from "../components/whyChooseUs";
import toast, { Toaster } from "react-hot-toast";

const productsData = [
    {
        product_id: "68a2c8e006800a0384e9cc6a",
        name: "Whey Blend Sample(35gm)",
        flavoured: ["Mawa Kulfi", "Chocolate", "Mango", "Mocha Coffee"],
        protein: ["35%", "40%", "50%", "60%"],
        pricerRange: "930-2305",
        priceMatrix: {
            "35%": {
                "Mawa Kulfi": 190,
                Chocolate: 190,
                "Mocha Coffee": 190,
                Mango: 190,
            },
            "40%": {
                "Mawa Kulfi": 190,
                Chocolate: 190,
                "Mocha Coffee": 190,
                Mango: 190,
            },
            "50%": {
                "Mawa Kulfi": 190,
                Chocolate: 190,
                "Mocha Coffee": 190,
                Mango: 190,
            },
            "60%": {
                "Mawa Kulfi": 190,
                Chocolate: 190,
                "Mocha Coffee": 190,
                Mango: 190,
            },
        },
        price: 190,
        image: "/assets/images/product-images/whey-blend.webp",
        link: "/whey-blend",
        moq: "100 kg",
    },
    {
        product_id: "68ad732d06800a0384ea019a",
        name: "Whey Concentrate Sample(35gm)",
        flavoured: ["Mawa Kulfi", "Chocolate", "Mocha Coffee", "Mango"],
        protein: ["35%", "50%", "60%", "70%", "80%"],
        pricerRange: "1295-2270",
        priceMatrix: {
            "35%": {
                "Mawa Kulfi": 195,
                Chocolate: 195,
                "Mocha Coffee": 195,
                Mango: 195,
            },
            "50%": {
                "Mawa Kulfi": 195,
                Chocolate: 195,
                "Mocha Coffee": 195,
                Mango: 195,
            },
            "60%": {
                "Mawa Kulfi": 195,
                Chocolate: 195,
                "Mocha Coffee": 195,
                Mango: 195,
            },
            "70%": {
                "Mawa Kulfi": 195,
                Chocolate: 195,
                "Mocha Coffee": 195,
                Mango: 195,
            },
            "80%": {
                "Mawa Kulfi": 195,
                Chocolate: 195,
                "Mocha Coffee": 195,
                Mango: 195,
            },
        },
        price: 195,
        image: "/assets/images/product-images/whey-concentrate.webp",
        link: "/whey-concentrate",
        moq: "100 kg",
    },
    {
        product_id: "68ad735906800a0384ea019e",
        name: "Whey Isolate Sample(35gm)",
        flavoured: ["Mawa Kulfi", "Chocolate", "Mocha Coffee", "Mango"],
        protein: ["35%", "40%", "50%", "60%", "70%", "80%"],
        pricerRange: "1900-3656",
        priceMatrix: {
            "35%": {
                "Mawa Kulfi": 200,
                Chocolate: 200,
                "Mocha Coffee": 200,
                Mango: 200,
            },
            "40%": {
                "Mawa Kulfi": 200,
                Chocolate: 200,
                "Mocha Coffee": 200,
                Mango: 200,
            },
            "50%": {
                "Mawa Kulfi": 200,
                Chocolate: 200,
                "Mocha Coffee": 200,
                Mango: 200,
            },
            "60%": {
                "Mawa Kulfi": 200,
                Chocolate: 200,
                "Mocha Coffee": 200,
                Mango: 200,
            },
            "70%": {
                "Mawa Kulfi": 200,
                Chocolate: 200,
                "Mocha Coffee": 200,
                Mango: 200,
            },
            "80%": {
                "Mawa Kulfi": 200,
                Chocolate: 200,
                "Mocha Coffee": 200,
                Mango: 200,
            },
        },
        price: 200,
        image: "/assets/images/product-images/whey-isolate.webp",
        link: "/whey-isolate",
        moq: "100 kg",
    },
    {
        product_id: "68cbd44ff1aff9d6c5624812",
        name: "Mass Gainer Sample(35gm)",
        flavoured: ["Chocolate"],
        price: 100,
        image: "/assets/images/product-images/mass-gainer.webp",
        link: "/mass-gainer",
        moq: "100 kg",
    },
    {
        product_id: "68ad739506800a0384ea01a2",
        name: "Peanut Butter Sample(100gm)",
        flavoured: ["Natural", "Chocolate", "Mango"],
        price: 120,
        image: "/assets/images/product-images/peanut-butter.webp",
        link: "/peanut-butter",
        moq: "100 kg",
    },
    {
        product_id: "68ad73e006800a0384ea01ab",
        flavoured: ["Lemon", "Unflavoured"],
        name: "Creatine Sample(20gm)",
        price: 120,
        image: "/assets/images/product-images/creatine-flavored.webp",
        link: "/creatine-flavored",
        moq: "50 kg (250gm)",
    },
    {
        product_id: "68ad744106800a0384ea01b4",
        flavoured: ["Fruit Punch", "Cola"],
        name: "Pre-Workout Sample(20gm)",
        price: 120,
        image: "/assets/images/product-images/pre-workout.webp",
        link: "/pre-workout",
        moq: "50 kg",
    },
    {
        product_id: "68ad746a06800a0384ea01b8",
        flavoured: ["Watermelon"],
        name: "EAA Sample(20gm)",
        price: 120,
        image: "/assets/images/product-images/eaa.webp",
        link: "/eaa",
        moq: "50 kg (250gm)",
    },
    {
        product_id: "68ad748306800a0384ea01be",
        flavoured: ["Orange", "Cranberry"],
        name: "BCAA Sample(20gm)",
        price: 120,
        image: "/assets/images/product-images/bcaa.webp",
        link: "/bcaa",
        moq: "50 kg (250gm)",
    },
    {
        product_id: "68ad74cc06800a0384ea01c8",
        name: "Energy Drink - Bottle Sample(220ml)",
        flavoured: ["Cola", "Guava", "Green Apple"],
        price: 100,
        image: "/assets/images/product-images/energy-drink.webp",
        link: "/energy-drink",
        moq: "1000 pcs",
    },
];
window.Whey_Concentrate = {
    Chocolate: [
        { percent: "35%", product_id: "68aef32e06800a0384ea3faf" },
        { percent: "50%", product_id: "68aef3a806800a0384ea4080" },
        { percent: "60%", product_id: "68aef4a706800a0384ea4095" },
        { percent: "70%", product_id: "68aef5b806800a0384ea40a9" },
        { percent: "80%", product_id: "68aef66406800a0384ea40cd" },
    ],
    "Mawa Kulfi": [
        { percent: "35%", product_id: "68aef29506800a0384ea3e42" },
        { percent: "50%", product_id: "68aef36c06800a0384ea4075" },
        { percent: "60%", product_id: "68aef47006800a0384ea4090" },
        { percent: "70%", product_id: "68aef58c06800a0384ea40a5" },
        { percent: "80%", product_id: "68aef63606800a0384ea40c9" },
    ],
    "Mocha Coffee": [
        { percent: "35%", product_id: "68aef30106800a0384ea3f35" },
        { percent: "50%", product_id: "68aef39406800a0384ea407e" },
        { percent: "60%", product_id: "68aef48906800a0384ea4092" },
        { percent: "70%", product_id: "68aef5a906800a0384ea40a7" },
        { percent: "80%", product_id: "68aef65006800a0384ea40cb" },
    ],
    Mango: [
        { percent: "35%", product_id: "68b029fe06800a0384ea45e4" },
        { percent: "50%", product_id: "68b02a2606800a0384ea45ea" },
        { percent: "60%", product_id: "68b02a5806800a0384ea45f6" },
        { percent: "70%", product_id: "68b02a6806800a0384ea45f8" },
        { percent: "80%", product_id: "68b02a7c06800a0384ea45fa" },
    ],
};
window.Whey_Isolate = {
    Chocolate: [
        { percent: "35%", product_id: "68aef71b06800a0384ea40e5" },
        { percent: "40%", product_id: "68aef76906800a0384ea40eb" },
        { percent: "50%", product_id: "68aef80406800a0384ea4112" },
        { percent: "60%", product_id: "68aef88306800a0384ea4124" },
        { percent: "70%", product_id: "68aef8d606800a0384ea412a" },
        { percent: "80%", product_id: "68aef96e06800a0384ea4153" },
    ],
    "Mawa Kulfi": [
        { percent: "35%", product_id: "68aef70c06800a0384ea40e3" },
        { percent: "40%", product_id: "68aef75306800a0384ea40e9" },
        { percent: "50%", product_id: "68aef7ea06800a0384ea4110" },
        { percent: "60%", product_id: "68aef86c06800a0384ea4122" },
        { percent: "70%", product_id: "68aef8c206800a0384ea4128" },
        { percent: "80%", product_id: "68aef95306800a0384ea4151" },
    ],
    "Mocha Coffee": [
        { percent: "35%", product_id: "68aef72d06800a0384ea40e7" },
        { percent: "40%", product_id: "68aef77b06800a0384ea40ed" },
        { percent: "50%", product_id: "68aef81106800a0384ea4114" },
        { percent: "60%", product_id: "68aef89b06800a0384ea4126" },
        { percent: "70%", product_id: "68aef8e806800a0384ea412c" },
        { percent: "80%", product_id: "68aef98106800a0384ea4155" },
    ],
    Mango: [
        { percent: "35%", product_id: "68b02a9d06800a0384ea4605" },
        { percent: "40%", product_id: "68b02ab106800a0384ea460b" },
        { percent: "50%", product_id: "68b02ad606800a0384ea460f" },
        { percent: "60%", product_id: "68b02b4006800a0384ea4602" },
        { percent: "70%", product_id: "68b02aee06800a0384ea4613" },
        { percent: "80%", product_id: "68b02b1e06800a0384ea4619" },
    ],
};

// Define other product variants
window.Mass_Gainer = {
    "Chocolate": [
        { product_id: "68cbd44ff1aff9d6c5624812", name: "Mass Gainer", quotation_price: 420, moq: "25 kg" }
    ]
};

window.Peanut_Butter = {
    "Natural": [
        { product_id: "68cbd41df1aff9d6c562480c", name: "Peanut Butter", quotation_price: 150, moq: "100 kg" }
    ],
    "Chocolate": [
        { product_id: "68cbd42cf1aff9d6c562480e", name: "Peanut Butter", quotation_price: 150, moq: "100 kg" }
    ],
    "Mango": [
        { product_id: "68cbd43cf1aff9d6c5624810", name: "Peanut Butter", quotation_price: 150, moq: "100 kg" }
    ]
};

window.Creatine = {
    "Lemon": [
        { product_id: "68cbd3e1f1aff9d6c5624808", name: "Creatine", quotation_price: 300, moq: "50 kg (250gm)" }
    ],
    "Unflavoured": [
        { product_id: "68cbd403f1aff9d6c562480a", name: "Creatine", quotation_price: 270, moq: "50 kg (250gm)" }
    ]
};

window.pre_Workout = {
    "Fruit Punch": [
        { product_id: "68cbd3ccf1aff9d6c5624804", name: "Pre-Workout", quotation_price: 440, moq: "50 kg" }
    ],
    "Cola": [
        { product_id: "68cbd3d5f1aff9d6c5624806", name: "Pre-Workout", quotation_price: 440, moq: "50 kg" }
    ]
};

window.Eaa = {
    "Watermelon": [
        { product_id: "68cbd331f1aff9d6c56247f6", name: "EAA", quotation_price: 440, moq: "50 kg (250gm)" }
    ]
};

window.Bcaa = {
    "Orange": [
        { product_id: "68cbd355f1aff9d6c56247f8", name: "BCAA", quotation_price: 440, moq: "50 kg (250gm)" }
    ],
    "Cranberry": [
        { product_id: "68cbd361f1aff9d6c56247fa", name: "BCAA", quotation_price: 440, moq: "50 kg (250gm)" }
    ]
};

window.Creatine = {
    "Lemon": [
        { product_id: "68cbd3e1f1aff9d6c5624808", name: "Creatine", quotation_price: 300, moq: "50 kg (250gm)" }
    ],
    "Unflavoured": [
        { product_id: "68cbd403f1aff9d6c562480a", name: "Creatine", quotation_price: 270, moq: "50 kg (250gm)" }
    ]
};

window.pre_Workout = {
    "Fruit Punch": [
        { product_id: "68cbd3ccf1aff9d6c5624804", name: "Pre-Workout", quotation_price: 440, moq: "50 kg" }
    ],
    "Cola": [
        { product_id: "68cbd3d5f1aff9d6c5624806", name: "Pre-Workout", quotation_price: 440, moq: "50 kg" }
    ]
};

window.Eaa = {
    "Watermelon": [
        { product_id: "68cbd331f1aff9d6c56247f6", name: "EAA", quotation_price: 440, moq: "50 kg (250gm)" }
    ]
};

window.Bcaa = {
    "Orange": [
        { product_id: "68cbd355f1aff9d6c56247f8", name: "BCAA", quotation_price: 440, moq: "50 kg (250gm)" }
    ],
    "Cranberry": [
        { product_id: "68cbd361f1aff9d6c56247fa", name: "BCAA", quotation_price: 440, moq: "50 kg (250gm)" }
    ]
};

window.Energy_Drink = {
    "Cola": [
        { product_id: "68cbd36ff1aff9d6c56247fc", name: "Energy Drink - Bottle", quotation_price: 30, moq: "1000 nos" }
    ],
    "Guava": [
        { product_id: "68cbd37ef1aff9d6c56247fe", name: "Energy Drink - Bottle", quotation_price: 30, moq: "1000 nos" }
    ],
    "Green Apple": [
        { product_id: "68cbd38cf1aff9d6c5624800", name: "Energy Drink - Bottle", quotation_price: 30, moq: "1000 nos" }
    ]
};

window.Whey_Blend = {
    Chocolate: [
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
    Mango: [
        { percent: "35%", product_id: "68b03a6306800a0384ea4750" },
        { percent: "40%", product_id: "68b03ab206800a0384ea4752" },
        { percent: "50%", product_id: "68b03b0706800a0384ea4754" },
        { percent: "60%", product_id: "68b03b1306800a0384ea4756" },
    ],
};

const testimonialsData = [
    {
        rating: 5,
        name: "Ashish",
        authorImage: "/assets/images/testimonials-images/aashis.webp",
        content:
            "Refuel Whey Protein Blend, with 33 servings per container, is a nutritional powerhouse. It's a game-changer in the world of fitness supplements, offering a perfect balance of quality protein and essential nutrients.",
    },
    {
        rating: 5,
        name: "Chirag Chandlekar",
        authorImage: "/assets/images/testimonials-images/chirag.webp",
        content:
            "I've been using Gomzi Nutrition Whey Protein for the past six months, and I couldn't be happier with the results. It has truly boosted my energy and helped me achieve my fitness goals faster.",
    },
    {
        rating: 5,
        name: "Pragnesh Maisuria",
        authorImage: "/assets/images/testimonials-images/pragnesh.webp",
        content:
            "Whey Protein Isolate is praised for its high protein purity and minimal lactose and fat content, making it an ideal choice for lean muscle building and post-workout recovery among users.",
    },
];

const getAssetPath = (path) => `${process.env.PUBLIC_URL}${path}`;

export default function Home() {
    const [showLoginModal, setShowLoginModal] = useState(false);
    const [showBookingModal, setShowBookingModal] = useState(false);
    const [pendingProduct, setPendingProduct] = useState(null);
    const [cartUpdate, setCartUpdate] = useState(0); // Used to trigger re-renders on cart updates

    // Initialize product selections with the first available flavor for each product
    const [productSelections, setProductSelections] = useState(() => {
        const initialSelections = {};
        productsData.forEach((product) => {
            if (product.flavoured && product.flavoured.length > 0) {
                initialSelections[product.product_id] = {
                    flavor: product.flavoured[0], // Set first flavor as default
                };
                if (product.protein && product.protein.length > 0) {
                    initialSelections[product.product_id].protein = product.protein[0]; // Set first protein % as default
                }
            }
        });
        return initialSelections;
    });

    const updateProductSelection = (productId, type, value) => {
        setProductSelections((prev) => ({
            ...prev,
            [productId]: {
                ...prev[productId],
                [type]: value,
            },
        }));
    };

    const handleBookSample = (product) => {
        if (isUserLoggedIn()) {
            const existingProducts =
                JSON.parse(localStorage.getItem("ATC_Product")) || [];

            if (existingProducts.length >= 9) {
                toast.error("Maximum 9 products can be added");
                return;
            }

            const selections = productSelections[product.product_id] || {};
            let finalProductId = product.product_id;
            let canAdd = true;
            let productType;

            // Check product type and handle selections
            if (product.name.includes("Whey Concentrate")) {
                productType = window.Whey_Concentrate;
            } else if (product.name.includes("Whey Isolate")) {
                productType = window.Whey_Isolate;
            } else if (product.name.includes("Whey Blend")) {
                productType = window.Whey_Blend;
            } else if (product.name.includes("Mass Gainer")) {
                productType = window.Mass_Gainer;
            } else if (product.name.includes("Peanut Butter")) {
                productType = window.Peanut_Butter;
            } else if (product.name.includes("Creatine")) {
                productType = window.Creatine;
            } else if (product.name.includes("Pre-Workout")) {
                productType = window.pre_Workout;
            } else if (product.name.includes("EAA")) {
                productType = window.Eaa;
            } else if (product.name.includes("BCAA")) {
                productType = window.Bcaa;
            } else if (product.name.includes("Energy Drink")) {
                productType = window.Energy_Drink;
            }

            if (product.name.includes("Whey")) {
                if (!selections.protein || !selections.flavor) {
                    toast.error("Please select both protein percentage and flavor");
                    canAdd = false;
                } else {
                    if (product.name.includes("Whey Concentrate")) {
                        productType = window.Whey_Concentrate;
                    } else if (product.name.includes("Whey Isolate")) {
                        productType = window.Whey_Isolate;
                    } else if (product.name.includes("Whey Blend")) {
                        productType = window.Whey_Blend;
                    }
                    const variantList = productType[selections.flavor];
                    const variant = variantList.find(v => v.percent === selections.protein);
                    if (variant) {
                        finalProductId = variant.product_id;
                    }
                }
            } else if (product.name.includes("Peanut Butter")) {
                if (!selections.flavor) {
                    toast.error("Please select a flavor");
                    canAdd = false;
                } else {
                    productType = window.Peanut_Butter;
                    const variant = productType[selections.flavor]?.[0];
                    if (variant) {
                        finalProductId = variant.product_id;
                    }
                }
            } else if (product.name.includes("Creatine")) {
                if (!selections.flavor) {
                    toast.error("Please select a flavor");
                    canAdd = false;
                } else {
                    productType = window.Creatine;
                    const variant = productType[selections.flavor]?.[0];
                    if (variant) {
                        finalProductId = variant.product_id;
                    }
                }
            } else if (product.name.includes("Pre-Workout")) {
                if (!selections.flavor) {
                    toast.error("Please select a flavor");
                    canAdd = false;
                } else {
                    productType = window.pre_Workout;
                    const variant = productType[selections.flavor]?.[0];
                    if (variant) {
                        finalProductId = variant.product_id;
                    }
                }
            } else if (product.name.includes("Energy Drink")) {
                if (!selections.flavor) {
                    toast.error("Please select a flavor");
                    canAdd = false;
                } else {
                    productType = window.Energy_Drink;
                    const variant = productType[selections.flavor]?.[0];
                    if (variant) {
                        finalProductId = variant.product_id;
                    }
                }
            } else if (product.name.includes("BCAA")) {
                if (!selections.flavor) {
                    toast.error("Please select a flavor");
                    canAdd = false;
                } else {
                    productType = window.Bcaa;
                    const variant = productType[selections.flavor]?.[0];
                    if (variant) {
                        finalProductId = variant.product_id;
                    }
                }
            } else if (product.name.includes("EAA")) {
                if (!selections.flavor) {
                    toast.error("Please select a flavor");
                    canAdd = false;
                } else {
                    productType = window.Eaa;
                    const variant = productType[selections.flavor]?.[0];
                    if (variant) {
                        finalProductId = variant.product_id;
                    }
                }
            } else if (product.name.includes("Mass Gainer")) {
                if (!selections.flavor) {
                    toast.error("Please select a flavor");
                    canAdd = false;
                } else {
                    productType = window.Mass_Gainer;
                    const variant = productType[selections.flavor]?.[0];
                    if (variant) {
                        finalProductId = variant.product_id;
                    }
                }
            }

            // Check if this specific variant already exists
            if (existingProducts.some((p) => p.product_id === finalProductId)) {
                toast.error("This product variant is already in your cart");
                canAdd = false;
            }

            if (canAdd) {
                const productToStore = {
                    product_id: finalProductId,
                    quantity: 1,
                };

                localStorage.setItem(
                    "ATC_Product",
                    JSON.stringify([...existingProducts, productToStore])
                );

                // Update cart state to trigger re-render
                setCartUpdate(prev => prev + 1);

                setShowBookingModal(true);
            }
        } else {
            setPendingProduct({
                ...product,
                selections: productSelections[product.product_id],
            });
            setShowLoginModal(true);
        }
    };

    const isProductInCart = (product, flavor) => {
        const existingProducts = JSON.parse(localStorage.getItem("ATC_Product")) || [];
        let productType;
        let variantId;

        // Determine product type and get the variant ID
        if (product.name.includes("Whey Concentrate")) {
            productType = window.Whey_Concentrate;
        } else if (product.name.includes("Whey Isolate")) {
            productType = window.Whey_Isolate;
        } else if (product.name.includes("Whey Blend")) {
            productType = window.Whey_Blend;
        } else if (product.name.includes("Mass Gainer")) {
            productType = window.Mass_Gainer;
        } else if (product.name.includes("Peanut Butter")) {
            productType = window.Peanut_Butter;
        } else if (product.name.includes("Creatine")) {
            productType = window.Creatine;
        } else if (product.name.includes("Pre-Workout")) {
            productType = window.pre_Workout;
        } else if (product.name.includes("EAA")) {
            productType = window.Eaa;
        } else if (product.name.includes("BCAA")) {
            productType = window.Bcaa;
        } else if (product.name.includes("Energy Drink")) {
            productType = window.Energy_Drink;
        }

        if (productType && flavor) {
            const variant = productType[flavor]?.[0];
            if (variant) {
                if (product.name.includes("Whey")) {
                    const selections = productSelections[product.product_id] || {};
                    const variantList = productType[flavor];
                    const specificVariant = variantList.find(v => v.percent === selections.protein);
                    variantId = specificVariant?.product_id;
                } else {
                    variantId = variant.product_id;
                }
            }
        }

        return existingProducts.some((p) => p.product_id === variantId);
    };

    useEffect(() => {
        new Swiper(".testimonial-slider .swiper", {
            modules: [Navigation, Pagination],
            slidesPerView: 1,
            spaceBetween: 30,
            loop: true,
            navigation: {
                nextEl: ".testimonial-button-next",
                prevEl: ".testimonial-button-prev",
            },
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
        });
    }, []);

    useEffect(() => {
        const atcProducts =
            JSON.parse(localStorage.getItem("ATC_Product")) || [];
        console.log("atcProducts:", atcProducts);
    }, [showLoginModal]);

    // Set default values for protein and flavor on component mount
    useEffect(() => {
        // 1. Default values set karo
        productsData.forEach((product) => {
            if (product.protein && product.flavoured) {
                setProductSelections((prev) => ({
                    ...prev,
                    [product.product_id]: {
                        protein: "35%",
                        flavor: "Mawa Kulfi",
                    },
                }));
            }
        });

        // 2. Booking modal ek j vaar open thay
        const atcProducts = JSON.parse(localStorage.getItem("ATC_Product"));
        const alreadyOpened = localStorage.getItem("BookingModalOpened");

        if (
            atcProducts &&
            atcProducts.length > 0 &&
            isUserLoggedIn() &&
            !alreadyOpened
        ) {
            setShowBookingModal(true);
            localStorage.setItem("BookingModalOpened", "true"); // flag set kariye
        }
    }, []);

    return (
        <>
            {showLoginModal && (
                <LoginModal
                    onClose={() => {
                        setShowLoginModal(false);
                        setPendingProduct(null);
                    }}
                    pendingProduct={pendingProduct}
                />
            )}
            {showBookingModal && (
                <BookingModal onClose={() => setShowBookingModal(false)} />
            )}
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
                                    <h3 className="wow fadeInUp">
                                        welcome to our Gomzi Nutrition website
                                    </h3>
                                    <h2
                                        className="text-anime-style-2"
                                        data-cursor="-opaque"
                                    >
                                        Your Nutrition Brand,
                                        <span> Our Premium Products</span> –
                                        Launch Today !
                                    </h2>
                                    <p
                                        className="wow fadeInUp"
                                        data-wow-delay="0.2s"
                                    >
                                        {" "}
                                        Peanut Butter, Protein Bars, Whey
                                        Protein & Energy Drinks – Fully
                                        White-Labeled for Your Brand .
                                    </p>
                                </div>

                                <div
                                    className="hero-content-body wow fadeInUp"
                                    data-wow-delay="0.4s"
                                >
                                    <div className="hero-btn">
                                        <button
                                            onClick={() => {
                                                if (isUserLoggedIn()) {
                                                    setShowBookingModal(true);
                                                } else {
                                                    setShowLoginModal(true);
                                                }
                                            }}
                                            className="btn-default"
                                        >
                                            Start Your Brand Now
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="hero-images">
                                <div className="hero-img-1">
                                    <figure className="image-anime">
                                        <img
                                            src={getAssetPath(
                                                "/assets/images/product-images/mass-gainer.webp"
                                            )}
                                            alt="First hero section visual"
                                        />
                                    </figure>
                                </div>

                                <div className="hero-img-2">
                                    <figure className="image-anime">
                                        <img
                                            src={getAssetPath(
                                                "/assets/images/product-images/whey-isolate.webp"
                                            )}
                                            alt="Second hero section visual"
                                        />
                                    </figure>
                                </div>

                                <div className="hero-image-circle">
                                    <button className="btn p-0 border-0">
                                        <img
                                            src={getAssetPath(
                                                "/assets/images/our-agency-circle.png"
                                            )}
                                            alt=""
                                        />
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
                        <span>
                            <img
                                src={getAssetPath(
                                    "/assets/images/asterisk-icon.svg"
                                )}
                                alt=""
                            />
                            Peanut Butter
                        </span>
                        <span>
                            <img
                                src={getAssetPath(
                                    "/assets/images/asterisk-icon.svg"
                                )}
                                alt=""
                            />
                            Energy Drink
                        </span>
                        <span>
                            <img
                                src={getAssetPath(
                                    "/assets/images/asterisk-icon.svg"
                                )}
                                alt=""
                            />
                            Protein Bar
                        </span>
                        <span>
                            <img
                                src={getAssetPath(
                                    "/assets/images/asterisk-icon.svg"
                                )}
                                alt=""
                            />
                            Whey Protein
                        </span>
                        <span>
                            <img
                                src={getAssetPath(
                                    "/assets/images/asterisk-icon.svg"
                                )}
                                alt=""
                            />
                            Whey Isolate
                        </span>
                        <span>
                            <img
                                src={getAssetPath(
                                    "/assets/images/asterisk-icon.svg"
                                )}
                                alt=""
                            />
                            Whey Blend
                        </span>
                        <span>
                            <img
                                src={getAssetPath(
                                    "/assets/images/asterisk-icon.svg"
                                )}
                                alt=""
                            />
                            Mass Gainer
                        </span>
                        <span>
                            <img
                                src={getAssetPath(
                                    "/assets/images/asterisk-icon.svg"
                                )}
                                alt=""
                            />
                            Creatine
                        </span>
                        <span>
                            <img
                                src={getAssetPath(
                                    "/assets/images/asterisk-icon.svg"
                                )}
                                alt=""
                            />
                            Ignite
                        </span>
                    </div>

                    <div className="scrolling-content">
                        <span>
                            <img
                                src={getAssetPath(
                                    "/assets/images/asterisk-icon.svg"
                                )}
                                alt=""
                            />
                            Peanut Butter
                        </span>
                        <span>
                            <img
                                src={getAssetPath(
                                    "/assets/images/asterisk-icon.svg"
                                )}
                                alt=""
                            />
                            Energy Drink
                        </span>
                        <span>
                            <img
                                src={getAssetPath(
                                    "/assets/images/asterisk-icon.svg"
                                )}
                                alt=""
                            />
                            Protein Bar
                        </span>
                        <span>
                            <img
                                src={getAssetPath(
                                    "/assets/images/asterisk-icon.svg"
                                )}
                                alt=""
                            />
                            Whey Protein
                        </span>
                        <span>
                            <img
                                src={getAssetPath(
                                    "/assets/images/asterisk-icon.svg"
                                )}
                                alt=""
                            />
                            Whey Isolate
                        </span>
                        <span>
                            <img
                                src={getAssetPath(
                                    "/assets/images/asterisk-icon.svg"
                                )}
                                alt=""
                            />
                            Whey Blend
                        </span>
                        <span>
                            <img
                                src={getAssetPath(
                                    "/assets/images/asterisk-icon.svg"
                                )}
                                alt=""
                            />
                            Mass Gainer
                        </span>
                        <span>
                            <img
                                src={getAssetPath(
                                    "/assets/images/asterisk-icon.svg"
                                )}
                                alt=""
                            />
                            Creatine
                        </span>
                        <span>
                            <img
                                src={getAssetPath(
                                    "/assets/images/asterisk-icon.svg"
                                )}
                                alt=""
                            />
                            Ignite
                        </span>
                    </div>
                </div>
            </div>

            <div className="our-services">
                <div className="container">
                    <div className="row section-row">
                        <div className="col-lg-12">
                            <div className="section-title">
                                <h3 className="wow fadeInUp">Our Products</h3>
                                <h2
                                    className="text-anime-style-2"
                                    data-cursor="-opaque"
                                >
                                    Discover <span>Premium Products</span>{" "}
                                    Crafted for You
                                </h2>
                            </div>
                        </div>
                    </div>

                    {/* Whey Products Section */}
                    <div className="whey-products-section">
                        {productsData.map((product, index) => (
                            <div className="whey-product-container" key={index}>
                                <div
                                    className="whey-product-card"
                                    data-wow-delay={`${index * 0.1}s`}
                                >
                                    {/* Image */}
                                    <div className="product-image-col">
                                        <div className="product-image-wrapper">
                                            <img
                                                src={getAssetPath(
                                                    product.image
                                                )}
                                                alt={product.name}
                                                className="product-image"
                                            />
                                        </div>
                                    </div>

                                    {/* Details */}
                                    <div className="product-details-col">
                                        <div className="product-details">
                                            <h3 className="product-name">
                                                {product.name.replace(
                                                    "-1kg",
                                                    ""
                                                )}
                                            </h3>

                                            {product.pricerRange && (
                                                <div className="price-range">
                                                    <span className="label">
                                                        Price Range :{" "}
                                                        <span className="value">
                                                            ₹
                                                            {
                                                                product.pricerRange
                                                            }
                                                        </span>
                                                    </span>
                                                </div>
                                            )}
                                            {/* Flavor Buttons */}
                                            {product.flavoured && (
                                                <div className="flavor-buttons mt-3">
                                                    <p className="flavor-label">
                                                        Select Flavor:
                                                    </p>
                                                    <div className="btn-group">
                                                        {product.flavoured.map(
                                                            (flavor) => (
                                                                <button
                                                                    key={flavor}
                                                                    className={`flavor-btn ${
                                                                        productSelections[
                                                                            product
                                                                                .product_id
                                                                        ]
                                                                            ?.flavor ===
                                                                        flavor
                                                                            ? "active"
                                                                            : ""
                                                                    }`}
                                                                    onClick={() =>
                                                                        updateProductSelection(
                                                                            product.product_id,
                                                                            "flavor",
                                                                            flavor
                                                                        )
                                                                    }
                                                                >
                                                                    {flavor}
                                                                </button>
                                                            )
                                                        )}
                                                    </div>
                                                </div>
                                            )}

                                            {/* Protein Buttons */}
                                            {product.protein && (
                                                <div className="protein-buttons mt-3">
                                                    <p className="protein-label">
                                                        Select Protein
                                                        Percentage:
                                                    </p>
                                                    <div className="btn-group">
                                                        {product.protein.map(
                                                            (protein) => (
                                                                <button
                                                                    key={
                                                                        protein
                                                                    }
                                                                    className={`protein-btn ${
                                                                        productSelections[
                                                                            product
                                                                                .product_id
                                                                        ]
                                                                            ?.protein ===
                                                                        protein
                                                                            ? "active"
                                                                            : ""
                                                                    }`}
                                                                    onClick={() =>
                                                                        updateProductSelection(
                                                                            product.product_id,
                                                                            "protein",
                                                                            protein
                                                                        )
                                                                    }
                                                                >
                                                                    {protein}
                                                                </button>
                                                            )
                                                        )}
                                                    </div>
                                                </div>
                                            )}

                                            <div className="price-info">
                                                <div className="selected-price">
                                                    <span className="label">
                                                        Sample Price:{" "}
                                                        <span className="value">
                                                            ₹{" "}
                                                            {product.price}
                                                        </span>
                                                    </span>
                                                </div>
                                            </div>

                                            {/* Action */}
                                            <div className="action-area">
                                                <button
                                                    onClick={() => handleBookSample(product)}
                                                    className={`btn-highlighted book-sample-btn ${
                                                        isProductInCart(product, productSelections[product.product_id]?.flavor) ? 'item-added' : ''
                                                    }`}
                                                >
                                                    {isProductInCart(product, productSelections[product.product_id]?.flavor) ? 'Item Added' : 'Book Sample'}
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div
                className="hero-content-body d-flex justify-content-center wow fadeInUp"
                data-wow-delay="0.1s"
            >
                <div className="hero-btn">
                    <button
                        onClick={() => {
                            if (isUserLoggedIn()) {
                                setShowBookingModal(true);
                            } else {
                                setShowLoginModal(true);
                            }
                        }}
                        className="btn-default"
                    >
                        Book Your Sample Now
                    </button>
                </div>
            </div>
            <WhyChooseUs />

            <div className="our-testimonials">
                <div className="container">
                    <div className="row section-row align-items-center">
                        <div className="col-lg-6">
                            <div className="section-title">
                                <h3 className="wow fadeInUp">testimonials</h3>
                                <h2
                                    className="text-anime-style-2"
                                    data-cursor="-opaque"
                                >
                                    What our <span>client</span> says
                                </h2>
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="satisfy-client-box testimonial-client-box">
                                <div className="satisfy-client-content">
                                    <h3>
                                        <span className="counter">1200</span>+
                                    </h3>
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
                                        {testimonialsData.map(
                                            (testimonial, index) => (
                                                <div
                                                    className="swiper-slide"
                                                    key={index}
                                                >
                                                    <div className="testimonial-item">
                                                        <div className="testimonial-header">
                                                            <div className="testimonial-rating">
                                                                {Array.from({
                                                                    length: testimonial.rating,
                                                                }).map(
                                                                    (_, i) => (
                                                                        <i
                                                                            className="fa-solid fa-star"
                                                                            key={
                                                                                i
                                                                            }
                                                                        ></i>
                                                                    )
                                                                )}
                                                            </div>
                                                            <div className="testimonial-content">
                                                                <p>
                                                                    “
                                                                    {
                                                                        testimonial.content
                                                                    }
                                                                    ”
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div className="testimonial-body">
                                                            <div className="author-image">
                                                                <figure className="image-anime">
                                                                    <img
                                                                        src={getAssetPath(
                                                                            testimonial.authorImage
                                                                        )}
                                                                        alt={
                                                                            testimonial.name
                                                                        }
                                                                    />
                                                                </figure>
                                                            </div>
                                                            <div className="author-content">
                                                                <h3>
                                                                    {
                                                                        testimonial.name
                                                                    }
                                                                </h3>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        )}
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
            <Footer />
            <Toaster
                position="top-right"
                toastOptions={{
                    duration: 3000,
                    style: {
                        background: "#fff",
                        color: "#333",
                    },
                }}
            />
        </>
    );
}
