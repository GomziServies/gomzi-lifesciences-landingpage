import React from "react";

function HomeNutritionFooter() {
  return (
    <>
      <footer className="main-footer">
        <div className="footer-work-together">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="work-together-box">
                  <div className="work-together-content">
                    <h3>Let's Collaborate</h3>
                    <h2>Let's Work Together</h2>
                  </div>
                  <div className="work-together-btn">
                    <a href="">
                      <img src="assets/images/arrow-dark.svg" alt="" />
                      <span>Get in Touch</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-main">
          <div className="container">
            <div className="row align-items-end">
              <div className="col-lg-4">
                <div className="about-footer">
                  <div className="about-footer-content">
                    <div className="footer-logo ">
                      <img src="assets/images/logo192.png" alt="" className="w-25"/>
                    </div>
                    <div className="footer-contact-details">
                      <div className="footer-contact-item">
                        <div className="icon-box">
                          <img src="assets/images/icon-mail-accent.svg" alt="" />
                        </div>
                        <div className="footer-contact-item-content">
                          <p>infodomainame@gmail.com</p>
                          <p>domainame@gmail.com</p>
                        </div>
                      </div>
                      <div className="footer-contact-item">
                        <div className="icon-box">
                          <img src="assets/images/icon-location-accent.svg" alt="" />
                        </div>
                        <div className="footer-contact-item-content">
                          <p>123 Creative Lane London, SW1A 1AA United Kingdom</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="footer-contact-box">
                    <div className="icon-box">
                      <img src="assets/images/icon-phone-accent.svg" alt="" />
                    </div>
                    <div className="footer-contact-content">
                      <p>Need help!</p>
                      <h3><a href="tel:+123456789">+123 456 7890</a></h3>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-8">
                <div className="footer-links-box">
                  <div className="footer-links-list">
                    <div className="footer-links">
                      <h3>Quick link</h3>
                      <ul>
                        <li><a href="index.html">home</a></li>
                      </ul>
                    </div>
                    <div className="footer-links services-links">
                      <h3>Product</h3>
                      <ul>
                        <li><a href="service-single.html">Whey protein</a></li>
                        <li><a href="service-single.html">Mass Gainer</a></li>
                        <li><a href="service-single.html">Peanut Butter</a></li>
                        <li><a href="service-single.html">Energy Drink</a></li>
                        <li><a href="service-single.html">Creatine</a></li>
                        <li><a href="service-single.html">Egnite</a></li>
                      </ul>
                    </div>
                    <div className="footer-links">
                      <h3>support</h3>
                      <ul>
                        <li><a href="#">help</a></li>
                        <li><a href="#">Privacy policy</a></li>
                        <li><a href="#">Term's & condition</a></li>
                        <li><a href="">contact</a></li>
                      </ul>
                    </div>
                  </div>
                  <div className="footer-newsletter-form">
                    <h3>Subscribe our newsletter:</h3>
                    <form id="newslettersForm" action="#" method="POST">
                      <div className="form-group">
                        <input type="email" name="mail" className="form-control" id="mail" placeholder="Enter Email" required />
                        <button type="submit" className="btn-highlighted">subscribe</button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>

              <div className="col-lg-12">
                <div className="footer-copyright">
                  <div className="row align-items-center">
                    <div className="col-md-6">
                      <div className="footer-copyright-text">
                        <p>Copyright © 2025 All Rights Reserved.</p>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="footer-social-links">
                        <ul>
                          <li><a href="#"><i className="fa-brands fa-pinterest-p"></i></a></li>
                          <li><a href="#"><i className="fa-brands fa-x-twitter"></i></a></li>
                          <li><a href="#"><i className="fa-brands fa-facebook-f"></i></a></li>
                          <li><a href="#"><i className="fa-brands fa-instagram"></i></a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default HomeNutritionFooter;
