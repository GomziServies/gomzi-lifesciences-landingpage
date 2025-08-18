import React from "react";

function NutritionHeader() {
  const getAssetPath = (path) => `${process.env.PUBLIC_URL}${path}`;

  return (
    <>
      <div className="preloader">
        <div className="loading-container">
          <div className="loading"></div>
          <div id="loading-icon">
            <img src={getAssetPath('/assets/images/logo192.png')} alt="" />
          </div>
        </div>
      </div>
      {/* Preloader End */}

      {/* Header Start */}
      <header className="main-header">
        <div className="header-sticky">
          <nav className="navbar navbar-expand-lg">
            <div className="container d-flex justify-content-center align-items-center ">
              {/* Logo Start */}
              <a className="navbar-brand" href="./">
                <img src={getAssetPath('/assets/images/favicon.ico')} alt="Logo" className="logo-h" />
              </a>

              <div className="navbar-toggle"></div>
            </div>
          </nav>
          <div className="responsive-menu"></div>
        </div>
      </header>


    </>
  );
}

export default NutritionHeader;
