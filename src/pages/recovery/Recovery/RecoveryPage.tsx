import React, { useState } from "react";

const RecoveryPage = () => {
  return (
    <div className="">
      <div className="bg-white h-1 font-jost"></div>
      <div className="bg-[#343434] mx-auto px-9 w-auto py-5">
        <form className="flex justify-center flex-col items-center text-center ">
          <span className="block  font-bold text-white text-4xl py-7">
            Восстановление
          </span>
          <p className="block  w-[50%] font-light text-white text-sm py-7">
            В форму ниже введите свой электронный адрес, указанный при
            регистрации, и через несколько минут на Ваш E-mail придет письмо с
            паролем.
          </p>

          <div className="pass-wrapper">
            <input
              type="text"
              // value="tbone"
              placeholder="Введите почту"
              className="mt-1 block text-[#929292] px-3 py-2 bg-[#343434] border border-white rounded-full ... text-sm shadow-sm placeholder-[#929292] w-72
    
    "
            />
            {/* <img className="h-2 w-auto sm:h-5" src={eye} alt="" /> */}
          </div>

          <div>
            <button
              className="mt-1 block  px-8 py-2 bg-[#EEEEEE] border border-slate-300 rounded-full ... text-sm shadow-sm placeholder-white w-72
              focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
              disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
              invalid:border-pink-500 invalid:text-pink-600
              focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
            >
              Далее
            </button>
          </div>
        </form>
      </div>
      <div className="bg-white h-1"></div>
    </div>
  );
};

export default RecoveryPage;
