import { memo } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();
  return (
    <section className="relative w-full py-24 overflow-hidden bg-gradient-to-br from-white via-[#f8fffb] to-[#ecfdf5]">

      {/* Grid Background (light version) */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `linear-gradient(rgba(0,168,107,0.06) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(0,168,107,0.06) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
        aria-hidden="true"
      />

      {/* Glow Effects */}
      <div className="absolute -top-16 -left-16 w-72 h-72 bg-[#00A86B]/20 rounded-full blur-[40px]" aria-hidden="true" />
      <div className="absolute -bottom-16 -right-16 w-72 h-72 bg-[#22C55E]/20 rounded-full blur-[40px]" aria-hidden="true" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">

        {/* LEFT DESIGN */}
        <div className="relative flex justify-center animate-in fade-in slide-in-from-left-4 duration-700 fill-mode-both">

          <div className="absolute top-6 left-6 w-72 h-72 bg-[#00A86B]/10 rounded-3xl rotate-6" aria-hidden="true" />
          <div className="absolute top-3 left-3 w-72 h-72 bg-[#22C55E]/10 rounded-3xl rotate-3" aria-hidden="true" />

          <div className="relative w-80 h-80 bg-white rounded-3xl shadow-xl p-6 border border-[#00A86B]/10 flex flex-col justify-between">

            <div>
              <h3
                className="text-lg font-semibold text-[#0B132B]"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                Web & App Development
              </h3>
              <p className="text-gray-500 text-sm mt-2">
                Scalable, secure & modern solutions
              </p>
            </div>

            {/* Progress */}
            <div className="space-y-3">
              <div>
                <p className="text-xs text-gray-500">Web Development</p>
                <div className="w-full h-2 bg-gray-100 rounded-full">
                  <div className="w-[90%] h-2 bg-[#00A86B] rounded-full" />
                </div>
              </div>

              <div>
                <p className="text-xs text-gray-500">App Development</p>
                <div className="w-full h-2 bg-gray-100 rounded-full">
                  <div className="w-[80%] h-2 bg-[#22C55E] rounded-full" />
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-700 fill-mode-both">

          {/* Tag */}
          <span className="inline-flex items-center gap-2 bg-[#00A86B]/10 border border-[#00A86B]/20 text-[#00A86B] px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase">
            About Us
          </span>

          {/* Heading */}
          <h2
            className="text-4xl sm:text-5xl font-bold text-[#0B132B] leading-tight"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            We Design & Build{" "}
            <span className="bg-gradient-to-r from-[#00A86B] via-[#22C55E] to-[#FACC15] bg-clip-text text-transparent">
              Smart Digital Products
            </span>
          </h2>

          {/* Description */}
          <p className="text-gray-600 text-lg max-w-lg">
            We help startups and businesses grow by creating high-performance
            websites, mobile apps, and scalable digital solutions.
          </p>

          {/* Features */}
          <div className="grid sm:grid-cols-2 gap-4 pt-2">
            {[
              "Custom Web Development",
              "Mobile App Solutions",
              "Modern UI/UX Design",
              "SEO Optimized Products",
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2">
                <FaCheckCircle className="text-[#00A86B]" aria-hidden="true" />
                <span className="text-gray-700 text-sm">{item}</span>
              </div>
            ))}
          </div>

          {/* CTA */}
          <button onClick={() => navigate("/aboutus")} className="mt-6 bg-[#00A86B] cursor-pointer hover:bg-[#22C55E] text-white px-7 py-3 rounded-full font-semibold transition-all duration-300 shadow-lg hover:-translate-y-1">
            Explore More →
          </button>

          {/* Stats */}
          {/* <div className="flex gap-6 pt-8">
            {[
              ["100+", "Projects"],
              ["50+", "Clients"],
              ["5+", "Years"],
            ].map(([num, label], i) => (
              <div
                key={i}
                className="bg-white border border-[#00A86B]/10 shadow-md px-5 py-3 rounded-xl"
              >
                <h3 className="text-xl font-bold text-[#0B132B]">{num}</h3>
                <p className="text-gray-500 text-xs">{label}</p>
              </div>
            ))}
          </div> */}

        </div>
      </div>
    </section>
  );
};

export default memo(About);