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
        const { products, address_line_1, address_line_2, city, pin_code, state, country,
            payment_mode, name, email, mobile } = orderData;


        const formattedProducts = (Array.isArray(products) ? products : [products]).map(() => ({
            product_id: "68a2c8e006800a0384e9cc6a",
            quantity: 1,
            // landing_page: true
        }));


        const payload = {
            products: formattedProducts,
            payment_mode,
            address_line_1,
            address_line_2,
            city,
            pin_code,
            state,
            country,
            name,
            email,
            mobile,
            item_type: "PURE_GO_MEAL_PRODUCT"
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

        if (
            (result &&
                result.data &&
                result.data.status === 200 &&
                result.data.message === "COD Order Created Successfully") ||
            (result &&
                result.status === 200 &&
                result.response === "OK" &&
                result.message === "COD Order Created Successfully")
        ) {
            Swal.fire({
                title: "Success",
                text: "Please check your email for the invoice.",
                icon: "success",
            }).then(() => {

                localStorage.removeItem("tmp_ProductPurchasePayload");

                // Redirect to Order Page
                // window.location.href = "/thank-you";
            });

            return { showLoginModal: false, success: true };
        } else if (result && result.data) {
            result.data.data.handler = () => {
                localStorage.removeItem("tmp_ProductPurchasePayload");
                // Download quotation after successful payment
                if (typeof orderData.downloadQuotationPDF === 'function') {
                    orderData.downloadQuotationPDF();
                }
                Swal.fire({
                    title: "Success",
                    text: "Your payment is successful. The quotation will be downloaded automatically.",
                    icon: "success",
                }).then(() => {
                    window.location.href = "/thank-you";
                });
            };

            result.data.data.hidden = {
                contact: false,
                email: false,
            };
            new window.Razorpay(result.data.data).open();
            return { showLoginModal: false, success: true };
        } else if (result && result.status === 200) {
            result.data.data.handler = () => {
                localStorage.removeItem("tmp_ProductPurchasePayload");
                // Download quotation after successful payment
                if (typeof orderData.downloadQuotationPDF === 'function') {
                    orderData.downloadQuotationPDF();
                }
                Swal.fire({
                    title: "Success",
                    text: "Your payment is successful. The quotation will be downloaded automatically.",
                    icon: "success",
                }).then(() => {
                    window.location.href = "/thank-you";
                });
            };

            result.data.data.hidden = {
                contact: false,
                email: false,
            };
            new window.Razorpay(result.data.data).open();
            return { showLoginModal: false, success: true };
        }

    } catch (error) {
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
