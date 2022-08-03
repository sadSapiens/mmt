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
    <div className="container mx-auto px-4 ">
      <div className="flex flex-col md:flex-row mt-6 justify-center text-center  items-center align-middle  py-5 h-28">
        <div className="flex">
          <span className="font-semibold text-black  text-bold text-center flex">
            Каталог
          </span>
        </div>
        <div className="flex flex-row gap-4 md:overflow-auto overflow-scroll h-8  ">
          <button className=" flex w-16 align-middle justify-center items-center  rounded-full ... bg-[#1F1F1F] p-1 px-5 text-white text-center">
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
