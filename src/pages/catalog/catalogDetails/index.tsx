import React from "react";
import Footer from "../../../components/footer/Footer";
import NavBar from "../../../components/navbar/MyNavbar";
import CatalogDetails from "./CatalogDetails";

const CatalogDetailsPage = () => {
  return (
    <div className="">
      <NavBar />
      <CatalogDetails />
      <Footer />
    </div>
  );
};

export default CatalogDetailsPage;
