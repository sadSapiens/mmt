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

import line from "./assets/footer-line.png";

const FooterHome = () => {
  return (
    <>
      <div className="flex justify-between bg-[#484848] mx-auto px-9   w-auto py-5">
        <div className="flex justify-between  flex-col py-40">
          <div className="flex gap-3 h-9">
            <img src={aiyl} alt="" />
            <img src={beeline} alt="" />
          </div>

          <div className="flex">
            <img src={unodc} alt="" />
            <img src={cocaCola} alt="" />
          </div>

          <div className="flex">
            <img src={helvetas} alt="" />
            <img src={toyota} alt="" />
          </div>
          <div className="flex">
            <img src={bonetskogo} alt="" />
            <img src={commkyrgysz} alt="" />
          </div>
        </div>
        <div className="flex justify-center align-middle items-center">
          <form className="flex justify-center items-center flex-col">
            <span className="block  font-bold	 text-white text-3xl text-center">
              Становитесь нашим партнером
            </span>
            <label className="flex justify-center items-center">
              <input
                type="text"
                // value="tbone"
                placeholder="Номер телефона"
                className="mt-1 block w-64  px-3 py-2 bg-[#484848] border border-white rounded-full text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500
    "
              />
            </label>
            <button className="bg-white w-64 hover:bg-sky-700 rounded-full ... mt-1 block  px-3 py-2 font-bold">
              Отправить
            </button>
          </form>
        </div>
        <div className="flex justify-between  flex-col py-40">
          <div className="flex">
            <img src={halyk} alt="" />
            <img src={sfb} alt="" />
          </div>
          <div className="flex">
            <img src={gazprom} alt="" />
            <img src={zk} alt="" />
          </div>
          <div className="flex">
            <img src={huawei} alt="" />
            <img src={kompanion} alt="" />
          </div>
          <div className="flex">
            <img src={fly} alt="" />
            <img src={dcb} alt="" />
          </div>
        </div>
      </div>
      <div>
        <div className="flex justify-between bg-[#484848] text-white  mx-auto px-9   w-auto py-5">
          <h1 className="font-bold	 text-[40px]">
            <b className="text-[47px]">1000+</b> довольных клиентов
          </h1>
          <span className="font-bold text-[40px]">
            <b className="text-[47px]">9+</b> лет опыта
          </span>
        </div>
      </div>
    </>
  );
};

export default FooterHome;
