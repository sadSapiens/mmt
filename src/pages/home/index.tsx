import React from "react";
import Brands from "./brands/Brands";
import Catalog from "./catalog/Catalog";
import Faq from "./FAQ/Faq";
import Feedback from "./feedback/Feedback";
import FooterHome from "./footer-home/FooterHome";
import Portfolio from "./portfolio/Portfolio";
import Slider from "./slider/Slider";
import Whyus from "./whyus/Whyus";

const Home = () => {
  return (
    <>
      <div className="font-jost">
        {/* slide */}
        <div>
          <Slider />
        </div>
        {/* //slide */}
        <Catalog />
        <Portfolio />
        <Whyus />
        <Feedback />
        <Brands />
        <Faq />
        <FooterHome />
      </div>
    </>
  );
};

export default Home;
