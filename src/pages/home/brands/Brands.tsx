import React from "react";
import hiidea from "./assets/hiidea.png";
import ekston from "./assets/ekston.png";
import oasis from "./assets/oasis.png";
import arrow from "./assets/arrow.svg";

const Brands = () => {
  return (
    <div className="container mx-auto px-4 my-5">
      <div>
        <span className="font-semibold text-black mr-8 text-[36px]">
          Бренды
        </span>
      </div>
      <div className="flex justify-evenly my-4">
        <div className="flex flex-col items-center">
          <img src={hiidea} alt="" />
          <h6>Португалия</h6>
        </div>
        <div className="flex flex-col items-center">
          <img src={ekston} alt="" />
          <h6>Португалия</h6>
        </div>
        <div className="flex flex-col items-center">
          <img src={oasis} alt="" />
          <h6>Португалия</h6>
        </div>
      </div>
      <div className="flex justify-center">
        <button className=" flex align-middle justify-center rounded-full ... bg-[#1F1F1F] p-2 px-7 text-white">
          Больше товаров
          <img className=" flex px-2" src={arrow} alt="" />
        </button>
      </div>
    </div>
  );
};

export default Brands;
