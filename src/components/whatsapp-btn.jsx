import React from "react";

function sendToWhatsApp(text, option) {
  if (!text) {
    text = `Hi, I have come across ${window.location.href}. Can you provide more information about this ?`;
  }

  if (option) {
    if (option.pageRef) {
      text += `\n\nI found your contact details from ${
        window.location.origin + window.location.pathname
      }`;
    }
  }

  let url = `https://api.whatsapp.com/send?phone=+918866842520&text=${encodeURIComponent(
    text
  )}`;
  window.open(url, "_blank");
}

function WhatsappBtn({ message, options }) {
  const handleClick = () => {
    sendToWhatsApp(message, options);
  };

  return (
    <a onClick={handleClick} className="inquiry-css" aria-label="Fg Group">
      <i className="fab fa-whatsapp"></i>
    </a>
  );
}

export default WhatsappBtn;
