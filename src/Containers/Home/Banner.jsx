import React from "react";
import { ArrowRight } from "lucide-react";
import bannerBg from "../../assets/Images/Banner.png";
import { useNavigate } from "react-router-dom";

const Banner = () => {
  const navigate = useNavigate();
  return (
    <section className="relative w-full min-h-screen flex items-center overflow-hidden bg-[#0B132B]">

      {/* Background Image */}
      <img
        src={bannerBg}
        alt="Core background showcase"
        fetchPriority="high"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay (same style as services) */}
      <div className="absolute inset-0 bg-[#0B132B]/80" />

      {/* Glow Effects (same as services) */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#00A86B]/15 rounded-full blur-[80px]" />
      <div className="absolute -bottom-12 -left-12 w-72 h-72 bg-[#22C55E]/10 rounded-full blur-[80px]" />

      {/* Content */}
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid md:grid-cols-2 gap-10 items-center">

        <div className="space-y-6 animate-in fade-in slide-in-from-bottom-5 duration-700 fill-mode-both">
          {/* Tag */}
          <span className="inline-flex items-center gap-2 bg-[#00A86B]/15 border border-[#00A86B]/30 text-[#22C55E] px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase">
            <span className="w-1.5 h-1.5 bg-[#22C55E] rounded-full animate-pulse" />
            IT Solutions Company
          </span>

          {/* Heading (same font style) */}
          <h1
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            We Build Modern <br />
            <span className="bg-gradient-to-r from-[#00A86B] via-[#22C55E] to-[#FACC15] bg-clip-text text-transparent">
              Web & Mobile Apps
            </span>
          </h1>

          {/* Description */}
          <p className="text-white/60 text-lg max-w-lg">
            We help businesses grow with high-performance websites, mobile apps,
            and digital solutions. Scalable, secure, and user-friendly.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 pt-2">

            <button onClick={() => navigate("/contact")}className="bg-[#00A86B] cursor-pointer hover:bg-[#22C55E] text-white px-6 py-3 rounded-full flex items-center gap-2 transition-all duration-300 shadow-lg hover:-translate-y-1">
              Get Started <ArrowRight size={18} />
            </button>

            <button
  onClick={() => navigate("/portfolio")}
  className="border border-white/20 cursor-pointer text-white hover:bg-white hover:text-[#0B132B] px-6 py-3 rounded-full transition-all duration-300"
>
  View Portfolio
</button>


          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;