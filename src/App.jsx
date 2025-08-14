import React, { lazy } from "react";
import { Route, Routes } from "react-router-dom";

//User Account
import Home from "./pages/home";
// import Sitemap from '../src/components/partials/sitemap';

//Profile
const UserProfile = lazy(() => import("./pages/account/profile"));
const UserOrder = lazy(() => import("./pages/account/order"));
const AddToCart = lazy(() => import("./pages/add-to-cart"));

// nutrition
const GomziNutritionWheyProteinIsolate = lazy(() =>
  import("./pages/nutrition/gomzi-nutrition-whey-protein-isolate")
);
const BulkInquiryNutrition = lazy(() =>
  import("./pages/nutrition/bulk-inquriy-nutrition")
);
const GomziNutritionWheyProtein = lazy(() =>
  import("./pages/nutrition/gomzi-nutrition-whey-protein")
);
const GomziNutritionWheyProteinConcentrate = lazy(() =>
  import("./pages/nutrition/gomzi-nutrition-whey-protein-concentrate")
);
const GomziNutritionIgniteFatBurner = lazy(() =>
  import("./pages/nutrition/gomzi-nutrition-ignite-fat-burner")
);
const GomziNutritionMassGainerPowder = lazy(() =>
  import("./pages/nutrition/gomzi-nutrition-mass-gainer-powder")
);
const GomziNutritionSparkEAA = lazy(() =>
  import("./pages/nutrition/gomzi-nutrition-spark-eaa")
);
const GomziNutritionATPCreatine = lazy(() =>
  import("./pages/nutrition/gomzi-nutrition-atp-creatine")
);
const GomziNutritionActiveTShirt = lazy(() => import("./pages/nutrition/gomzi-nutrition-sports-active-t-shirt"));
const GomziNutritionSportsJogger = lazy(() => import("./pages/nutrition/gomzi-nutrition-sports-jogger"));
const GomziNutritionPerformancePreWorkoutDrink = lazy(() => import("./pages/nutrition/gomzi-nutrition-performance-pre-workout-drink"));
const GomziNutritionPerformanceEAADrink = lazy(() => import("./pages/nutrition/gomzi-nutrition-performance-eaa-drink"));
const GomziNutritionPerformanceCreatineDrink = lazy(() => import("./pages/nutrition/gomzi-nutrition-performance-creatine-drink"));
const GomziNutritionMangoChiaSeedCrunchyPeanutButter = lazy(() => import("./pages/nutrition/gomzi-nutrition-mango-chia-seed-crunchy-peanut-butter"));
const GomziNutritionChocolateCrunchyPeanutButter = lazy(() => import("./pages/nutrition/gomzi-nutrition-chocolate-crunchy-peanut-butter"));
const GomziNutritionNaturalCrunchyPeanutButter = lazy(() => import("./pages/nutrition/gomzi-nutrition-natural-crunchy-peanut-butter"));
const GomziNutritionRefuelWheyProtein = lazy(() => import("./pages/nutrition/gomzi-nutrition-refuel-whey-protein"));
const GomziNutritionRefuelWheyProteinIsolate = lazy(() => import("./pages/nutrition/gomzi-nutrition-refuel-whey-protein-isolate"));
const GomziNutritionRefuelWheyProteinConcentrate = lazy(() => import("./pages/nutrition/gomzi-nutrition-refuel-whey-protein-concentrate"));
const GomziNutritionRefuelIgniteFatBurner = lazy(() => import("./pages/nutrition/gomzi-nutrition-refuel-ignite-fat-burner"));
const GomziNutritionRefuelATPCreatine = lazy(() => import("./pages/nutrition/gomzi-nutrition-refuel-atp-creatine"));
const GomziNutritionRefuelSparkEAA = lazy(() => import("./pages/nutrition/gomzi-nutrition-refuel-spark-eaa"));
const GomziNutritionRefuelMassGainerPowder = lazy(() => import("./pages/nutrition/gomzi-nutrition-refuel-mass-gainer-powder"));
const Signature = lazy(() => import("./pages/nutrition/signature"));
const GomziNutritionChocolateProteinBar = lazy(() =>
  import("./pages/nutrition/gomzi-nutrition-chocolate-protein-bar")
);
const GomziNutritionAllCombo = lazy(() =>
  import("./pages/nutrition/gomzi-nutrition-all-combo")
);
const GomziNutritionMuscleBuildCombo = lazy(() =>
  import("./pages/nutrition/gomzi-nutrition-muscle-build-combo")
);
const GomziNutritionFatLossCombo = lazy(() =>
  import("./pages/nutrition/gomzi-nutrition-fat-loss-combo")
);
const GomziNutritionShakerBottle = lazy(() =>
  import("./pages/nutrition/gomzi-nutrition-shaker-bottle")
);
const TrainerNutrition = lazy(() =>
  import("./pages/nutrition/trainer-nutrition")
);
const CheckOut = lazy(() => import("./pages/nutrition/check-out"));
const ContactUs = lazy(() => import("./pages/nutrition/contact-us"));
const TermsConditionCustomer = lazy(() =>
  import("./pages/nutrition/terms-condition-customer")
);
const PrivacyPolicyCustomer = lazy(() =>
  import("./pages/nutrition/privacy-policy-customer")
);
const ShippingPolicyCustomer = lazy(() =>
  import("./pages/nutrition/shipping-policy-customer")
);
const CancellationPolicyCustomer = lazy(() =>
  import("./pages/nutrition/cancellation-policy-customer")
);
const PricingPolicyCustomer = lazy(() =>
  import("./pages/nutrition/pricing-policy-customer")
);
const ReturnAndRefundPolicyCustomer = lazy(() =>
  import("./pages/nutrition/return-and-refund-policy-customer")
);
const GomziNutritionBuy2MassGainer = lazy(() =>
  import("./pages/nutrition/gomzi-nutrition-buy-2-mass-gainer")
);
const GomziNutritionBuy1MassGainer = lazy(() =>
  import("./pages/nutrition/gomzi-nutrition-buy-1kg-mass-gainer")
);
const GomziNutritionBuy1KgIsolate = lazy(() =>
  import("./pages/nutrition/gomzi-nutrition-buy-1kg-isolate")
);
const GomziNutritionBuy1KgConcentrate = lazy(() =>
  import("./pages/nutrition/gomzi-nutrition-buy-1kg-concentrate")
);
const GomziNutritionBuy3Combo = lazy(() =>
  import("./pages/nutrition/gomzi-nutrition-buy-3-combo")
);
const WhiteLabelling = lazy(() => import("./pages/nutrition/white-labelling"));
const GomziNutritionAyurstrengthPowder = lazy(() =>
  import("./pages/nutrition/gomzi-nutrition-ayurstrength-powder")
);
const GomziNutritionSugarguardDiabetesCarePowder = lazy(() =>
  import("./pages/nutrition/gomzi-nutrition-sugarguard-diabetes-care-powder")
);
const GomziNutritionAyureaseGastricReliefPowder = lazy(() =>
  import("./pages/nutrition/gomzi-nutrition-ayurease-gastric-relief-powder")
);
const GomziNutritionB12Veda = lazy(() =>
  import("./pages/nutrition/gomzi-nutrition-b12-veda")
);
const GomziNutritionSlimAyurFatLossPowder = lazy(() =>
  import("./pages/nutrition/gomzi-nutrition-slimayur-fat-loss-powder")
);
const GomziNutritionboweleaseConstipationReliefPowder = lazy(() =>
  import(
    "./pages/nutrition/gomzi-nutrition-bowelease-constipation-relief-powder"
  )
);
const ThankYouProductPage = lazy(() =>
  import("./pages/nutrition/thank-you-purchase-product")
);

