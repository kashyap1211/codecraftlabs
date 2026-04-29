import React from "react";
import { motion } from "framer-motion";

const steps = [
  {
    title: "Understanding Requirements",
    desc: "We start by deeply understanding your business goals and project needs.",
  },
  {
    title: "Planning & Strategy",
    desc: "We create a clear roadmap with the right tech stack and execution plan.",
  },
  {
    title: "Design & Development",
    desc: "We design modern UI and build scalable, high-performance applications.",
  },
  {
    title: "Testing & Launch",
    desc: "We ensure everything is tested, optimized, and ready for deployment.",
  },
];

const OurProcess = () => {
  return (
    <section className="relative w-full py-24 overflow-hidden bg-gradient-to-b from-[#0f1f3d] to-[#0B132B]">

      {/* Glow */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-[#00A86B]/10 blur-[100px]" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#22C55E]/10 blur-[100px]" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }} 
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 bg-[#00A86B]/15 border border-[#00A86B]/30 text-[#22C55E] px-4 py-1.5 rounded-full text-xs font-semibold uppercase mb-5">
            Our Process
          </span>

          <h2
            className="text-4xl sm:text-5xl font-bold text-white"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            How We{" "}
            <span className="bg-gradient-to-r from-[#00A86B] via-[#22C55E] to-[#FACC15] bg-clip-text text-transparent">
              Work
            </span>
          </h2>

          <p className="text-white/50 mt-4 max-w-md mx-auto">
            A simple, transparent, and efficient process to deliver high-quality digital products.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative border-l border-white/[0.1] pl-6 space-y-10">

          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative"
            >
              {/* Dot */}
              <div className="absolute -left-[34px] top-1 w-5 h-5 rounded-full bg-gradient-to-r from-[#00A86B] to-[#22C55E] border-4 border-[#0B132B]" />

              {/* Card */}
              <div className="bg-white/[0.04] border border-white/[0.07] rounded-xl p-5 hover:bg-[#00A86B]/5 transition-all duration-300">
                <h3 className="text-white font-semibold mb-1">
                  {`0${i + 1}.`} {step.title}
                </h3>
                <p className="text-white/50 text-sm">
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default OurProcess;