import React, { useState } from "react";
import "../signup/signup.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { PUBLIC_API } from "../../constants/api";
import { useNavigate } from "react-router-dom";
const eye = <FontAwesomeIcon icon={faEye} />;

const SignInPage = () => {
  const [passwordShown, setPasswordShown] = useState(false);
  const navigate = useNavigate();
  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };

  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      const res = await PUBLIC_API.post("/user/login", {
        email: inputs.email,
        password: inputs.password,
      });
      const token = res.data.data.token;
      localStorage.setItem("token", token);
      navigate("/profile");
      console.log(res, "signin");
    } catch (e) {
      console.log(e, "e>> siginin");
    }
  };
  return (
    <div>
      <div className="">
        <div className="bg-white h-1"></div>
        <div className="bg-[#343434] mx-auto px-9 w-auto py-5">
          <form
            onSubmit={handleSubmit}
            className="flex justify-center flex-col items-center text-center "
          >
            <span className="block  font-bold text-white text-4xl py-7">
              Вход
            </span>

            <div className="pass-wrapper">
              <input
                value={inputs.email}
                onChange={handleChange}
                name="email"
                type="text"
                placeholder="Введите почту"
                className="mt-1 block text-white px-3 py-2 bg-[#343434] border border-white rounded-full ... text-sm shadow-sm placeholder-[#929292] w-72
    
    "
              />
            </div>

            <div className="pass-wrapper">
              {" "}
              <input
                value={inputs.password}
                onChange={handleChange}
                className=" bg-[#343434] border border-white rounded-full ... px-3 py-2 w-72 text-white shadow-sm text-sm"
                placeholder="Введите пароль"
                name="password"
                type={passwordShown ? "text" : "password"}
                // ref={register({ required: "This is required." })}
              />
              <i onClick={togglePasswordVisiblity}>{eye}</i>{" "}
            </div>

            <div>
              <button
                type="submit"
                className="mt-1 block  px-8 py-2 bg-[#EEEEEE] border border-slate-300 rounded-full ... text-sm shadow-sm placeholder-white w-72
              focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
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

export default SignInPage;
