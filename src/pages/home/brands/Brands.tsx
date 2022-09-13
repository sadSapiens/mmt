import React, { useEffect } from "react";
import hiidea from "./assets/hiidea.png";
import ekston from "./assets/ekston.png";
import oasis from "./assets/oasis.png";
import arrow from "./assets/arrow.svg";
import { useAppDispatch } from "../../../store";
import { useHome } from "../../../store/varia/hooks";
import { fetchHome } from "../../../store/varia";

const Brands = () => {
  const dispatch = useAppDispatch();
  const home = useHome();

  return (
    <div className="container mx-auto px-4 my-5">
      <div>
        <span className="font-semibold text-black mr-8 text-4xl">
          Бренды
        </span>
      </div>

      {home?.brands.length ? (
        <div className="flex md:justify-evenly my-4 px-3 flex-col md:flex-row justify-center items-center">
          {home.brands.map((item: any, i) => (
            <div key={i} className="flex flex-col items-center py-2">
              <div>
                {!item.logotype ? (
                  <img src={item.logotype} alt="" />
                ) : (
                  <img src={oasis} alt="" />
                )}
              </div>
              <h6 className="py-3 flex justify-center items-center">
                {item.name}
              </h6>
            </div>
          ))}
        </div>
      ) : (
        <p>Ничего нету ( </p>
      )}
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
