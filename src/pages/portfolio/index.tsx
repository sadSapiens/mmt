import React from "react";
import heart from "./assets/love.svg";
import calendar from "./assets/calendar.svg";
import client from "./assets/client.png";
import bag from "./assets/bag.png";

import one from "./assets/one.png";
import two from "./assets/two.png";
import three from "./assets/three.png";
import four from "./assets/four.png";
import five from "./assets/five.png";
import six from "./assets/six.png";
import seven from "./assets/seven.png";
import eight from "./assets/eight.png";

const Portfolio = () => {
  return (
    <div className="mx-auto md:px-9 px-6   w-auto py-5">
      <div>
        <h1>Портфолио</h1>
      </div>
      <div className="flex flex-row overflow-x-auto ...  align-middle items-center py-5 gap-4">
        <div className="">
          {" "}
          <button className="bg-[#1F1F1F] text-white rounded-full ... w-auto px-8  py-1 flex justify-center items-center gap-3">
            <img src={heart} alt="" />
            <span>Все</span>
          </button>
        </div>
        <div className="flex gap-3">
          {" "}
          <button className=" border !border-[black]  rounded-full ...  w-auto px-8  py-1 flex justify-center items-center gap-2">
            <img src={calendar} alt="" />
            <span>2</span>
          </button>
        </div>
        <div className="flex">
          {" "}
          <button className=" border !border-[black]  rounded-full ...  w-auto px-8  py-1 flex justify-center items-center gap-2">
            <img src={client} alt="" />
            <span>3</span>
          </button>
        </div>
        <div className="flex">
          {" "}
          <button className=" border !border-[black]  rounded-full ...  w-auto px-8  py-1 flex justify-center items-center gap-2">
            <img src={bag} alt="" />
            <span>4</span>
          </button>
        </div>
        <div className="flex">
          {" "}
          <button className=" border !border-[black]  rounded-full ...  w-auto px-8  py-1 flex justify-center items-center gap-2">
            <img src={bag} alt="" />
            <span>5</span>
          </button>
        </div>
        <div className="flex">
          {" "}
          <button className=" border !border-[black]  rounded-full ...  w-auto px-8  py-1 flex justify-center items-center gap-2">
            <img src={bag} alt="" />
            <span>6</span>
          </button>
        </div>
        <div className="flex">
          {" "}
          <button className=" border !border-[black]  rounded-full ...  w-auto px-8  py-1 flex justify-center items-center gap-2">
            <img src={bag} alt="" />
            <span>7</span>
          </button>
        </div>
      </div>
      <div className="flex flex-wrap md:columns-4 md:gap-8 md:justify-evenly justify-center items-center gap-4 columns-2 flex-row">
        <div className="md:h-56 md:w-56 h-36 w-36 border border-[#1F1F1F] ">
          <img src={one} alt="" />
          <span className="flex align-bottom justify-center text-black text-center">
            Лого на одежде
          </span>
        </div>
        <div className="md:h-56 md:w-56 h-36 w-36 border border-[#1F1F1F] ">
          <img src={two} alt="" />
          <span className="flex align-bottom justify-center text-black text-center">
            Лого на одежде
          </span>
        </div>
        <div className="md:h-56 md:w-56 h-36 w-36 border border-[#1F1F1F] ">
          <img src={three} alt="" />
          <span className="flex align-bottom justify-center text-black text-center">
            Лого на одежде
          </span>
        </div>
        <div className="md:h-56 md:w-56 h-36 w-36 border border-[#1F1F1F] ">
          <img src={four} alt="" />
          <span className="flex align-bottom justify-center text-black text-center">
            Лого на одежде
          </span>
        </div>
        <div className="md:h-56 md:w-56 h-36 w-36 border border-[#1F1F1F] ">
          <img src={five} alt="" />
          <span className="flex align-bottom justify-center text-black text-center">
            Лого на одежде
          </span>
        </div>
        <div className="md:h-56 md:w-56 h-36 w-36 border border-[#1F1F1F] ">
          <img src={six} alt="" />
          <span className="flex align-bottom justify-center text-black text-center">
            Лого на одежде
          </span>
        </div>
        <div className="md:h-56 md:w-56 h-36 w-36 border border-[#1F1F1F] ">
          <img src={seven} alt="" />
          <span className="flex align-bottom justify-center text-black text-center">
            Лого на одежде
          </span>
        </div>
        <div className="md:h-56 md:w-56 h-36 w-36 border border-[#1F1F1F] ">
          <img src={eight} alt="" />
          <span className="flex align-bottom justify-center text-black text-center">
            Лого на одежде
          </span>
        </div>
        <div className="md:h-56 md:w-56 h-36 w-36 border border-[#1F1F1F] ">
          <img src={one} alt="" />
          <span className="flex align-bottom justify-center text-black text-center">
            Лого на одежде
          </span>
        </div>
        <div className="md:h-56 md:w-56 h-36 w-36 border border-[#1F1F1F] ">
          <img src={two} alt="" />
          <span className="flex align-bottom justify-center text-black text-center">
            Лого на одежде
          </span>
        </div>
        <div className="md:h-56 md:w-56 h-36 w-36 border border-[#1F1F1F] ">
          <img src={three} alt="" />
          <span className="flex align-bottom justify-center text-black text-center">
            Лого на одежде
          </span>
        </div>
        <div className="md:h-56 md:w-56 h-36 w-36 border border-[#1F1F1F] ">
          <img src={four} alt="" />
          <span className="flex align-bottom justify-center text-black text-center">
            Лого на одежде
          </span>
        </div>
        <div className="md:h-56 md:w-56 h-36 w-36 border border-[#1F1F1F] ">
          <img src={five} alt="" />
          <span className="flex align-bottom justify-center text-black text-center">
            Лого на одежде
          </span>
        </div>
        <div className="md:h-56 md:w-56 h-36 w-36 border border-[#1F1F1F] ">
          <img src={six} alt="" />
          <span className="flex align-bottom justify-center text-black text-center">
            Лого на одежде
          </span>
        </div>
        <div className="md:h-56 md:w-56 h-36 w-36 border border-[#1F1F1F] ">
          <img src={seven} alt="" />
          <span className="flex align-bottom justify-center text-black text-center">
            Лого на одежде
          </span>
        </div>
        <div className="md:h-56 md:w-56 h-36 w-36 border border-[#1F1F1F] ">
          <img src={eight} alt="" />
          <span className="flex align-bottom justify-center text-black text-center">
            Лого на одежде
          </span>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
