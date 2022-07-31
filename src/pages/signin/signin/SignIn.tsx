import React, { useState } from "react";
// import eye from "../assets/eye.svg";
import "../../signup/signup/signup.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
const eye = <FontAwesomeIcon icon={faEye} />;
{
  /* <FontAwesomeIcon icon="fa-solid fa-eye" />; */
}

const SignIn = () => {
  const [passwordShown, setPasswordShown] = useState(false);

  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };

  return (
    <div>
      <div className="">
        <div className="bg-white h-1"></div>
        <div className="bg-[#343434] mx-auto px-9 w-auto py-5">
          <form className="flex justify-center flex-col items-center text-center ">
            <span className="block  font-bold text-white text-4xl py-7">
              Вход
            </span>

            <div className="pass-wrapper">
              <input
                type="text"
                placeholder="Введите почту"
                className="mt-1 block text-white px-3 py-2 bg-[#343434] border border-white rounded-full ... text-sm shadow-sm placeholder-[#929292] w-72
    
    "
              />
            </div>

            <div className="pass-wrapper">
              {" "}
              <input
                className=" bg-[#343434] border border-white rounded-full ... px-3 py-2 w-72 text-white shadow-sm text-sm
              "
                placeholder="Введите пароль"
                name="password"
                type={passwordShown ? "text" : "password"}
                // ref={register({ required: "This is required." })}
              />
              <i onClick={togglePasswordVisiblity}>{eye}</i>{" "}
            </div>

            <div>
              <button
                className="mt-1 block  px-8 py-2 bg-[#EEEEEE] border border-slate-300 rounded-full ... text-sm shadow-sm placeholder-white w-72
              focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
              disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
              invalid:border-pink-500 invalid:text-pink-600
              focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
              >
                Войти
              </button>
            </div>

            <div className="text-white py-4 flex justify-center flex-col">
              <div className="flex gap-3">
                <span className="font-normal text-[#929292]">
                  Еще нет аккаунта?{" "}
                </span>
                <button>Зарегистрироваться</button>
              </div>
              <button>Забыли пароль?</button>
            </div>
          </form>
        </div>
        <div className="bg-white h-1"></div>
      </div>
    </div>
  );
};

export default SignIn;
