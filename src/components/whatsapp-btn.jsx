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
      className="whatsapp-float-btn"
      aria-label="WhatsApp Inquiry"
      {...rest}
    >
      <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" style={{ width: '32px', height: '32px', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.504-5.729-1.464L0 24zm6.59-4.846c1.6.95 3.197 1.451 4.793 1.453 5.422 0 9.83-4.385 9.833-9.773.002-2.61-1.01-5.063-2.858-6.915C16.52 2.066 14.07 1.053 11.97 1.053c-5.428 0-9.835 4.387-9.838 9.776-.001 1.774.475 3.426 1.426 4.903L2.508 20.35l4.139-1.196zm10.743-5.32c-.29-.145-1.716-.848-1.98-.942-.266-.096-.46-.145-.652.145-.19.29-.74.942-.907 1.133-.167.19-.333.213-.623.069-.29-.145-1.22-.449-2.327-1.432-.862-.765-1.443-1.713-1.611-2.003-.169-.29-.018-.447.127-.59.13-.13.29-.339.436-.508.145-.169.19-.29.29-.483.096-.193.048-.361-.024-.508-.073-.145-.652-1.573-.893-2.153-.235-.567-.472-.49-.652-.499-.17-.008-.362-.01-.555-.01-.19 0-.502.072-.765.362-.263.29-1.004.981-1.004 2.39 0 1.41 1.028 2.77 1.17 2.964.143.193 2.025 3.09 4.906 4.33.685.294 1.22.47 1.637.602.689.219 1.316.188 1.812.114.553-.083 1.716-.701 1.956-1.378.24-.677.24-1.258.17-1.378-.073-.12-.265-.19-.556-.337z"/>
      </svg>
    </a>
  );
});

export default WhatsappBtn;
