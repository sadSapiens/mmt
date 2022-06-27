import React from "react";
import MyNavbar from "../../components/navbar/MyNavbar";
import Catalog from "./catalog/Catalog";
import Feedback from "./feedback/Feedback";
import Portfolio from "./portfolio/Portfolio";
import Slider from "./slider/Slider";

const Home = () => {
  return (
    <>
      <MyNavbar />
      {/* slide */}
      <div>
        <Slider />
      </div>
      {/* //slide */}
      <Catalog />
      <Feedback />
      <Portfolio />
    </>
  );
};

export default Home;
