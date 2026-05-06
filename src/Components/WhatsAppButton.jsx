import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => {
  const phoneNumber = "918140520747";

  const handleWhatsApp = () => {
    const message = "Hello, I want to know more about your services";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
  <div className="fixed bottom-5 right-5 z-50 group">
  <div className="fixed bottom-6 right-6 z-50 group flex items-center">

  {/* Tooltip */}
  <div className="absolute right-16 top-1/2 -translate-y-1/2 flex items-center gap-2 
    bg-gradient-to-r from-[#00A86B] to-[#22C55E] text-white text-xs px-4 py-2 rounded-full 
    shadow-lg opacity-0 translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 
    transition-all duration-300 whitespace-nowrap backdrop-blur-md">
    
    Message on WhatsApp

    {/* Arrow */}
    <div className="w-2 h-2 bg-[#22C55E] rotate-45 absolute -right-1"></div>
  </div>

  {/* Pulse Ring */}
  <span className="absolute inline-flex h-14 w-14 rounded-full bg-[#25D366]/40 animate-ping"></span>

  {/* Button */}
  <button
    onClick={handleWhatsApp}
    className="relative bg-[#25D366] hover:bg-[#1ebe5d] text-white p-4 rounded-full 
    shadow-xl flex items-center justify-center transition-all duration-300 
    hover:scale-110 hover:rotate-6"
  >
    <FaWhatsapp size={24} />
  </button>

</div>

</div>
  );
};

export default WhatsAppButton;