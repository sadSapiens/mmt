import React from "react";
import arrow from "./assets/arrow.svg";

import one from "./assets/one.png";

import star from "./assets/Star.png";
import threeUser from "./assets/threeUser.png";
import category from "./assets/Category.png";

import "./port.css";
import { useAppDispatch } from "../../../store";
import { useHome } from "../../../store/varia/hooks";

const Portfolio = () => {
  const dispatch = useAppDispatch();
  const home = useHome();

  return (
    <div className="container mx-auto px-4 ">
      <div>
        <span className="text-4xl text-black font-bold	">Портфолио</span>
      </div>
      <div className="flex py-5 justify-center align-middle items-center text-center  md:!flex-nowrap flex-wrap md:row-auto">
        <div className="flex w-[100%] md:w-[100%]  justify-between">
          <div className="flex text-center row-auto gap-5 flex-col md:flex-row  justify-center items-center">
            <div className="bg-black h-14 w-14 rounded-full ...  flex justify-center items-center">
              <img className="object-center h-8 w-8" src={star} alt="" />
            </div>
            <span className="flex items-center text-xl">Более 9 лет на рынке</span>
          </div>
          <div className="flex gap-5 flex-col md:flex-row justify-center items-center">
            <div className="bg-black h-14 w-14 rounded-full ... flex justify-center items-center">
              <img className="object-center h-8 w-8" src={threeUser} alt="" />
            </div>
            <div className=" flex items-center text-xl">1000+ довольных клиентов</div>
          </div>
        </div>
        <div className="w-[100%] flex gap-5 flex-col md:flex-row justify-center items-center lg:py-0 py-3">
          <div className="bg-black h-14 w-14 rounded-full ... flex justify-center items-center">
            <img className="object-center h-8 w-8" src={category} alt="" />
          </div>
          <div className=" flex items-center text-xl">
            2800+ продукций для брендирования
          </div>
        </div>
      </div>

      {home?.portfolio ? (
        <div className=" md:gap-8 gap-2 justify-between my-3 flex flex-row overflow-x-auto ... overflow-y-clip  align-middle items-center">
          {home.portfolio.map((item: any, i) => (
            <div className="flex" key={i}>
              {item.photo ? (
                <img
                  className="md:h-56 md:w-64 w-44 h-32 max-w-none"
                  src={one}
                  // src={item.photo}

                  alt=""
                />
              ) : (
                <img className="md:h-56 md:w-64 w-44 h-32" src={one} alt="" />
              )}
            </div>
          ))}
        </div>
      ) : null}




      <div className="flex justify-center py-4">
        <button className="flex align-middle justify-center items-center rounded-full ... bg-[#1F1F1F] py-2 px-7 text-white">
          Больше товаров
          <img className=" flex px-2" src={arrow} alt="" />
        </button>
      </div>
    </div>
  );
};

export default Portfolio;
