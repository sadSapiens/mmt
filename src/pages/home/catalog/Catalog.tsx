import React from "react";
import heart from "./heart.png";
import calendar from "./calendar.svg";
import client from "./client.png";
import bag from "./bag.png";

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
  return (
    <div className="container mx-auto px-4">
      <div className="flex mt-6 justify-start  align-middle gap-x-8 gap-y-4 grid-cols-3 container mx-auto px-4">
        <div>
          <span className="font-semibold text-black mr-8 text-[36px]">
            Каталог
          </span>
        </div>
        <div className="flex gap-4">
          <button className=" flex align-middle justify-center items-center rounded-full ... bg-[#1F1F1F] p-1 px-5 text-white text-center">
            <img className=" flex px-2" src={heart} alt="" />
            Тренды
          </button>
          <button className=" flex align-middle items-center rounded-full ... border-black border p-1 px-7 text-black">
            <img className=" flex px-2" src={calendar} alt="" />
            По праздникам
          </button>
          <button className=" flex align-middle items-center rounded-full ... border-black border p-1 px-7 text-black">
            <img className=" flex px-2" src={client} alt="" />
            По клиентам
          </button>
          <button className=" flex align-middle items-center rounded-full ... border-black border p-1 px-7 text-black">
            <img className=" flex px-2" src={bag} alt="" />
            По секторам
          </button>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-4 container m-5">
        <div className="h-56 w-56 border border-[#1F1F1F] ">
          <img src={one} alt="" />
          <span className="flex align-bottom justify-center text-black text-center">
            Лого на одежде
          </span>
        </div>
        <div className="h-56 w-56 border border-[#1F1F1F] ">
          <img src={two} alt="" />
          <span className="flex align-bottom justify-center text-black text-center">
            Лого на одежде
          </span>
        </div>
        <div className="h-56 w-56 border border-[#1F1F1F] ">
          <img src={three} alt="" />
          <span className="flex align-bottom justify-center text-black text-center">
            Лого на одежде
          </span>
        </div>
        <div className="h-56 w-56 border border-[#1F1F1F] ">
          <img src={four} alt="" />
          <span className="flex align-bottom justify-center text-black text-center">
            Лого на одежде
          </span>
        </div>
        <div className="h-56 w-56 border border-[#1F1F1F] ">
          <img src={five} alt="" />
          <span className="flex align-bottom justify-center text-black text-center">
            Лого на одежде
          </span>
        </div>
        <div className="h-56 w-56 border border-[#1F1F1F] ">
          <img src={six} alt="" />
          <span className="flex align-bottom justify-center text-black text-center">
            Лого на одежде
          </span>
        </div>
        <div className="h-56 w-56 border border-[#1F1F1F] ">
          <img src={seven} alt="" />
          <span className="flex align-bottom justify-center text-black text-center">
            Лого на одежде
          </span>
        </div>
        <div className="h-56 w-56 border border-[#1F1F1F] ">
          <img src={eight} alt="" />
          <span className="flex align-bottom justify-center text-black text-center">
            Лого на одежде
          </span>
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

export default Catalog;
