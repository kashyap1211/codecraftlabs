import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const AboutStory = () => {
  return (
    <section className="relative w-full py-24 bg-gradient-to-br from-white via-[#f8fffb] to-[#ecfdf5] overflow-hidden">

      {/* Grid Background */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `linear-gradient(rgba(0,168,107,0.06) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(0,168,107,0.06) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Glow */}
      <div className="absolute -top-16 -left-16 w-72 h-72 bg-[#00A86B]/20 blur-[100px]" />
      <div className="absolute -bottom-16 -right-16 w-72 h-72 bg-[#22C55E]/20 blur-[100px]" />

      <div className="relative max-w-6xl mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">

        {/* LEFT CONTENT */}
        <div className="space-y-6">

          <span className="inline-flex items-center bg-[#00A86B]/10 border border-[#00A86B]/20 text-[#00A86B] px-4 py-1 rounded-full text-xs font-semibold uppercase">
            Our Story
          </span>

          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0B132B]"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Building Digital{" "}
            <span className="bg-gradient-to-r from-[#00A86B] via-[#22C55E] to-[#FACC15] bg-clip-text text-transparent">
              Excellence
            </span>
          </h2>

          <p className="text-gray-600 leading-relaxed">
            We are a modern IT company focused on building scalable web and mobile
            applications. We turn ideas into powerful, user-friendly digital solutions.
          </p>

          {/* Features */}
          <div className="grid sm:grid-cols-2 gap-3 pt-2">
            {[
              "Scalable & Secure Systems",
              "Modern UI/UX",
              "Performance Optimized",
              "Growth-Focused",
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2">
                <FaCheckCircle className="text-[#00A86B]" />
                <span className="text-gray-700 text-sm">{item}</span>
              </div>
            ))}
          </div>

        </div>

        {/* RIGHT CARDS GRID */}
        <div className="grid sm:grid-cols-2 gap-5">

          {/* Mission */}
          <div className="bg-white p-6 rounded-2xl shadow-md border border-[#00A86B]/10 hover:shadow-lg hover:-translate-y-1 transition">
            <h3 className="font-semibold text-[#0B132B] mb-2">Our Mission</h3>
            <p className="text-gray-500 text-sm">
              Deliver high-quality digital solutions that drive real business growth.
            </p>
          </div>

          {/* Vision */}
          <div className="bg-white p-6 rounded-2xl shadow-md border border-[#00A86B]/10 hover:shadow-lg hover:-translate-y-1 transition">
            <h3 className="font-semibold text-[#0B132B] mb-2">Our Vision</h3>
            <p className="text-gray-500 text-sm">
              Become a trusted IT partner known for innovation and quality.
            </p>
          </div>

          {/* Approach */}
          <div className="bg-gradient-to-br from-[#00A86B] to-[#22C55E] text-white p-6 rounded-2xl shadow-lg sm:col-span-2">
            <h3 className="font-semibold mb-3">Our Approach</h3>

            <div className="grid sm:grid-cols-2 gap-2 text-sm">
              <p>• Client-first mindset</p>
              <p>• Scalable solutions</p>
              <p>• Clean code</p>
              <p>• Long-term support</p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default AboutStory;