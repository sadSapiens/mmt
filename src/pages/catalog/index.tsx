import React from "react";
import Footer from "../../components/footer/Footer";
import NavBar from "../../components/navbar/MyNavbar";
import CatalogTools from "./catalog-tools/CatalogTools";
// import Filters from "./filters/Filters";

const CatalogPage = () => {
  return (
    <div>
      <NavBar />
      <CatalogTools />
      {/* <Filters /> */}
      <Footer />
    </div>
  );
};

export default CatalogPage;
