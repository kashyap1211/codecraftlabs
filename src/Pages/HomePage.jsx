import React, { lazy, Suspense } from "react";
import Banner from "../Containers/Home/Banner";
import About from "../Containers/Home/About";

// Lazy load below-the-fold sections
const Services = lazy(() => import("../Containers/Home/Services"));
const Portfolio = lazy(() => import("../Containers/Home/Portfolio"));
const WhyChooseUs = lazy(() => import("../Containers/Home/WhyChooseUs"));
const Contact = lazy(() => import("../Containers/Home/Contact"));

const SectionLoader = () => <div className="h-40 w-full flex items-center justify-center bg-transparent" />;

const HomePage = () => {
  return (
    <main>
      <Banner />
      <div style={{ contentVisibility: 'auto', containIntrinsicSize: '0 500px' }}>
        <About />
      </div>
      <Suspense fallback={<SectionLoader />}>
        <div style={{ contentVisibility: 'auto', containIntrinsicSize: '0 800px' }}>
          <Services />
        </div>
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <div style={{ contentVisibility: 'auto', containIntrinsicSize: '0 1000px' }}>
          <Portfolio />
        </div>
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <div style={{ contentVisibility: 'auto', containIntrinsicSize: '0 600px' }}>
          <WhyChooseUs />
        </div>
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <div style={{ contentVisibility: 'auto', containIntrinsicSize: '0 600px' }}>
          <Contact />
        </div>
      </Suspense>
    </main>
  );
};

export default HomePage;