import React from "react";
import Footer from "../../components/footer/Footer";
import NavBar from "../../components/navbar/MyNavbar";
import Products from "./catalog/Products";

const Portfolio = () => {
  return (
    <div>
      <NavBar />
      <Products />
      <Footer />
    </div>
  );
};

export default Portfolio;
