import React from "react";
import {
  FaCode,
  FaMobileAlt,
  FaPalette,
  FaBullhorn,
  FaCheckCircle,
  FaArrowRight,
} from "react-icons/fa";

const services = [
  {
    title: "Web Development",
    desc: "We build modern, high-performance websites using the latest technologies. Our solutions are fully responsive, SEO-friendly, and optimized for speed to ensure a seamless user experience across all devices. From landing pages to complex web platforms, we deliver scalable and secure digital products.",
    icon: <FaCode />,
  },
  {
    title: "App Development",
    desc: "Our team develops powerful and user-friendly mobile applications for both Android and iOS platforms. We focus on performance, security, and intuitive design to create apps that deliver real value to your users and help your business grow in the mobile-first world.",
    icon: <FaMobileAlt />,
  },
  {
    title: "UI/UX Design",
    desc: "We design clean, modern, and user-centric interfaces that enhance user engagement. Our UI/UX process focuses on usability, accessibility, and visual appeal, ensuring that your product not only looks great but also provides an exceptional user experience.",
    icon: <FaPalette />,
  },
  {
    title: "Digital Marketing",
    desc: "We help your business grow with result-driven digital marketing strategies. From SEO and social media marketing to performance campaigns, we focus on increasing visibility, driving traffic, and converting users into loyal customers.",
    icon: <FaBullhorn />,
  },
];

const ServicesGrid = () => {
  return (
    <section className="relative w-full py-28 overflow-hidden bg-gradient-to-br from-white via-[#f8fffb] to-[#ecfdf5]">

      {/* BG */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `linear-gradient(rgba(0,168,107,0.05) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(0,168,107,0.05) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Glow */}
      <div className="absolute -top-20 -left-20 w-80 h-80 bg-[#00A86B]/20 blur-[60px]" />
      <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-[#22C55E]/20 blur-[60px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">

          {/* LEFT */}
          <div className="lg:sticky lg:top-28 h-fit p-7 rounded-2xl bg-white/70 backdrop-blur-xl border border-white/40 shadow-lg space-y-6">

            <h2
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0B132B]"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Our{" "}
              <span className="bg-gradient-to-r from-[#00A86B] via-[#22C55E] to-[#FACC15] bg-clip-text text-transparent">
                Services
              </span>
            </h2>

            <p className="text-gray-600 leading-relaxed">
              We craft powerful and scalable digital solutions designed to help businesses
              grow, innovate, and stand out in today’s competitive digital landscape.
            </p>

            {/* Features with Icons */}
            <div className="space-y-3">
              {[
                "Custom & Scalable Solutions",
                "Modern UI/UX Design Approach",
                "Performance & SEO Optimized",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-gray-700 text-sm">
                  <FaCheckCircle className="text-[#00A86B]" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <button className="w-full cursor-pointer flex items-center justify-center gap-2 mt-2 bg-gradient-to-r from-[#00A86B] to-[#22C55E] text-white py-3 rounded-xl font-semibold transition duration-300 shadow-md hover:-translate-y-1 hover:scale-[1.02]">
              Get Started <FaArrowRight />
            </button>

            {/* Stats */}
            {/* <div className="grid grid-cols-3 gap-4 pt-4">
              {[
                ["100+", "Projects"],
                ["50+", "Clients"],
                ["5+", "Years"],
              ].map(([num, label], i) => (
                <div
                  key={i}
                  className="text-center bg-white rounded-xl p-3 border border-[#00A86B]/10 shadow-sm"
                >
                  <h3 className="text-lg font-bold text-[#0B132B]">{num}</h3>
                  <p className="text-xs text-gray-500">{label}</p>
                </div>
              ))}
            </div> */}

          </div>

          {/* RIGHT */}
          <div className="relative">

            <div className="absolute left-6 top-0 w-[2px] h-full bg-gradient-to-b from-[#00A86B] via-[#22C55E] to-transparent" />

            <div className="space-y-10">
              {services.map((item, i) => (
                <div key={i} className="relative flex items-start gap-6 group">

                  <div className="relative z-10 w-12 h-12 flex items-center justify-center rounded-full bg-white border border-[#00A86B]/20 shadow-md group-hover:bg-gradient-to-br group-hover:from-[#00A86B] group-hover:to-[#22C55E] group-hover:text-white transition">
                    {item.icon}
                  </div>

                  <div className="flex-1 p-6 rounded-2xl bg-white/80 backdrop-blur-xl border border-white/40 shadow-md hover:shadow-xl transition duration-300 hover:-translate-y-1">

                    <h3
                      className="text-lg font-semibold text-[#0B132B]"
                      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                    >
                      {item.title}
                    </h3>

                    <p className="text-gray-500 text-sm mt-2">
                      {item.desc}
                    </p>

                  </div>

                </div>
              ))}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;