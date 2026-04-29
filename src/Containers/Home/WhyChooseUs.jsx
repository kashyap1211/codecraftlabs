import React from "react";
import { motion } from "framer-motion";

const features = [
  { title: "High Quality Code", desc: "Clean, scalable and production-ready code delivered every time.", icon: "💎", num: "01" },
  { title: "Fast Performance", desc: "Optimized for speed, efficiency and Core Web Vitals excellence.", icon: "⚡", num: "02" },
  { title: "SEO Friendly", desc: "Built with best practices so your product ranks and gets found.", icon: "🔍", num: "03" },
  { title: "Secure Solutions", desc: "Enterprise-grade security to protect your data and your users.", icon: "🔒", num: "04" },
  { title: "24/7 Support", desc: "Always available for updates, fixes, and continuous improvement.", icon: "🎧", num: "05" },
  { title: "Business Growth", desc: "Solutions engineered to drive real, measurable business outcomes.", icon: "📈", num: "06" },
];

const WhyChooseUs = () => {
  return (
    <section className="relative w-full py-24 overflow-hidden bg-gradient-to-b from-[#0f1f3d] to-[#0B132B]">

      <div className="absolute top-0 right-0 w-80 h-80 bg-[#FACC15]/6 rounded-full blur-[80px] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 bg-[#00A86B]/15 border border-[#00A86B]/30 text-[#22C55E] px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase mb-5">
            <span className="w-1.5 h-1.5 bg-[#22C55E] rounded-full animate-pulse" />
            Why Us
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-4"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            Why Clients{" "}
            <span className="bg-gradient-to-r from-[#00A86B] via-[#22C55E] to-[#FACC15] bg-clip-text text-transparent">
              Choose Us
            </span>
          </h2>
          <p className="text-white/50 text-base max-w-md mx-auto">
            Reliable, scalable, and results-driven IT solutions for growing businesses
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group relative border border-white/[0.07] rounded-2xl p-7 bg-white/[0.03] cursor-pointer hover:border-[#00A86B]/25 hover:bg-[#00A86B]/6 hover:-translate-y-1.5 transition-all duration-400 overflow-hidden"
            >
              {/* Faded number */}
              <span className="absolute top-4 right-5 text-4xl font-extrabold text-white/[0.04] leading-none select-none"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                {item.num}
              </span>

              {/* Bottom gradient line */}
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#00A86B] via-[#22C55E] to-[#FACC15] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-400" />

              {/* Icon */}
              <div className="w-13 h-13 w-12 h-12 rounded-xl bg-[#00A86B]/12 border border-[#00A86B]/20 flex items-center justify-center text-xl mb-5 group-hover:bg-gradient-to-br group-hover:from-[#00A86B] group-hover:to-[#22C55E] transition-all duration-300">
                {item.icon}
              </div>

              <h3 className="text-base font-bold text-white mb-2">{item.title}</h3>
              <p className="text-white/45 text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;