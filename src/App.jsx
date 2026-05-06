import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { path } from "./constant";

import LandingPage from "./Pages/LandingPage";
import AboutUs from "./Pages/AboutUs";
import ScrollToTop from "./Components/ScrollToTop";
import { Toaster } from "react-hot-toast";
import WhatsAppButton from "./Components/WhatsAppButton";

// Lazy loading heavy pages
const ServicesPage = lazy(() => import("./Pages/ServicesPage"));
const PortfolioPage = lazy(() => import("./Pages/PortfolioPage"));
const ContactPage = lazy(() => import("./Pages/ContactPage"));
const ProjectDetails = lazy(() => import("./Containers/Portfolio/ProjectDetails"));

function App() {
  return (
    <Router>
      <WhatsAppButton />
      <ScrollToTop />
      <Toaster position="top-right" reverseOrder={false} />
      <Suspense fallback={
        <div className="h-screen w-full flex items-center justify-center bg-white">
          <div className="w-10 h-10 border-4 border-[#00A86B] border-t-transparent rounded-full animate-spin"></div>
        </div>
      }>
        <Routes>
          <Route path={path.home} element={<LandingPage />} />

          <Route
            path={path.aboutus}
            element={<LandingPage screen={<AboutUs />} />}
          />

          <Route
            path={path.services}
            element={<LandingPage screen={<ServicesPage />} />}
          />

          <Route
            path={path.portfolio}
            element={<LandingPage screen={<PortfolioPage />} />}
          />

          <Route
            path={path.contact}
            element={<LandingPage screen={<ContactPage />} />}
          />

          <Route
            path="/project/:id"
            element={<LandingPage screen={<ProjectDetails />} />}
          />

          {/* 404 Page */}
          <Route path="*" element={<div>Page Not Found</div>} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;