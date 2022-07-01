import React from "react";
import Footer from "../../components/footer/Footer";
import NavBar from "../../components/navbar/MyNavbar";
import Cart from "./cart/Cart";

const Basket = () => {
  return (
    <div>
      <NavBar />
      <Cart />
      <Footer />
    </div>
  );
};

export default Basket;
