import React from "react";
import image from "../assets/card-image.png";

const Cards = () => {
  return (
    <div className="px-2 py-7 flex justify-center">
      <div className=" border border-black w-[89%] flex justify-center flex-col items-center object-center content-center place-items-center">
        <div className=" flex">
          <img className="w-[100%]" src={image} alt="" />
        </div>
        <div>
          <h5>Код товара: 1050</h5>
          <div className="flex flex-wrap break-all flex-col md:flex-row justify-center items-center ">
            <h4 className="w-7/12 font-jost font-semibold text-black">
              Гелиевая ручка «Montreal»
            </h4>
            <div className="w-5/12 flex justify-center gap-2">
              <div className="h-4 w-4 bg-red-600 rounded-full ..."></div>
              <div className="h-4 w-4 bg-red-600 rounded-full ..."></div>
              <div className="h-4 w-4 bg-red-600 rounded-full ..."></div>
            </div>
            {/* <div className="flex flex-wrap break-all"></div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
