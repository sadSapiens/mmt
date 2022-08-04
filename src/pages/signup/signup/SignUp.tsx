import React, { useState } from "react";
// import eye from "../assets/eye.svg";
import "./signup.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
const eye = <FontAwesomeIcon icon={faEye} />;

const SignUp = () => {
  const [passwordShown, setPasswordShown] = useState(false);

  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };

  return (
    <>
      <div className="">
        <div className="bg-white h-1"></div>
        <div className="bg-[#343434] mx-auto px-9 w-auto py-5">
          <form className="flex justify-center flex-col items-center text-center ">
            <span className="block  font-bold text-white text-4xl py-7">
              Регистрация
            </span>
            <div className="pass-wrapper">
              <input
                type="text"
                placeholder="Введите почту"
                className="mt-1 block text-[#929292] px-3 py-2 bg-[#343434] border border-white rounded-full ... text-sm shadow-sm placeholder-[#929292] w-72
    
    "
              />
              {/* <img className="h-2 w-auto sm:h-5" src={eye} alt="" /> */}
            </div>
            <div className="pass-wrapper">
              <input
                type="text"
                placeholder="Придумайте пароль"
                className="mt-1 block text-[#929292] px-3 py-2 bg-[#343434] border border-white rounded-full ... text-sm shadow-sm placeholder-[#929292] w-72
    
    "
              />
              {/* <img className="h-2 w-auto sm:h-5" src={eye} alt="" /> */}
            </div>

            <div className="pass-wrapper">
              {" "}
              <input
                className=" bg-[#343434] border border-white rounded-full ... px-3 py-2 w-72 text-white shadow-sm text-sm
              "
                placeholder="Повторите пароль"
                name="password"
                type={passwordShown ? "text" : "password"}
                // ref={register({ required: "This is required." })}
              />
              <i onClick={togglePasswordVisiblity}>{eye}</i>{" "}
              {/* <img src={eye} alt="" /> */}
            </div>

            <div>
              <button
                className="mt-1 block  px-8 py-2 bg-[#EEEEEE] border border-slate-300 rounded-full ... text-sm shadow-sm placeholder-white w-72
              focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
              >
                Отправить
              </button>
            </div>

            <button className="text-white py-3">Уже есть аккаунт?</button>
          </form>
        </div>
        <div className="bg-white h-1"></div>
      </div>
    </>
  );
};

export default SignUp;
