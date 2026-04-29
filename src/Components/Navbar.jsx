import { memo, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import { path } from "../constant";
import logo from "../assets/Images/CodeCraft_Labs_logo.png";

const pages = [
  { name: "Home", path: path.home },
  { name: "About Us", path: path.aboutus },
  { name: "Services", path: path.services },
  { name: "Portfolio", path: path.portfolio },
  { name: "Contact", path: path.contact },
];

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <nav className="w-full bg-[#0B132B]/95 backdrop-blur-md text-white sticky top-0 z-50 shadow-md font-body">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex items-center justify-between h-16 md:h-20">

          {/* LEFT - LOGO */}
          <div
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => navigate("/")}
          >
            <img
              src={logo}
              alt="CodeCraftLABS logo"
              className="h-16"
              width="auto"
              height="64"
            />
          </div>

          {/* CENTER - MENU */}
          <div className="hidden md:flex items-center gap-10">
            {pages.map((page) => {
              const isActive = location.pathname === page.path;

              return (
                <Link
                  key={page.name}
                  to={page.path}
                  className="relative text-sm font-medium group"
                >
                  <span
                    className={`transition duration-300 ${
                      isActive
                        ? "text-[#22C55E]"
                        : "text-white group-hover:text-[#22C55E]"
                    }`}
                  >
                    {page.name}
                  </span>

                  {/* UNDERLINE */}
                  <span
                    className={`absolute left-0 -bottom-1 h-[2px] transition-all duration-300 ${
                      isActive
                        ? "w-full  hover:text-[#22C55E]"
                        : "w-0 bg-[#22C55E] group-hover:w-full"
                    }`}
                  />
                </Link>
              );
            })}
          </div>

          {/* RIGHT - BUTTON + MOBILE MENU */}
          <div className="flex items-center gap-4">

            {/* CTA */}
            <button
              onClick={() => navigate(path.contact)}
              className="hidden cursor-pointer md:block bg-[#00A86B] hover:bg-[#22C55E] px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 hover:scale-105 shadow-md"
            >
              Get Quote
            </button>

            {/* MOBILE MENU BUTTON */}
            <div className="md:hidden">
              {mobileMenu ? (
                <FiX
                  className="h-6 w-6 cursor-pointer"
                  onClick={() => setMobileMenu(false)}
                />
              ) : (
                <FiMenu
                  className="h-6 w-6 cursor-pointer"
                  onClick={() => setMobileMenu(true)}
                />
              )}
            </div>
          </div>
        </div>

        {/* MOBILE MENU */}
        {mobileMenu && (
          <div className="md:hidden mt-3 bg-[#0B132B] rounded-xl p-4 space-y-3 shadow-lg animate-[fadeIn_0.3s_ease]">

            {pages.map((page) => {
              const isActive = location.pathname === page.path;

              return (
                <Link
                  key={page.name}
                  to={page.path}
                  onClick={() => setMobileMenu(false)}
                  className={`block px-3 py-2 rounded-md text-base ${
                    isActive
                      ? " hover:text-[#22C55E] bg-white/10"
                      : "text-white hover:text-[#22C55E] hover:bg-white/5"
                  }`}
                >
                  {page.name}
                </Link>
              );
            })}

            <button
              onClick={() => {
                setMobileMenu(false);
                navigate(path.contact);
              }}
              className="w-full mt-2 cursor-pointer bg-[#00A86B] hover:bg-[#22C55E] px-4 py-2 rounded-full font-semibold"
            >
              Get Quote
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}

export default memo(Navbar);