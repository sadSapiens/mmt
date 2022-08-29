import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { PUBLIC_API } from "../../../constants/api";
import nice from "../assets/nice.png";

const Congratulation = () => {
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const [code, setCode] = useState("");
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setError("");

    try {
      const res = await PUBLIC_API.post("/user/activation", { code });
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

        <div className="flex justify-center items-center">
          <label htmlFor=""></label>
          <img src={nice} alt="" />
          <p>Вы успешно зарегистрировались</p>
          <button className="rounded-full bg-white px-3 py-2  flex justify-center items-center">
            Готово
          </button>
        </div>
        <div className="bg-white h-1"></div>
      </div>
    </>
  );
};

export default Congratulation;
