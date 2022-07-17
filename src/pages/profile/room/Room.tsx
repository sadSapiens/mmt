import React from "react";
import clock from "./assets/clock-circle.svg";
import settings from "./assets/settings.png";
import pencil from "./assets/pencil.svg";
import trash from "./assets/trash.svg";
import avatar from "./assets/avatar.png";

const Room = () => {
  return (
    <div className="mx-auto px-9   w-auto py-5 ">
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
      <div className="flex justify-center ">
        <form className="w-3/12">
          <div className="flex justify-between py-5">
            <div className=" flex justify-center items-center">
              <img
                src={avatar}
                alt=""
                className="w-[80%] h-[89%] flex justify-center"
              />
            </div>
            <div className="flex flex-col justify-center gap-2 w-[63%] text-sm">
              <button className="border border-[#79B15E] rounded-full ... py-1 px-1">
                Изменить фото
              </button>
              <button className="rounded-full ... border border-black flex text-[#CF1B17] items-center justify-center py-1 px-1">
                <img src={trash} alt="" />
                Удалить
              </button>
            </div>
          </div>
          <label className="block">
            <input
              placeholder="Иван"
              type="text"
              // value="tbone"
              className="mt-1 block w-full px-3 py-2 bg-white border border-black text-sm shadow-sm placeholder-slate-400
                rounded-full ...
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500
    "
            />
            <input
              placeholder="Иван"
              type="text"
              // value="tbone"
              className="mt-1 block w-full px-3 py-2 bg-white border border-black rounded-full ... text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500
    "
            />
            <input
              placeholder="Иван"
              type="number"
              // value="tbone"
              className="mt-1 block w-full px-3 py-2 bg-white border border-black rounded-full ... text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500
    "
            />
            <input
              placeholder="Иван"
              type="text"
              // value="tbone"
              className="mt-1 block w-full px-3 py-2 bg-white border border-black rounded-full ... text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500
    "
            />
            <span className="text-black font-bold flex justify-center">
              Адрес
            </span>
            <input
              placeholder="Иван"
              type="text"
              // value="tbone"
              className="mt-1 block w-full px-3 py-2 bg-white border border-black text-sm shadow-sm placeholder-slate-400
                rounded-full ...
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500
    "
            />
            <input
              placeholder="Иван"
              type="text"
              // value="tbone"
              className="mt-1 block w-full px-3 py-2 bg-white border border-black rounded-full ... text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500
    "
            />
            <input
              placeholder="Иван"
              type="text"
              // value="tbone"
              className="mt-1 block w-full px-3 py-2 bg-white border border-black rounded-full ... text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500
    "
            />
          </label>
          <button className="bg-[#1F1F1F] rounded-full ...  flex justify-center w-[100%] py-2 text-white gap-2">
            <img src={pencil} alt="" />
            Редактировать
          </button>
        </form>
      </div>
      {/*  */}
    </div>
  );
};

export default Room;
