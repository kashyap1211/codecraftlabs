import React, { memo } from "react";
import { useParams } from "react-router-dom";
import { projectsData } from "../../Data/projectsData.js";
import ProjectHero from "./ProjectHero.jsx";

const ProjectDetails = () => {
  const { id } = useParams();

  const project = projectsData.find((p) => p.slug === id);

  if (!project) {
    return <div className="p-10">Project not found</div>;
  }

  return (
    <>
      {/* Hero */}
      <ProjectHero project={project} />

      <section className="relative w-full py-20 bg-gradient-to-br from-white via-[#f8fffb] to-[#ecfdf5] overflow-hidden">

        {/* Background Grid */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(rgba(0,168,107,0.05) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(0,168,107,0.05) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />

        {/* Glow */}
        <div className="absolute -top-20 -left-20 w-72 h-72 bg-[#00A86B]/20 blur-[60px]" />
        <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-[#22C55E]/20 blur-[60px]" />

        <div className="relative max-w-6xl mx-auto px-4">

          {/* Top Section */}
          <div className="mb-14">

            <span className="inline-block bg-[#00A86B]/10 text-[#00A86B] px-4 py-1 rounded-full text-sm font-medium mb-4">
              {project.category}
            </span>

            <h1
              className="text-4xl md:text-6xl font-bold text-[#0B132B]"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              {project.title}
            </h1>

            <p className="text-gray-600 mt-6 max-w-2xl leading-relaxed">
              {project.description}
            </p>

            {/* Buttons */}
            {/* <div className="flex gap-4 mt-6">
              <button className="bg-[#00A86B] text-white px-5 py-2 rounded-lg hover:bg-[#009e63] transition">
                Live Preview
              </button>
              <button className="border border-[#00A86B] text-[#00A86B] px-5 py-2 rounded-lg hover:bg-[#00A86B]/10 transition">
                View Code
              </button>
            </div> */}
          </div>

          {/* Image Gallery */}
          <div className="grid md:grid-cols-2 gap-6 mb-16">
            {project.images.map((img, i) => (
              <div
                key={i}
                className="group relative rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition"
              >
                <img
                  src={img}
                  alt={`${project.title} gallery item ${i + 1}`}
                  loading="lazy"
                  width="800"
                  height="500"
                  className="w-full h-[260px] object-cover group-hover:scale-110 transition duration-500"
                />
                <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition" />
              </div>
            ))}
          </div>

          {/* Features Section 🔥 */}
          <div className="mb-16">
            <h2 className="text-2xl font-semibold text-[#0B132B] mb-6">
              Key Features
            </h2>

            <div className="grid sm:grid-cols-2 gap-4">
              {project.features.map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-sm border border-[#00A86B]/10 hover:shadow-md transition"
                >
                  <span className="text-[#00A86B] text-lg">✔</span>
                  <p className="text-gray-600 text-sm">{item}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Info */}
          <div className="grid md:grid-cols-2 gap-12">

            {/* Overview */}
            <div>
              <h2 className="text-2xl font-semibold text-[#0B132B] mb-4">
                Project Overview
              </h2>
              <p className="text-gray-600 leading-relaxed">
                This project was developed with a focus on performance,
                scalability, and modern UI/UX principles. It ensures smooth
                user interaction, responsive design, and clean architecture
                for long-term maintainability.
              </p>
            </div>

            {/* Tech Stack */}
            <div>
              <h2 className="text-2xl font-semibold text-[#0B132B] mb-4">
                Tech Stack
              </h2>

              <div className="flex flex-wrap gap-3">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-white border border-[#00A86B]/20 text-[#00A86B] px-4 py-1.5 rounded-full text-sm shadow-sm hover:shadow-md transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

          </div>

        </div>
      </section>
    </>
  );
};

export default memo(ProjectDetails);