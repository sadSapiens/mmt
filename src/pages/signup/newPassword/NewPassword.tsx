import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { PUBLIC_API } from "../../../constants/api";

const NewPassword = () => {
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({
    code: "",
    newPassword: "",
    confirmNewPassword: "",
  });

  const handleChageInputs = (e: any) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setError("");

    try {
      const res = await PUBLIC_API.post("/user/passwords/update-password", {
        code: inputs.code,
        new_password: inputs.newPassword,
        confirm_new_password: inputs.confirmNewPassword,
      });
      navigate("/signin");
    } catch (e) {
      console.log(e);
      setError("Неверные значения или пользователь был активирован");
    }
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
            <div className="text-white text-4xl py-7">
              <span className="block  font-bold ">Изменение пароля </span>
            </div>
            <div className="pass-wrapper">
              <input
                type="text"
                placeholder="Введите код"
                className="mt-1 block text-[#929292] px-3 py-2 bg-[#343434] border border-white rounded-full ... text-sm shadow-sm placeholder-[#929292] w-72"
                required
                value={inputs.code}
                name="code"
                onChange={handleChageInputs}
              />
            </div>
            <div className="pass-wrapper">
              <input
                type="text"
                placeholder="Введите пароль"
                className="mt-1 block text-[#929292] px-3 py-2 bg-[#343434] border border-white rounded-full ... text-sm shadow-sm placeholder-[#929292] w-72"
                required
                value={inputs.newPassword}
                name="newPassword"
                onChange={handleChageInputs}
              />
            </div>
            <div className="pass-wrapper">
              <input
                type="text"
                placeholder="Введите пароль"
                className="mt-1 block text-[#929292] px-3 py-2 bg-[#343434] border border-white rounded-full ... text-sm shadow-sm placeholder-[#929292] w-72"
                required
                value={inputs.confirmNewPassword}
                name="confirmNewPassword"
                onChange={handleChageInputs}
              />
            </div>
            <div>
              <button
                type="submit"
                className="mt-1 block  px-8 py-2 bg-[#EEEEEE] border border-slate-300 rounded-full ... text-sm shadow-sm placeholder-white w-72
              focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
              >
                Отпарвить
              </button>
            </div>
          </form>
        </div>
        <div className="bg-white h-1"></div>
      </div>
    </>
  );
};

export default NewPassword;
