import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import "./assets/css/fonts.css";
import "./assets/css/all.min.css";
import "./assets/css/animate.css";
import "./assets/css/bootstrap.min.css";
import "./assets/css/custom.css";
import "./assets/css/magnific-popup.css";
import "./assets/css/mousecursor.css";
import "./assets/css/slicknav.min.css";
import "./assets/css/swiper-bundle.min.css";

import Home from "./page/home";
import WheyProtein from "./page/products/whey-protein";
import WheyBlend from "./page/products/whey-blend";
import WheyConcentrate from "./page/products/whey-concentrate";
import WheyIsolate from "./page/products/whey-isolate";
import MassGainer from "./page/products/mass-gainer";
import PeanutButter from "./page/products/peanut-butter";
import CreatineFlavored from "./page/products/creatine-flavored";
import CreatineUnflavored from "./page/products/creatine-unflavored";
import PreWorkout from "./page/products/pre-workout";
import Eaa from "./page/products/eaa";
import Bcaa from "./page/products/bcaa";
import ProteinBar from "./page/products/protein-bar";
import EnergyDrink from "./page/products/energy-drink";
import EnergyDrinkCan from "./page/products/energy-drink-can";
import Multivitamin from "./page/products/multivitamin";
import Omega3 from "./page/products/omega-3";
import Ashwagandha from "./page/products/ashwagandha";
import Moringa from "./page/products/moringa";
import Shilajit from "./page/products/shilajit";
import ThankYou from "./components/thank-you";
import Booking from "./page/booking";
import UserProfile from "./page/account/profile";

import { Toaster } from "react-hot-toast";

import $ from "jquery";
window.jQuery = $;
window.$ = $;

function App() {
    return (

        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/thank-you" element={<ThankYou />} />
                <Route path="/profile" element={<UserProfile />} />
                <Route path="/booking-page" element={<Booking />} />
                <Route path="/whey-protein" element={<WheyProtein />} />
                <Route path="/whey-blend" element={<WheyBlend />} />
                <Route path="/whey-concentrate" element={<WheyConcentrate />} />
                <Route path="/whey-isolate" element={<WheyIsolate />} />
                <Route path="/mass-gainer" element={<MassGainer />} />
                <Route path="/peanut-butter" element={<PeanutButter />} />
                <Route path="/creatine-flavored" element={<CreatineFlavored />} />
                <Route path="/creatine-unflavored" element={<CreatineUnflavored />} />
                <Route path="/pre-workout" element={<PreWorkout />} />
                <Route path="/eaa" element={<Eaa />} />
                <Route path="/bcaa" element={<Bcaa />} />
                <Route path="/protein-bar" element={<ProteinBar />} />
                <Route path="/energy-drink" element={<EnergyDrink />} />
                <Route path="/energy-drink-can" element={<EnergyDrinkCan />} />
                <Route path="/multivitamin" element={<Multivitamin />} />
                <Route path="/omega-3" element={<Omega3 />} />
                <Route path="/ashwagandha" element={<Ashwagandha />} />
                <Route path="/moringa" element={<Moringa />} />
                <Route path="/shilajit" element={<Shilajit />} />
            </Routes>
            <Toaster
                position="top-right"
                autoClose={3000}
                newestOnTop
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                toastStyle={{
                    backgroundColor: "#000",
                    color: "#bff747",
                    fontWeight: "500",
                    borderRadius: "8px",
                }}
                icon={false}
            />
        </Router>

    );
}

export default App;
