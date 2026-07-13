import { useEffect, useState } from "react";
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
import { Toaster } from "react-hot-toast";

const productsData = [
  {
    product_id: "68a2c8e006800a0384e9cc6a",
    name: "Whey Blend Sample(35gm)",
    flavoured: ["Chocolate", "Belgium Chocolate", "Coffee", "Mava Kulfi", "Vanilla Caramel", "Coconut Caramel", "Mango", "Cookies and Cream"],
    protein: ["35%", "40%", "50%", "60%"],
    pricerRange: "750-1650",
    priceMatrix: {
      "35%": { "Chocolate": 190, "Belgium Chocolate": 190, "Coffee": 190, "Mava Kulfi": 190, "Vanilla Caramel": 190, "Coconut Caramel": 190, "Mango": 190, "Cookies and Cream": 190 },
      "40%": { "Chocolate": 190, "Belgium Chocolate": 190, "Coffee": 190, "Mava Kulfi": 190, "Vanilla Caramel": 190, "Coconut Caramel": 190, "Mango": 190, "Cookies and Cream": 190 },
      "50%": { "Chocolate": 190, "Belgium Chocolate": 190, "Coffee": 190, "Mava Kulfi": 190, "Vanilla Caramel": 190, "Coconut Caramel": 190, "Mango": 190, "Cookies and Cream": 190 },
      "60%": { "Chocolate": 190, "Belgium Chocolate": 190, "Coffee": 190, "Mava Kulfi": 190, "Vanilla Caramel": 190, "Coconut Caramel": 190, "Mango": 190, "Cookies and Cream": 190 },
    },
    price: 190,
    image: "/assets/images/product-images/whey-blend.webp",
    link: "/whey-blend",
    moq: "100 kg",
  },
  {
    product_id: "68ad732d06800a0384ea019a",
    name: "Whey Concentrate Sample(35gm)",
    flavoured: ["Chocolate", "Belgium Chocolate", "Coffee", "Mava Kulfi", "Vanilla Caramel", "Coconut Caramel", "Mango", "Cookies and Cream"],
    protein: ["35%", "50%", "60%", "70%", "80%"],
    pricerRange: "1295-2270",
    priceMatrix: {
      "35%": { "Chocolate": 195, "Belgium Chocolate": 195, "Coffee": 195, "Mava Kulfi": 195, "Vanilla Caramel": 195, "Coconut Caramel": 195, "Mango": 195, "Cookies and Cream": 195 },
      "50%": { "Chocolate": 195, "Belgium Chocolate": 195, "Coffee": 195, "Mava Kulfi": 195, "Vanilla Caramel": 195, "Coconut Caramel": 195, "Mango": 195, "Cookies and Cream": 195 },
      "60%": { "Chocolate": 195, "Belgium Chocolate": 195, "Coffee": 195, "Mava Kulfi": 195, "Vanilla Caramel": 195, "Coconut Caramel": 195, "Mango": 195, "Cookies and Cream": 195 },
      "70%": { "Chocolate": 195, "Belgium Chocolate": 195, "Coffee": 195, "Mava Kulfi": 195, "Vanilla Caramel": 195, "Coconut Caramel": 195, "Mango": 195, "Cookies and Cream": 195 },
      "80%": { "Chocolate": 195, "Belgium Chocolate": 195, "Coffee": 195, "Mava Kulfi": 195, "Vanilla Caramel": 195, "Coconut Caramel": 195, "Mango": 195, "Cookies and Cream": 195 },
    },
    price: 195,
    image: "/assets/images/product-images/whey-concentrate.webp",
    link: "/whey-concentrate",
    moq: "100 kg",
  },
  {
    product_id: "68ad735906800a0384ea019e",
    name: "Whey Isolate Sample(35gm)",
    flavoured: ["Chocolate", "Belgium Chocolate", "Coffee", "Mava Kulfi", "Vanilla Caramel", "Coconut Caramel", "Mango", "Cookies and Cream"],
    protein: ["35%", "40%", "50%", "60%", "70%", "80%"],
    pricerRange: "1900-3656",
    priceMatrix: {
      "35%": { "Chocolate": 200, "Belgium Chocolate": 200, "Coffee": 200, "Mava Kulfi": 200, "Vanilla Caramel": 200, "Coconut Caramel": 200, "Mango": 200, "Cookies and Cream": 200 },
      "40%": { "Chocolate": 200, "Belgium Chocolate": 200, "Coffee": 200, "Mava Kulfi": 200, "Vanilla Caramel": 200, "Coconut Caramel": 200, "Mango": 200, "Cookies and Cream": 200 },
      "50%": { "Chocolate": 200, "Belgium Chocolate": 200, "Coffee": 200, "Mava Kulfi": 200, "Vanilla Caramel": 200, "Coconut Caramel": 200, "Mango": 200, "Cookies and Cream": 200 },
      "60%": { "Chocolate": 200, "Belgium Chocolate": 200, "Coffee": 200, "Mava Kulfi": 200, "Vanilla Caramel": 200, "Coconut Caramel": 200, "Mango": 200, "Cookies and Cream": 200 },
      "70%": { "Chocolate": 200, "Belgium Chocolate": 200, "Coffee": 200, "Mava Kulfi": 200, "Vanilla Caramel": 200, "Coconut Caramel": 200, "Mango": 200, "Cookies and Cream": 200 },
      "80%": { "Chocolate": 200, "Belgium Chocolate": 200, "Coffee": 200, "Mava Kulfi": 200, "Vanilla Caramel": 200, "Coconut Caramel": 200, "Mango": 200, "Cookies and Cream": 200 },
    },
    price: 200,
    image: "/assets/images/product-images/whey-isolate.webp",
    link: "/whey-isolate",
    moq: "100 kg",
  },
  {
    product_id: "68cd0321e71a48752796bee9",
    name: "Mass Gainer Sample(35gm)",
    flavoured: ["Chocolate", "Belgium Chocolate", "Coffee", "Mava Kulfi", "Vanilla Caramel", "Coconut Caramel", "Mango", "Cookies and Cream"],
    price: 100,
    image: "/assets/images/product-images/mass-gainer.webp",
    link: "/mass-gainer",
    moq: "100 kg",
  },
  {
    product_id: "68ad739506800a0384ea01a2",
    name: "Peanut Butter Sample(100gm)",
    flavoured: ["Natural", "Classic", "Chocolate", "White Chocolate", "Mango Chia Seeds", "Cookies and Cream"],
    price: 120,
    image: "/assets/images/product-images/peanut-butter.webp",
    link: "/peanut-butter",
    moq: "100 kg",
  },
  {
    product_id: "68ad73e006800a0384ea01ab",
    flavoured: ["Fruit Punch", "Green Apple", "Tangy Orange", "Pineapple", "Kiwi", "Watermelon", "Lemon"],
    name: "Creatine Sample(20gm)",
    price: 120,
    image: "/assets/images/product-images/creatine-flavored.webp",
    link: "/creatine-flavored",
    moq: "50 kg (250gm)",
  },
  {
    product_id: "68ad744106800a0384ea01b4",
    flavoured: ["Fruit Punch", "Green Apple", "Tangy Orange", "Pineapple", "Kiwi", "Watermelon", "Lemon"],
    name: "Pre-Workout Sample(20gm)",
    price: 120,
    image: "/assets/images/product-images/pre-workout.webp",
    link: "/pre-workout",
    moq: "50 kg",
  },
  {
    product_id: "68ad746a06800a0384ea01b8",
    flavoured: ["Fruit Punch", "Green Apple", "Tangy Orange", "Pineapple", "Kiwi", "Watermelon", "Lemon"],
    name: "EAA Sample(20gm)",
    price: 120,
    image: "/assets/images/product-images/eaa.webp",
    link: "/eaa",
    moq: "50 kg (250gm)",
  },
  {
    product_id: "68ad748306800a0384ea01be",
    flavoured: ["Fruit Punch", "Green Apple", "Tangy Orange", "Pineapple", "Kiwi", "Watermelon", "Lemon"],
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

const defaultConcentrateIds = [
  { percent: "35%", product_id: "68ccfd5ee71a48752796b91a" },
  { percent: "50%", product_id: "68ccfd5ee71a48752796b91a" },
  { percent: "60%", product_id: "68ccfd7be71a48752796b920" },
  { percent: "70%", product_id: "68ccfdb3e71a48752796b942" },
  { percent: "80%", product_id: "68ccfde9e71a48752796b956" },
];

window.Whey_Concentrate = {
  "Chocolate": defaultConcentrateIds,
  "Belgium Chocolate": defaultConcentrateIds,
  "Coffee": defaultConcentrateIds,
  "Mawa Kulfi": defaultConcentrateIds,
  "Vanilla Caramel": defaultConcentrateIds,
  "Coconut Caramel": defaultConcentrateIds,
  "Mango": defaultConcentrateIds,
  "Cookies and Cream": defaultConcentrateIds,
};

const defaultIsolateIds = [
  { percent: "35%", product_id: "68ccfea5e71a48752796b98e" },
  { percent: "40%", product_id: "68ccfec4e71a48752796b994" },
  { percent: "50%", product_id: "68ccfee0e71a48752796b9a8" },
  { percent: "60%", product_id: "68ccfef4e71a48752796bb32" },
  { percent: "70%", product_id: "68ccff2ae71a48752796bc5e" },
  { percent: "80%", product_id: "68ccff4be71a48752796bc73" },
];

window.Whey_Isolate = {
  "Chocolate": defaultIsolateIds,
  "Belgium Chocolate": defaultIsolateIds,
  "Coffee": defaultIsolateIds,
  "Mawa Kulfi": defaultIsolateIds,
  "Vanilla Caramel": defaultIsolateIds,
  "Coconut Caramel": defaultIsolateIds,
  "Mango": defaultIsolateIds,
  "Cookies and Cream": defaultIsolateIds,
};

const defaultGainerData = [
  {
    product_id: "68cd0321e71a48752796bee9",
    name: "Mass Gainer",
    quotation_price: 420,
    moq: "25 kg",
  },
];

window.Mass_Gainer = {
  "Chocolate": defaultGainerData,
  "Belgium Chocolate": defaultGainerData,
  "Coffee": defaultGainerData,
  "Mawa Kulfi": defaultGainerData,
  "Vanilla Caramel": defaultGainerData,
  "Coconut Caramel": defaultGainerData,
  "Mango": defaultGainerData,
  "Cookies and Cream": defaultGainerData,
};

const makePB = (id) => [
  {
    product_id: id,
    name: "Peanut Butter",
    quotation_price: 150,
    moq: "100 kg",
  }
];

window.Peanut_Butter = {
  "Natural": makePB("68cd0304e71a48752796bed3"),
  "Classic": makePB("68cd0304e71a48752796bed3"),
  "Chocolate": makePB("68cd030de71a48752796bedd"),
  "White Chocolate": makePB("68cd030de71a48752796bedd"),
  "Mango Chia Seeds": makePB("68cd0316e71a48752796bee3"),
  "Cookies and Cream": makePB("68cd0316e71a48752796bee3"),
};

const makeCreatine = (id, price) => [
  {
    product_id: id,
    name: "Creatine",
    quotation_price: price,
    moq: "50 kg (250gm)",
  }
];

window.Creatine = {
  "Fruit Punch": makeCreatine("68cd02ede71a48752796bec2", 300),
  "Green Apple": makeCreatine("68cd02ede71a48752796bec2", 300),
  "Tangy Orange": makeCreatine("68cd02ede71a48752796bec2", 300),
  "Pineapple": makeCreatine("68cd02ede71a48752796bec2", 300),
  "Kiwi": makeCreatine("68cd02ede71a48752796bec2", 300),
  "Watermelon": makeCreatine("68cd02ede71a48752796bec2", 300),
  "Lemon": makeCreatine("68cd02ede71a48752796bec2", 300),
  "Unflavoured": makeCreatine("68cd02fae71a48752796bec4", 270),
};

const makePreWorkout = (id) => [
  {
    product_id: id,
    name: "Pre-Workout",
    quotation_price: 440,
    moq: "50 kg",
  }
];

window.pre_Workout = {
  "Fruit Punch": makePreWorkout("68cd02d5e71a48752796bebe"),
  "Green Apple": makePreWorkout("68cd02d5e71a48752796bebe"),
  "Tangy Orange": makePreWorkout("68cd02d5e71a48752796bebe"),
  "Pineapple": makePreWorkout("68cd02e4e71a48752796bec0"),
  "Kiwi": makePreWorkout("68cd02e4e71a48752796bec0"),
  "Watermelon": makePreWorkout("68cd02e4e71a48752796bec0"),
  "Lemon": makePreWorkout("68cd02e4e71a48752796bec0"),
};

const makeEAA = (id) => [
  {
    product_id: id,
    name: "EAA",
    quotation_price: 440,
    moq: "50 kg (250gm)",
  }
];

window.Eaa = {
  "Fruit Punch": makeEAA("68cd0292e71a48752796beb0"),
  "Green Apple": makeEAA("68cd0292e71a48752796beb0"),
  "Tangy Orange": makeEAA("68cd0292e71a48752796beb0"),
  "Pineapple": makeEAA("68cd0292e71a48752796beb0"),
  "Kiwi": makeEAA("68cd0292e71a48752796beb0"),
  "Watermelon": makeEAA("68cd0292e71a48752796beb0"),
  "Lemon": makeEAA("68cd0292e71a48752796beb0"),
};

const makeBCAA = (id) => [
  {
    product_id: id,
    name: "BCAA",
    quotation_price: 440,
    moq: "50 kg (250gm)",
  }
];

window.Bcaa = {
  "Fruit Punch": makeBCAA("68cd029ce71a48752796beb2"),
  "Green Apple": makeBCAA("68cd029ce71a48752796beb2"),
  "Tangy Orange": makeBCAA("68cd029ce71a48752796beb2"),
  "Pineapple": makeBCAA("68cd02a7e71a48752796beb4"),
  "Kiwi": makeBCAA("68cd02a7e71a48752796beb4"),
  "Watermelon": makeBCAA("68cd02a7e71a48752796beb4"),
  "Lemon": makeBCAA("68cd02a7e71a48752796beb4"),
};

window.Energy_Drink = {
  Cola: [
    { product_id: "68cd02b0e71a48752796beb6", name: "Energy Drink - Bottle", quotation_price: 30, moq: "1000 nos" },
  ],
  Guava: [
    { product_id: "68cd02b9e71a48752796beb8", name: "Energy Drink - Bottle", quotation_price: 30, moq: "1000 nos" },
  ],
  "Green Apple": [
    { product_id: "68cd02c4e71a48752796beba", name: "Energy Drink - Bottle", quotation_price: 30, moq: "1000 nos" },
  ],
};

const defaultBlendIds = [
  { percent: "35%", product_id: "68cd00efe71a48752796be7e" },
  { percent: "40%", product_id: "68cd0109e71a48752796be80" },
  { percent: "50%", product_id: "68cd0113e71a48752796be82" },
  { percent: "60%", product_id: "68cd011ee71a48752796be84" },
];

window.Whey_Blend = {
  "Chocolate": defaultBlendIds,
  "Belgium Chocolate": defaultBlendIds,
  "Coffee": defaultBlendIds,
  "Mawa Kulfi": defaultBlendIds,
  "Vanilla Caramel": defaultBlendIds,
  "Coconut Caramel": defaultBlendIds,
  "Mango": defaultBlendIds,
  "Cookies and Cream": defaultBlendIds,
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

const getProductDescription = (name) => {
  if (name.includes("Whey Blend")) {
    return "A premium blend of fast-absorbing Whey Protein Concentrate and Isolate, optimized for maximum muscle recovery, protein synthesis, and elite performance. Smooth texture with high mixability.";
  }
  if (name.includes("Whey Concentrate")) {
    return "High-purity Whey Protein Concentrate packed with essential amino acids and BCAAs. Engineered to support lean muscle growth, everyday fitness, and excellent taste profiles.";
  }
  if (name.includes("Whey Isolate")) {
    return "Ultra-filtered, fast-digesting Whey Protein Isolate. Features zero fillers, ultra-low carbs, and fats, delivering pure protein for rapid absorption and clean athletic nutrition.";
  }
  if (name.includes("Mass Gainer")) {
    return "A calorie-dense formula combining high-quality proteins and clean carbohydrates to fuel intense workouts, support mass building, and accelerate muscle glycogen recovery.";
  }
  if (name.includes("Peanut Butter")) {
    return "100% natural, premium roasted peanuts with zero additives or hydrogenated fats. A delicious source of plant-based protein, healthy fats, and fiber to power your day.";
  }
  if (name.includes("Creatine")) {
    return "Pure micronized Creatine Monohydrate to enhance explosive power, strength, and muscle endurance during high-intensity training. Tasteless and instantly soluble.";
  }
  if (name.includes("Pre-Workout")) {
    return "An explosive pre-workout matrix designed to boost energy, skin-splitting pumps, mental focus, and fatigue resistance. Powered by L-Citrulline, Beta-Alanine, and Caffeine.";
  }
  if (name.includes("EAA")) {
    return "All 9 Essential Amino Acids formulated to boost intra-workout hydration, support protein synthesis, and prevent muscle breakdown during strenuous training sessions.";
  }
  if (name.includes("BCAA")) {
    return "Premium 2:1:1 ratio of Branched-Chain Amino Acids to fuel muscle endurance, reduce soreness, and speed up post-workout recovery. Refreshing flavor options.";
  }
  if (name.includes("Energy Drink")) {
    return "A refreshing and carbonated energy booster packed with vitamins, electrolytes, and clean energy to restore focus, stamina, and hydration instantly.";
  }
  return "Premium quality supplement crafted with the finest ingredients to deliver unmatched taste, mixability, and purity for your fitness goals.";
};

const getAssetPath = (path) => `${process.env.PUBLIC_URL}${path}`;

export default function Home() {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showBookingModal, setShowBookingModal] = useState(false);
  const [showVideoModal, setShowVideoModal] = useState(false);
  const [pendingProduct, setPendingProduct] = useState(null);
  // const [, setCartUpdate] = useState(0); // Used to trigger re-renders on cart updates

  // Initialize product selections with the first available flavor for each product
  /*
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
  */

  /*
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
          const variant = variantList.find(
            (v) => v.percent === selections.protein,
          );
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
          JSON.stringify([...existingProducts, productToStore]),
        );

        // Update cart state to trigger re-render
        setCartUpdate((prev) => prev + 1);

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
    const existingProducts =
      JSON.parse(localStorage.getItem("ATC_Product")) || [];
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
          const specificVariant = variantList.find(
            (v) => v.percent === selections.protein,
          );
          variantId = specificVariant?.product_id;
        } else {
          variantId = variant.product_id;
        }
      }
    }

    return existingProducts.some((p) => p.product_id === variantId);
  };
  */

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
    const atcProducts = JSON.parse(localStorage.getItem("ATC_Product")) || [];
    console.log("atcProducts:", atcProducts);
  }, [showLoginModal]);

  // Set default values for protein and flavor on component mount
  useEffect(() => {
    // 1. Default values set karo
    /*
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
    */

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
      {showVideoModal && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            backgroundColor: "rgba(0, 0, 0, 0.95)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 99999,
          }}
          onClick={() => setShowVideoModal(false)}
        >
          <div
            style={{
              position: "relative",
              width: "90%",
              maxWidth: "400px",
              aspectRatio: "9/16",
              backgroundColor: "#000",
              borderRadius: "16px",
              overflow: "hidden",
              boxShadow: "0 10px 40px rgba(0,0,0,0.8)",
              border: "2px solid rgba(136, 195, 73, 0.4)",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setShowVideoModal(false)}
              style={{
                position: "absolute",
                top: "15px",
                right: "15px",
                background: "rgba(0, 0, 0, 0.6)",
                border: "1px solid rgba(255, 255, 255, 0.3)",
                color: "#fff",
                borderRadius: "50%",
                width: "36px",
                height: "36px",
                cursor: "pointer",
                zIndex: 10,
                padding: 0,
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2.5"
                stroke="currentColor"
                style={{
                  width: "18px",
                  height: "18px",
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                  stroke="white"
                />
              </svg>
            </button>
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/qPPHckQhGp4?autoplay=1&mute=0"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              style={{ border: "none", objectFit: "cover" }}
            ></iframe>
          </div>
        </div>
      )}
      <style>{`
                @keyframes pulse {
                    0% {
                        transform: translate(-50%, -50%) scale(0.9);
                        box-shadow: 0 0 0 0 rgba(136, 195, 73, 0.8);
                    }
                    70% {
                        transform: translate(-50%, -50%) scale(1.05);
                        box-shadow: 0 0 0 15px rgba(136, 195, 73, 0);
                    }
                    100% {
                        transform: translate(-50%, -50%) scale(0.9);
                        box-shadow: 0 0 0 0 rgba(136, 195, 73, 0);
                    }
                }
            `}</style>
      <NutritionHeader />

      <div className="hero">
        <div className="hero-bg-video">
          {/* <video autoPlay muted loop id="myVideo"><source src="assets/media/artistic-it-company-video.mp4" type="video/mp4" /></video> */}
        </div>
        <div className="container">
          <div className="row align-items-center hero-section">
            <div className="col-lg-7">
              <div className="hero-content">
                <div className="section-title">
                  <h2
                    className="text-anime-style-2"
                    data-cursor="-opaque"
                    style={{ fontSize: "clamp(30px, 4vw + 16px, 56px)", lineHeight: "1.15" }}
                  >
                    Launch Your Premium
                    <span> Supplement Brand</span>
                  </h2>
                  <p
                    className="wow fadeInUp"
                    data-wow-delay="0.2s"
                    style={{
                      fontSize: "clamp(16px, 1.5vw + 12px, 24px)",
                      marginTop: "15px",
                      color: "#88c349",
                      fontWeight: "bold",
                    }}
                  >
                    Book Your Sample Today <span style={{ color: '#fff' }}>In Just ₹777/-</span>
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
                      Book your Sample
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-5 d-flex justify-content-center align-items-center">
              <div
                className="hero-video-container wow fadeInRight"
                data-wow-delay="0.2s"
                style={{
                  width: "320px",
                  height: "568px",
                  position: "relative",
                  borderRadius: "24px",
                  overflow: "hidden",
                  boxShadow: "0 25px 50px -12px rgba(136, 195, 73, 0.4)",
                  border: "3px solid rgba(136, 195, 73, 0.6)",
                  backgroundColor: "#000",
                  cursor: "pointer",
                }}
                onClick={() => setShowVideoModal(true)}
              >
                {/* Video element as background thumbnail (paused/muted) */}
                {/* Background YouTube preview (muted and looped) */}
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/qPPHckQhGp4?autoplay=1&mute=1&loop=1&playlist=qPPHckQhGp4&controls=0&showinfo=0&rel=0&modestbranding=1&iv_load_policy=3"
                  title="YouTube background preview"
                  frameBorder="0"
                  allow="autoplay; encrypted-media"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    opacity: 0.75,
                    border: "none",
                    pointerEvents: "none"
                  }}
                ></iframe>

                {/* Premium Thumbnail Overlay */}
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  background: 'linear-gradient(to bottom, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.4) 100%)',
                  zIndex: 1
                }}>
                  {/* Play Button - Mathematically Centered */}
                  <div style={{
                    position: 'absolute',
                    top: '43%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: '80px',
                    height: '80px',
                    backgroundColor: '#88c349',
                    borderRadius: '50%',
                    boxShadow: '0 0 40px rgba(136, 195, 73, 0.9)',
                    animation: 'pulse 2s infinite',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'all 0.3s ease'
                  }}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="white"
                      width="38px"
                      height="38px"
                      style={{
                        marginLeft: '5px' // Offsets the visual weight of play triangle to look perfectly centered
                      }}
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>

                  {/* Title - Positioned higher up and made larger */}
                  <div style={{
                    position: 'absolute',
                    bottom: '80px',
                    left: 0,
                    width: '100%',
                    textAlign: 'center',
                    padding: '0 20px',
                    boxSizing: 'border-box',
                    textTransform: 'uppercase',
                    letterSpacing: '1px',
                    lineHeight: '1.4'
                  }}>
                    <span style={{ display: 'block', fontSize: '13px', color: '#88c349', fontWeight: '700', marginBottom: '8px', letterSpacing: '2.5px' }}>
                      Watch Process
                    </span>
                    <h3 style={{
                      color: '#fff',
                      fontSize: 'clamp(18px, 2vw + 12px, 26px)',
                      fontWeight: '850',
                      margin: 0,
                      lineHeight: '1.3',
                      textShadow: '0 2px 12px rgba(0,0,0,0.9)'
                    }}>
                      How We Deliver <br />
                      <span style={{ color: '#88c349' }}>Your Sample</span>
                    </h3>
                  </div>
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
              Whey Isolate
            </span>
            <span>
              <img
                src={getAssetPath("/assets/images/asterisk-icon.svg")}
                alt=""
              />
              Whey Blend
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
              Whey Isolate
            </span>
            <span>
              <img
                src={getAssetPath("/assets/images/asterisk-icon.svg")}
                alt=""
              />
              Whey Blend
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

          <h2 className="products-section-title wow fadeInUp" data-wow-delay="0.1s">
            Products That You Will Get In <span>Sample Box</span>
          </h2>

          {/* Whey Products Section commented out as requested */}
          {/*
          <div className="whey-products-section">
            {productsData.map((product, index) => (
              <div className="whey-product-container" key={index}>
                <div
                  className="whey-product-card"
                  data-wow-delay={`${index * 0.1}s`}
                >
                  <div className="product-image-col">
                    <div className="product-image-wrapper">
                      <img
                        src={getAssetPath(product.image)}
                        alt={product.name}
                        className="product-image"
                      />
                    </div>
                  </div>

                  <div className="product-details-col">
                    <div className="product-details">
                      <h3 className="product-name">
                        {product.name.replace("-1kg", "")}
                      </h3>
                      {product.flavoured && (
                        <div className="flavor-buttons mt-3">
                          <p className="flavor-label">Available Flavours:</p>
                          <div className="d-flex flex-wrap gap-2 mt-2">
                            {product.flavoured.map((flavor) => (
                              <span
                                key={flavor}
                                className="flavor-btn active"
                                style={{
                                  cursor: "default",
                                  pointerEvents: "none",
                                }}
                              >
                                {flavor}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}

                      {product.protein && (
                        <div className="protein-buttons mt-3">
                          <p className="protein-label">
                            Available Protein Percentages:
                          </p>
                          <div className="d-flex flex-wrap gap-2 mt-2">
                            {product.protein.map((protein) => (
                              <span
                                key={protein}
                                className="protein-btn active"
                                style={{
                                  cursor: "default",
                                  pointerEvents: "none",
                                }}
                              >
                                {protein}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          */}

          {/* Sample Box Contents Showcase */}
          <div className="sample-box-showcase mt-5">
            <div className="row">
              {/* Left Column: Sticky Main Sample Box Card */}
              <div className="col-lg-5 col-md-12 mb-4">
                <div className="sticky-box-container">
                  <div className="sample-box-card">
                    <div className="box-badge">All-In-One Sample Kit</div>
                    <img
                      src="/assets/images/sample-box.png"
                      alt="Gomzi Sample Box"
                      className="sample-box-image"
                    />
                    <div className="sample-box-details mt-3 text-center">
                      <h4 className="box-title">Gomzi Sample Testing Kit</h4>
                      <p className="box-subtitle">
                        Taste and test our complete product line before placing a private label manufacturing order. Includes 10 high-quality product samples across multiple flavors.
                      </p>
                      <div className="box-price-tag mt-3">
                        <span className="price-label">Price:</span>
                        <span className="price-value">₹777/-</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: List of 10 Products Included in the Box */}
              <div className="col-lg-7 col-md-12">
                <div className="box-products-list wow fadeInUp" data-wow-delay="0.2s">
                  <div className="list-header mb-4">
                    <h3 className="list-title">10 Premium Samples Inside:</h3>
                    <p className="list-subtitle">Your testing kit contains samples of all the following products:</p>
                  </div>

                  <div className="products-grid">
                    {productsData.map((product, index) => (
                      <div className="box-product-item-card" key={index}>
                        <div className="card-top-header">
                          <span className="product-index-badge">{index + 1}</span>
                          <h4 className="box-product-name">{product.name.replace(" Sample(35gm)", "").replace(" Sample(100gm)", "").replace(" Sample(20gm)", "").replace(" Sample(220ml)", "")}</h4>
                          <span className="product-size-badge">{product.name.includes("Bottle") ? "220ml" : product.name.includes("100gm") ? "100gm" : product.name.includes("20gm") ? "20gm" : "35gm"}</span>
                        </div>
                        
                        <p className="box-product-desc">
                          {getProductDescription(product.name)}
                        </p>

                        {/* Protein Badge (if applicable) */}
                        {product.protein && (
                          <div className="mt-3">
                            <span className="badge-section-label">Available Protein Percentages:</span>
                            <div className="d-flex flex-wrap gap-2 mt-1">
                              {product.protein.map((prot) => (
                                <span key={prot} className="box-badge-pill protein-pill">{prot}</span>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* Flavors Badges */}
                        {product.flavoured && (
                          <div className="mt-3">
                            <span className="badge-section-label">Available Flavours:</span>
                            <div className="d-flex flex-wrap gap-2 mt-1">
                              {product.flavoured.map((flv) => (
                                <span key={flv} className="box-badge-pill flavor-pill">{flv}</span>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="section-title text-center mt-4 mb-3 wow fadeInUp"
          data-wow-delay="0.1s"
        >
          <h2
            className="text-anime-style-2"
            data-cursor="-opaque"
            style={{ fontSize: "clamp(24px, 2.5vw + 14px, 36px)" }}
          >
            All Combo <span>Book Your Sample</span>
          </h2>
        </div>
        <div
          className="hero-content-body d-flex justify-content-center wow fadeInUp"
          data-wow-delay="0.1s"
          style={{ marginTop: "10px" }}
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
              className="btn-default btn-cta-highlight"
            >
              Book Your Sample Now
            </button>
          </div>
        </div>
      </div>
      <WhyChooseUs />

      <div className="our-testimonials">
        <div className="container">
          <div className="row section-row align-items-center">
            <div className="col-lg-6">
              <div className="section-title">
                <h3 className="wow fadeInUp">testimonials</h3>
                <h2 className="text-anime-style-2" data-cursor="-opaque">
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
                    {testimonialsData.map((testimonial, index) => (
                      <div className="swiper-slide" key={index}>
                        <div className="testimonial-item">
                          <div className="testimonial-header">
                            <div className="testimonial-rating">
                              {Array.from({
                                length: testimonial.rating,
                              }).map((_, i) => (
                                <i className="fa-solid fa-star" key={i}></i>
                              ))}
                            </div>
                            <div className="testimonial-content">
                              <p>“{testimonial.content}”</p>
                            </div>
                          </div>
                          <div className="testimonial-body">
                            {/* <div className="author-image">
                              <figure className="image-anime">
                                <img
                                  src={getAssetPath(testimonial.authorImage)}
                                  alt={testimonial.name}
                                />
                              </figure>
                            </div> */}
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
