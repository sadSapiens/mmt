import React from "react";
import Footer from "../../../components/footer/Footer";
import NavBar from "../../../components/navbar/MyNavbar";
import OrderHistory from "./OrderHistory";

const HistoryOrder = () => {
  return (
    <div>
      <NavBar />
      <OrderHistory />
      <Footer />
    </div>
  );
};

export default HistoryOrder;
