const hostname = window.location.hostname.trim(); // Trimming whitespace from the hostname
let baseUrl = "http://localhost";
let razorpayMerchantId = "rzp_test_F0TUZmabOwKkhe";

if (
  hostname === "glssamplebox.gomzilifesciences.in" ||
  hostname === "www.glssamplebox.gomzilifesciences.in"
) {
  baseUrl = "https://api.fggroup.in";
  razorpayMerchantId = "rzp_live_eG55rec1KDFHm7";
} else if (hostname === "test.purego.gomzilifesciences.in") {
  baseUrl = "https://dev-api.fggroup.in";
} else {
  baseUrl = "https://dev-api.fggroup.in";
  // baseUrl = "http://localhost:80";
}

let productId = "68cd035ee71a48752796be00"; // default for localhost

if (baseUrl.startsWith("https://dev-api.fggroup.in")) {
  productId = "6a572fbd0c65445b73834557";
} else if (baseUrl.startsWith("https://api.fggroup.in")) {
  productId = "6a57310e53680b1a284f8d71";
} else if (baseUrl.startsWith("http://localhost")) {
  productId = "68cd035ee71a48752796be00";
}

const apiConfig = {
  BASE_URL: baseUrl,
  RAZORPAY_MERCHANT_ID: razorpayMerchantId,
  PRODUCT_ID: productId,
};

export default apiConfig;
