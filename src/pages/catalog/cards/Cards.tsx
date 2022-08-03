import React from "react";
import image from "../assets/card-image.png";
import shopbag from "../assets/shopbag.png";

const Cards = () => {
  return (
    <div className="py-7  flex justify-center md:w-auto w-[45%]">
      <div className=" border border-black   md:w-auto md:flex justify-center flex-col items-center object-center content-center place-items-center">
        <div className=" flex">
          <img className="md:w-[100%]  " src={image} alt="" />
        </div>
        <div>
          <h5 className="md:flex md:px-3 flex justify-start md:justify-center text-sm font-light">
            Код товара: 1050
          </h5>
          <div className="flex justify-start flex-wrap break-all flex-col md:flex-row md:justify-center md:items-center px-1 ">
            <h4 className="md:w-6/12 font-jost md:font-medium font-normal text-base text-black flex  justify-start w-auto">
              Гелиевая ручка
              <span className="hidden md:flex"> «Montreal»</span>
            </h4>
            <div className="md:w-6/12 flex md:justify-center gap-2 justify-start w-12/12">
              <div className="h-3 w-3 bg-[#14153C] rounded-full ..."></div>
              <div className="h-3 w-3 bg-[#65A8E0] rounded-full ..."></div>
              <div className="h-3 w-3 bg-[#A91E1E] rounded-full ..."></div>
            </div>

            {/* <div className="flex flex-wrap break-all"></div> */}
          </div>
          <div className="flex justify-between md:px-5 px-2 text-black font-jost ">
            <div className="flex flex-col">
              <span className="font-light">Цена:</span>
              <b>650 C</b>
            </div>
            <div className="md:w-10 md:h-10 w-8 h-8 bg-[#343434] rounded-full ... flex justify-center items-center">
              <img src={shopbag} className="h-5 w-5" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
