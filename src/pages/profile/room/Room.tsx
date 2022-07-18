import React from "react";
import clock from "./assets/clock-circle.svg";
import settings from "./assets/settings.png";

const Room = () => {
  return (
    <div className="mx-auto px-9   w-auto py-5 h-screen">
      <div className="flex justify-between">
        <div>
          <h1 className="font-bold  text-2xl">Личный кабинет</h1>
          <span>У вас пока нет заказов</span>
        </div>
        <div className="flex gap-5">
          <button className="gap-3 bg-[#1F1F1F] rounded-full ...  flex items-center align-middle w-auto h-10 px-6 ">
            <img src={clock} alt="" />
            История заказов
          </button>
          <button className="gap-3 border border-[black] rounded-full ...  flex items-center align-middle w-auto h-10 px-6 ">
            <img src={settings} alt="" />
            Мой профиль
          </button>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Room;
