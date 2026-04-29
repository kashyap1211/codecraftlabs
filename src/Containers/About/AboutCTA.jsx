import React from "react";
import { FaArrowRight, FaRocket } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const AboutCTA = () => {
  const navigate = useNavigate();
  return (
    <section className="relative w-full py-24 overflow-hidden">

      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#00A86B] via-[#22C55E] to-[#00A86B]" />

      {/* Glow Effects */}
      <div className="absolute -top-16 -left-16 w-72 h-72 bg-white/20 blur-[60px]" />
      <div className="absolute -bottom-16 -right-16 w-72 h-72 bg-[#FACC15]/20 blur-[60px]" />

      {/* Content */}
      <div className="relative max-w-4xl mx-auto px-4 text-center">

        {/* Icon Badge */}
        <div className="flex justify-center mb-6">
          <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-white/20 backdrop-blur-md border border-white/30 text-white text-xl shadow-lg">
            <FaRocket />
          </div>
        </div>

        {/* Heading */}
        <h2
          className="text-4xl sm:text-5xl font-bold text-white leading-tight"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          Ready to Build Something{" "}
          <span className="bg-gradient-to-r from-white to-[#FACC15] bg-clip-text text-transparent">
            Amazing?
          </span>
        </h2>

        {/* Description */}
        <p className="text-white/80 mt-4 max-w-xl mx-auto text-lg">
          Let’s turn your ideas into powerful digital products that grow your business.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">

          {/* Primary */}
          <button onClick={() => navigate("/contact")} className="group cursor-pointer flex items-center justify-center gap-2 bg-white text-[#00A86B] px-7 py-3 rounded-full font-semibold shadow-lg hover:-translate-y-1 transition-all duration-300">
            Get Started
            <FaArrowRight className="group-hover:translate-x-1 transition" />
          </button>

          {/* Secondary */}
          {/* <button className="flex items-center cursor-pointer justify-center gap-2 border border-white/40 text-white px-7 py-3 rounded-full font-semibold hover:bg-white/10 transition-all duration-300">
            Contact Us
          </button> */}

        </div>

      </div>
    </section>
  );
};

export default AboutCTA;