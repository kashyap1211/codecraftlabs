import React from "react";
import { motion } from "framer-motion";

const ContactHero = () => {
  return (
    <section className="relative w-full py-28 bg-[#0B132B] overflow-hidden">

      {/* Glow */}
      <div className="absolute -top-20 -right-20 w-96 h-96 bg-[#00A86B]/20 blur-[100px]" />
      <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-[#22C55E]/10 blur-[100px]" />

      <div className="relative max-w-6xl mx-auto px-4 text-center">

        {/* Badge */}
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="inline-flex items-center gap-2 bg-[#00A86B]/15 border border-[#00A86B]/30 text-[#22C55E] px-4 py-1.5 rounded-full text-xs font-semibold uppercase font-grotesk"
        >
          Contact Us
        </motion.span>

        {/* Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mt-6 font-grotesk">
          Let’s Start a{" "}
          <span className="bg-gradient-to-r from-[#00A86B] via-[#22C55E] to-[#FACC15] bg-clip-text text-transparent">
            Conversation
          </span>
        </h1>

        {/* Description */}
        <p className="text-white/60 mt-5 max-w-2xl mx-auto font-grotesk">
          Have a project in mind or want to grow your business digitally? 
          Reach out to us and let’s build something amazing together.
        </p>

      </div>
    </section>
  );
};

export default ContactHero;