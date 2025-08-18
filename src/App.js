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

import $ from "jquery";
import ThankYou from "./components/thank-you";
window.jQuery = $;
window.$ = $;

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/thank-you" element={<ThankYou />} />
      </Routes>
    </Router>
  );
}

export default App;
