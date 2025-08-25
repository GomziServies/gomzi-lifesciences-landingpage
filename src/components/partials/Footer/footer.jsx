import React from "react";

function Footer() {

  function nutritionSendWhatsappMsg(text, option) {
    if (!text) {
      text = `Hi, I have come across ${window.location.href}. Can you provide more information about this?`;
    }

    if (option) {
      if (option.pageRef) {
        text += `\n\nI found your contact details from ${window.location.origin + window.location.pathname
          }`;
      }
    }

    let url = `https://api.whatsapp.com/send?phone=+918866842520&text=${encodeURIComponent(
      text
    )}`;
    window.open(url, "_blank");
  }

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
                  {/* <div className="work-together-btn">
                    <a href="">
                      <img src="assets/images/arrow-dark.svg" alt="" />
                      <span>Get in Touch</span>
                    </a>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-main">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-4">
                <div className="about-footer">
                  <div className="about-footer-content">
                    <div className="footer-logo ">
                      <img src="assets/images/logo192.png" alt="" className="w-25" />
                    </div>
                    <div className="footer-contact-details">
                      <div className="footer-contact-item">
                        <div className="icon-box">
                          <img src="assets/images/icon-mail-accent.svg" alt="" />
                        </div>
                        <div className="footer-contact-item-content">
                          <p>gomzinutrition@gmail.com</p>
                        </div>
                      </div>
                      <div className="footer-contact-item">
                        <div className="icon-box">
                          <img src="assets/images/icon-location-accent.svg" alt="" />
                        </div>
                        <div className="footer-contact-item-content">
                          <p>547,548, FIRST FLOOR, RJD TEXTILES PARK, Hazira Rd, Ichchhapor, PAL, Surat, Gujarat 394510</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="footer-contact-box">
                    <div className="icon-box">
                      <img src="assets/images/icon-phone-accent.svg" alt="" />
                    </div>
                    <div className="footer-contact-content">
                      <p>Gautam Jani</p>
                      <h3>+91 63540 51487</h3>
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
                        <li><a href="/booking-page">Book Sample</a></li>
                        <li><a href="/profile">Profile</a></li>
                      </ul>
                    </div>

                    <div className="footer-links">
                      <h3>Partner With Us</h3>
                      <ul>
                        <li><a href="/"
                          onClick={() =>
                            nutritionSendWhatsappMsg(
                              "Hello, I'm interested in becoming a distributor of Gomzi Nutrition.",
                              { pageRef: true }
                            )
                          }> Become a distributor</a></li>
                        <li><a href="/"
                          onClick={() =>
                            nutritionSendWhatsappMsg(
                              "Hello, I'm interested in becoming an affiliate of Gomzi Nutrition.",
                              { pageRef: true }
                            )
                          }> Become an affiliate</a></li>
                      </ul>
                    </div>
                    <div className="footer-links services-links">
                      <h3>Follow Us</h3>
                      <div className="footer-social-links">
                        <ul className="d-flex justify-content-around">
                          <li><a href="https://www.youtube.com/channel/UCLyvtq55YZORdV-SN8OQSzQ"><i className="fa-brands fa-youtube"></i></a></li>
                          <li><a href="https://www.instagram.com/gomzi_nutrition?igsh=NTc4MTIwNjQ2YQ=="><i className="fa-brands fa-instagram"></i></a></li>
                          <li><a href="https://www.facebook.com/gajani2/"><i className="fa-brands fa-facebook-f"></i></a></li>
                          <li><a href="https://www.linkedin.com/in/dt-gautam-jani-561a50161/"><i className="fa-brands fa-linkedin"></i></a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-12">
                <div className="footer-copyright">

                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
