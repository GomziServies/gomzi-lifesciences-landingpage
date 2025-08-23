import React, { forwardRef } from "react";

function sendToWhatsApp(text, option) {
  if (!text) {
    text = `Hi, I have come across ${window.location.href}. Can you provide more information about this ?`;
  }

  if (option) {
    if (option.pageRef) {
      text += `\n\nI found your contact details from ${window.location.origin + window.location.pathname}`;
    }
  }

  let url = `https://api.whatsapp.com/send?phone=+918320077993&text=${encodeURIComponent(text)}`;
  window.open(url, "_blank");
}

const WhatsappBtn = forwardRef(({ message, options, ...rest }, ref) => {
  const handleClick = () => {
    sendToWhatsApp(message, options);
  };

  return (
    <a
      ref={ref}
      onClick={handleClick}
      className="inquiry-css"
      aria-label="Fg Group"
      {...rest}   // 👈 extra props (className, style) properly apply થશે
    >
      <i className="fab fa-whatsapp"></i>
    </a>
  );
});

export default WhatsappBtn;
