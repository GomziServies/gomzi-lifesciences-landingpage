import React, { useState, useEffect } from 'react';
import NutritionHeader from './partials/Header/nutritionsheader';
import '../assets/css/thank-you.css';

const ThankYou = () => {
    const [orderType, setOrderType] = useState('ONLINE'); // Default to ONLINE

    useEffect(() => {
        // Check if this is a COD order by looking at localStorage or URL parameters
        const urlParams = new URLSearchParams(window.location.search);
        const paymentMode = urlParams.get('payment_mode');
        
        if (paymentMode === 'COD') {
            setOrderType('COD');
        }
    }, []);

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

                                {orderType === 'COD' ? (
                                    <p className="thank-you-message">
                                        Your COD order has been successfully placed. We'll process it shortly and send you a confirmation email with all the details. 
                                        Please keep the payment ready when our delivery executive arrives.
                                        The quotation has been automatically downloaded to your device.
                                    </p>
                                ) : (
                                    <p className="thank-you-message">
                                        Your order has been successfully placed. We'll process it shortly and send you a confirmation email with all the details.
                                        The quotation has been automatically downloaded to your device.
                                    </p>
                                )}

                                <div className="order-details-box">
                                    <h3 className="order-details-title">Order Information</h3>
                                    <div className="order-info-grid">
                                        <p className="order-info-label"><span>Order Status</span><span>:</span></p>
                                        <p className="order-info-value">Successful</p>

                                        <p className="order-info-label"><span>Payment Status</span><span>:</span></p>
                                        {/* <p className="order-info-value">{orderType === 'COD' ? 'Pending (COD)' : 'Completed'}</p> */}
                                        <p className="order-info-value">{orderType === 'COD' ? 'Successful' : 'Completed'}</p>
                                        
                                        {/* {orderType === 'COD' && (
                                            <>
                                                <p className="order-info-label"><span>Payment Method</span><span>:</span></p>
                                                <p className="order-info-value">Cash on Delivery</p>
                                            </>
                                        )} */}
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