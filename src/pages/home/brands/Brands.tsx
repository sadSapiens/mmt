import React from "react";
import hiidea from "./assets/hiidea.png";
import ekston from "./assets/ekston.png";
import oasis from "./assets/oasis.png";
import arrow from "./assets/arrow.svg";

const Brands = () => {
  return (
    <div className="container mx-auto px-4 my-5">
      <div>
        <span className="font-semibold text-black mr-8 text-text-3xl">
          Бренды
        </span>
      </div>
      <div className="flex md:justify-evenly my-4 px-3 flex-col md:flex-row justify-center items-center">
        <div className="flex flex-col items-center py-2">
          <div>
            <img src={hiidea} alt="" />
          </div>
          <h6>Португалия</h6>
        </div>
        <div className="flex flex-col items-center py-2">
          <img src={ekston} alt="" />
          <h6>Португалия</h6>
        </div>
        <div className="flex flex-col items-center py-2">
          <img src={oasis} alt="" />
          <h6>Португалия</h6>
        </div>
      </div>
      <div className="flex justify-center">
        <button className="flex align-middle justify-center items-center rounded-full ... bg-[#1F1F1F] py-2 px-7 text-white">
          Больше товаров
          <img className=" flex px-2" src={arrow} alt="" />
        </button>
      </div>
    </div>
  );
};

export default Brands;
