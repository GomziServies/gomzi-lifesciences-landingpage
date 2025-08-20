import React from 'react';
import { Link } from 'react-router-dom';
import NutritionHeader from './partials/Header/nutritionsheader';
import '../assets/css/thank-you.css';

const ThankYou = () => {
    return (
        <>
            <NutritionHeader />
            <div className="thank-you-section section-padding">
                <div className="thank-you-container container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8 text-center">
                            <div className="thank-you-content">
                                <div className="check-mark mb-4">
                                    <div className="check-mark-circle">
                                        <i className="fas fa-check check-mark-icon"></i>
                                    </div>
                                </div>

                                <h1 className="thank-you-title text-anime-style-2">
                                    Thank You for Your Order!
                                </h1>

                                <p className="thank-you-message">
                                    Your order has been successfully placed. We'll process it shortly and send you a confirmation email with all the details.
                                </p>

                                <div className="order-details-box">
                                    <h3 className="order-details-title">Order Information</h3>
                                    <div className="order-info-grid">
                                        <p className="order-info-label"><p>Order Status</p><p>:</p></p>
                                        <p className="order-info-value">Successful</p>

                                        <p className="order-info-label"><p>Payment Status</p><p>:</p></p>
                                        <p className="order-info-value">Completed</p>
                                    </div>
                                </div>

                                <div className="action-buttons">
                                    <button
                                        to="/"
                                        className="btn-highlighted me-3 w-50"
                                        onClick={() => {
                                            // Force a full page reload when navigating to home
                                            window.location.href = '/';
                                            return false;
                                        }}
                                    >
                                        Back to Home
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ThankYou;