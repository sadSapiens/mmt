import React, { useEffect } from "react";
import { useAppDispatch } from "../../store";
import { fetchHome } from "../../store/varia";
import { useHome } from "../../store/varia/hooks";
import Brands from "./brands/Brands";
import Catalog from "./catalog/Catalog";
import Faq from "./FAQ/Faq";
import Feedback from "./feedback/Feedback";
import FooterHome from "./footer-home/FooterHome";
import Portfolio from "./portfolio/Portfolio";
import Slider from "./slider/Slider";
import Whyus from "./whyus/Whyus";

const Home = () => {
  const dispatch = useAppDispatch();
  const home = useHome();
  useEffect(() => {
    dispatch(fetchHome() as any);
  }, []);

  return (
    <>
      <div className="font-jost">
        <Slider />
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
