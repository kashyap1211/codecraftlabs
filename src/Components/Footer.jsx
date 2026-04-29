// import { memo } from "react";
// import { Link } from "react-router-dom";
// import { path } from "../constant";
// import {
//   FaFacebookF,
//   FaInstagram,
//   FaLinkedinIn,
//   FaEnvelope,
//   FaPhoneAlt,
//   FaMapMarkerAlt
// } from "react-icons/fa";
// import logo from "../assets/Images/CodeCraft_Labs_logo.png";

// const Footer = () => {
//   return (
//     <footer className="relative bg-[#0B132B] text-white pt-20 pb-6 overflow-hidden">

//       {/* Grid Background */}
//       <div
//         className="absolute inset-0"
//         style={{
//           backgroundImage: `linear-gradient(rgba(0,168,107,0.05) 1px, transparent 1px),
//                             linear-gradient(90deg, rgba(0,168,107,0.05) 1px, transparent 1px)`,
//           backgroundSize: "60px 60px",
//         }}
//         aria-hidden="true"
//       />

//       {/* Glow Orbs */}
//       <div className="absolute -top-20 -right-20 w-80 h-80 bg-[#00A86B]/10 rounded-full blur-[40px]" aria-hidden="true" />
//       <div className="absolute -bottom-10 -left-10 w-60 h-60 bg-[#22C55E]/10 rounded-full blur-[40px]" aria-hidden="true" />

//       <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-4 gap-10">

//         {/* LOGO + ABOUT */}
//         <div>
//           <img src={logo} alt="CodeCraftLABS logo" className="h-12 mb-4" width="auto" height="48" loading="lazy" />
//           <p className="text-white/60 text-sm leading-relaxed">
//             We build modern web & mobile applications to grow your business.
//           </p>
//         </div>

//         {/* QUICK LINKS */}
//         <div>
//           <h3 className="text-lg font-semibold mb-4 font-['Space_Grotesk'] bg-gradient-to-r from-[#00A86B] to-[#22C55E] bg-clip-text text-transparent">
//             Quick Links
//           </h3>

//           <ul className="space-y-2 text-white/60 text-sm">
//             <li><Link to={path.home} className="hover:text-[#22C55E] transition">Home</Link></li>
//             <li><Link to={path.about} className="hover:text-[#22C55E] transition">About</Link></li>
//             <li><Link to={path.services} className="hover:text-[#22C55E] transition">Services</Link></li>
//             <li><Link to={path.portfolio} className="hover:text-[#22C55E] transition">Portfolio</Link></li>
//             <li><Link to={path.contact} className="hover:text-[#22C55E] transition">Contact</Link></li>
//           </ul>
//         </div>

//         {/* SERVICES */}
//         <div>
//           <h3 className="text-lg font-semibold mb-4 font-['Space_Grotesk'] bg-gradient-to-r from-[#00A86B] to-[#22C55E] bg-clip-text text-transparent">
//             Services
//           </h3>

//           <ul className="space-y-2 text-white/60 text-sm">
//             <li>Web Development</li>
//             <li>App Development</li>
//             <li>CRM Solutions</li>
//             <li>E-commerce</li>
//             <li>SEO Optimization</li>
//           </ul>
//         </div>

//         {/* CONTACT + SOCIAL */}
//         <div>
//           <h3 className="text-lg font-semibold mb-4 font-['Space_Grotesk'] bg-gradient-to-r from-[#00A86B] to-[#22C55E] bg-clip-text text-transparent">
//             Contact
//           </h3>

//           {/* Contact Info with Icons */}
//           <div className="space-y-3 text-white/60 text-sm">
//             <p className="flex items-center gap-2">
//               <FaEnvelope className="text-[#22C55E]" aria-hidden="true" />
//               your@email.com
//             </p>
//             <p className="flex items-center gap-2">
//               <FaPhoneAlt className="text-[#22C55E]" aria-hidden="true" />
//               +91 9876543210
//             </p>
//             <p className="flex items-center gap-2">
//               <FaMapMarkerAlt className="text-[#22C55E]" aria-hidden="true" />
//               Ahmedabad, India
//             </p>
//           </div>

//           {/* SOCIAL ICONS */}
//           <div className="flex gap-3 mt-5">
//             {[
//               { icon: <FaFacebookF />, label: "Facebook" },
//               { icon: <FaInstagram />, label: "Instagram" },
//               { icon: <FaLinkedinIn />, label: "LinkedIn" }
//             ].map((item, i) => (
//               <div
//                 key={i}
//                 aria-label={item.label}
//                 className="p-2.5 bg-white/[0.05] border border-white/[0.08] rounded-full cursor-pointer hover:bg-[#00A86B] hover:border-[#00A86B] transition-all duration-300 hover:-translate-y-1"
//               >
//                 {item.icon}
//               </div>
//             ))}
//           </div>
//         </div>