// ScrollRestoration
// import ScrollRestoration from "./components/scroll-restoration";
const ScrollRestoration = lazy(() => import("./components/scroll-restoration"));

//404
const NotFoundPage = lazy(() => import("./pages/404"));

//Refuel Series
const RefuelSeries = lazy(() => import("./pages/refuel-series/refuel-series"));
const GomziNutritionRetailerCombo = lazy(() =>
  import("./pages/refuel-series/gomzi-nutrition-retailer-combo")
);

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />

        {/* nutrition */}
        <Route
          path="/nutrition/gomzi-nutrition-whey-protein-isolate"
          element={<GomziNutritionWheyProteinIsolate />}
        />
        <Route
          path="/nutrition/gomzi-nutrition-whey-protein-chocolate"
          element={<GomziNutritionWheyProtein />}
        />
        <Route
          path="/nutrition/gomzi-nutrition-whey-protein-concentrate"
          element={<GomziNutritionWheyProteinConcentrate />}
        />
        <Route
          path="/nutrition/gomzi-nutrition-ignite-fat-burner"
          element={<GomziNutritionIgniteFatBurner />}
        />
        <Route
          path="/nutrition/gomzi-nutrition-spark-eaa"
          element={<GomziNutritionSparkEAA />}
        />
        <Route
          path="/nutrition/gomzi-nutrition-atp-creatine"
          element={<GomziNutritionATPCreatine />}
        />
        <Route
          path="/nutrition/gomzi-nutrition-chocolate-protein-bar"
          element={<GomziNutritionChocolateProteinBar />}
        />
        <Route
          path="/nutrition/gomzi-nutrition-all-combo"
          element={<GomziNutritionAllCombo />}
        />
        <Route
          path="/nutrition/gomzi-nutrition-mass-gainer-powder"
          element={<GomziNutritionMassGainerPowder />}
        />
        <Route
          path="/nutrition/gomzi-nutrition-ayurstrength-powder"
          element={<GomziNutritionAyurstrengthPowder />}
        />
        <Route
          path="/nutrition/gomzi-nutrition-sugarguard-diabetes-care-powder"
          element={<GomziNutritionSugarguardDiabetesCarePowder />}
        />
        <Route
          path="/nutrition/gomzi-nutrition-ayurease-gastric-relief-powder"
          element={<GomziNutritionAyureaseGastricReliefPowder />}
        />
        <Route
          path="/nutrition/gomzi-nutrition-b12-veda"
          element={<GomziNutritionB12Veda />}
        />
        <Route
          path="/nutrition/gomzi-nutrition-bowelease-constipation-relief-powder"
          element={<GomziNutritionboweleaseConstipationReliefPowder />}
        />
        <Route
          path="/nutrition/gomzi-nutrition-slimayur-fat-loss-powder"
          element={<GomziNutritionSlimAyurFatLossPowder />}
        />
        <Route
          path="/nutrition/gomzi-nutrition-shaker-bottle"
          element={<GomziNutritionShakerBottle />}
        />
        <Route
          path="/nutrition/gomzi-nutrition-muscle-build-combo"
          element={<GomziNutritionMuscleBuildCombo />}
        />
        <Route
          path="/nutrition/gomzi-nutrition-fat-loss-combo"
          element={<GomziNutritionFatLossCombo />}
        />
        <Route path="/nutrition/check-out" element={<CheckOut />} />
        <Route
          path="/nutrition/trainer-nutrition"
          element={<TrainerNutrition />}
        />
        <Route
          path="/nutrition/bulk-inquiry-nutrition"
          element={<BulkInquiryNutrition />}
        />
        <Route path="/nutrition/white-labelling" element={<WhiteLabelling />} />
        <Route path="/nutrition/gomzi-nutrition-refuel-mass-gainer-powder" element={<GomziNutritionRefuelMassGainerPowder />} />
        <Route path="/nutrition/gomzi-nutrition-refuel-spark-eaa" element={<GomziNutritionRefuelSparkEAA />} />
        <Route path="/nutrition/gomzi-nutrition-refuel-atp-creatine" element={<GomziNutritionRefuelATPCreatine />} />
        <Route path="/nutrition/gomzi-nutrition-refuel-ignite-fat-burner" element={<GomziNutritionRefuelIgniteFatBurner />} />
        <Route path="/nutrition/gomzi-nutrition-refuel-whey-protein-concentrate" element={<GomziNutritionRefuelWheyProteinConcentrate />} />
        <Route path="/nutrition/gomzi-nutrition-refuel-whey-protein-isolate" element={<GomziNutritionRefuelWheyProteinIsolate />} />
        <Route path="/nutrition/gomzi-nutrition-refuel-whey-protein" element={<GomziNutritionRefuelWheyProtein />} />
        <Route path="/nutrition/gomzi-nutrition-natural-crunchy-peanut-butter" element={<GomziNutritionNaturalCrunchyPeanutButter />} />
        <Route path="/nutrition/gomzi-nutrition-chocolate-crunchy-peanut-butter" element={<GomziNutritionChocolateCrunchyPeanutButter />} />
        <Route path="/nutrition/gomzi-nutrition-mango-chia-seed-crunchy-peanut-butter" element={<GomziNutritionMangoChiaSeedCrunchyPeanutButter />} />
        <Route path="/nutrition/gomzi-nutrition-performance-creatine-drink" element={<GomziNutritionPerformanceCreatineDrink />} />
        <Route path="/nutrition/gomzi-nutrition-performance-eaa-drink" element={<GomziNutritionPerformanceEAADrink />} />
        <Route path="/nutrition/gomzi-nutrition-performance-pre-workout-drink" element={<GomziNutritionPerformancePreWorkoutDrink />} />
        <Route path="/nutrition/gomzi-nutrition-sports-jogger" element={<GomziNutritionSportsJogger />} />
        <Route path="/nutrition/gomzi-nutrition-sports-active-t-shirt" element={<GomziNutritionActiveTShirt />} />
        <Route path="/nutrition/contact-us" element={<ContactUs />} />
        <Route path="/nutrition/signature" element={<Signature />} />
        <Route
          path="/nutrition/terms-condition-customer"
          element={<TermsConditionCustomer />}
        />
        <Route
          path="/nutrition/privacy-policy-customer"
          element={<PrivacyPolicyCustomer />}
        />
        <Route
          path="/nutrition/shipping-policy-customer"
          element={<ShippingPolicyCustomer />}
        />
        <Route
          path="/nutrition/cancellation-policy-customer"
          element={<CancellationPolicyCustomer />}
        />
        <Route
          path="/nutrition/pricing-policy-customer"
          element={<PricingPolicyCustomer />}
        />
        <Route
          path="/nutrition/return-and-refund-policy-customer"
          element={<ReturnAndRefundPolicyCustomer />}
        />
        <Route
          path="/nutrition/gomzi-nutrition-buy-2-mass-gainer"
          element={<GomziNutritionBuy2MassGainer />}
        />
        <Route
          path="/nutrition/gomzi-nutrition-buy-1kg-mass-gainer"
          element={<GomziNutritionBuy1MassGainer />}
        />
        <Route
          path="/nutrition/gomzi-nutrition-buy-1kg-isolate"
          element={<GomziNutritionBuy1KgIsolate />}
        />
        <Route
          path="/nutrition/gomzi-nutrition-buy-1kg-concentrate"
          element={<GomziNutritionBuy1KgConcentrate />}
        />
        <Route
          path="/nutrition/gomzi-nutrition-buy-3-combo"
          element={<GomziNutritionBuy3Combo />}
        />
        <Route
          path="/nutrition/thank-you-for-order"
          element={<ThankYouProductPage />}
        />
        <Route path="/nutrition/cart" element={<AddToCart />} />
        {/* nutrition */}
        {/* User Profile */}
        <Route path="/user/profile" element={<UserProfile />} />
        <Route path="/user/order" element={<UserOrder />} />
        {/* Add a catch-all route for unmatched routes */}
        <Route path="*" element={<NotFoundPage />} />

        {/* Refuel Series */}
        <Route path="/refuel-series" element={<RefuelSeries />} />
        <Route
          path="/gomzi-nutrition-retailer-combo"
          element={<GomziNutritionRetailerCombo />}
        />
      </Routes>
      <ScrollRestoration />
    </>
  );
}

export default App;
