import React from "react";
import instagram from "./assets/instagram.png";
import facebook from "./assets/facebook.png";
import discovery from "./assets/Discovery.png";
import message from "./assets/Message.png";
import call from "./assets/Call.png";
import logo from "./assets/logo.png";
import fbBig from "./assets/fbBig.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <hr className=" bg-white w-auto h-0.1 " />

      <footer className="footer-1 bg-[#484848] py-8 sm:py-12">
        <div className="container mx-auto px-2">
          <div className="sm:flex sm:flex-wrap sm:-mx-2 md:py-4 hidden">
            <div className="px-4 sm:w-1/2 md:w-1/4 xl:w-1/6">
              <div className="flex gap-2">
                <img src={instagram} alt="" />{" "}
                <span className="text-white">INSTAGRAM</span>
              </div>
              <ul className="list-none footer-links">
                <li className="mb-2">{/* <a href="/"></a> */}</li>
              </ul>
            </div>
            <div className="px-4 sm:w-1/2 md:w-1/4 xl:w-1/6 mt-8 sm:mt-0">
              <div className="flex gap-2">
                <img src={facebook} alt="" />{" "}
                <span className="text-white">FACEBOOK</span>
              </div>
              <ul className="list-none footer-links">
                <li className="mb-2"></li>
                <li className="mb-2"></li>
              </ul>
            </div>
            <div className="px-4 flex flex-col sm:w-1/3 xl:w-1/4 sm:mx-auto xl:mt-0 xl:ml-auto">
              <div className="flex gap-2">
                <img src={message} alt="" />{" "}
                <span className="text-white">info@mmt.kg</span>
              </div>
              <div className="flex gap-2">
                <img className="w-8 h-8" src={discovery} alt="" />{" "}
                <span className="text-white">
                  {" "}
                  г.Бишкек, пер.Сонкульский, 8
                </span>
              </div>
            </div>
            <div className="px-4 sm:w-1/2 md:w-1/4 xl:w-1/6 mt-8 md:mt-0">
              <div className="flex gap-2 ">
                <img src={call} alt="" />{" "}
                <a href="/" className="text-white">
                  {" "}
                  0 555 88 35 00{" "}
                </a>
              </div>
              <ul className="list-none footer-links pl-4">
                <li className="mb-2 pl-2">
                  <a href="/" className="text-white">
                    {" "}
                    0 555 88 35 00{" "}
                  </a>
                </li>
                <li className="mb-2 pl-2">
                  <a href="/" className="text-white">
                    {" "}
                    0 555 88 35 00{" "}
                  </a>
                </li>
              </ul>
            </div>
            <div
              className="
            px-4 sm:w-1/2 md:w-1/4 xl:w-1/6 mt-8 md:mt-0
            "
            >
              <button className="rounded-full ... w-full h-12 object-contain bg-slate-50">
                <a
                  href="tel:+1234567890"
                  className="text-black hover:text-black"
                >
                  {" "}
                  Заказать звонок
                </a>
              </button>

              <div className="flex sm:justify-center xl:justify-start"></div>
            </div>
          </div>
          {/* mobile responsive */}
          <div
            className="md:hidden flex sm:hidden items-center
            justify-between px-2
           "
          >
            <div className=" text-white items-center flex  md:hidden pb-0">
              <span className="font-normal ">Контакты:</span>
            </div>
            <div>
              <div className="px-4 sm:w-1/2 md:w-1/4 xl:w-1/6 mt-2 md:mt-0">
                <div className="flex gap-2 ">
                  <img src={call} alt="" />{" "}
                  <a href="tel:+1234567890 " className="text-white">
                    {" "}
                    + 996 312 88 35 00{" "}
                  </a>
                </div>
                <ul className="flex flex-col items-end list-none footer-links">
                  <li className=" px-2">
                    <a href="tel:+1234567890 " className="text-white">
                      {" "}
                      0 555 88 35 00{" "}
                    </a>
                  </li>
                  <li className=" px-2">
                    <a href="tel:+1234567890 " className="text-white">
                      {" "}
                      0 555 88 35 00{" "}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div
            className="md:hidden flex sm:hidden  items-center justify-center w-auto
           py-2 px-10"
          >
            <button className=" px-5 rounded-full ... w-screen h-12 object-contain bg-slate-50">
              <a href="tel:+1234567890" className="text-black hover:text-black">
                {" "}
                Заказать звонок
              </a>
            </button>
          </div>
          <div className="flex justify-between px-4 text-white">
            <div>Публичная оферта</div>
            <div>Политика конфеденциальности</div>
          </div>
          <div
            className="md:hidden flex  items-center
            justify-between
             text-center font-normal text-base
           py-2"
          >
            <div className=" flex flex-col  px-4 sm:w-2/2 md:w-2/4 xl:w-2/6">
              <div className="flex items-center  gap-2">
                <img src={message} alt="" />{" "}
                <span className="text-white">info@mmt.kg</span>
              </div>
            </div>
            <div className="px-2 flex flex-col sm:w-1/3 xl:w-1/4 sm:mx-auto xl:mt-0 xl:ml-auto items-center">
              <div className="flex items-center  gap-1">
                <img className="w-[30px] h-[30px]" src={discovery} alt="" />{" "}
                <span className="text-white  text-base">
                  {" "}
                  г.Бишкек, пер.Сонкульский, 8
                </span>
              </div>
            </div>
          </div>
          <div
            className="md:hidden flex  items-center justify-between w-auto text-
           py-2 px-4"
          >
            <div className=" sm:w-1/2 md:w-1/4 xl:w-1/6">
              <div className="flex gap-3">
                <img src={instagram} className="object-contain" alt="" />{" "}
                <span className="text-white text-3xl">INSTAGRAM</span>
              </div>
            </div>
            <div className=" sm:w-1/2 md:w-1/4 xl:w-1/6 sm:mt-0">
              <div className="flex gap-3">
                <img src={fbBig} className="object-fill h-8 w-8" alt="" />{" "}
                <span className="text-white text-3xl">FACEBOOK</span>
              </div>
              {/* <ul className="list-none footer-links">
                <li className="mb-2"></li>
                <li className="mb-2"></li>
              </ul> */}
            </div>
          </div>
          {/*  */}
        </div>
      </footer>
      <hr className=" bg-white w-auto h-0.1 " />
      <div className="flex justify-center bg-[#484848] py-2">
        <img src={logo} alt="" />
      </div>
    </div>
  );
};

export default Footer;
