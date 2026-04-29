import React from "react";
import { motion } from "framer-motion";

const PortfolioHero = () => {
  return (
    <section className="relative w-full py-28 bg-[#0B132B] overflow-hidden">

      {/* Glow Effects */}
      <div className="absolute -top-20 -right-20 w-96 h-96 bg-[#00A86B]/15 blur-[90px]" />
      <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-[#22C55E]/10 blur-[90px]" />

      <div className="relative max-w-6xl mx-auto px-4 text-center">

        {/* Badge */}
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="inline-flex items-center gap-2 bg-[#00A86B]/15 border border-[#00A86B]/30 text-[#22C55E] px-4 py-1.5 rounded-full text-xs font-semibold uppercase"
        >
          Our Portfolio
        </motion.span>

        {/* Heading */}
        <h1
          className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mt-6"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          Our{" "}
          <span className="bg-gradient-to-r from-[#00A86B] via-[#22C55E] to-[#FACC15] bg-clip-text text-transparent">
            Work
          </span>
        </h1>

        {/* Description */}
        <p className="text-white/60 mt-5 max-w-2xl mx-auto">
          Explore our latest projects showcasing creativity, performance,
          and scalable solutions across web development, mobile apps,
          and digital design.
        </p>

      </div>
    </section>
  );
};

export default PortfolioHero;