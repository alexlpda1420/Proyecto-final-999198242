
import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => {
  const phoneNumber = "..."; // Número de WhatsApp con código de país y sin espacios
  const message = "Hola, quiero más información sobre sus productos.";

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        backgroundColor: "#25D366",
        color: "white",
        borderRadius: "50%",
        width: "60px",
        height: "60px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: "0 2px 5px rgba(0,0,0,0.3)",
        zIndex: 1000,
        textDecoration: "none"
      }}
    >
      <FaWhatsapp size={35} />
    </a>
  );
};

export default WhatsAppButton;
