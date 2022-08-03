import React from "react";
import arrow from "./assets/arrow.svg";

import one from "./assets/one.png";
import two from "./assets/two.png";
import three from "./assets/three.png";
import four from "./assets/four.png";

import star from "./assets/Star.png";
import threeUser from "./assets/threeUser.png";
import category from "./assets/Category.png";

const Portfolio = () => {
  return (
    <div className="container mx-auto px-4">
      <div>
        <span className="text-3xl text-[#383838] font-bold	">Портфолио</span>
      </div>
      <div className="flex justify-between align-middle items-center text-center  flex-wrap md:row-auto">
        <div className="flex w-[100%] md:w-[60%] justify-between">
          <div className="flex text-center row-auto gap-5 flex-col md:flex-row  justify-center items-center">
            <div className="bg-black h-10 w-10 rounded-full ...  flex justify-center items-center">
              <img className="object-center h-7 w-7" src={star} alt="" />
            </div>
            <span className="flex items-center">Более 9 лет на рынке</span>
          </div>
          <div className="flex gap-5 flex-col md:flex-row justify-center items-center">
            <div className="bg-black h-10 w-10 rounded-full ... flex justify-center items-center">
              <img className="object-center h-7 w-7" src={threeUser} alt="" />
            </div>
            <div className=" flex items-center">1000+ довольных клиентов</div>
          </div>
        </div>
        <div className="flex gap-5 flex-col md:flex-row justify-center items-center">
          <div className="bg-black h-10 w-10 rounded-full ... flex justify-center items-center">
            <img className="object-center h-7 w-7" src={category} alt="" />
          </div>
          <div className=" flex items-center">
            2800+ продукций для брендирования
          </div>
        </div>
      </div>
      <div className="flex gap-8 justify-evenly my-3">
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
        <button className="flex align-middle justify-center items-center rounded-full ... bg-[#1F1F1F] py-2 px-7 text-white">
          Больше товаров
          <img className=" flex px-2" src={arrow} alt="" />
        </button>
      </div>
    </div>
  );
};

export default Portfolio;
