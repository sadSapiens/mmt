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
import bakaibank from "./assets/bakaibank.png";

import logo from "./assets/logo.png";
import ellipse from "./assets/ellipse.png";

const FooterHome = () => {
  return (
    <>
      <div className="hidden md:flex justify-between bg-[#484848] mx-auto    w-auto py-5">
        <div className="flex justify-between  flex-col md:py-40 py-24 w-4/12">
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
        <div className="flex justify-center align-middle items-center flex-col md:w-4/12 w-10">
          <img src={logo} className="bottom-36 relative" alt="" />
          <img src={ellipse} className="absolute h-[32rem] w-[30rem]" alt="" />

          <form className="hidden md:flex md:flex-col  relative justify-center items-center flex-col">
            <span className="block  font-bold	 text-white md:text-3xl text-sm text-center">
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
          <div className="flex pl-5 h-14 gap-3 items-center py-2">
            <img src={huawei} alt="" />
            <img src={kompanion} alt="" />
          </div>
          <div className="flex justify-around py-2">
            <img src={fly} alt="" />
            <img src={dcb} alt="" />
          </div>
        </div>
      </div>

      {/*  */}

      <div className="md:hidden flex justify-between flex-col bg-[#484848] mx-auto    w-auto py-5">
        <div className="flex justify-center align-middle items-center flex-col md:w-4/12  ">
          <div className=" flex justify-center items-center ">
            <img
              src={logo}
              className="md:hidden absolute  md:top-1  w-28 h-auto "
              alt=""
            />
          </div>

          <img
            src={ellipse}
            className="relative md:hidden flex justify-center items-center md:h-[35rem] w-md:[30rem] pt-10 "
            alt=""
          />
          <form className=" md:hidden top-[-30rem] flex justify-start items-center relative md:justify-center md:items-center flex-col">
            <span className="block  font-bold	py-3 text-white text-2xl md:text-3xl text-center">
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

            <div className=" flex justify-between flex-col flex-wrap w-[100%] pt-2 px-2">
              <div className="flex justify-between py-2 gap-2 ">
                <img src={sfb} className="w-auto h-8" alt="" />
                <img src={zk} alt="" className="w-auto h-8" />
                <img src={beeline} className="w-auto h-8" alt="" />
              </div>

              <div className="flex justify-between py-2 gap-2">
                <img src={bakaibank} className=" w-auto h-8" alt="" />
                <img src={gazprom} className="w-auto h-8" alt="" />
                <img src={cocaCola} className="w-auto h-8" alt="" />
              </div>

              <div className="flex justify-between py-2 gap-2">
                <img src={kompanion} alt="" className="w-auto h-5" />
                <img src={fly} alt="" className="w-auto h-5" />
                <img src={huawei} alt="" className="w-auto h-5" />
              </div>

              <div className="flex justify-between py-2 gap-2">
                <img src={aiyl} className="w-auto h-5" alt="" />
                <img src={halyk} alt="" className="w-auto h-5" />
                <img src={unodc} className="w-auto h-5" alt="" />
              </div>

              <div className="flex justify-between py-2 gap-2">
                <img src={toyota} alt="" className="w-auto h-5" />
                <img src={dcb} alt="" className="w-auto h-5" />
                <img src={commkyrgysz} alt="" className="w-auto h-5" />
              </div>
              {/* <img src={helvetas} alt="" />
          <img src={bonetskogo} alt="" /> */}
            </div>
          </form>
          <div className="md:hidden flex font-jost flex-col justify-between bg-[#484848] text-white  mx-auto px-3 w-auto py-5">
            <span className="flex font-bold	 text-xl">
              1000+ довольных клиентов
            </span>
            <span className=" flex justify-end font-bold text-2xl">
              9+ лет опыта
            </span>
          </div>
        </div>
      </div>
      {/*  */}
      <div className="hidden md:flex font-jost justify-between bg-[#484848] text-white  mx-auto px-9   w-auto py-5">
        <h1 className="font-bold	 text-4xl">
          <span>
            1000+ довольных <br /> клиентов
          </span>
        </h1>
        <span className="font-bold text-4xl">
          9+ лет <br /> опыта
        </span>
      </div>
    </>
  );
};

export default FooterHome;
