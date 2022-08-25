import React, { useState } from "react";
import heart from "./catalog-images/heart.png";
import calendar from "./catalog-images/calendar.svg";
import client from "./catalog-images/client.png";
import bag from "./catalog-images/bag.png";

import one from "./catalog-images/one.png";
import two from "./catalog-images/two.png";
import three from "./catalog-images/three.png";
import four from "./catalog-images/four.png";
import five from "./catalog-images/five.png";
import six from "./catalog-images/six.png";
import seven from "./catalog-images/seven.png";
import eight from "./catalog-images/eight.png";

import arrow from "./catalog-images/arrow.svg";

const Catalog = () => {
  const [isButton, setIsButton] = useState(true);

  return (
    <div className="container mx-auto px-4 ">
      <div className="flex flex-col md:flex-row mt-3 justify-start text-center  items-center align-middle  py-2 ">
        <span className="  py-2 font-semibold text-black text-bold text-center ">
          Каталог
        </span>
        <div className="flex flex-row gap-4  overflow-x-auto overflow-y-clip h-8 justify-start md:justify-center px-4 w-full md:w-auto">
          <button
            className={`${
              !isButton ? "bg-black text-white " : "bg-white text-black"
            } flex   align-middle justify-center items-center  rounded-full ... bg-[#1F1F1F] p-1 px-3 text-white text-center text-xs md:text-base `}
          >
            <img className=" flex px-2" src={heart} alt="" />
            Тренды
          </button>
        </div>
      </div>
      <div
        className="flex flex-wrap md:flex-row justify-center items-center md:gap-20 gap-10
       py-3"
      >
        <div className="  md:h-56 md:w-56 h-32 w-32 border  border-black ">
          <img src={one} alt="" />
          <span className="flex align-bottom justify-center text-black text-sm  md:text-base text-center">
            Лого на одежде
          </span>
        </div>
        <div className=" md:h-56 md:w-56 h-32 w-32 border border-[#1F1F1F] ">
          <img src={two} alt="" />
          <span className="flex align-bottom justify-center text-black text-sm  md:text-base text-center">
            Лого на одежде
          </span>
        </div>
        <div className=" md:h-56 md:w-56 h-32 w-32 border border-[#1F1F1F] ">
          <img src={three} alt="" />
          <span className="flex align-bottom justify-center text-black text-sm  md:text-base text-center">
            Лого на одежде
          </span>
        </div>
        <div className=" md:h-56 md:w-56 h-32 w-32 border border-[#1F1F1F] ">
          <img src={four} alt="" />
          <span className="flex align-bottom justify-center text-black text-sm  md:text-base text-center">
            Лого на одежде
          </span>
        </div>
        <div className=" md:h-56 md:w-56 h-32 w-32 border border-[#1F1F1F] ">
          <img src={five} alt="" />
          <span className="flex align-bottom justify-center text-black text-sm  md:text-base text-center">
            Лого на одежде
          </span>
        </div>
        <div className=" md:h-56 md:w-56 h-32 w-32 border border-[#1F1F1F] ">
          <img src={six} alt="" />
          <span className="flex align-bottom justify-center text-black text-sm  md:text-base text-center">
            Лого на одежде
          </span>
        </div>
        <div className=" md:h-56 md:w-56 h-32 w-32 border border-[#1F1F1F] ">
          <img src={seven} alt="" />
          <span className="flex align-bottom justify-center text-black text-sm  md:text-base text-center">
            Лого на одежде
          </span>
        </div>
        <div className=" md:h-56 md:w-56 h-32 w-32 border border-[#1F1F1F] ">
          <img src={eight} alt="" />
          <span className="flex align-bottom justify-center text-black text-sm  md:text-base text-center">
            Лого на одежде
          </span>
        </div>
      </div>
      <div className="flex justify-center">
        <button className=" flex align-middle justify-center items-center rounded-full ... bg-[#1F1F1F] py-2 px-10 text-white">
          Больше товаров
          <img
            className=" flex justify-center items-center align-middle"
            src={arrow}
            alt=""
          />
        </button>
      </div>
    </div>
  );
};

export default Catalog;
