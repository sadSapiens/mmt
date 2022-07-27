import React from "react";
import heart from "../assets/love.svg";
import calendar from "../assets/calendar.svg";
import client from "../assets/client.png";
import bag from "../assets/bag.png";

import one from "../assets/one.png";
import two from "../assets/two.png";
import three from "../assets/three.png";
import four from "../assets/four.png";
import five from "../assets/five.png";
import six from "../assets/six.png";
import seven from "../assets/seven.png";
import eight from "../assets/eight.png";

const Products = () => {
  return (
    <div className="mx-auto px-9   w-auto py-5">
      <div>
        <h1>Портфолио</h1>
      </div>
      <div className="flex justify-evenly py-5">
        <div className="flex">
          {" "}
          <button className="bg-[#1F1F1F] rounded-full ... w-auto px-8 flex gap-3">
            <img src={heart} alt="" />
            <span>Все</span>
          </button>
        </div>
        <div className="flex gap-3">
          {" "}
          <button className=" border border-[black]  rounded-full ... w-auto px-8  flex gap-3">
            <img src={calendar} alt="" />
            <span>Все</span>
          </button>
        </div>
        <div className="flex">
          {" "}
          <button className=" border border-[black]  rounded-full ... w-auto px-8 flex gap-3">
            <img src={client} alt="" />
            <span>Все</span>
          </button>
        </div>
        <div className="flex">
          {" "}
          <button className=" border border-[black]  rounded-full ... w-auto px-8 flex gap-3">
            <img src={bag} alt="" />
            <span>Все</span>
          </button>
        </div>
        <div className="flex">
          {" "}
          <button className=" border border-[black]  rounded-full ... w-auto px-8 flex gap-3">
            <img src={bag} alt="" />
            <span>Все</span>
          </button>
        </div>
        <div className="flex">
          {" "}
          <button className=" border border-[black]  rounded-full ... w-auto px-8 flex gap-3">
            <img src={bag} alt="" />
            <span>Все</span>
          </button>
        </div>
        <div className="flex">
          {" "}
          <button className=" border border-[black]  rounded-full ... w-auto px-8 flex gap-3">
            <img src={bag} alt="" />
            <span>Все</span>
          </button>
        </div>
      </div>
      <div>
        <div className="flex flex-wrap columns-4 gap-8 justify-evenly">
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
      </div>
    </div>
  );
};

export default Products;
