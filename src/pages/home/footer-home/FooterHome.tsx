import React from "react";
import aiyl from "./assets/aiylbank.png";
import beeline from "./assets/beeline.png";
import bonetskogo from "./assets/bonetskogo.png";
import cocaCola from "./assets/coca-cola.png";
import dcb from "./assets/dcb.png";
import commkyrgysz from "./assets/commkyrgysz.png";
import fly from "./assets/fly.png";
import gazprom from "./assets/Gazprom.png";
import halyk from "./assets/halyk.png";
import helvetas from "./assets/helvetas.png";
import kompanion from "./assets/logo_kompanion.png";
import sfb from "./assets/sfb.png";
import unodc from "./assets/unodc.png";
import zk from "./assets/zk.png";
import toyota from "./assets/Toyota.png";
import huawei from "./assets/huawei.png";
import bakai from "./assets/bakai.png";

import logo from "./assets/logo.png";
import ellipse from "./assets/ellipse.png";

const FooterHome = () => {
  return (
    <>
      <div className="flex justify-between bg-[#484848] mx-auto    w-auto py-5">
        <div className="flex justify-between  flex-col py-40 w-4/12">
          <div className="flex justify-between  gap-3 h-9 ">
            <img src={aiyl} className="" alt="" />
            <img src={beeline} className="" alt="" />
          </div>

          <div className="flex justify-between h-9 pr-7">
            <img src={unodc} className="w-auto" alt="" />
            <img src={cocaCola} className="w-auto pr-6" alt="" />
          </div>

          <div className="flex justify-between">
            <img src={helvetas} alt="" />
            <img src={toyota} alt="" />
          </div>
          <div className="flex justify-between">
            <img src={bonetskogo} alt="" />
            <img src={commkyrgysz} alt="" />
          </div>
        </div>
        <div className="flex justify-center align-middle items-center flex-col w-4/12">
          <img src={logo} className="bottom-36 relative" alt="" />
          <img src={ellipse} className="absolute h-[32rem] w-[30rem]" alt="" />
          <form className="flex relative justify-center items-center flex-col">
            <span className="block  font-bold	 text-white text-3xl text-center">
              Становитесь нашим партнером
            </span>
            <label className="flex justify-center items-center">
              <input
                type="text"
                placeholder="Номер телефона"
                className="mt-1 text-center w-64 flex justify-center px-3 py-2 bg-[#484848]  border border-white rounded-full text-white text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
 
    "
              />
            </label>
            <button className="bg-white w-64 hover:bg-sky-700 rounded-full ... mt-1 block  px-3 py-2 font-bold">
              Отправить
            </button>
          </form>
        </div>
        <div className="flex justify-between  flex-col py-40 w-4/12">
          <div className="flex justify-around py-2">
            <img src={halyk} alt="" />
            <img src={zk} alt="" />
            <img src={sfb} alt="" />
          </div>
          <div className="flex pl-5 h-14 justify-between items-center py-2 ">
            <img src={gazprom} className="object-cover h-14 block" alt="" />
            <img src={bakai} className=" object-cover h-10 block" alt="" />
          </div>
          <div className="flex pl-5 h-14 gap-5 items-center py-2">
            <img src={huawei} alt="" />
            <img src={kompanion} alt="" />
          </div>
          <div className="flex justify-around py-2">
            <img src={fly} alt="" />
            <img src={dcb} alt="" />
          </div>
        </div>
      </div>
      <div>
        <div className="flex font-jost justify-between bg-[#484848] text-white  mx-auto px-9   w-auto py-5">
          <h1 className="font-bold	 text-4xl">
            <span>
              1000+ довольных <br /> клиентов
            </span>
          </h1>
          <span className="font-bold text-4xl">
            9+ лет <br /> опыта
          </span>
        </div>
      </div>
    </>
  );
};

export default FooterHome;
