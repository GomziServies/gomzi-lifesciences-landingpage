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

const apiConfig = {
  BASE_URL: baseUrl,
  RAZORPAY_MERCHANT_ID: razorpayMerchantId,
};

export default apiConfig;
