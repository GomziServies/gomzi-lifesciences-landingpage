import React, { useState, useEffect } from 'react';
import NutritionHeader from '../components/partials/Header/nutritionsheader';
import HomeNutritionFooter from '../components/partials/Footer/footer';
import { Toaster, toast } from 'react-hot-toast';
import { createProductOrder } from '../assets/js/product'; // Adjust path as needed
import apiConfig from '../assets/js/config/api';

import { useNavigate } from 'react-router-dom';
import { axiosInstance, createOrder } from '../config/api';

const BookingForm = ({ isModal = false }) => {
    const navigate = useNavigate();
    const productsData = React.useMemo(() => [
        // Whey Protein (50% Protein) - ₹1170
        { name: "Whey Protein - Chocolate", price: 1170 },
        { name: "Whey Protein - Mocha Coffee", price: 1170 },
        { name: "Whey Protein - Mango", price: 1170 },
        { name: "Whey Protein - Mawa Kulfi", price: 1170 },

        // Whey Blend (60% Protein) - ₹1300
        { name: "Whey Blend - Chocolate", price: 1300 },
        { name: "Whey Blend - Mocha Coffee", price: 1300 },
        { name: "Whey Blend - Mango", price: 1300 },
        { name: "Whey Blend - Mawa Kulfi", price: 1300 },

        // Whey Concentrate (80% Protein) - ₹1630
        { name: "Whey Concentrate - Chocolate", price: 1630 },
        { name: "Whey Concentrate - Mocha Coffee", price: 1630 },
        { name: "Whey Concentrate - Mango", price: 1630 },
        { name: "Whey Concentrate - Mawa Kulfi", price: 1630 },

        // Whey Isolate (90% Protein) - ₹3000
        { name: "Whey Isolate - Chocolate", price: 3000 },
        { name: "Whey Isolate - Mocha Coffee", price: 3000 },
        { name: "Whey Isolate - Mango", price: 3000 },
        { name: "Whey Isolate - Mawa Kulfi", price: 3000 },

        // Mass Gainer - ₹420
        { name: "Mass Gainer - Chocolate", price: 420 },
        { name: "Mass Gainer - Vanilla", price: 420 },
        { name: "Mass Gainer - Strawberry", price: 420 },

        // Creatine - ₹350
        { name: "Creatine - Lemon", price: 350 },
        { name: "Creatine - Cola", price: 350 },
        { name: "Creatine - Unflavoured", price: 350 },

        // Pre-Workout - ₹440
        { name: "Pre-Workout - Mixed Fruit", price: 440 },
        { name: "Pre-Workout - Green Apple", price: 440 },

        // Peanut Butter (500g) - ₹150
        { name: "Peanut Butter - Mango Chia Seeds", price: 150 },
        { name: "Peanut Butter - Elaichi", price: 150 },
        { name: "Peanut Butter - Chocolate", price: 150 },

        // Protein Bar - ₹55
        { name: "Protein Bar - Chocolate", price: 55 },

        // EAA - ₹490
        { name: "EAA - Orange", price: 490 },
        { name: "EAA - Watermelon", price: 490 },

        // BCAA - ₹490
        { name: "BCAA - Orange", price: 490 },
        { name: "BCAA - Cranberry", price: 490 },

        // Energy Drink Bottle (220ml) - ₹30
        { name: "Energy Drink 220ml - Cola", price: 30 },
        { name: "Energy Drink 220ml - Guava", price: 30 },
        { name: "Energy Drink 220ml - Green Apple", price: 30 },

        // Energy Drink Can (45ml) - ₹45
        { name: "Energy Drink Can 45ml - Cola", price: 45 },
        { name: "Energy Drink Can 45ml - Guava", price: 45 },
        { name: "Energy Drink Can 45ml - Green Apple", price: 45 },

        // Tablets/Supplements
        { name: "Multivitamin Tablets", price: 1700 },
        { name: "Omega 3 Tablets", price: 225 },
        { name: "Ashwagandha Tablets", price: 1600 },
        { name: "Moringa Tablets", price: 225 },
        { name: "Shilajit Tablets", price: 750 },

        // Tablets/Supplements
        { name: "Multivitamin Tablets (60 Tabs)", price: 170 },
        { name: "Omega 3 Tablets (60 Tabs)", price: 225 },
        { name: "Ashwagandha Tablets (60 Tabs)", price: 50 },
        { name: "Moringa Tablets (40 Tabs)", price: 25 },
        { name: "Shilajit Tablets (60 Tabs)", price: 35 },

    ], []);

    const [formData, setFormData] = useState({
        name: "",
        mobile: "",
        email: "",
        address_line_1: "",
        address_line_2: "",
        city: "",
        pin_code: "",
        state: "",
        country: "",
        product: "",
        quantity: "",
    });

    const [price, setPrice] = useState({ original: 0, total: 0 });

    useEffect(() => {
        const selected = productsData.find(p => p.name === formData.product);
        if (selected) {
            setPrice({
                original: selected.price,
                total: selected.price * (formData.quantity || 1)
            });
        } else {
            setPrice({ original: 0, total: 0 });
        }
    }, [formData.product, formData.quantity, productsData]);

    useEffect(() => {
        const selected = productsData.find(p => p.name === formData.product);
        if (selected) {
            setPrice(prev => ({
                ...prev,
                total: selected.price * (formData.quantity || 1)
            }));
        }
    }, [formData.quantity, formData.product, productsData]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });

        toast.dismiss();

        // Real-time validation based on field type
        if (value.trim() !== '') {
            switch (name) {
                case 'mobile':
                    if (!/^\d{10}$/.test(value)) {
                        toast.error('Enter a valid 10-digit mobile number');
                    }
                    break;
                case 'email':
                    if (!/\S+@\S+\.\S+/.test(value)) {
                        toast.error('Enter a valid email address');
                    }
                    break;
                case 'pin_code':
                    if (!/^\d{6}$/.test(value)) {
                        toast.error('Enter a valid 6-digit pin code');
                    }
                    break;
                case 'city':
                case 'state':
                case 'country':
                    if (/\d/.test(value)) {
                        toast.error(`${name.charAt(0).toUpperCase() + name.slice(1)} should not contain numbers`);
                    }
                    break;
                case 'quantity':
                    const qty = parseInt(value);
                    if (qty < 1 || qty > 10) {
                        toast.error('Quantity should be between 1 and 10');
                    }
                    break;
                default:
                    break;
            }
        } else {
            const fieldNames = {
                name: 'Name',
                mobile: 'Mobile number',
                email: 'Email',
                address_line_1: 'Street address',
                address_line_2: 'Area/Colony',
                city: 'City',
                state: 'State',
                country: 'Country',
                pin_code: 'Pin code',
                product: 'Product',
                quantity: 'Quantity'
            };
            toast.error(`${fieldNames[name]} is required`);
        }
    };

    const validateForm = () => {
        toast.dismiss();

        const validations = [
            { condition: !formData.name.trim(), message: "Name is required" },
            { condition: !/^\d{10}$/.test(formData.mobile), message: "Enter a valid 10-digit mobile number" },
            { condition: !/\S+@\S+\.\S+/.test(formData.email), message: "Enter a valid email address" },
            { condition: !formData.address_line_1.trim(), message: "Street address is required" },
            { condition: !formData.address_line_2.trim(), message: "Area/Colony is required" },
            { condition: !formData.product, message: "Select a product" },
            { condition: !formData.quantity, message: "Enter quantity" },
            { condition: !/^\d{6}$/.test(formData.pin_code), message: "Enter a valid 6-digit pin code" },
            { condition: /\d/.test(formData.city), message: "City name should not contain numbers" },
            { condition: /\d/.test(formData.state), message: "State name should not contain numbers" },
            { condition: /\d/.test(formData.country), message: "Country name should not contain numbers" },
            { condition: parseInt(formData.quantity) < 1 || parseInt(formData.quantity) > 10, message: "Quantity should be between 1 and 10" }
        ];

        for (const validation of validations) {
            if (validation.condition) {
                toast.error(validation.message, {
                    duration: 3000,
                    icon: '❌'
                });
                return false;
            }
        }

        return true;
    };

    const loadRazorpay = () => {
        return new Promise((resolve) => {
            const script = document.createElement("script");
            script.src = "https://checkout.razorpay.com/v1/checkout.js";
            script.onload = () => resolve(true);
            script.onerror = () => resolve(false);
            document.body.appendChild(script);
        });
    };

    const handleBookSample = async () => {
        if (!validateForm()) {
            return;
        }

        try {
            // First load Razorpay script
            const res = await loadRazorpay();
            if (!res) {
                toast.error('Razorpay SDK failed to load');
                return;
            }

            const selected = productsData.find(p => p.name === formData.product);
            if (!selected) {
                toast.error('Please select a valid product');
                return;
            }

            const orderData = {
                products: {
                    name: selected.name,
                    price: selected.price
                },
                quantity: parseInt(formData.quantity),
                address_line_1: formData.address_line_1,
                address_line_2: formData.address_line_2,
                city: formData.city,
                pin_code: formData.pin_code,
                state: formData.state,
                country: formData.country,
                payment_mode: 'ONLINE',  
                name: formData.name,
                email: formData.email,
                mobile: formData.mobile
            };

            const result = await createOrder(orderData);

            if (!result.success) {
                toast.error(result.message);
                return;
            }

            if (orderData.payment_mode === 'ONLINE') {
                const razorpay = new window.Razorpay(result.data);
                razorpay.open();
            } else {
                toast.success('Order placed successfully!');
                navigate('/thank-you');
            }

        } catch (error) {
            toast.error('Something went wrong. Please try again later.');
        }
    };

    const formContent = (
        <div className={`contact-us-form ${isModal ? 'modal-form' : ''}`}>
            {!isModal && (
                <div className="page-header">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-12">
                                <div className="page-header-box">
                                    <h1 className="text-anime-style-2" data-cursor="-opaque">
                                        Book Your Sample
                                    </h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {isModal && (
                <h2 className="text-center mb-4" style={{ color: '#fff' }}>Book Your Sample Now</h2>
            )}

            <form onSubmit={(e) => e.preventDefault()}>
                <div className="row">
                    <div className="form-group col-md-6 mb-4">
                        <input
                            type="text"
                            name="name"
                            className="form-control bg-dark text-light"
                            placeholder="Name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="form-group col-md-6 mb-4">
                        <input
                            type="tel"
                            name="mobile"
                            className="form-control bg-dark text-light"
                            placeholder="Mobile Number"
                            value={formData.mobile}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="form-group col-md-12 mb-4">
                        <input
                            type="email"
                            name="email"
                            className="form-control bg-dark text-light"
                            placeholder="E-mail"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="form-group col-md-6 mb-4">
                        <input
                            type="text"
                            name="address_line_1"
                            className="form-control bg-dark text-light"
                            placeholder="Street address"
                            value={formData.address_line_1}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group col-md-6 mb-4">
                        <input
                            type="text"
                            name="address_line_2"
                            className="form-control bg-dark text-light"
                            placeholder="Road Name/Area/Colony"
                            value={formData.address_line_2}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group col-md-6 mb-4">
                        <input
                            type="number"
                            name="pin_code"
                            className="form-control bg-dark text-light"
                            placeholder="Pin code"
                            value={formData.pin_code}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group col-md-6 mb-4">
                        <input
                            type="text"
                            name="city"
                            className="form-control bg-dark text-light"
                            placeholder="City"
                            value={formData.city}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group col-md-6 mb-4">
                        <input
                            type="text"
                            name="state"
                            className="form-control bg-dark text-light"
                            placeholder="State"
                            value={formData.state}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group col-md-6 mb-4">
                        <input
                            type="text"
                            name="country"
                            className="form-control bg-dark text-light"
                            placeholder="Country / Region"
                            value={formData.country}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="form-group col-md-6 mb-4">
                        <select
                            name="product"
                            className="form-control bg-dark text-light"
                            value={formData.product}
                            onChange={handleChange}
                            required
                        >
                            <option value="">Select Product</option>
                            {productsData.map((p) => (
                                <option key={p.name} value={p.name}>{p.name}</option>
                            ))}
                        </select>
                    </div>

                    <div className="form-group col-md-6 mb-4">
                        <input
                            type="number"
                            name="quantity"
                            className="form-control bg-dark text-light"
                            placeholder="Enter Quantity"
                            value={formData.quantity}
                            onChange={handleChange}
                            min="1"
                            required
                        />
                    </div>

                    <div className="form-group col-md-12 mb-4">
                        <input
                            type="text"
                            className="form-control bg-dark text-light"
                            value={
                                formData.product
                                    ? formData.quantity
                                        ? `₹${price.total}`
                                        : `₹${price.original}`
                                    : ""
                            }
                            placeholder="Price"
                            readOnly
                        />
                    </div>

                    <div className="col-lg-12 text-center">
                        <div className="contact-form-btn">
                            <button
                                type="button"
                                className="btn-highlighted"
                                onClick={() => {
                                    const emptyFields = Object.entries(formData).filter(([key, value]) => !value.trim());
                                    if (emptyFields.length > 0) {
                                        toast.error('Please fill in all required fields', {
                                            duration: 3000,
                                        });
                                        return;
                                    }
                                    handleBookSample();
                                }}
                            >
                                Book My Sample Now
                            </button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );

    return (
        <>
            <Toaster
                position="top-right"
                toastOptions={{
                    duration: 3000,
                    style: {
                        background: '#333',
                        color: '#fff',
                    },
                }}
            />

            {isModal ? (
                formContent
            ) : (
                <>
                    <NutritionHeader />
                    <div className="page-contact-us">
                        <div className="container">
                            <div className="row align-items-center justify-content-center">
                                <div className="col-lg-8">
                                    {formContent}
                                </div>
                            </div>
                        </div>
                    </div>
                    <HomeNutritionFooter />
                </>
            )}
        </>
    );
};

export default BookingForm;
