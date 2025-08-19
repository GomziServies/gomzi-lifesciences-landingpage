import axios from 'axios';
import apiConfig from './apiConfig';

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
        const { products, quantity, address_line_1, address_line_2, city, pin_code, state, country,
            payment_mode, name, email, mobile } = orderData;

        // Validate required fields
        if (!products || !quantity || !payment_mode || !name || !email || !mobile ||
            !address_line_1 || !address_line_2 || !city || !pin_code || !state || !country) {
            throw new Error("All fields are required");
        }

        // Validate pin code
        if (!/^\d{6}$/.test(pin_code)) {
            throw new Error("Invalid PIN code");
        }

        // Create payload
        const payload = {
            products: Array.isArray(products) ? products : [products],
            quantity: parseInt(quantity),
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

        // Make API call to create order
        const response = await axiosInstance.post('/create-order', payload);

        // Handle COD orders
        if (payment_mode === 'COD') {
            return {
                success: true,
                message: 'Order placed successfully',
                data: response.data
            };
        }

        // Handle online payment
        if (response.data && response.data.data) {
            const options = {
                ...response.data.data,
                key: apiConfig.RAZORPAY_MERCHANT_ID,
                name: "Gomzi Lifesciences",
                description: `Payment for ${quantity} items`,
                handler: async function (response) {
                    await axiosInstance.post('/verify-payment', {
                        razorpayPaymentId: response.razorpay_payment_id,
                        razorpayOrderId: response.razorpay_order_id,
                        razorpaySignature: response.razorpay_signature
                    });
                    return {
                        success: true,
                        message: 'Payment successful'
                    };
                },
                prefill: {
                    name: name,
                    email: email,
                    contact: mobile
                },
                theme: {
                    color: "#0A2647"
                }
            };

            return {
                success: true,
                data: options
            };
        }

        throw new Error("Failed to create order");

    } catch (error) {
        return {
            success: false,
            message: error.message || "Something went wrong"
        };
    }
};

// Add request interceptor
// axiosInstance.interceptors.request.use(
//     (config) => {
//         const token = localStorage.getItem('fg_group_user_authorization') || "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4NTRlN2M1MjM0N2JjZTZiNDg5ODBkYyIsInVzZXJfaWQiOiIxMjI3NzEzMjI0ODM3IiwiYXV0aFRva2VuIjo3MTczMjMsInZpYSI6IkFVVEhPUklaQVRJT04iLCJjcmVhdGVkT24iOiJNb24gQXVnIDE4IDIwMjUgMTU6MDk6MDEgR01UKzA1MzAgKEluZGlhIFN0YW5kYXJkIFRpbWUpIiwiaWF0IjoxNzU1NTA5OTQxLCJleHAiOjE4NDE5MDk5NDF9.uyhNhTL294Xn_-yS1o4w-Xv6U7GMHde-ZNkWDRVXdo4";
//         if (token) {
//             config.headers.Authorization = `Bearer ${token}`;
//         }
//         return config;
//     },
//     (error) => {
//         return Promise.reject(error);
//     }
// );

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
