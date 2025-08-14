import React, { useRef, useState, useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Signature = () => {
  const canvasRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [signatureImage, setSignatureImage] = useState(null);
  const [isSaved, setIsSaved] = useState(false);
  const [buttonHover, setButtonHover] = useState({ clear: false, save: false });
  const [isSignatureStarted, setIsSignatureStarted] = useState(false);

  const customerInfo = {
    customerName: "Smit Luvani",
    email: "Smit Luvani@gmail.com",
    invoiceNo: "202506001",
    date: "2025-06-02",
    phoneNo: "9999999999",
    address: "102",
  };

  const paymentData = {
    Services: "Nutri Trainer Course",
    "Paid Amount": 888,
    "due Amount": 0,
    "Total Amount": 999,
  };

  const dueAmount = paymentData["Total Amount"] - paymentData["Paid Amount"];
  paymentData["due Amount"] = dueAmount;

  useEffect(() => {
    const canvas = canvasRef.current;
    const parent = canvas.parentElement;
    canvas.width = parent.offsetWidth;
    canvas.height = 200;
  }, []);

  const getEventPos = (e, canvas) => {
    const rect = canvas.getBoundingClientRect();
    if (e.touches) {
      return {
        x: e.touches[0].clientX - rect.left,
        y: e.touches[0].clientY - rect.top,
      };
    } else {
      return {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
    }
  };

  const isCanvasEmpty = () => {
    const canvas = canvasRef.current;
    const blank = document.createElement("canvas");
    blank.width = canvas.width;
    blank.height = canvas.height;
    return canvas.toDataURL() === blank.toDataURL();
  };
  const disableScroll = () => {
    document.body.style.overflow = "hidden";
  };

  const enableScroll = () => {
    document.body.style.overflow = "";
  };

  const startDrawing = (e) => {
    if (!isSignatureStarted) return;
    e.preventDefault();

    disableScroll();
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const { x, y } = getEventPos(e, canvas);

    ctx.lineJoin = "round";
    ctx.lineCap = "round";
    ctx.lineWidth = 2.5;
    ctx.strokeStyle = "#86C33B";

    ctx.beginPath();
    ctx.moveTo(x, y);
    setIsDrawing(true);
    setIsSaved(false);
  };

  const draw = (e) => {
    if (!isDrawing) return;
    e.preventDefault();
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const { x, y } = getEventPos(e, canvas);

    ctx.lineTo(x, y);
    ctx.stroke();
  };

  const stopDrawing = (e) => {
    if (!isDrawing) return;
    e.preventDefault();

    enableScroll();
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    ctx.closePath();
    setIsDrawing(false);
  };

  const clearSignature = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    setSignatureImage(null);
    setIsSaved(false);
    setIsSignatureStarted(false);
  };

  const saveSignature = () => {
    const canvas = canvasRef.current;
    if (isCanvasEmpty()) {
      toast.warning("Signature is required to proceed.", {
        autoClose: 3000,
        theme: "light",
      });
      return;
    }

    if (isSaved) return;

    const image = canvas.toDataURL("image/png");
    setSignatureImage(image);
    setIsSaved(true);

    toast.success("Signature saved successfully!", {
      autoClose: 2000,
      theme: "light",
    });
  };

  const buttonStyle = (type) => ({
    padding: "0.8rem 1.5rem",
    backgroundColor: type === "save" ? "#86C33B" : "white",
    color: type === "save" ? "white" : "#86C33B",
    border: "1px solid #86C33B",
    borderRadius: "6px",
    fontWeight: "600",
    cursor: "pointer",
    flex: "1",
    minWidth: "120px",
    transform: buttonHover[type] ? "scale(1.05)" : "scale(1)",
    boxShadow: buttonHover[type]
      ? "0 4px 12px rgba(134, 195, 59, 0.3)"
      : "none",
    transition: "all 0.3s ease",
  });

  return (
    <div
      className="signature-container"
      style={{ maxWidth: "1000px", margin: "0 auto", padding: "2rem"}}
    >
      <ToastContainer />
      <div className="signature-header">
        <h2>Digital Signature</h2>
        <p>
          Your signature is a legally binding representation of your identity.
          Please sign in the box below using your mouse or touchscreen.
        </p>
      </div>

      <table className="customer-table" style={{ marginBottom: "1rem" }}>
        <tbody>
          {Object.entries(customerInfo).map(([key, value]) => (
            <tr key={key}>
              <td>
                <strong style={{textTransform:'capitalize'}}>{key}</strong>
              </td>
              <td>
                <b style={{ color: "green" }}>:</b> &nbsp;&nbsp; {value}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="payment-table" style={{ marginBottom: "1rem" }}>
        <table className="w-100">
          <thead>
            <tr className="d-flex" style={{ backgroundColor: "#f4fef0", }}>
              {Object.keys(paymentData).map((key, index) => (
                <th className="col-3" key={index}>
                  {key}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr className="d-flex">
              {Object.values(paymentData).map((val, i) => (
                <td className="col-3" key={i}>
                  {typeof val === "number" ? `₹${val}` : val}
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>

      <div
        className="signature-canvas-container"
        style={{ position: "relative", marginBottom: "1rem" }}
      >
        <canvas
          ref={canvasRef}
          onMouseDown={startDrawing}
          onMouseMove={draw}
          onMouseUp={stopDrawing}
          onMouseLeave={stopDrawing}
          onTouchStart={startDrawing}
          onTouchMove={draw}
          onTouchEnd={stopDrawing}
        />
        {!isSignatureStarted && (
          <button
            onClick={() => setIsSignatureStarted(true)}
            className="start_button"
          >
            Start Signature
          </button>
        )}
        {!isDrawing && !signatureImage && isSignatureStarted && (
          <div
            style={{
              position: "absolute",
              top: "10px",
              left: "10px",
              color: "#aaa",
            }}
          >
            Please sign above
          </div>
        )}
      </div>

      <div
        className="signature-buttons"
        style={{ display: "flex", gap: "1rem", marginBottom: "1rem" }}
      >
        <button
          onClick={clearSignature}
          onMouseEnter={() =>
            setButtonHover((prev) => ({ ...prev, clear: true }))
          }
          onMouseLeave={() =>
            setButtonHover((prev) => ({ ...prev, clear: false }))
          }
          style={buttonStyle("clear")}
        >
          Clear Signature
        </button>
        <button
          onClick={saveSignature}
          onMouseEnter={() =>
            setButtonHover((prev) => ({ ...prev, save: true }))
          }
          onMouseLeave={() =>
            setButtonHover((prev) => ({ ...prev, save: false }))
          }
          style={buttonStyle("save")}
        >
          {isSaved ? "✓ Saved" : "Save Signature"}
        </button>
      </div>

      {signatureImage && (
        <div className="signature-saved" style={{ textAlign: "center" }}>
          <h3>Your Signature Has Been Saved</h3>
          <img
            src={signatureImage}
            alt="Saved signature"
            style={{ maxWidth: "100%", margin: "1rem 0" }}
          />
          <p>
            This digital signature carries the same legal weight as a
            handwritten signature.
          </p>
        </div>
      )}
    </div>
  );
};

export default Signature;
