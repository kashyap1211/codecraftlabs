import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const ServicesCTA = () => {
  const navigate = useNavigate();
  return (
    <section className="relative w-full py-24 overflow-hidden">

      <div className="absolute inset-0 bg-gradient-to-r from-[#00A86B] to-[#22C55E]" />

      <div className="relative max-w-4xl mx-auto px-4 text-center">

        <h2
          className="text-4xl font-bold text-white"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          Let’s Build Your Next Project
        </h2>

        <p className="text-white/80 mt-4">
          Ready to turn your idea into reality? Let’s work together.
        </p>

        <button onClick={() => navigate("/contact")} className="mt-6 flex cursor-pointer items-center gap-2 mx-auto bg-white text-[#00A86B] px-7 py-3 rounded-full font-semibold hover:-translate-y-1 transition">
          Get Started <FaArrowRight />
        </button>

      </div>
    </section>
  );
};

export default ServicesCTA;