import React from "react";
import arrow from "./assets/arrow.svg";

import one from "./assets/one.png";
import two from "./assets/two.png";
import three from "./assets/three.png";
import four from "./assets/four.png";

const Portfolio = () => {
  return (
    <div className="container mx-auto px-4">
      <div>
        <span className="text-[36px] text-[#383838] font-bold	">Портфолио</span>
      </div>
      <div className="flex justify-between align-middle items-center text-center mx-40">
        <div className="flex text-center row-auto">
          <div className="bg-black h-10 w-10 rounded-full ..."></div>
          <span className="flex items-center">Более 9 лет на рынке</span>
        </div>
        <div className="flex">
          <div className="bg-black h-10 w-10 rounded-full ..."></div>
          <div className=" flex items-center">Более 9 лет на рынке</div>
        </div>
        <div className="flex">
          <div className="bg-black h-10 w-10 rounded-full ..."></div>
          <div className=" flex items-center">Более 9 лет на рынке</div>
        </div>
      </div>
      <div className="flex gap-8 justify-evenly my-7">
        <div>
          <img className="h-56 w-64" src={one} alt="" />
        </div>
        <div>
          <img className="h-56 w-64" src={two} alt="" />
        </div>
        <div>
          <img className="h-56 w-64" src={three} alt="" />
        </div>
        <div>
          <img className="h-56 w-64" src={four} alt="" />
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

export default Portfolio;
