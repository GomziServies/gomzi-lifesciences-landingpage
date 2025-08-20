import React, { useState, useEffect } from "react";
import LoginModal from "../../popup/login";
import { Link } from "react-router-dom";
import "./nutritionsheader.css";
import toast from "react-hot-toast";

function NutritionHeader() {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [userInfo, setUserInfo] = useState(null);
  const [isUserMenuVisible, setIsUserMenuVisible] = useState(false);
  const getAssetPath = (path) => `${process.env.PUBLIC_URL}${path}`;

  const toggleUserMenu = () => {
    setIsUserMenuVisible(!isUserMenuVisible);
  };

  const handleLogout = () => {
    localStorage.removeItem('fg_group_user_authorization');
    localStorage.removeItem('user_info');
    localStorage.clear();
    setUserInfo(null);
    toast.success('Successfully Logged Out!');
  };

  useEffect(() => {
    const user_info = localStorage.getItem('user_info');
    if (user_info) {
      setUserInfo(JSON.parse(user_info));
    }
  }, []);
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
            <div className="container d-flex justify-content-between align-items-center">
              {/* Logo Start */}
              <a className="navbar-brand" href="./">
                <img src={getAssetPath('/assets/images/logo192.png')} alt="Logo" className="logo-h" />
              </a>

              {/* User Menu */}
              <div className="user-menu">
                {userInfo ? (
                  <div className="d-flex align-items-center">
                    <div className="position-relative">
                      <button 
                        onClick={toggleUserMenu}
                        className="btn d-flex align-items-center"
                        style={{
                          backgroundColor: 'transparent',
                          border: 'none',
                          color: '#333',
                          fontSize: '16px'
                        }}
                      >
                        <span className="me-2 text-white">Hi, {userInfo.user.first_name}</span>
                        <i className="far fa-user text-white"></i>
                      </button>
                      
                      {isUserMenuVisible && (
                        <div 
                          className="position-absolute bg-white py-2 rounded shadow"
                          style={{
                            top: '100%',
                            right: 0,
                            minWidth: '150px',
                            zIndex: 1000
                          }}
                        >
                          <Link 
                            to="/profile" 
                            className="d-block w-100 text-center px-3 py-2 text-dark text-decoration-none"
                            style={{ fontSize: '14px' }}
                          >
                            <i className="far fa-user me-2"></i>Profile
                          </Link>
                          <button
                            onClick={handleLogout}
                            className="d-block w-100 text-left px-3 py-2 text-dark"
                            style={{
                              background: 'none',
                              border: 'none',
                              fontSize: '14px',
                              cursor: 'pointer'
                            }}
                          >
                            <i className="fas fa-sign-out-alt me-2"></i>Logout
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                ) : (
                  <button
                    onClick={() => setShowLoginModal(true)}
                    className="btn btn-primary login-button"
                    style={{
                      backgroundColor: '#86c33a',
                      border: 'none',
                      borderRadius: '23px',
                      padding: '8px 25px',
                      color: '#fff',
                      fontWeight: '500',
                      fontSize: '16px'
                    }}
                  >
                    Login <i className="far ms-2 fa-user ml-1"></i>
                  </button>
                )}
              </div>

              <div className="navbar-toggle"></div>
            </div>
          </nav>
          <div className="responsive-menu"></div>
        </div>
      </header>

      {/* Login Modal */}
      {showLoginModal && <LoginModal onClose={() => setShowLoginModal(false)} />}
    </>
  );
}

export default NutritionHeader;
