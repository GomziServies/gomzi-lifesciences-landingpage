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
