import React, { useState } from "react";

const Confirmation = () => {
  return (
    <>
      <div className="">
        <div className="bg-white h-1"></div>
        <div className="bg-[#343434] mx-auto px-9 w-auto py-5">
          <form className="flex justify-center flex-col items-center text-center ">
            <div className="text-white text-4xl py-7">
              <span className="block  font-bold ">Подтверждение </span>
              <p className="text-white text-sm font-light">
                Введите код, отправленный на вашу почту
              </p>
            </div>
            <div className="pass-wrapper">
              <input
                type="text"
                placeholder="Введите почту"
                className="mt-1 block text-[#929292] px-3 py-2 bg-[#343434] border border-white rounded-full ... text-sm shadow-sm placeholder-[#929292] w-72
    
    "
              />
            </div>

            <div>
              <button
                className="mt-1 block  px-8 py-2 bg-[#EEEEEE] border border-slate-300 rounded-full ... text-sm shadow-sm placeholder-white w-72
              focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
              >
                Далее
              </button>
            </div>
          </form>
        </div>
        <div className="bg-white h-1"></div>
      </div>
    </>
  );
};

export default Confirmation;
