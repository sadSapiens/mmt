import React from "react";
import filterArrow from "../assets/filter-arrow.png";

const Filters = () => {
  return (
    <>
      <div className=" mx-auto  w-auto  font-jost py-9 flex justify-between flex-row ">
        <div>
          <span>1598 товаров</span>
        </div>
        <div>
          <button className="text-center items-center flex">
            Сортировать по: все товары
            <img src={filterArrow} alt="" />
          </button>
        </div>
      </div>
      <div className="flex bg-black  h-0.5"></div>
    </>
  );
};

export default Filters;
