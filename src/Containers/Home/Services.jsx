import React from "react";
import {
  FaGlobe,
  FaBolt,
  FaChartLine,
  FaShoppingCart,
  FaMobileAlt,
  FaSearch
} from "react-icons/fa";

const mainService = {
  title: "Custom Web & App Development",
  desc: "We build scalable, high-performance web and mobile applications tailored to your business needs. From MVP to enterprise-grade platforms.",
};

const services = [
  { title: "Static Website", icon: <FaGlobe /> },
  { title: "Dynamic Website", icon: <FaBolt /> },
  { title: "CRM Development", icon: <FaChartLine /> },
  { title: "E-Commerce", icon: <FaShoppingCart /> },
  { title: "Mobile Apps", icon: <FaMobileAlt /> },
  { title: "SEO Optimization", icon: <FaSearch /> },
];

const Services = () => {
  return (
    <section className="relative w-full py-24 overflow-hidden bg-[#0B132B]">

      {/* Grid Background */}
      <div className="absolute inset-0"
        style={{
          backgroundImage: `linear-gradient(rgba(0,168,107,0.05) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(0,168,107,0.05) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
        aria-hidden="true"
      />

      {/* Orbs */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#00A86B]/15 rounded-full blur-[40px] pointer-events-none" aria-hidden="true" />
      <div className="absolute -bottom-12 -left-12 w-72 h-72 bg-[#22C55E]/10 rounded-full blur-[40px] pointer-events-none" aria-hidden="true" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 fill-mode-both">
          <span className="inline-flex items-center gap-2 bg-[#00A86B]/15 border border-[#00A86B]/30 text-[#22C55E] px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase mb-5">
            <span className="w-1.5 h-1.5 bg-[#22C55E] rounded-full animate-pulse" />
            What We Offer
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-4"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            Services Built for{" "}
            <span className="bg-gradient-to-r from-[#00A86B] via-[#22C55E] to-[#FACC15] bg-clip-text text-transparent">
              Modern Businesses
            </span>
          </h2>
          <p className="text-white/50 text-base max-w-md">
            Smart, scalable digital solutions — from idea to launch and beyond.
          </p>
        </div>

        {/* Grid */}
        <div className="grid lg:grid-cols-2 gap-5 mt-14 items-start">

          {/* Hero Card */}
          <div className="relative bg-gradient-to-br from-[#00A86B] to-[#22C55E] rounded-3xl p-10 overflow-hidden animate-in fade-in slide-in-from-left-4 duration-700 fill-mode-both">
            <div className="absolute -top-14 -right-14 w-48 h-48 bg-white/10 rounded-full" />
            <div className="absolute -bottom-10 -left-10 w-36 h-36 bg-black/10 rounded-full" />

            <span className="relative z-10 inline-block bg-white/20 rounded-full px-3 py-1 text-xs font-semibold tracking-wider text-white mb-5">
              ★ Core Service
            </span>
            <h3 className="relative z-10 text-2xl font-bold text-white mb-3"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              {mainService.title}
            </h3>
            <p className="relative z-10 text-white/85 text-sm leading-relaxed mb-8">
              {mainService.desc}
            </p>
            <button className="relative cursor-pointer z-10 bg-white text-[#00A86B] px-6 py-3 rounded-full font-bold text-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              Get Started →
            </button>
          </div>

          {/* Mini Cards */}
          <div className="grid grid-cols-2 gap-3.5">
            {services.map((item, i) => (
              <div
                key={i}
                className="group relative bg-white/[0.04] border border-white/[0.08] rounded-2xl p-5 cursor-pointer hover:border-[#00A86B]/40 hover:-translate-y-1 transition-all duration-300 overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-500 fill-mode-both"
                style={{ animationDelay: `${i * 75}ms` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#00A86B]/10 to-[#22C55E]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative z-10 w-11 h-11 rounded-xl bg-[#00A86B]/15 flex items-center justify-center text-lg text-white  mb-3 group-hover:bg-[#00A86B] transition-colors duration-300">
                  {item.icon}
                </div>
                <h4 className="relative z-10 text-sm font-semibold text-white">{item.title}</h4>
                <div className="h-0.5 w-0 bg-gradient-to-r from-[#00A86B] to-[#22C55E] rounded-full mt-3 group-hover:w-full transition-all duration-400" />
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Services;