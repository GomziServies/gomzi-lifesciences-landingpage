import React, { useState, useEffect } from 'react';
import { Toaster, toast } from 'react-hot-toast';

import { createOrder, addSampleToCart } from '../assets/js/config/api';
// import Swal from 'sweetalert2';
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import '../assets/css/style.css';
import '../assets/css/payment-options.css'; // Add the new CSS file
import { isUserLoggedIn } from '../utils/auth';

let lastSyncedQty = null;

const Booking = () => {
    const [isLoading, setIsLoading] = useState(false);
    const Creatine = {
        "Fruit Punch": [{ name: "Creatine", price: 120, quotation_price: 300, product_id: "68cd02ede71a48752796bec2", moq: "50 kg (250gm)" }],
        "Green Apple": [{ name: "Creatine", price: 120, quotation_price: 300, product_id: "68cd02ede71a48752796bec2", moq: "50 kg (250gm)" }],
        "Tangy Orange": [{ name: "Creatine", price: 120, quotation_price: 300, product_id: "68cd02ede71a48752796bec2", moq: "50 kg (250gm)" }],
        "Pineapple": [{ name: "Creatine", price: 120, quotation_price: 300, product_id: "68cd02ede71a48752796bec2", moq: "50 kg (250gm)" }],
        "Kiwi": [{ name: "Creatine", price: 120, quotation_price: 300, product_id: "68cd02ede71a48752796bec2", moq: "50 kg (250gm)" }],
        "Watermelon": [{ name: "Creatine", price: 120, quotation_price: 300, product_id: "68cd02ede71a48752796bec2", moq: "50 kg (250gm)" }],
        "Lemon": [{ name: "Creatine", price: 120, quotation_price: 300, product_id: "68cd02ede71a48752796bec2", moq: "50 kg (250gm)" }],
        "unflavoured": [{ name: "Creatine", price: 120, quotation_price: 270, product_id: "68cd02fae71a48752796bec4", moq: "50 kg (250gm)" }]
    };

    const pre_Workout = {
        "Fruit Punch": [{ name: "Pre-Workout", price: 120, quotation_price: 440, product_id: "68cd02d5e71a48752796bebe", moq: "50 kg (250gm)" }],
        "Green Apple": [{ name: "Pre-Workout", price: 120, quotation_price: 440, product_id: "68cd02d5e71a48752796bebe", moq: "50 kg (250gm)" }],
        "Tangy Orange": [{ name: "Pre-Workout", price: 120, quotation_price: 440, product_id: "68cd02d5e71a48752796bebe", moq: "50 kg (250gm)" }],
        "Pineapple": [{ name: "Pre-Workout", price: 120, quotation_price: 440, product_id: "68cd02e4e71a48752796bec0", moq: "50 kg (250gm)" }],
        "Kiwi": [{ name: "Pre-Workout", price: 120, quotation_price: 440, product_id: "68cd02e4e71a48752796bec0", moq: "50 kg (250gm)" }],
        "Watermelon": [{ name: "Pre-Workout", price: 120, quotation_price: 440, product_id: "68cd02e4e71a48752796bec0", moq: "50 kg (250gm)" }],
        "Lemon": [{ name: "Pre-Workout", price: 120, quotation_price: 440, product_id: "68cd02e4e71a48752796bec0", moq: "50 kg (250gm)" }]
    };

    const Mass_Gainer = {
        "Chocolate": [{ name: "Mass Gainer", price: 100, quotation_price: 420, product_id: "68cd0321e71a48752796bee9", moq: "25 kg" }]
    };
    Mass_Gainer["Belgium Chocolate"] = Mass_Gainer["Chocolate"];
    Mass_Gainer["Coffee"] = Mass_Gainer["Chocolate"];
    Mass_Gainer["Mava Kulfi"] = Mass_Gainer["Chocolate"];
    Mass_Gainer["Vanilla Caramel"] = Mass_Gainer["Chocolate"];
    Mass_Gainer["Coconut Caramel"] = Mass_Gainer["Chocolate"];
    Mass_Gainer["Mango"] = Mass_Gainer["Chocolate"];
    Mass_Gainer["Cookies and Cream"] = Mass_Gainer["Chocolate"];

    const Peanut_Butter = {
        "Natural": [
            { name: "Peanut Butter", price: 120, quotation_price: 150, product_id: "68cd0304e71a48752796bed3", moq: "100 kg" },
        ],
        "Classic": [
            { name: "Peanut Butter", price: 120, quotation_price: 150, product_id: "68cd0304e71a48752796bed3", moq: "100 kg" },
        ],
        "Chocolate": [
            { name: "Peanut Butter", price: 120, quotation_price: 150, product_id: "68cd030de71a48752796bedd", moq: "100 kg" },
        ],
        "White Chocolate": [
            { name: "Peanut Butter", price: 120, quotation_price: 150, product_id: "68cd030de71a48752796bedd", moq: "100 kg" },
        ],
        "Mango Chia Seeds": [
            { name: "Peanut Butter", price: 120, quotation_price: 150, product_id: "68cd0316e71a48752796bee3", moq: "100 kg" },
        ],
        "Cookies and Cream": [
            { name: "Peanut Butter", price: 120, quotation_price: 150, product_id: "68cd0316e71a48752796bee3", moq: "100 kg" },
        ]
    };

    const Energy_Drink = {
        "Cola":[ { name: "Energy Drink - Bottle", price: 100, quotation_price: 30, product_id: "68cd02b0e71a48752796beb6", moq: "1000 nos" }],
        "Guava":[ { name: "Energy Drink - Bottle", price: 100, quotation_price: 30, product_id: "68cd02b9e71a48752796beb8", moq: "1000 nos" }],
        "Green Apple":[ { name: "Energy Drink - Bottle", price: 100, quotation_price: 30, product_id: "68cd02c4e71a48752796beba", moq: "1000 nos" }],
    };

    const Eaa = {
        "Fruit Punch": [{ name: "EAA", price: 120, quotation_price: 440, product_id: "68cd0292e71a48752796beb0", moq: "50 kg (250gm)" }],
        "Green Apple": [{ name: "EAA", price: 120, quotation_price: 440, product_id: "68cd0292e71a48752796beb0", moq: "50 kg (250gm)" }],
        "Tangy Orange": [{ name: "EAA", price: 120, quotation_price: 440, product_id: "68cd0292e71a48752796beb0", moq: "50 kg (250gm)" }],
        "Pineapple": [{ name: "EAA", price: 120, quotation_price: 440, product_id: "68cd0292e71a48752796beb0", moq: "50 kg (250gm)" }],
        "Kiwi": [{ name: "EAA", price: 120, quotation_price: 440, product_id: "68cd0292e71a48752796beb0", moq: "50 kg (250gm)" }],
        "Watermelon": [{ name: "EAA", price: 120, quotation_price: 440, product_id: "68cd0292e71a48752796beb0", moq: "50 kg (250gm)" }],
        "Lemon": [{ name: "EAA", price: 120, quotation_price: 440, product_id: "68cd0292e71a48752796beb0", moq: "50 kg (250gm)" }]
    };

    const Bcaa = {
        "Fruit Punch": [{ name: "BCAA", price: 120, quotation_price: 440, product_id: "68cd029ce71a48752796beb2", moq: "50 kg (250gm)" }],
        "Green Apple": [{ name: "BCAA", price: 120, quotation_price: 440, product_id: "68cd029ce71a48752796beb2", moq: "50 kg (250gm)" }],
        "Tangy Orange": [{ name: "BCAA", price: 120, quotation_price: 440, product_id: "68cd029ce71a48752796beb2", moq: "50 kg (250gm)" }],
        "Pineapple": [{ name: "BCAA", price: 120, quotation_price: 440, product_id: "68cd02a7e71a48752796beb4", moq: "50 kg (250gm)" }],
        "Kiwi": [{ name: "BCAA", price: 120, quotation_price: 440, product_id: "68cd02a7e71a48752796beb4", moq: "50 kg (250gm)" }],
        "Watermelon": [{ name: "BCAA", price: 120, quotation_price: 440, product_id: "68cd02a7e71a48752796beb4", moq: "50 kg (250gm)" }],
        "Lemon": [{ name: "BCAA", price: 120, quotation_price: 440, product_id: "68cd02a7e71a48752796beb4", moq: "50 kg (250gm)" }]
    };

    const Whey_Concentrate = {
        "Chocolate": [
            { percent: "35%", name: "Whey Concentrate", price: 195, quotation_price: 1360, product_id: "68ccfd5ee71a48752796b91a", moq: "25 kg" },
            { percent: "50%", name: "Whey Concentrate", price: 195, quotation_price: 1625, product_id: "68ccfd5ee71a48752796b91a", moq: "25 kg" },
            { percent: "60%", name: "Whey Concentrate", price: 195, quotation_price: 1805, product_id: "68ccfd7be71a48752796b920", moq: "25 kg" },
            { percent: "70%", name: "Whey Concentrate", price: 195, quotation_price: 1985, product_id: "68ccfdb3e71a48752796b942", moq: "25 kg" },
            { percent: "80%", name: "Whey Concentrate", price: 195, quotation_price: 2165, product_id: "68ccfde9e71a48752796b956", moq: "25 kg" }
        ],
        "Mawa Kulfi": [
            { percent: "35%", name: "Whey Concentrate", price: 195, quotation_price: 1295, product_id: "68ccfd0ce71a48752796b910", moq: "25 kg" },
            { percent: "50%", name: "Whey Concentrate", price: 195, quotation_price: 1565, product_id: "68ccfd43e71a48752796b916", moq: "25 kg" },
            { percent: "60%", name: "Whey Concentrate", price: 195, quotation_price: 1742, product_id: "68ccfd68e71a48752796b91c", moq: "25 kg" },
            { percent: "70%", name: "Whey Concentrate", price: 195, quotation_price: 1920, product_id: "68ccfda2e71a48752796b922", moq: "25 kg" },
            { percent: "80%", name: "Whey Concentrate", price: 195, quotation_price: 2100, product_id: "68ccfdbce71a48752796b94e", moq: "25 kg" }
        ],
        "Mocha Coffee": [
            { percent: "35%", name: "Whey Concentrate", price: 195, quotation_price: 1465, product_id: "68ccfd26e71a48752796b912", moq: "25 kg" },
            { percent: "50%", name: "Whey Concentrate", price: 195, quotation_price: 1730, product_id: "68ccfd56e71a48752796b918", moq: "25 kg" },
            { percent: "60%", name: "Whey Concentrate", price: 195, quotation_price: 1911, product_id: "68ccfd71e71a48752796b91e", moq: "25 kg" },
            { percent: "70%", name: "Whey Concentrate", price: 195, quotation_price: 2090, product_id: "68ccfdaae71a48752796b934", moq: "25 kg" },
            { percent: "80%", name: "Whey Concentrate", price: 195, quotation_price: 2270, product_id: "68ccfdc7e71a48752796b950", moq: "25 kg" }
        ],
        "Mango": [
            { percent: "35%", name: "Whey Concentrate", price: 195, quotation_price: 1295, product_id: "68ccff68e71a48752796bd07", moq: "25 kg" },
            { percent: "50%", name: "Whey Concentrate", price: 195, quotation_price: 1565, product_id: "68ccff74e71a48752796bd6b", moq: "25 kg" },
            { percent: "60%", name: "Whey Concentrate", price: 195, quotation_price: 1742, product_id: "68ccff7de71a48752796bd6d", moq: "25 kg" },
            { percent: "70%", name: "Whey Concentrate", price: 195, quotation_price: 1920, product_id: "68ccff88e71a48752796bdd1", moq: "25 kg" },
            { percent: "80%", name: "Whey Concentrate", price: 195, quotation_price: 2100, product_id: "68ccff93e71a48752796be35", moq: "25 kg" }
        ]
    };
    Whey_Concentrate["Belgium Chocolate"] = Whey_Concentrate["Chocolate"];
    Whey_Concentrate["Coffee"] = Whey_Concentrate["Mocha Coffee"];
    Whey_Concentrate["Vanilla Caramel"] = Whey_Concentrate["Chocolate"];
    Whey_Concentrate["Coconut Caramel"] = Whey_Concentrate["Chocolate"];
    Whey_Concentrate["Cookies and Cream"] = Whey_Concentrate["Chocolate"];

    const Whey_Blend = {
        "Chocolate": [
            { percent: "35%", name: "Whey Blend", price: 190, quotation_price: 1100, product_id: "68cd00efe71a48752796be7e", moq: "25 kg" },
            { percent: "40%", name: "Whey Blend", price: 190, quotation_price: 1250, product_id: "68cd0109e71a48752796be80", moq: "25 kg" },
            { percent: "50%", name: "Whey Blend", price: 190, quotation_price: 1745, product_id: "68cd0113e71a48752796be82", moq: "25 kg" },
            { percent: "60%", name: "Whey Blend", price: 190, quotation_price: 2195, product_id: "68cd011ee71a48752796be84", moq: "25 kg" }
        ],
        "Mawa Kulfi": [
            { percent: "35%", name: "Whey Blend", price: 190, quotation_price: 930, product_id: "68cd00b5e71a48752796be76", moq: "25 kg" },
            { percent: "40%", name: "Whey Blend", price: 190, quotation_price: 1170, product_id: "68cd00cae71a48752796be78", moq: "25 kg" },
            { percent: "50%", name: "Whey Blend", price: 190, quotation_price: 1665, product_id: "68cd00d8e71a48752796be7a", moq: "25 kg" },
            { percent: "60%", name: "Whey Blend", price: 190, quotation_price: 2115, product_id: "68cd00e5e71a48752796be7c", moq: "25 kg" }
        ],
        "Mocha Coffee": [
            { percent: "35%", name: "Whey Blend", price: 190, quotation_price: 1210, product_id: "68cd0128e71a48752796be86", moq: "25 kg" },
            { percent: "40%", name: "Whey Blend", price: 190, quotation_price: 1360, product_id: "68cd0131e71a48752796be88", moq: "25 kg" },
            { percent: "50%", name: "Whey Blend", price: 190, quotation_price: 1855, product_id: "68cd016fe71a48752796be8a", moq: "25 kg" },
            { percent: "60%", name: "Whey Blend", price: 190, quotation_price: 2305, product_id: "68cd017ae71a48752796be8c", moq: "25 kg" }
        ],
        "Mango": [
            { percent: "35%", name: "Whey Blend", price: 190, quotation_price: 930, product_id: "68cd0037e71a48752796be6e", moq: "25 kg" },
            { percent: "40%", name: "Whey Blend", price: 190, quotation_price: 1170, product_id: "68cd0041e71a48752796be70", moq: "25 kg" },
            { percent: "50%", name: "Whey Blend", price: 190, quotation_price: 1665, product_id: "68cd0113e71a48752796be82", moq: "25 kg" },
            { percent: "60%", name: "Whey Blend", price: 190, quotation_price: 2115, product_id: "68cd011ee71a48752796be84", moq: "25 kg" }
        ]
    };
    Whey_Blend["Belgium Chocolate"] = Whey_Blend["Chocolate"];
    Whey_Blend["Coffee"] = Whey_Blend["Mocha Coffee"];
    Whey_Blend["Vanilla Caramel"] = Whey_Blend["Chocolate"];
    Whey_Blend["Coconut Caramel"] = Whey_Blend["Chocolate"];
    Whey_Blend["Cookies and Cream"] = Whey_Blend["Chocolate"];

    const Whey_Isolate = {
        "Chocolate": [
            { percent: "35%", name: "Whey Isolate", price: 200, quotation_price: 1963, product_id: "68ccfea5e71a48752796b98e", moq: "25 kg" },
            { percent: "40%", name: "Whey Isolate", price: 200, quotation_price: 2140, product_id: "68ccfec4e71a48752796b994", moq: "25 kg" },
            { percent: "50%", name: "Whey Isolate", price: 200, quotation_price: 2492, product_id: "68ccfee0e71a48752796b9a8", moq: "25 kg" },
            { percent: "60%", name: "Whey Isolate", price: 200, quotation_price: 2845, product_id: "68ccfef4e71a48752796bb32", moq: "25 kg" },
            { percent: "70%", name: "Whey Isolate", price: 200, quotation_price: 3198, product_id: "68ccff2ae71a48752796bc5e", moq: "25 kg" },
            { percent: "80%", name: "Whey Isolate", price: 200, quotation_price: 3551, product_id: "68ccff4be71a48752796bc73", moq: "25 kg" }
        ],
        "Mawa Kulfi": [
            { percent: "35%", name: "Whey Isolate", price: 200, quotation_price: 1900, product_id: "68ccfe9ce71a48752796b98b", moq: "25 kg" },
            { percent: "40%", name: "Whey Isolate", price: 200, quotation_price: 2076, product_id: "68ccfebae71a48752796b992", moq: "25 kg" },
            { percent: "50%", name: "Whey Isolate", price: 200, quotation_price: 2429, product_id: "68ccfed6e71a48752796b99a", moq: "25 kg" },
            { percent: "60%", name: "Whey Isolate", price: 200, quotation_price: 2782, product_id: "68ccfef4e71a48752796bb32", moq: "25 kg" },
            { percent: "70%", name: "Whey Isolate", price: 200, quotation_price: 3135, product_id: "68ccff13e71a48752796bc5c", moq: "25 kg" },
            { percent: "80%", name: "Whey Isolate", price: 200, quotation_price: 3487, product_id: "68ccff3fe71a48752796bc71", moq: "25 kg" }
        ],
        "Mocha Coffee": [
            { percent: "35%", name: "Whey Isolate", price: 200, quotation_price: 2068, product_id: "68ccfeb1e71a48752796b990", moq: "25 kg" },
            { percent: "40%", name: "Whey Isolate", price: 200, quotation_price: 2245, product_id: "68ccfecde71a48752796b998", moq: "25 kg" },
            { percent: "50%", name: "Whey Isolate", price: 200, quotation_price: 2598, product_id: "68ccfeeae71a48752796bace", moq: "25 kg" },
            { percent: "60%", name: "Whey Isolate", price: 200, quotation_price: 2950, product_id: "68cd30fde71a48752796cb2d", moq: "25 kg" },
            { percent: "70%", name: "Whey Isolate", price: 200, quotation_price: 3303, product_id: "68ccff35e71a48752796bc6f", moq: "25 kg" },
            { percent: "80%", name: "Whey Isolate", price: 200, quotation_price: 3656, product_id: "68ccff5ae71a48752796bc7f", moq: "25 kg" }
        ],
        "Mango": [
            { percent: "35%", name: "Whey Isolate", price: 200, quotation_price: 1900, product_id: "68ccffe4e71a48752796be60", moq: "25 kg" },
            { percent: "40%", name: "Whey Isolate", price: 200, quotation_price: 2076, product_id: "68ccfff0e71a48752796be62", moq: "25 kg" },
            { percent: "50%", name: "Whey Isolate", price: 200, quotation_price: 2429, product_id: "68ccfff9e71a48752796be64", moq: "25 kg" },
            { percent: "60%", name: "Whey Isolate", price: 200, quotation_price: 2782, product_id: "68cd0004e71a48752796be66", moq: "25 kg" },
            { percent: "70%", name: "Whey Isolate", price: 200, quotation_price: 3135, product_id: "68cd000fe71a48752796be68", moq: "25 kg" },
            { percent: "80%", name: "Whey Isolate", price: 200, quotation_price: 3487, product_id: "68cd001fe71a48752796be6a", moq: "25 kg" }
        ]
    };
    Whey_Isolate["Belgium Chocolate"] = Whey_Isolate["Chocolate"];
    Whey_Isolate["Coffee"] = Whey_Isolate["Mocha Coffee"];
    Whey_Isolate["Vanilla Caramel"] = Whey_Isolate["Chocolate"];
    Whey_Isolate["Coconut Caramel"] = Whey_Isolate["Chocolate"];
    Whey_Isolate["Cookies and Cream"] = Whey_Isolate["Chocolate"];

    const today = new Date().toISOString().split("T")[0];
    const [formData, setFormData] = useState({
        date: today,
        name: "",
        mobile: "",
        email: "",
        address_line_1: "",
        address_line_2: "",
        city: "",
        pin_code: "",
        state: "",
        country: "",
        payment_method: "ONLINE" // Changed default to ONLINE
    });

    const [sampleQty, setSampleQty] = useState(1);
    const SAMPLE_BOX_PRICE = 999;

    useEffect(() => {
        if (lastSyncedQty !== sampleQty) {
            lastSyncedQty = sampleQty;
            addSampleToCart(sampleQty);
        }
    }, [sampleQty]);

    const [productLines] = useState(() => {
        const savedProducts = localStorage.getItem("ATC_Product");
        if (savedProducts) {
            try {
                const parsedProducts = JSON.parse(savedProducts);
                return parsedProducts.map(savedProduct => {
                    let productData = null;
                    
                    // Check in all product collections
                    // Check Whey Concentrate
                    if (!productData) {
                        for (const flavor in Whey_Concentrate) {
                            const found = Whey_Concentrate[flavor].find(p => p.product_id === savedProduct.product_id);
                            if (found) {
                                productData = {
                                    ...found,
                                    name: `${found.name} ${found.percent} (${flavor})`
                                };
                                break;
                            }
                        }
                    }

                    // If not found, check in Whey_Blend
                    if (!productData) {
                        for (const flavor in Whey_Blend) {
                            const found = Whey_Blend[flavor].find(p => p.product_id === savedProduct.product_id);
                            if (found) {
                                productData = {
                                    ...found,
                                    name: `${found.name} ${found.percent} (${flavor})`
                                };
                                break;
                            }
                        }
                    }

                    // If still not found, check in Whey_Isolate
                    if (!productData) {
                        for (const flavor in Whey_Isolate) {
                            const found = Whey_Isolate[flavor].find(p => p.product_id === savedProduct.product_id);
                            if (found) {
                                productData = {
                                    ...found,
                                    name: `${found.name} ${found.percent} (${flavor})`
                                };
                                break;
                            }
                        }
                    }

                    // Check other products if still not found
                    if (!productData) {
                        // Check Mass Gainer
                        for (const flavor in Mass_Gainer) {
                            const found = Mass_Gainer[flavor].find(p => p.product_id === savedProduct.product_id);
                            if (found) {
                                productData = { ...found, name: `${found.name} (${flavor})` };
                                break;
                            }
                        }

                        // Check Peanut Butter
                        if (!productData) {
                            for (const flavor in Peanut_Butter) {
                                const found = Peanut_Butter[flavor].find(p => p.product_id === savedProduct.product_id);
                                if (found) {
                                    productData = { ...found, name: `${found.name} (${flavor})` };
                                    break;
                                }
                            }
                        }

                        // Check Creatine
                        if (!productData) {
                            for (const flavor in Creatine) {
                                const found = Creatine[flavor].find(p => p.product_id === savedProduct.product_id);
                                if (found) {
                                    productData = { ...found, name: `${found.name} (${flavor})` };
                                    break;
                                }
                            }
                        }

                        // Check Pre-Workout
                        if (!productData) {
                            for (const flavor in pre_Workout) {
                                const found = pre_Workout[flavor].find(p => p.product_id === savedProduct.product_id);
                                if (found) {
                                    productData = { ...found, name: `${found.name} (${flavor})` };
                                    break;
                                }
                            }
                        }

                        // Check Energy Drink
                        if (!productData) {
                            for (const flavor in Energy_Drink) {
                                const found = Energy_Drink[flavor].find(p => p.product_id === savedProduct.product_id);
                                if (found) {
                                    productData = { ...found, name: `${found.name} (${flavor})` };
                                    break;
                                }
                            }
                        }

                        // Check EAA
                        if (!productData) {
                            for (const flavor in Eaa) {
                                const found = Eaa[flavor].find(p => p.product_id === savedProduct.product_id);
                                if (found) {
                                    productData = { ...found, name: `${found.name} (${flavor})` };
                                    break;
                                }
                            }
                        }

                        // Check BCAA
                        if (!productData) {
                            for (const flavor in Bcaa) {
                                const found = Bcaa[flavor].find(p => p.product_id === savedProduct.product_id);
                                if (found) {
                                    productData = { ...found, name: `${found.name} (${flavor})` };
                                    break;
                                }
                            }
                        }
                    }

                    return {
                        product_id: savedProduct.product_id,
                        product: productData?.name || "",
                        quantity: savedProduct.quantity,
                        price: productData?.price || 0,
                        quotation_price: productData?.quotation_price || 0,
                        moq: productData?.moq || "",
                        total: (productData?.price || 0) * (savedProduct.quantity || 0)  // Changed from quotation_price to price
                    };
                });
            } catch (e) {
                // Initialize with empty values
                return [{
                    product_id: "",
                    product: "",
                    name: "",
                    flavor: "",
                    percent: "",
                    quantity: 1,
                    price: 0,
                    quotation_price: 0,
                    moq: "",
                    total: 0
                }];
            }
        }
        // Initialize with empty values when no products are saved
        return [{
            product_id: "",
            product: "",
            name: "",
            flavor: "",
            percent: "",
            quantity: 1,
            price: 0,
            quotation_price: 0,
            moq: "",
            total: 0
        }];
    });



    /*
    const handleProductChange = (index, field, value) => {
        const newProductLines = [...productLines];

        if (field === 'product') {
            let selected = null;
            let productData = null;

            // If empty value, reset the line
            if (!value) {
                newProductLines[index] = {
                    product_id: "",
                    product: "",
                    name: "",
                    flavor: "",
                    percent: "",
                    quantity: 1,
                    price: 0,
                    quotation_price: 0,
                    moq: "",
                    total: 0
                };
                setProductLines(newProductLines);
                return;
            }

            // Determine product type and data
            if (value.includes("Whey Blend")) {
                productData = Whey_Blend;
            } else if (value.includes("Whey Concentrate")) {
                productData = Whey_Concentrate;
            } else if (value.includes("Whey Isolate")) {
                productData = Whey_Isolate;
            } else if (value.includes("Mass Gainer")) {
                productData = Mass_Gainer;
            } else if (value.includes("Peanut Butter")) {
                productData = Peanut_Butter;
            } else if (value.includes("Creatine")) {
                productData = Creatine;
            } else if (value.includes("Pre-Workout")) {
                productData = pre_Workout;
            } else if (value.includes("EAA")) {
                productData = Eaa;
            } else if (value.includes("BCAA")) {
                productData = Bcaa;
            } else if (value.includes("Energy Drink")) {
                productData = Energy_Drink;
            }

            if (productData) {
                const firstFlavor = Object.keys(productData)[0];
                const firstVariant = productData[firstFlavor][0];
                selected = {
                    ...firstVariant,
                    flavor: firstFlavor
                };
            }

            if (selected) {
                newProductLines[index] = {
                    ...newProductLines[index],
                    product_id: selected.product_id,
                    product: value,
                    name: selected.name,
                    flavor: selected.flavor,
                    percent: selected.percent,
                    quantity: 1,
                    price: selected.price,
                    quotation_price: selected.quotation_price,
                    moq: selected.moq,
                    total: selected.price
                };
            }
        } else if (field === 'quantity') {
            const numValue = parseInt(value) || 0;
            newProductLines[index].quantity = numValue;
            newProductLines[index].total = newProductLines[index].price * numValue;
        }

        setProductLines(newProductLines);

        // Store only product IDs in localStorage
        const validProducts = newProductLines.filter(line => line.product && line.quantity);
        if (validProducts.length > 0) {
            const productIdsToStore = validProducts.map(line => ({
                product_id: line.product_id,
                quantity: parseInt(line.quantity) || 0
            }));
            localStorage.setItem("ATC_Product", JSON.stringify(productIdsToStore));
        } else {
            localStorage.removeItem("ATC_Product");
        }
    };

    const addProductLine = () => {
        if (productLines.length >= 9) {
            toast.error('Maximum 9 products can be added');
            return;
        }

        // Check if previous line has a product selected
        const lastLine = productLines[productLines.length - 1];
        if (!lastLine.product) {
            toast.error('Please select a product first');
            return;
        }
        
        setProductLines([
            ...productLines,
            {
                product_id: "",
                product: "",
                name: "",
                flavor: "",
                percent: "",
                quantity: 1,
                price: 0,
                quotation_price: 0,
                moq: "",
                total: 0
            }
        ]);
    };


    const removeProductLine = (index) => {
        if (productLines.length > 1) {
            Swal.fire({
                title: 'Are you sure?',
                text: "Do you want to remove this product?",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, delete it!',
                background: '#fff',
                color: '#1a1a1a'
            }).then((result) => {
                if (result.isConfirmed) {
                    const newProductLines = productLines.filter((_, i) => i !== index);
                    setProductLines(newProductLines);

                    const validProducts = newProductLines.filter(line => line.product && line.quantity);
                    if (validProducts.length > 0) {
                        const productIdsToStore = validProducts.map(line => ({
                            product_id: line.product_id,
                            quantity: parseInt(line.quantity) || 1
                        }));
                        localStorage.setItem("ATC_Product", JSON.stringify(productIdsToStore));
                    } else {
                        localStorage.removeItem("ATC_Product");
                    }

                    Swal.fire({
                        title: 'Deleted!',
                        text: 'Product has been removed.',
                        icon: 'success',
                        timer: 1500,
                        showConfirmButton: false
                    });
                }
            });
        } else {
            // Initialize with empty product line
            setProductLines([{
                product_id: "",
                product: "",
                name: "",
                flavor: "",
                percent: "",
                quantity: 1,
                price: 0,
                quotation_price: 0,
                moq: "",
                total: 0
            }]);
            localStorage.removeItem("ATC_Product");
            Swal.fire({
                title: 'Cleared',
                text: 'Product data has been cleared.',
                icon: 'success',
                timer: 1500,
                showConfirmButton: false
            });
        }
    };
    */

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };


    const validateForm = () => {
        toast.dismiss();

        const validations = [
            { condition: !formData.name.trim(), message: "Name is required" },
            { condition: !/^\d{10}$/.test(formData.mobile), message: "Enter a valid 10-digit mobile number" },
            { condition: !/\S+@\S+\.\S+/.test(formData.email), message: "Enter a valid email address" },
            { condition: !formData.address_line_1.trim(), message: "Street address is required" },
            { condition: !formData.address_line_2.trim(), message: "Area/Colony is required" },
            { condition: !/^\d{6}$/.test(formData.pin_code), message: "Enter a valid 6-digit pin code" },
            { condition: /\d/.test(formData.city), message: "City name should not contain numbers" },
            { condition: /\d/.test(formData.state), message: "State name should not contain numbers" },
            { condition: /\d/.test(formData.country), message: "Country name should not contain numbers" },
        ];

        for (const validation of validations) {
            if (validation.condition) {
                toast.error(validation.message);
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

        setIsLoading(true);
        try {
            // Load Razorpay script only for online payment
            if (formData.payment_method === "ONLINE") {
                const res = await loadRazorpay();
                if (!res) {
                    toast.error('Razorpay SDK failed to load');
                    setIsLoading(false);
                    return;
                }
            }

            const orderData = {
                products: [
                    {
                        id: "68cd035ee71a48752796be00",
                        name: "Gomzi Life Sciences Sample Box",
                        price: SAMPLE_BOX_PRICE,
                        quantity: sampleQty,
                        total: SAMPLE_BOX_PRICE * sampleQty
                    }
                ],
                orderTotal: SAMPLE_BOX_PRICE * sampleQty,
                customerInfo: {
                    name: formData.name,
                    email: formData.email,
                    mobile: formData.mobile,
                    address: {
                        street: formData.address_line_1,
                        area: formData.address_line_2,
                        city: formData.city,
                        state: formData.state,
                        country: formData.country,
                        pinCode: formData.pin_code
                    }
                },
                address_line_1: formData.address_line_1,
                address_line_2: formData.address_line_2,
                city: formData.city,
                pin_code: formData.pin_code,
                state: formData.state,
                country: formData.country,
                payment_mode: formData.payment_method,
                name: formData.name,
                email: formData.email,
                mobile: formData.mobile,
                sampleQty: sampleQty
            };

            await createOrder(orderData);

        } catch (error) {
            toast.error('Something went wrong. Please try again later.');
        } finally {
            setIsLoading(false);
        }
    };


    const downloadQuotationPDF = async () => {
        const quotationContent = document.getElementById("quotationContent");
        if (!quotationContent) {
            console.error("Quotation content not found.");
            return;
        }

        try {
            const doc = new jsPDF({
                orientation: "portrait",
                unit: "mm",
                format: "a4",
            });

            const margin = 10;
            const contentWidth = doc.internal.pageSize.getWidth() - 2 * margin;
            const contentHeight = doc.internal.pageSize.getHeight() - 2 * margin;

            const canvas = await html2canvas(quotationContent, { scale: 2, useCORS: true });
            const imgData = canvas.toDataURL("image/jpeg", 1);

            doc.addImage(imgData, "JPEG", margin, margin, contentWidth, contentHeight);

            // Create Blob and trigger download
            const pdfBlob = doc.output("blob");
            const url = window.URL.createObjectURL(pdfBlob);
            const link = document.createElement("a");
            link.href = url;
            link.setAttribute("download", "quotation.pdf");
            document.body.appendChild(link);
            link.click();
            link.remove();
            window.URL.revokeObjectURL(url);
        } catch (error) {
            console.error("Error generating PDF:", error);
            // Even if PDF generation fails, we shouldn't prevent the order completion
        }
    };

    useEffect(() => {
        if (!isUserLoggedIn()) {
            window.location.href = '/';
            toast.dismiss();
            toast.error('Please login to access this page');
        } else {

            const userInfo = JSON.parse(localStorage.getItem('user_info'));

            if (userInfo) {
                setFormData(prevData => ({
                    ...prevData,
                    name: userInfo.user.first_name + " " + userInfo.user.last_name || '',
                    email: userInfo.user.email || '',
                    mobile: userInfo.user.mobile || '',
                }));
            }
        }
    }, []);

    return (
        <>
            <div className='contact-us-form modal-form mx-auto my-3 px-2 ' >

                <h2 className="text-center my-4" style={{ color: '#fff' }}>Book Your Sample Now</h2>

                <form onSubmit={(e) => e.preventDefault()}>
                    <div className="row overflow-hidden p-1">

                        {/* ── Sample Box Info Card ── */}
                        <div className="row mx-0 mb-4 mt-2">
                            <div className="col-12 px-2">
                                <div
                                    className="px-4 py-3"
                                    style={{
                                        background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)',
                                        border: '1px solid rgba(144, 238, 144, 0.3)',
                                        borderRadius: '12px',
                                        boxShadow: '0 4px 20px rgba(0,0,0,0.3)'
                                    }}
                                >
                                    {/* Top row: icon + name + price */}
                                    <div className="d-flex align-items-center justify-content-between mb-3">
                                        <div className="d-flex align-items-center gap-3">
                                            <div style={{
                                                background: 'rgba(144, 238, 144, 0.1)',
                                                borderRadius: '10px',
                                                padding: '10px 12px',
                                                border: '1px solid rgba(144, 238, 144, 0.2)'
                                            }}>
                                                <i className="fas fa-box-open fs-4" style={{ color: '#90ee90' }}></i>
                                            </div>
                                            <div>
                                                <div className="fw-bold" style={{ color: '#fff', fontSize: '16px' }}>
                                                    Gomzi Life Sciences Sample Box
                                                </div>
                                                <div className="mt-1" style={{ color: 'rgba(255,255,255,0.5)', fontSize: '13px' }}>
                                                    Full assorted supplement sample kit
                                                </div>
                                            </div>
                                        </div>
                                        <div className="text-end">
                                            <div className="fw-bold" style={{ color: '#90ee90', fontSize: '22px' }}>₹{SAMPLE_BOX_PRICE * sampleQty}</div>
                                            <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: '11px' }}>₹{SAMPLE_BOX_PRICE} × {sampleQty}</div>
                                        </div>
                                    </div>

                                    {/* Bottom row: qty controls */}
                                    <div className="d-flex align-items-center gap-3">
                                        <span style={{ color: 'rgba(255,255,255,0.6)', fontSize: '14px' }}>Quantity:</span>
                                        <div className="d-flex align-items-center" style={{
                                            background: 'rgba(255,255,255,0.05)',
                                            border: '1px solid rgba(144,238,144,0.25)',
                                            borderRadius: '8px',
                                            overflow: 'hidden'
                                        }}>
                                            <button
                                                type="button"
                                                onClick={() => setSampleQty(q => Math.max(1, q - 1))}
                                                style={{
                                                    background: 'transparent',
                                                    border: 'none',
                                                    color: '#90ee90',
                                                    width: '36px',
                                                    height: '36px',
                                                    fontSize: '18px',
                                                    cursor: 'pointer',
                                                    lineHeight: 1
                                                }}
                                            >−</button>
                                            <input
                                                type="number"
                                                min="1"
                                                value={sampleQty}
                                                onChange={(e) => setSampleQty(Math.max(1, parseInt(e.target.value) || 1))}
                                                className="hide-spin-buttons"
                                                style={{
                                                    width: '48px',
                                                    textAlign: 'center',
                                                    background: 'transparent',
                                                    border: 'none',
                                                    color: '#fff',
                                                    fontSize: '15px',
                                                    fontWeight: '600',
                                                    outline: 'none'
                                                }}
                                            />
                                            <button
                                                type="button"
                                                onClick={() => setSampleQty(q => q + 1)}
                                                style={{
                                                    background: 'transparent',
                                                    border: 'none',
                                                    color: '#90ee90',
                                                    width: '36px',
                                                    height: '36px',
                                                    fontSize: '18px',
                                                    cursor: 'pointer',
                                                    lineHeight: 1
                                                }}
                                            >+</button>
                                        </div>
                                        <span style={{ color: 'rgba(255,255,255,0.4)', fontSize: '13px' }}>
                                            Total: <span style={{ color: '#90ee90', fontWeight: '600' }}>₹{SAMPLE_BOX_PRICE * sampleQty}</span>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <h5 className='mb-4 ms-2'>Personal Details :</h5>

                        <div className="form-group col-12 col-md-4 mb-3">
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

                        <div className="form-group col-6 col-md-4 mb-3">
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

                        <div className="form-group col-6 col-md-4 mb-3">
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

                        <div className="form-group col-6 col-md-4 mb-3">
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
                        <div className="form-group col-6 col-md-4 mb-3">
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
                        <div className="form-group col-6 col-sm-3 col-md-4 mb-3">
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
                        <div className="form-group col-6 col-sm-3 col-md-4 mb-3">
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
                        <div className="form-group col-6 col-sm-3 col-md-4 mb-3">
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
                        <div className="form-group col-6 col-sm-3 col-md-4 mb-3">
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


                        <div className="col-12 text-center mt-4">
                            <div className="contact-form-btn">
                                <button
                                    type="button"
                                    className="btn-highlighted w-100 w-md-50 responsive-btn"
                                    onClick={handleBookSample}
                                    disabled={isLoading}
                                    style={{ position: 'relative', opacity: isLoading ? 0.7 : 1 }}
                                >
                                    {isLoading ? (
                                        <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
                                            <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true" style={{ marginRight: 8 }}></span>
                                            Loading...
                                        </span>
                                    ) : (
                                        <>
                                            <span className="btn-text-desktop">Book My Sample Now</span>
                                            <span className="btn-text-mobile">Book My Sample Now</span>
                                        </>
                                    )}
                                </button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>

            <div
                className="col-md-6 mt-3"
                style={{ height: '0px', overflow: 'hidden', position: 'absolute', left: '-9999px' }}
            >
                <div id="quotationContent">
                    <div className="card">
                        <div className="card-body">
                            <div>
                                <p className="fw-bold fs-5 text-center mb-2">QUOTATION</p>
                                <div className="border border-black pdf-h">
                                    {/* HEADER */}
                                    <div className="invoice-header row mt-2 p-3 align-items-start">
                                        <div className="col-md-8">
                                            <p className="fs-4 mb-1">
                                                <b>Gomzi Lifesciences LLP</b>
                                            </p>

                                            <p
                                                style={{ fontSize: "12px" }}
                                                className="mt-1 mb-1"
                                            >
                                                323 3'rd floor, Laxmi Enclave-1, opp. Gajera School, Chitrakut
                                                Society, Katargam, Surat, Gujarat 395004
                                            </p>

                                            <p
                                                style={{ fontSize: "12px" }}
                                                className="mb-1"
                                            >
                                                Phone no.: <strong>8320077993</strong>
                                            </p>
                                            <p
                                                style={{ fontSize: "12px" }}
                                                className="mb-1"
                                            >
                                                Email:{" "}
                                                <strong id="emailLabel">Sales@Gomzilifesciences.In</strong>
                                            </p>
                                            <p
                                                style={{ fontSize: "12px" }}
                                                className="mb-1"
                                            >
                                                GSTIN: <strong>24ABBFG3336P1Z9</strong>, State: Gujarat
                                            </p>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="text-center">
                                                <img
                                                    src="/assets/images/logo/gomzi-nutrition-black.png"
                                                    width="60%"
                                                    alt="Company Logo"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    {/* BILL TO */}
                                    <div className="invoice-details d-flex">
                                        <div className="col-md-5 border border-black px-0">
                                            <div className="quotation-bill-to border-bottom border-black">
                                                Bill To
                                            </div>
                                            <strong>
                                                <p
                                                    className="mt-2 px-2"
                                                    style={{ fontSize: "14px" }}
                                                    id="inv-name"
                                                >
                                                    {formData.name || "-"}
                                                </p>
                                            </strong>
                                            <strong>
                                                <p
                                                    className="px-2"
                                                    style={{ fontSize: "14px" }}
                                                    id="inv-email"
                                                >
                                                    {formData.email || "-"}
                                                </p>
                                            </strong>
                                        </div>
                                        <div className="col-md-7 border border-black text-right">
                                            <div className="bill-name-date px-2">
                                                <p>
                                                    <strong>Date :-</strong>
                                                    <span id="inv-date">{formData.date || "-"}</span>
                                                </p>
                                                <p>
                                                    <strong>Phone No. :-</strong>
                                                    <span id="inv-mobile">{formData.mobile || "-"}</span>
                                                </p>
                                                <p>
                                                    <strong>Address :-</strong>
                                                    <span id="inv-address">
                                                        {formData.address_line_1 +
                                                            " " +
                                                            formData.address_line_2 +
                                                            " " +
                                                            formData.city +
                                                            " " +
                                                            formData.state || "-"}
                                                    </span>
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* ITEMS TABLE */}
                                    <div className="invoice-items quotation-items">
                                        <table className="border border-black w-100">
                                            <thead>
                                                <tr>
                                                    <th className="border border-black">Product</th>
                                                    <th className="border border-black">Rate</th>
                                                    <th className="border border-black">Minimum Order Quantity</th>
                                                    {/* <th className="border border-black">Quantity</th> */}
                                                    <th className="border border-black">Total</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {productLines?.length === 0 ? (
                                                    <tr>
                                                        <td className="border border-black">-</td>
                                                        <td className="border border-black">-</td>
                                                        <td className="border border-black">-</td>
                                                        <td className="border border-black">-</td>
                                                        <td className="border border-black">-</td>
                                                    </tr>
                                                ) : (
                                                    productLines?.map((item, index) => {
                                                        if (!item || !item.product) return null;

                                                        const displayProduct = item.product;
                                                        const quotationPrice = item.quotation_price || 0;
                                                        const moqStr = item.moq || "25 kg";

                                                        // Extract the numerical value from MOQ string
                                                        const moqMatch = moqStr.match(/\d+/);
                                                        const moqNumber = moqMatch ? parseInt(moqMatch[0]) : 0;
                                                        const total = quotationPrice * moqNumber;

                                                        return (
                                                            <tr key={index}>
                                                                <td>{displayProduct}</td>
                                                                <td>{quotationPrice || "-"}</td>
                                                                <td>{moqStr || "-"}</td>
                                                                <td>{total || "-"}</td>
                                                            </tr>
                                                        );
                                                    })
                                                )}
                                            </tbody>
                                        </table>
                                    </div>

                                    {/* TOTAL */}
                                    <div className="invoice-details d-flex">
                                        <div className="col-md-12 border border-black px-0">
                                            <div className="quotation-bill-to px-2 border-bottom border-black">
                                                Amount :-
                                            </div>
                                            <div className="bill-name-date px-2">
                                                <p>
                                                    <strong>Total Amount :-</strong>
                                                    <span className="inv-total">
                                                        {productLines?.reduce((sum, line) => {
                                                            if (!line || !line.product) return sum;

                                                            const quotationPrice = line.quotation_price || 0;
                                                            const moqStr = line.moq || "25 kg";
                                                            
                                                            // Safely extract the number from MOQ string
                                                            const moqMatch = moqStr.match(/\d+/);
                                                            const moqNumber = moqMatch ? parseInt(moqMatch[0]) : 0;
                                                            
                                                            return sum + (quotationPrice * moqNumber);
                                                        }, 0) || "-"}
                                                    </span>
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* TERMS & ADMIN */}
                                    <div className="invoice-details d-flex">
                                        <div className="col-md-7 border border-black px-0">
                                            <div className="quotation-bill-to px-2 border-bottom border-black">
                                                Terms and Conditions :-
                                            </div>
                                            <div className="px-2">
                                                <p style={{ fontSize: "13px" }} className="mt-1">
                                                    <strong>*</strong> GST will be applicable additionally on all
                                                    payments.
                                                </p>
                                                <p style={{ fontSize: "13px" }}>
                                                    <strong>*</strong> Courier charges will be borne by the
                                                    customer additionally.
                                                </p>
                                                <p style={{ fontSize: "13px" }}>
                                                    <strong>*</strong> Payment made is non-refundable,
                                                    non-transferable, and non-cancellable.
                                                </p>
                                                <p style={{ fontSize: "13px" }}>
                                                    <strong>*</strong> 70% advance payment is required to confirm
                                                    the order, and the balance 30% payment is due upon delivery,
                                                    which will be verified through a video shared with the
                                                    customer.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="col-md-5 border border-black px-0">
                                            <div className="quotation-bill-to px-2 border-bottom border-black">
                                                Administrator :-
                                            </div>
                                            <div className="px-2">
                                                <img
                                                    src="assets/images/sign/goutam_sir.png"
                                                    alt="sign"
                                                    width="100%"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    {/* PAYMENT DETAILS */}
                                    <div className="invoice-details d-flex">
                                        <div className="col-12 border border-black px-0">
                                            <div className="bill-to px-2 border-bottom border-black">
                                                Payment Details
                                            </div>
                                            <div className="d-flex">
                                                <div className="p-2">
                                                    <img
                                                        src="/assets/images/payment-qr-code/payment_scan.png"
                                                        alt="payment"
                                                        width="120px"
                                                    />
                                                </div>
                                                <div className="bill-name-date px-2">
                                                    <p className="my-1">
                                                        <strong>Bank Name: Axis Bank Adajan</strong>
                                                    </p>
                                                    <p className="my-1">
                                                        <strong>Account Holder Name: Gomzi life Science LLP</strong>
                                                    </p>
                                                    <p className="my-1">
                                                        <strong>Account Number: 924020043956068</strong>
                                                    </p>
                                                    <p className="my-1">
                                                        <strong>IFSC: UTIB0000566</strong>
                                                    </p>
                                                    <p className="my-1">
                                                        <strong>Account Type: Current Account</strong>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* END */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Toaster
                position="top-right"
                toastOptions={{
                    duration: 3000,
                    style: {
                        background: '#fff',
                        color: '#333',
                    },
                }}
            />
        </>

    )
}

export default Booking