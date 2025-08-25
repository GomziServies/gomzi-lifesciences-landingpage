import emailjs from "@emailjs/browser";

const blobToBase64 = (blob) => {
    return new Promise((resolve, reject) => {
        if (!(blob instanceof Blob)) {
            return reject(new Error("Expected a Blob, but got " + typeof blob));
        }
        const reader = new FileReader();
        reader.onloadend = () => resolve(reader.result);
        reader.onerror = reject;
        reader.readAsDataURL(blob);
    });
};

const sendEmailWithPDF = async (userEmail, pdfBlob) => {
    try {
        const pdfBase64 = await blobToBase64(pdfBlob);

        await emailjs.send(
            "service_gvyoqg8",
            "template_2c4eko8",
            {
                to_email: userEmail,
                message: "Thank you for your purchase. Please find your quotation attached.",
                attachment: pdfBase64,
            },
            "_dZ54I0i5fY38E9n0"
        );

        console.log("✅ Email sent successfully with PDF!");
    } catch (err) {
        console.error("❌ Failed to send email:", err);
    }
};

export default sendEmailWithPDF;
