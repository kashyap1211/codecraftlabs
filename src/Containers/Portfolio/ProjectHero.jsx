import React from "react";
import { motion } from "framer-motion";

const ProjectHero = ({ project }) => {

  if (!project) return null; // ✅ important fix

  return (
    <section className="relative w-full py-28 bg-[#0B132B] overflow-hidden">

      <div className="absolute -top-20 -right-20 w-96 h-96 bg-[#00A86B]/15 blur-[90px]" />
      <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-[#22C55E]/10 blur-[90px]" />

      <div className="relative max-w-6xl mx-auto px-4 text-center">

        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="inline-flex items-center gap-2 bg-[#00A86B]/15 border border-[#00A86B]/30 text-[#22C55E] px-4 py-1.5 rounded-full text-xs font-semibold uppercase"
        >
          {project.category}
        </motion.span>

        <h1
          className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mt-6"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          {project.title.split(" ")[0]}{" "}
          <span className="bg-gradient-to-r from-[#00A86B] via-[#22C55E] to-[#FACC15] bg-clip-text text-transparent">
            {project.title.split(" ").slice(1).join(" ")}
          </span>
        </h1>

        <p className="text-white/60 mt-5 max-w-2xl mx-auto">
          {project.description}
        </p>

      </div>
    </section>
  );
};

export default ProjectHero;