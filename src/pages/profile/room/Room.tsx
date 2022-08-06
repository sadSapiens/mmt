import React, { useEffect } from "react";
import clock from "./assets/clock-circle.svg";
import settings from "./assets/settings.png";
import pencil from "./assets/pencil.svg";
import trash from "./assets/trash.svg";
import trashBlack from "./assets/trashBlack.png";

import avatar from "./assets/avatar.png";

import settingWhite from "./assets/settingWhite.png";
import API from "../../../constants/api";

const Room = () => {
  useEffect(() => {
    const getFunt = async () => {
      const res = await API.get("/user/profile");
      console.log(res);
    };
    getFunt();
  }, []);

  return (
    <>
      <div className=" px-2  md:w-auto    py-5  md:bg-red-500 lg:bg-green-500 ">
        <div className="flex justify-between  items-center px-1 md:flex-row flex-col">
          <div>
            <h1 className="font-bold  text-2xl">Личный кабинет</h1>
          </div>
          <div className="flex gap-5">
            <button className="gap-1 bg-[#1F1F1F] rounded-full ...  flex text-sm items-center align-middle w-auto h-8 px-6 text-white">
              <img src={clock} alt="" />
              История заказов
            </button>
            <button className="gap-1 bg-[#1F1F1F] rounded-full ...  flex text-sm items-center  w-auto h-8 px-1 text-white">
              <img src={settings} className="hidden md:flex" alt="" />
              <div className=" md:hidden">
                <img src={settingWhite} alt="" />
              </div>
              Мой профиль
            </button>
          </div>
        </div>
        <div className="flex justify-center   w-auto md:w-32 lg:w-48 ">
          <form className="">
            <div className="flex justify-between py-5 flex-col md:flex-row md:items-center ">
              <div className=" flex justify-center items-center">
                <img
                  src={avatar}
                  alt=""
                  className="w-32 h-32 flex justify-center "
                />
              </div>
              <div className="flex flex-row justify-center gap-2 w-auto text-sm  md:flex-col">
                <button className="border border-[#79B15E] text-[#79B15E] rounded-full ... py-1 px-1 ">
                  Изменить фото
                </button>
                <button className="rounded-full ...  border-black flex text-[#CF1B17] items-center justify-center py-1 px-1 md:border">
                  <img src={trashBlack} alt="" />
                  <span className="hidden md:flex">Удалить</span>
                </button>
              </div>
            </div>
            <label className="block">
              <input
                placeholder="Имя"
                type="text"
                // value="tbone"
                className="mt-1 block w-full px-3 py-2 bg-white border border-black text-sm shadow-sm placeholder-[#101010]
                rounded-full ...
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500
    "
              />
              <input
                placeholder="Фамилия"
                type="text"
                // value="tbone"
                className="mt-1 block w-full px-3 py-2 bg-white border border-black rounded-full ... text-sm shadow-sm placeholder-[#101010]
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500
    "
              />
              <input
                placeholder="Иван"
                type="number"
                // value="tbone"
                className="mt-1 block w-full px-3 py-2 bg-white border border-black rounded-full ... text-sm shadow-sm placeholder-[#101010]
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500
    "
              />

              <span className="text-black font-bold flex justify-center">
                Адрес
              </span>
              <input
                placeholder="Город"
                type="text"
                // value="tbone"
                className="mt-1 block w-full px-3 py-2 bg-white border border-black text-sm shadow-sm placeholder-[#101010]
                rounded-full ...
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500
    "
              />
              <input
                placeholder="Адрес"
                type="text"
                // value="tbone"
                className="mt-1 block w-full px-3 py-2 bg-white border border-black rounded-full ... text-sm shadow-sm placeholder-[#101010]
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500
    "
              />
              <input
                placeholder="Компания"
                type="text"
                // value="tbone"
                className="mt-1 block w-full px-3 py-2 bg-white border border-black rounded-full ... text-sm shadow-sm placeholder-[#101010]
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

      {/* responsive */}
      {/* <div
        className="mx-auto px-2 bg-green-500 md:bg-red-500 lg:bg-yellow-500 md:w-auto py-5 md:hidden flex  items-center
   justify-between   "
      >
        <div
          className="md:hidden flex  items-center
   justify-between px-2  "
        >
          <div>
            <h1 className="font-bold  text-2xl">Личный кабинет</h1>
          </div>
          <div className="flex gap-5">
            <button className="gap-3 bg-[#1F1F1F] rounded-full ...  flex items-center align-middle w-auto h-10 px-6 text-white">
              <img src={clock} alt="" />
              История заказов
            </button>
            <button className="gap-3 border border-[black] rounded-full ...  flex items-center align-middle w-auto h-10 px-6 ">
              <img src={settings} alt="" />
              Мой профиль
            </button>
          </div>
        </div>
      </div> */}

      {/* md:hidden flex  items-center
   justify-between px-2 */}
    </>
  );
};

export default Room;
