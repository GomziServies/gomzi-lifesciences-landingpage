export const addProductToCart = (productId, quantity = 1) => {
    try {
        // Get existing products from localStorage
        const existingProducts = localStorage.getItem("ATC_Product");
        let products = [];

        if (existingProducts) {
            products = JSON.parse(existingProducts);

            // Check if product already exists
            const existingProductIndex = products.findIndex(p => p.product_id === productId);

            if (existingProductIndex !== -1) {
                // Update quantity if product exists
                products[existingProductIndex].quantity += quantity;
            } else {
                // Add new product if it doesn't exist
                products.push({ product_id: productId, quantity: quantity });
            }
        } else {
            // Create new array if no products exist
            products = [{ product_id: productId, quantity: quantity }];
        }

        // Save back to localStorage
        localStorage.setItem("ATC_Product", JSON.stringify(products));
        return true;
    } catch (error) {
        console.error("Error adding product to cart:", error);
        return false;
    }
};

export const removeProductFromCart = (productId) => {
    try {
        const existingProducts = localStorage.getItem("ATC_Product");
        if (!existingProducts) return false;

        let products = JSON.parse(existingProducts);
        products = products.filter(p => p.product_id !== productId);

        if (products.length === 0) {
            localStorage.removeItem("ATC_Product");
        } else {
            localStorage.setItem("ATC_Product", JSON.stringify(products));
        }
        return true;
    } catch (error) {
        console.error("Error removing product from cart:", error);
        return false;
    }
};

export const isProductInCart = (productId) => {
    try {
        const existingProducts = localStorage.getItem("ATC_Product");
        if (!existingProducts) return false;

        const products = JSON.parse(existingProducts);
        return products.some(p => p.product_id === productId);
    } catch (error) {
        console.error("Error checking product in cart:", error);
        return false;
    }
};

export const clearCart = () => {
    localStorage.removeItem("ATC_Product");
};

export const getCartProducts = () => {
    try {
        const products = localStorage.getItem("ATC_Product");
        return products ? JSON.parse(products) : [];
    } catch (error) {
        console.error("Error getting cart products:", error);
        return [];
    }
};
