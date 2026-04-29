// import React, { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// import preschool from "../../assets/Images/preschool.png";
// import airtour from "../../assets/Images/airtours.png";
// import clinicmanajment from "../../assets/Images/clinicmanajment.png";

// const projects = [
//   {
//     title: "PreSchool Website",
//     category: "Web Development",
//     image: preschool,
//   },
//   {
//     title: "Tours Website",
//     category: "Tours",
//     image: airtour,
//   },
//   {
//     title: "Clinic Management CRM",
//     category: "CRM System",
//     image: clinicmanajment,
//   },
// ];

// const Portfolio = () => {
//   const [activeIndex, setActiveIndex] = useState(0);

//   useEffect(() => {
//   const handleScroll = () => {
//     const section = document.getElementById("portfolio-section");
//     if (!section) return;

//     const rect = section.getBoundingClientRect();

//     const scrollTop = window.scrollY;
//     const sectionTop = section.offsetTop;
//     const sectionHeight = section.offsetHeight;

//     const progress = (scrollTop - sectionTop) / sectionHeight;

//     const index = Math.min(
//       projects.length - 1,
//       Math.max(0, Math.floor(progress * projects.length))
//     );

//     setActiveIndex(index);
//   };

//   window.addEventListener("scroll", handleScroll);
//   return () => window.removeEventListener("scroll", handleScroll);
// }, []);

//   return (
//     <section
//       id="portfolio-section"
//       className="relative h-[100vh] py-24 overflow-hidden bg-gradient-to-br from-white via-[#f8fffb] to-[#ecfdf5]"
//     >
//       {/* Grid Background (same as About) */}
//       <div
//         className="absolute inset-0 "
//         style={{
//           backgroundImage: `linear-gradient(rgba(0,168,107,0.06) 1px, transparent 1px),
//                             linear-gradient(90deg, rgba(0,168,107,0.06) 1px, transparent 1px)`,
//           backgroundSize: "60px 60px",
//         }}
//       />

//       {/* Glow */}
//       <div className="absolute -top-16 -left-16 w-72 h-72 bg-[#00A86B]/20 rounded-full blur-[100px]" />
//       <div className="absolute -bottom-16 -right-16 w-72 h-72 bg-[#22C55E]/20 rounded-full blur-[100px]" />

//       <div className="sticky top-0 h-screen flex flex-col items-center justify-center px-4">

//         {/* HEADING */}
//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           animate={{ opacity: 1, y: 0 }}
//           className="text-center mb-16"
//         >
//           <span className="inline-flex items-center gap-2 bg-[#00A86B]/10 border border-[#00A86B]/20 text-[#00A86B] px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase">
//             Portfolio
//           </span>

//           <h2
//             className="text-4xl sm:text-5xl font-bold text-[#0B132B] mt-5"
//             style={{ fontFamily: "'Space Grotesk', sans-serif" }}
//           >
//             Our{" "}
//             <span className="bg-gradient-to-r from-[#00A86B] via-[#22C55E] to-[#FACC15] bg-clip-text text-transparent">
//               Work Showcase
//             </span>
//           </h2>

//           <p className="text-gray-600 mt-3">
//             Scroll to explore our projects
//           </p>
//         </motion.div>

//         {/* PROJECT LIST */}
//         <div className="w-full max-w-4xl space-y-6">

//           {projects.map((project, index) => (
//             <div key={index} className="transition-all duration-500">

//               {/* TITLE */}
//               <motion.h3
//                 animate={{
//                   opacity: index === activeIndex ? 1 : 0.4,
//                   scale: index === activeIndex ? 1.05 : 1,
//                 }}
//                 className={`text-xl font-semibold cursor-pointer transition ${
//                   index === activeIndex
//                     ? "text-[#00A86B]"
//                     : "text-gray-400"
//                 }`}
//               >
//                 ({index + 1}) {project.title}
//               </motion.h3>

//               {/* IMAGE */}
//               <AnimatePresence>
//                 {index === activeIndex && (
//                   <motion.div
//                     key={index}
//                     initial={{ opacity: 0, y: 40, scale: 0.95 }}
//                     animate={{ opacity: 1, y: 0, scale: 1 }}
//                     exit={{ opacity: 0, y: -20 }}
//                     transition={{ duration: 0.4 }}
//                     className="mt-4 rounded-2xl overflow-hidden shadow-xl border border-[#00A86B]/10 bg-white"
//                   >
//                     <img
//                       src={project.image}
//                       alt={project.title}
//                       className="w-full h-[200px] md:h-[420px] object-cover"
//                     />

