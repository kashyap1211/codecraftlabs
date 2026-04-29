import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { projectsData } from "../../Data/projectsData.js";

const PortfolioSection = () => {
  const navigate = useNavigate();

  return (
    <section className="relative w-full py-24 bg-gradient-to-br from-white via-[#f8fffb] to-[#ecfdf5] overflow-hidden">

      <div className="relative max-w-6xl mx-auto px-4">

        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-5xl font-bold text-[#0B132B]">
            Featured{" "}
            <span className="bg-gradient-to-r from-[#00A86B] via-[#22C55E] to-[#FACC15] bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-8">

          {projectsData.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              onClick={() => navigate(`/project/${project.slug}`)}
              className="group relative cursor-pointer rounded-2xl overflow-hidden shadow-md hover:shadow-xl"
            >

              <img
                src={project.image}
                alt={project.title}
                className="w-full h-[400px] object-cover group-hover:scale-110 transition"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

              <div className="absolute top-0 p-4 w-full bg-white/10 backdrop-blur-sm rounded-lg">
                <p className="text-[#22C55E] text-sm">
                  {project.category}
                </p>
                <h3 className="text-white text-xl font-semibold">
                  {project.title}
                </h3>
              </div>

            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
