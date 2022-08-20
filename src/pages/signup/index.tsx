import React, { useState } from "react";
import "./signup.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { PUBLIC_API } from "../../constants/api";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const eye = <FontAwesomeIcon icon={faEye} />;

const SignUpPage = () => {
  const [passwordShown, setPasswordShown] = useState(false);
  const navigate = useNavigate();
  const [error, setError] = useState([]);
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setError([]);
    if (inputs.password !== inputs.confirmPassword) {
      //@ts-ignore
      setError(["Пароли не совпадают!"]);
      return;
    }
    try {
      const res = await PUBLIC_API.post("/user/register", {
        confirm_password: inputs.confirmPassword,
        email: inputs.email,
        password: inputs.password,
      });
      if (res.data.status === "CREATED") {
        navigate("/confirmation");
      }
      console.log(res);
    } catch (e) {
      if (axios.isAxiosError(e)) {
        console.log(e.response?.data);
        if (e.response?.data) {
          //@ts-ignore
          const { password = [""], email = [""] } = e.response.data;
          setError(password.concat(email));
        }
      }
    }
  };

  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };
  return (
    <>
      <div className="">
        <div className="bg-white h-1"></div>
        <div className="bg-[#343434] mx-auto px-9 w-auto py-5">
          <form
            onSubmit={handleSubmit}
            className="flex justify-center flex-col items-center text-center "
          >
            <span className="block  font-bold text-white text-4xl py-7">
              Регистрация
            </span>
            <div className="pass-wrapper">
              <input
                type="email"
                name="email"
                value={inputs.email}
                onChange={handleChange}
                placeholder="Введите почту"
                className="mt-1 block text-[#929292] px-3 py-2 bg-[#343434] border border-white rounded-full ... text-sm shadow-sm placeholder-[#929292] w-72"
                required
              />
            </div>
            <div className="pass-wrapper">
              <input
                type={passwordShown ? "text" : "password"}
                name="password"
                value={inputs.password}
                onChange={handleChange}
                placeholder="Придумайте пароль"
                className="mt-1 block text-[#929292] px-3 py-2 bg-[#343434] border border-white rounded-full ... text-sm shadow-sm placeholder-[#929292] w-72"
                required
              />
              <i onClick={togglePasswordVisiblity}>{eye}</i>{" "}
            </div>

            <div className="pass-wrapper">
              <input
                className=" bg-[#343434] border border-white rounded-full ... px-3 py-2 w-72 text-white shadow-sm text-sm"
                placeholder="Повторите пароль"
                name="confirmPassword"
                value={inputs.confirmPassword}
                onChange={handleChange}
                type={passwordShown ? "text" : "password"}
                required
              />
              <i onClick={togglePasswordVisiblity}>{eye}</i>{" "}
            </div>
            {error &&
              error.map((err) => (
                <div className="text-red-600 w-full text-start">{err}</div>
              ))}

            <div>
              <button
                type="submit"
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

export default SignUpPage;