//       </div>

//       {/* BOTTOM */}
//       <div className="relative text-center text-white/40 text-sm mt-12 border-t border-white/[0.08] pt-5">
//         © {new Date().getFullYear()} CodeCraft Labs. All rights reserved.
//       </div>

//     </footer>
//   );
// };

// export default memo(Footer);

import { memo } from "react";
import { Link, useLocation } from "react-router-dom";
import { path } from "../constant";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt
} from "react-icons/fa";
import logo from "../assets/Images/CodeCraft_Labs_logo.png";

const pages = [
  { name: "Home", path: path.home },
  { name: "About Us", path: path.aboutus },
  { name: "Services", path: path.services },
  { name: "Portfolio", path: path.portfolio },
  { name: "Contact", path: path.contact },
];

const Footer = () => {
  const location = useLocation();

  return (
    <footer className="relative bg-[#0B132B] text-white pt-20 pb-6 overflow-hidden">

      {/* Grid Background */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `linear-gradient(rgba(0,168,107,0.05) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(0,168,107,0.05) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Glow */}
      <div className="absolute -top-20 -right-20 w-80 h-80 bg-[#00A86B]/10 rounded-full blur-[40px]" />
      <div className="absolute -bottom-10 -left-10 w-60 h-60 bg-[#22C55E]/10 rounded-full blur-[40px]" />

      <div className="relative max-w-6xl mx-auto px-4 grid md:grid-cols-4 gap-10">

        {/* LOGO */}
        <div>
          <img src={logo} alt="CodeCraftLABS logo" className="h-12 mb-4" />
          <p className="text-white/60 text-sm">
            We build modern web & mobile applications to grow your business.
          </p>
        </div>

        {/* QUICK LINKS (SYNC WITH NAVBAR) */}
        <div>
          <h3 className="text-lg font-semibold mb-4 font-['Space_Grotesk'] bg-gradient-to-r from-[#00A86B] to-[#22C55E] bg-clip-text text-transparent">
            Quick Links
          </h3>

          <ul className="space-y-2 text-sm">
            {pages.map((page) => {
              const isActive = location.pathname === page.path;

              return (
                <li key={page.name}>
                  <Link
                    to={page.path}
                    className={`transition ${
                      isActive
                        ? "text-[#22C55E]"
                        : "text-white/60 hover:text-[#22C55E]"
                    }`}
                  >
                    {page.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        {/* SERVICES */}
        <div>
          <h3 className="text-lg font-semibold mb-4 font-['Space_Grotesk'] bg-gradient-to-r from-[#00A86B] to-[#22C55E] bg-clip-text text-transparent">
            Services
          </h3>

          <ul className="space-y-2 text-white/60 text-sm">
            <li>Web Development</li>
            <li>App Development</li>
            <li>CRM Solutions</li>
            <li>E-commerce</li>
            <li>SEO Optimization</li>
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h3 className="text-lg font-semibold mb-4 font-['Space_Grotesk'] bg-gradient-to-r from-[#00A86B] to-[#22C55E] bg-clip-text text-transparent">
            Contact
          </h3>

          <div className="space-y-3 text-white/60 text-sm">
            <p className="flex items-center gap-2">
              <FaEnvelope className="text-[#22C55E]" />
              codecraftlabs4668@email.com
            </p>
            <p className="flex items-center gap-2">
              <FaPhoneAlt className="text-[#22C55E]" />
              +91 8140520747
            </p>
            <p className="flex items-center gap-2">
              <FaMapMarkerAlt className="text-[#22C55E]" />
              Ahmedabad, India
            </p>
          </div>

          {/* SOCIAL */}
          <div className="flex gap-3 mt-5">
            {[FaFacebookF, FaInstagram, FaLinkedinIn].map((Icon, i) => (
              <div
                key={i}
                className="p-2.5 bg-white/[0.05] border border-white/[0.08] rounded-full cursor-pointer hover:bg-[#00A86B] hover:border-[#00A86B] transition hover:-translate-y-1"
              >
                <Icon />
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* BOTTOM */}
      <div className="text-center text-white/40 text-sm mt-12 border-t border-white/[0.08] pt-5">
        © {new Date().getFullYear()} CodeCraft Labs. All rights reserved.
      </div>
    </footer>
  );
};

export default memo(Footer);