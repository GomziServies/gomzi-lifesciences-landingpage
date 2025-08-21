import React, { useState, useEffect } from 'react';
import NutritionHeader from '../components/partials/Header/nutritionsheader'
import { Toaster, toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { createOrder } from '../assets/js/config/api';
import Swal from 'sweetalert2';
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import '../assets/css/style.css';
import { isUserLoggedIn } from '../utils/auth';

const Booking = () => {
    const navigate = useNavigate();

    useEffect(() => {
        if (!isUserLoggedIn()) {
            navigate('/', { replace: true });
            toast.dismiss();
            toast.error('Please login to access this page');
        }
    }, [navigate]);

    const productsData = React.useMemo(() => [
        { name: "Whey Protein", price: 1170 },
        { name: "Whey Blend", price: 1300 },
        { name: "Whey Concentrate", price: 1630 },
        { name: "Whey Isolate", price: 3000 },
        { name: "Peanut Butter", price: 150 },
        { name: "Mass Gainer", price: 420 },
        { name: "Creatine - flavoured", price: 350 },
        { name: "Creatine - Unflavoured", price: 320 },
        { name: "Pre-Workout", price: 440 },
        { name: "EAA", price: 490 },
        { name: "BCAA", price: 490 },
        { name: "Protein Bar", price: 55 },
        { name: "Energy Drink - Bottle", price: 30 },
        { name: "Energy Drink - Can", price: 45 },
        { name: "Multivitamin Tablets", price: 340 },
        { name: "Omega 3", price: 225 },
        { name: "Ashwagandha", price: 100 },
        { name: "Moringa Tablets", price: 75 },
        { name: "Shilajit", price: 70 },

    ], []);

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
    });

    const [productLines, setProductLines] = useState([
        { id: 1, product: "", quantity: "", price: 0, total: 0 }
    ]);

    const handleProductChange = (index, field, value) => {
        const newProductLines = [...productLines];

        if (field === 'product') {

            // Set default quantity to 1 when product is selected
            newProductLines[index] = {
                ...newProductLines[index],
                product: value,
                quantity: "1"
            };

            const selected = productsData.find(p => p.name === value);
            if (selected) {
                newProductLines[index].price = selected.price;
                newProductLines[index].total = selected.price * 1;
            }
        } else if (field === 'quantity') {
            newProductLines[index][field] = value;
            const selected = productsData.find(p => p.name === newProductLines[index].product);
            if (selected) {
                newProductLines[index].price = selected.price;
                newProductLines[index].total = selected.price * (value || 1);
            }
        }

        setProductLines(newProductLines);
    };

    const addProductLine = () => {
        if (productLines.length >= 9) {
            toast.error('Maximum 9 products can be added');
            return;
        }
        setProductLines([
            ...productLines,
            { product: "", quantity: "", price: 0, total: 0 }
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
                    Swal.fire({
                        title: 'Deleted!',
                        text: 'Product has been removed.',
                        icon: 'success',
                        background: '#fff',
                        color: ' #1a1a1a',
                        timer: 1500,
                        showConfirmButton: false
                    });
                }
            });
        } else {
            Swal.fire({
                title: 'Cannot Remove',
                text: 'At least one product is required',
                icon: 'error',
                background: '#1a1a1a',
                color: '#fff',
                timer: 1500,
                showConfirmButton: false
            });
        }
    };

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

        const productValidation = productLines.every((line, index) => {
            if (!line.product) {
                toast.error(`Select a product for line ${index + 1}`);
                return false;
            }
            if (!line.quantity) {
                toast.error(`Enter quantity for ${line.product || "this product"}`);
                return false;
            }

            return true;
        });

        if (!productValidation) return false;


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

            const orderData = {
                products: productLines.map(line => ({
                    name: line.product,
                    price: line.price,
                    quantity: parseInt(line.quantity),
                    total: line.total
                })),
                orderTotal: productLines.reduce((sum, line) => sum + (line.total || 0), 0),
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
                payment_mode: 'ONLINE',
                name: formData.name,
                email: formData.email,
                mobile: formData.mobile,
                downloadQuotationPDF: downloadQuotationPDF
            };

            await createOrder(orderData);

        } catch (error) {
            toast.error('Something went wrong. Please try again later.');
        }
    };


    const downloadQuotationPDF = async () => {

        const quotationContent = document.getElementById("quotationContent");
        if (quotationContent) {


            const doc = new jsPDF({
                orientation: 'portrait',
                unit: 'mm',
                format: 'a4',
            })

            // Add margins
            const margin = 10
            const contentWidth = doc.internal.pageSize.getWidth() - 2 * margin
            const contentHeight = doc.internal.pageSize.getHeight() - 2 * margin

            html2canvas(quotationContent, { scale: 2, useCORS: true }).then((canvas) => {
                const imgData = canvas.toDataURL('image/jpeg', 1)

                doc.addImage(imgData, 'jpeg', margin, margin, contentWidth, contentHeight)

                const pdfName = `Quotation_${formData?.name || "Customer"}.pdf`
                doc.save(pdfName)

            })
        } else {
            console.error('Quotation content not found.')
        }
    };

    return (
        <>
            <NutritionHeader />
            <div className="container-fluid h-105"></div>

            <div className='contact-us-form modal-form  mx-auto m-5' >

                <h2 className="text-center m-5" style={{ color: '#fff' }}>Book Your Sample Now</h2>

                <form onSubmit={(e) => e.preventDefault()}>
                    <div className="row overflow-hidden">
                        {/* <div className="form-group col-md-6 mb-4">
                                <input
                                    type="date"
                                    name="date"
                                    className="form-control bg-dark text-light"
                                    placeholder="Date"
                                    value={formData.date}
                                    onChange={handleChange}
                                    required
                                />
                            </div> */}

                        <h5 className='m-4 mb-5 ms-3 p-0'>Create Quotation :</h5>

                        <div className="form-group col-md-4 mb-4">
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

                        <div className="form-group col-md-4 mb-4">
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

                        <div className="form-group col-md-4 mb-4">
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

                        <div className="form-group col-md-4 mb-4">
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
                        <div className="form-group col-md-4 mb-4">
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
                        <div className="form-group col-md-4 mb-4">
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
                        <div className="form-group col-md-4 mb-4">
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
                        <div className="form-group col-md-4 mb-4">
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
                        <div className="form-group col-md-4 mb-4">
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

                        <h5 className='m-4 mt-2 mb-5 ms-3 p-0'>Supplements :</h5>

                        {productLines.map((line, index) => (
                            <div key={line.id} className="row mx-0">
                                {/* Product select */}
                                <div className="form-group col-md-4 mb-4">
                                    <select
                                        className="form-control bg-dark text-light"
                                        value={line.product}
                                        onChange={(e) => handleProductChange(index, 'product', e.target.value)}
                                        required
                                    >
                                        <option value="">Select Product</option>
                                        {productsData.map((p) => {
                                            // Check if this product is already selected in any other line
                                            const isSelected = productLines.some(
                                                (productLine, i) => i !== index && productLine.product === p.name
                                            );
                                            // Only show option if it's not already selected
                                            return !isSelected && (
                                                <option key={p.name} value={p.name}>{p.name}</option>
                                            );
                                        })}
                                    </select>
                                </div>

                                {/* Quantity */}
                                <div className="form-group col-md-2 mb-4">
                                    <input
                                        type="number"
                                        className="form-control bg-dark text-light"
                                        placeholder="Quantity"
                                        value={line.quantity}
                                        onChange={(e) => handleProductChange(index, 'quantity', e.target.value)}
                                        min="1"
                                        required
                                    />
                                </div>

                                {/* Price */}
                                <div className="form-group col-md-2 mb-4">
                                    <input
                                        type="text"
                                        className="form-control bg-dark text-light"
                                        value={line.price ? `₹${line.price}` : ""}
                                        placeholder="Rate"
                                        readOnly
                                    />
                                </div>

                                {/* Total Price => col-3 if single OR old lines, else col-2 for last line */}
                                <div
                                    className={`form-group ${productLines.length === 1 || index !== productLines.length - 1
                                        ? "col-md-3"
                                        : "col-md-2"
                                        } mb-4`}
                                >
                                    <input
                                        type="text"
                                        className="form-control bg-dark text-light"
                                        value={line.total ? `₹${line.total}` : ""}
                                        placeholder="Total Price"
                                        readOnly
                                    />
                                </div>

                                {/* Delete button => hide if only 1 line, else show for all */}
                                {productLines.length > 1 && (
                                    <div className="form-group col-md-1 mb-4">
                                        <button
                                            type="button"
                                            className="form-control bg-dark text-light border border-1 border-danger d-flex justify-content-center align-items-center"
                                            onClick={() => removeProductLine(index)}
                                        >
                                            <i className="fas fa-trash-alt fs-5 text-danger"></i>
                                        </button>

                                    </div>
                                )}

                                {/* Add button => only last line */}
                                {index === productLines.length - 1 && (
                                    <div className="form-group col-md-1 mb-4">
                                        <button
                                            type="button"
                                            className="form-control bg-dark text-light border border-1 border-primary d-flex justify-content-center align-items-center"
                                            onClick={addProductLine}
                                        >
                                            <i className="fas fa-plus fs-5 text-primary"></i>
                                        </button>

                                    </div>
                                )}
                            </div>
                        ))}


                        <div className="col-lg-12 text-center mt-4">
                            <div className="contact-form-btn">
                                <button
                                    type="button"
                                    className="btn-highlighted w-50"
                                    onClick={() => handleBookSample()
                                    }

                                >
                                    Get a Quotation & Book My Sample Now
                                </button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>

            <div
                className="col-md-6 mt-3"
                style={{ height: '0px', overflow: 'hidden' }}
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
                                                    src="/assets/images/logo/gomzi-nutrition.png"
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
                                                    <th className="border border-black">Quantity</th>
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
                                                    </tr>
                                                ) : (
                                                    productLines?.map((item, index) => (
                                                        <tr key={index}>
                                                            <td>{item.product}</td>
                                                            <td>{item.price || "-"}</td>
                                                            <td>{item.quantity || "-"}</td>
                                                            <td>{item.total ? item.total : "-"}</td>
                                                        </tr>
                                                    ))
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
                                                        {productLines?.reduce(
                                                            (sum, line) => sum + (line.total || 0),
                                                            0
                                                        ) || "-"}
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
                        background: '#333',
                        color: '#fff',
                    },
                }}
            />

        </>

    )
}

export default Booking