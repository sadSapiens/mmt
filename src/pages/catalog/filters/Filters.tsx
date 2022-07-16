import React from "react";
import schema from "../assets/schema.png";
import list from "../assets/list.png";
import filterArrow from "../assets/filter-arrow.png";

const Filters = () => {
  return (
    <>
      <div className="flex mx-auto px-9 w-auto  font-jost py-9 items-center align-middle text-center place-items-center object-center justify-items-center">
        <div className=" flex justify-between flex-row ">
          <div>
            <div className="flex justify-center items-center gap-3">
              <span>1598 товаров</span>{" "}
              <button className="bg-black text-white flex rounded-full ... w-auto px-5 py-2 gap-2">
                <img src={schema} alt="" />
                Схема
              </button>
              <button className="flex rounded-full ... w-auto px-5 py-2 border border-black">
                <img src={list} alt="" />
                Список
              </button>
            </div>
          </div>
          <div className="flex flex-row items-center">
            <span>Фильтр:</span>
            <button className="text-center items-center flex">
              все товары
              <img src={filterArrow} alt="" />
            </button>
          </div>
        </div>
      </div>
      <div className="flex bg-black  h-0.5"></div>
    </>
  );
};

export default Filters;
