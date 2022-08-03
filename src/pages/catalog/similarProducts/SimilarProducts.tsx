import React from "react";
// import image from "../assets/card-image.png";
// import shopbag from "../assets/shopbag.png";

const Similar = () => {
  return (
    <div className="py-7 flex justify-center">
      <div className=" border border-black w-[80%] flex justify-center flex-col items-center object-center content-center place-items-center">
        <div className=" flex">
          {/* <img className="w-[100%]" src={image} alt="" /> */}
        </div>
        <div>
          <h5 className="flex px-3">Код товара: 1050</h5>
          <div className="flex flex-wrap break-all flex-col md:flex-row justify-center items-center px-1 ">
            <h4 className="w-6/12 font-jost font-medium text-black">
              Гелиевая ручка «Montreal»
            </h4>
            <div className="w-6/12 flex justify-center gap-2">
              <div className="h-3 w-3 bg-[#14153C] rounded-full ..."></div>
              <div className="h-3 w-3 bg-[#65A8E0] rounded-full ..."></div>
              <div className="h-3 w-3 bg-[#A91E1E] rounded-full ..."></div>
            </div>

            {/* <div className="flex flex-wrap break-all"></div> */}
          </div>
          <div className="flex justify-between px-5 text-black font-jost ">
            <div className="flex flex-col">
              <span className="font-light">Цена:</span>
              <b>650 C</b>
            </div>
            <div className="w-10 h-10 bg-[#343434] rounded-full ... flex justify-center items-center">
              {/* <img src={shopbag} alt="" /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Similar;
