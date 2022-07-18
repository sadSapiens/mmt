import React from "react";
import NavBar from "../../../components/navbar/MyNavbar";

const SignUp = () => {
  return (
    <div>
      <div className="">
        <div className="bg-white h-4"></div>
        <div className="bg-[#343434] mx-auto px-9 w-auto py-5">
          <form className="flex justify-center flex-col items-center text-center ">
            <span className="block  font-bold text-white text-4xl py-7">
              Регистрация
            </span>
            <label className="block py-3">
              <input
                type="text"
                // value="Введите почту"
                placeholder="Введите почту"
                className="mt-1 block  px-3 py-2 bg-[#343434] border border-white rounded-full ... text-sm shadow-sm placeholder-white  w-72
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500
    "
              />
            </label>
            <label className="block py-3">
              <input
                type="text"
                // value="tbone"
                placeholder="+996 "
                className="mt-1 block  px-3 py-2 bg-[#343434] border border-white rounded-full ... text-sm shadow-sm placeholder-white w-72
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500
    "
              />
            </label>
            <label className="block py-3">
              <input
                type="submit"
                value="Зарегистрироваться"
                // placeholder="Введите почту"
                className="mt-1 block  px-8 py-2 bg-[#EEEEEE] border border-slate-300 rounded-full ... text-sm shadow-sm placeholder-white w-72
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500
    "
              />
            </label>
          </form>
        </div>
        <div className="bg-white h-4"></div>
      </div>
    </div>
  );
};

export default SignUp;
