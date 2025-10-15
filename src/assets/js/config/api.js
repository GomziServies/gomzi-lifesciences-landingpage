import axios from 'axios';
import apiConfig from './apiConfig';
import Swal from 'sweetalert2';

const USER_ROUTE = '/user/v1';
const PUBLIC_ROUTE = '/public/v1';
const BASE_URL = apiConfig.BASE_URL + USER_ROUTE;
const PUBLIC_URL = apiConfig.BASE_URL + PUBLIC_ROUTE;

// User API Instance
export const axiosInstance = axios.create({
    baseURL: BASE_URL,
});

axiosInstance.interceptors.request.use(
    (config) => {
        const authorization = localStorage.getItem('fg_group_user_authorization');
        if (authorization) {
            config.headers['authorization'] = authorization;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// Public API Instance
export const publicAxiosInstance = axios.create({
    baseURL: PUBLIC_URL,
});

publicAxiosInstance.interceptors.request.use(
    (config) => {
        const authorization = localStorage.getItem('fg_group_user_authorization');
        if (authorization) {
            config.headers['authorization'] = authorization;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// Create order and handle payment
export const createOrder = async (orderData) => {
    try {
        const { address_line_1, address_line_2, city, pin_code, state, country,
            payment_mode, name, email, mobile } = orderData;

        const ATC_Product = JSON.parse(localStorage.getItem("ATC_Product")) || [];

        const updatedProducts = ATC_Product.map(product => ({
            ...product,
            landing_page: true
        }));

        // Map frontend payment mode to backend expected value
        const backendPaymentMode = payment_mode === 'COD' ? 'Cash On Delivery' : payment_mode;

        const payload = {
            products: updatedProducts,
            payment_mode: backendPaymentMode, // Use the mapped value
            address_line_1,
            address_line_2,
            city,
            pin_code,
            state,
            country,
            name,
            email,
            mobile,
            item_type: "PURE_GO_SAMPLE_MEAL_PRODUCT"
        };

        // Check Authentication
        if (
            localStorage.getItem("fg_group_user_authorization") === null ||
            localStorage.getItem("user_info") === null
        ) {
            localStorage.removeItem("fg_group_user_authorization");
            localStorage.removeItem("user_info");

            // expire in 5h
            return { showLoginModal: true };
        }

        // Make API call to create order
        const result = await axiosInstance.post('meals/create-order', payload);

        if (payment_mode === 'COD') {
            // Handle COD order
            if (
                (result?.data?.status === 200 && result.data.message === "COD Order Created Successfully") ||
                (result?.status === 200 && result.response === "OK" && result.message === "COD Order Created Successfully")
            ) {
                // Download quotation PDF before showing success message
                if (typeof orderData.downloadQuotationPDF === "function") {
                    try {
                        await orderData.downloadQuotationPDF();
                    } catch (pdfError) {
                        console.error("Error downloading PDF:", pdfError);
                    }
                }

                Swal.fire({
                    title: "Success",
                    text: "Your order has been placed successfully. Please check your email for the invoice.",
                    // text: "Your COD order has been placed successfully. Please check your email for the invoice.",
                    icon: "success",
                }).then(() => {
                    localStorage.removeItem("tmp_ProductPurchasePayload");
                    localStorage.removeItem("ATC_Product");
                    // Redirect to thank you page with payment mode parameter
                    window.location.href = "/thank-you?payment_mode=COD";
                });

                return { showLoginModal: false, success: true };
            } else {
                // Handle case where COD order creation failed
                Swal.fire({
                    title: "Error",
                    text: result?.data?.message || "Failed to create COD order. Please try again.",
                    icon: "error",
                });
                return { showLoginModal: false, success: false };
            }
        } else {
            // Handle online payment (Razorpay)
            if (
                (result?.data?.status === 200 && result.data.message === "COD Order Created Successfully") ||
                (result?.status === 200 && result.response === "OK" && result.message === "COD Order Created Successfully")
            ) {

                // Download quotation PDF before showing success message
                if (typeof orderData.downloadQuotationPDF === "function") {
                    try {
                        await orderData.downloadQuotationPDF();
                    } catch (pdfError) {
                        console.error("Error downloading PDF:", pdfError);
                    }
                }

                Swal.fire({
                    title: "Success",
                    text: "Please check your email for the invoice.",
                    icon: "success",
                }).then(() => {
                    localStorage.removeItem("tmp_ProductPurchasePayload");
                    localStorage.removeItem("ATC_Product");
                });

                return { showLoginModal: false, success: true };
            } else if (result?.data?.data) {

                const paymentData = result.data.data;

                paymentData.handler = async () => {
                    localStorage.removeItem("tmp_ProductPurchasePayload");

                    // Download quotation PDF before showing success message
                    if (typeof orderData.downloadQuotationPDF === "function") {
                        try {
                            await orderData.downloadQuotationPDF();
                        } catch (pdfError) {
                            console.error("Error downloading PDF:", pdfError);
                        }
                    }
                    
                    Swal.fire({
                        title: "Success",
                        text: "Your payment is successful. The quotation will be downloaded automatically.",
                        icon: "success",
                    }).then(() => {
                        localStorage.removeItem("ATC_Product");
                        // Redirect to thank you page with payment mode parameter
                        window.location.href = "/thank-you?payment_mode=ONLINE";
                    });
                };

                paymentData.hidden = { contact: false, email: false };

                new window.Razorpay(paymentData).open();

                return { showLoginModal: false, success: true };
            } else {
                // Handle case where online payment initialization failed
                Swal.fire({
                    title: "Error",
                    text: result?.data?.message || "Failed to initialize payment. Please try again.",
                    icon: "error",
                });
                return { showLoginModal: false, success: false };
            }
        }


    } catch (error) {
        console.error("Order creation error:", error);
        Swal.fire({
            title: "Error",
            text: error.message || "Something went wrong. Please try again later.",
            icon: "error",
        });
        return {
            success: false,
            message: error.message || "Something went wrong"
        };
    }
};



// Add request interceptor
axiosInstance.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('fg_group_user_authorization')
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// Add response interceptor
axiosInstance.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response && error.response.status === 401) {
            // localStorage.removeItem('fg_group_user_authorization');
            localStorage.removeItem('user_info');
        }
        return Promise.reject(error);
    }
);