import React, { useState, useEffect } from "react";
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
import { useAppDispatch } from "../../../store";
import { useHome } from "../../../store/varia/hooks";
import { fetchHome } from "../../../store/varia";

const Catalog = () => {
  const [openTab, setOpenTab] = useState(0);
  const [more, setMore] = useState(false);

  const dispatch = useAppDispatch();
  const home = useHome();
  useEffect(() => {
    dispatch(fetchHome() as any);
  }, []);

  return (
    <div className="container mx-auto px-4 ">
      {home?.catalogs && (
        <>
          <div className="flex flex-col md:flex-row  justify-start text-center  items-center align-middle  py-2 ">
            <span className="  py-4 font-semibold text-black text-bold text-center ">
              Каталог
            </span>

            <div className="flex flex-row gap-4 scroll-photo  overflow-x-auto overflow-y-clip h-8 justify-start md:justify-center px-10 w-full md:w-auto">
              {home.catalogs.map((item, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setOpenTab(index);
                  }}
                  className={`${
                    index === openTab
                      ? "bg-black text-white "
                      : "bg-white text-black"
                  } flex   align-middle justify-center items-center  rounded-full ... py-1 px-5 w-auto  text-center text-xs md:text-base text-black border-[1px] border-black  `}
                >
                  <img
                    className=" flex px-2"
                    src={item.icon ? item.icon : calendar}
                    alt=""
                  />
                  <span className="flex justify-center items-center">
                    {item.name}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {home.catalogs.map((item, index) => {
            return index === openTab ? (
              <div
                key={index}
                className="flex flex-wrap md:flex-row justify-center items-center md:gap-20 gap-10 py-3"
              >
                {item.categories.length && item.categories.length > 6
                  ? item.categories.slice(2).map((item) => (
                      <div className="  md:h-52 md:w-52 h-32 w-32 border-[1px]  border-black ">
                        <>
                          <img src={item.picture ? item.picture : one} alt="" />
                          <span className="flex py-2 items-center align-bottom justify-center text-black text-sm  md:text-base text-center">
                            {item.name}
                          </span>
                        </>
                      </div>
                    ))
                  : item.categories.map((item) => (
                      <div className="  md:h-52 md:w-52 h-32 w-32 border-[1px]  border-black ">
                        <>
                          <img src={item.picture ? item.picture : one} alt="" />
                          <span className="flex py-2 items-center align-bottom justify-center text-black text-sm  md:text-base text-center">
                            {item.name}
                          </span>
                        </>
                      </div>
                    ))}
              </div>
            ) : null;
          })}
        </>
      )}

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