//                     <div className="bg-white p-4 flex justify-between items-center border-t border-[#00A86B]/10">
//                       <span className="text-sm text-gray-600">
//                         {project.category}
//                       </span>

//                       <span className="text-xs bg-gradient-to-r from-[#00A86B] to-[#22C55E] text-white px-3 py-1 rounded-full">
//                         Active
//                       </span>
//                     </div>
//                   </motion.div>
//                 )}
//               </AnimatePresence>

//             </div>
//           ))}
//         </div>

//         {/* PAGINATION */}
//         <div className="absolute right-6 top-1/2 -translate-y-1/2 flex flex-col gap-4 z-10">

//           {projects.map((_, i) => (
//             <button
//               key={i}
//               onClick={() => setActiveIndex(i)}
//               className={`relative flex items-center justify-center transition-all duration-300 ${
//                 i === activeIndex ? "scale-125" : "scale-100"
//               }`}
//             >
//               <span
//                 className={`h-3 w-3 rounded-full ${
//                   i === activeIndex
//                     ? "bg-[#00A86B] shadow-lg shadow-green-400/50"
//                     : "bg-gray-300"
//                 }`}
//               />

//               {i === activeIndex && (
//                 <span className="absolute right-5 h-[2px] w-6 bg-[#00A86B]" />
//               )}
//             </button>
//           ))}

//         </div>

//       </div>
//     </section>
//   );
// };

// export default Portfolio;

import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Mousewheel } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import preschool from "../../assets/Images/preschool.png";
import airtour from "../../assets/Images/airtours.png";
import clinicmanajment from "../../assets/Images/clinicmanajment.png";

const projects = [
  {
    title: "PreSchool Website",
    category: "Web Development",
    image: preschool,
  },
  {
    title: "Tours Website",
    category: "Tours",
    image: airtour,
  },
  {
    title: "Clinic Management CRM",
    category: "CRM System",
    image: clinicmanajment,
  },
];

const Portfolio = () => {
  const [allowScroll, setAllowScroll] = useState(false);

  return (
    <section className="relative h-[75vh] md:h-[140vh] overflow-hidden bg-gradient-to-br from-white via-[#f8fffb] to-[#ecfdf5]">

      {/* GRID */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `linear-gradient(rgba(0,168,107,0.06) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(0,168,107,0.06) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* GLOW */}
      <div className="absolute -top-16 -left-16 w-72 h-72 bg-[#00A86B]/20 blur-[40px]" />
      <div className="absolute -bottom-16 -right-16 w-72 h-72 bg-[#22C55E]/20 blur-[40px]" />

      {/* 🔥 FIXED HEADING (same as old design) */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 text-center z-10">
        <span className="inline-flex items-center gap-2 bg-[#00A86B]/10 border border-[#00A86B]/20 text-[#00A86B] px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase">
          Portfolio
        </span>

        <h2
          className="text-4xl sm:text-5xl font-bold text-[#0B132B] mt-5"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          Our{" "}
          <span className="bg-gradient-to-r from-[#00A86B] via-[#22C55E] to-[#FACC15] bg-clip-text text-transparent">
            Work Showcase
          </span>
        </h2>

        <p className="text-gray-600 mt-3 hidden md:block">
          Scroll to explore our projects
        </p>
      </div>

      {/* SWIPER */}
      <div className="w-full h-full flex items-end justify-center">
        <Swiper
          direction="vertical"
          slidesPerView={1}
          mousewheel={!allowScroll}
          pagination={{ clickable: true }}
          modules={[Pagination, Mousewheel]}
          className="h-[50%] flex items-center md:h-full  md:w-[65%]"
          onReachEnd={() => setAllowScroll(true)}
          onReachBeginning={() => setAllowScroll(false)}
        >
          {projects.map((project, index) => (
            <SwiperSlide key={index}>
              <div className="h-full flex items-center justify-center px-4">

                {/* CARD */}
                <div className="w-full max-w-3xl rounded-2xl overflow-hidden  md:shadow-xl border border-[#00A86B]/10 bg-white">

                  <img
                    src={project.image}
                    alt={`${project.title} project showcase`}
                    loading="lazy"
                    width="800"
                    height="450"
                    className="w-full h-[170px] md:h-[380px] object-cover"
                  />

                  <div className="p-4 flex justify-between items-center border-t border-[#00A86B]/10">
                    <span className="text-sm text-gray-600">
                      {project.category}
                    </span>

                    <span className="text-xs bg-gradient-to-r from-[#00A86B] to-[#22C55E] text-white px-3 py-1 rounded-full">
                      Active
                    </span>
                  </div>

                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      
    </section>
  );
};

export default Portfolio;