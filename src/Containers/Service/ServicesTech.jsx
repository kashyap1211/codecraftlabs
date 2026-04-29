import React from "react";
import {
  FaReact,
  FaNodeJs,
  FaFigma,
  FaWordpress,
} from "react-icons/fa";
import {
  SiMongodb,
  SiFirebase,
  SiTailwindcss,
  SiJavascript,
  SiMysql,
} from "react-icons/si";

const techStack = [
  { name: "React", icon: <FaReact /> },
  { name: "Node.js", icon: <FaNodeJs /> },
  { name: "JavaScript", icon: <SiJavascript /> },
  { name: "MongoDB", icon: <SiMongodb /> },
  { name: "MySQL", icon: <SiMysql /> }, // ✅ added
  { name: "Firebase", icon: <SiFirebase /> },
  { name: "Tailwind", icon: <SiTailwindcss /> },
  { name: "Figma", icon: <FaFigma /> },
  { name: "WordPress", icon: <FaWordpress /> },
];

const ServicesTech = () => {
  return (
    <section className="relative w-full py-28 bg-[#0B132B] overflow-hidden">

      {/* Glow */}
      <div className="absolute -top-20 -left-20 w-80 h-80 bg-[#00A86B]/20 blur-[60px]" />
      <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-[#22C55E]/20 blur-[60px]" />

      <div className="relative ">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Technologies{" "}
            <span className="bg-gradient-to-r from-[#00A86B] via-[#22C55E] to-[#FACC15] bg-clip-text text-transparent">
              We Use
            </span>
          </h2>

          <p className="text-white/60 mt-4 max-w-xl mx-auto">
            Our stack includes modern technologies that ensure performance,
            scalability, and seamless user experience across platforms.
          </p>
        </div>

        {/* Marquee Rows */}
        <div className="space-y-6 overflow-hidden">

          {[...Array(2)].map((_, row) => (
            <div
              key={row}
              className={`flex gap-6 w-max animate-scroll ${
                row % 2 !== 0 ? "animate-scroll-reverse" : ""
              }`}
            >
              {[...techStack, ...techStack].map((tech, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 px-6 py-3 rounded-full bg-white/5 border border-white/10 backdrop-blur-xl hover:bg-white/10 transition duration-300"
                >
                  <div className="text-[#22C55E] text-lg">
                    {tech.icon}
                  </div>
                  <span className="text-white/80 text-sm font-medium">
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>
          ))}

        </div>

      </div>

      {/* Animation CSS */}
      <style jsx>{`
        .animate-scroll {
          animation: scroll 25s linear infinite;
        }

        .animate-scroll-reverse {
          animation: scrollReverse 25s linear infinite;
        }

        @keyframes scroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }

        @keyframes scrollReverse {
          from {
            transform: translateX(-50%);
          }
          to {
            transform: translateX(0);
          }
        }
      `}</style>

    </section>
  );
};

export default ServicesTech;