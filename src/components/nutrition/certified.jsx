import React from "react";

const CertifiedProduct = () => {
  return (
    <section className="odd-even-section">
      <section className="deals-of-the-day-main py-5">
        <div className="container-fluid w-100">
          <div className="row justify-content-center">
            <div className="col-10 mb-3 text-center">
              <div className="col">
                <h2 className="f-rob-bol f-30 text-white text-uppercase">
                  Certificates
                </h2>
              </div>
            </div>
          </div>
          <div className="row justify-content-center overflow-hidden">
            <div className="slider-container col-12 px-md-5">
              <div className="row">
                <div className="col"></div>
                <div className="col-lg-2 mt-3">
                  <img
                    className="img-fluid"
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/images/nutrition/nutri-certi-5.webp"
                    }
                    alt="Certificate"
                    loading="lazy"
                  />
                </div>
                <div className="col-lg-2 mt-3">
                  <img
                    className="img-fluid"
                    src={
                      process.env.PUBLIC_URL +
                      `/assets/images/nutrition/nutri-certi-1.webp`
                    }
                    alt="Certificate"
                    loading="lazy"
                  />
                </div>
                <div className="col-lg-2 mt-3">
                  <img
                    className="img-fluid"
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/images/nutrition/nutri-certi-2.webp"
                    }
                    alt="Certificate"
                    loading="lazy"
                  />
                </div>
                <div className="col-lg-2 mt-3">
                  <img
                    className="img-fluid"
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/images/nutrition/nutri-certi-3.webp"
                    }
                    alt="Certificate"
                    loading="lazy"
                  />
                </div>
                <div className="col-lg-2 mt-3">
                  <img
                    className="img-fluid"
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/images/nutrition/nutri-certi-4.webp"
                    }
                    alt="Certificate"
                    loading="lazy"
                  />
                </div>
                <div className="col"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default CertifiedProduct;
