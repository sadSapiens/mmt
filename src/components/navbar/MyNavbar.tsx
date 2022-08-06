import React from "react";
import logo from "../../assets/img/logo.svg";
import search from "../../assets/img/Vector.png";
import phone from "../../assets/img/phone.png";
import location from "../../assets/img/location.png";
import catalog from "../../assets/img/catalog.png";
import shopbag from "../../assets/img/shopbag.png";

import userCircle from "../../assets/img/user-circle.png";

import { Link } from "react-router-dom";
import MegaMenu from "./MegaMenu";

import "./megamenu.css";

const NavBar = () => {
  const [open, setOpen] = React.useState(false);
  // const [openCatalog, setOpenCatalog] = React.useState(false);

  // const [flyer, setFlyer] = React.useState(false);
  // const [flyerTwo, setFlyerTwo] = React.useState(false);

  return (
    <>
      <nav className="bg-[#343434] font-jost">
        <div className="md:max-w-6xl md:mx-auto md:px-2 py-3  ">
          <div className="flex justify-between">
            <div className=" md:flex items-center flex space-x-4 font-jost">
              <div>
                <Link
                  to="/"
                  className=" hidden md:flex items-center py-3 px-2 text-white hover:text-gray-900 gap-3"
                >
                  <img className="" src={location} alt="" />
                  Бишкек
                </Link>
              </div>

              <div className="hidden md:flex items-center space-x-1 font-light">
                <Link
                  to="/"
                  className="py-3 px-3 text-[#ffffff] hover:text-gray-900"
                >
                  Компания
                </Link>
                <Link
                  to="/portfolio"
                  className="py-3 px-3 text-[#ffffff]  hover:text-gray-900"
                >
                  Портфолио
                </Link>
                <Link
                  to="/blog"
                  className="py-3 px-3 text-[#ffffff]  hover:text-gray-900"
                >
                  Блог
                </Link>
                <Link
                  to="/contacts"
                  className="py-3 px-3 text-[#ffffff]  hover:text-gray-900"
                >
                  Контакты
                </Link>
                <Link
                  to="/"
                  className="py-3 px-3 text-[#ffffff]  hover:text-gray-900"
                >
                  FAQ
                </Link>
              </div>
            </div>

            <div className="hidden md:flex items-center align-middle justify-between  gap-6  ">
              <div className="flex md:mx-3">
                <img className="h-1 w-auto sm:h-5" src={phone} alt="" />
                <a href="tel:+1234567890 " className="text-white">
                  {" "}
                  0 555 88 35 00{" "}
                </a>
              </div>
              <button className=" md:flex flex rounded-full w-auto text-white px-2 py-1  border border-white ">
                Заказать звонок
              </button>
            </div>
          </div>
          <div
            className="md:hidden flex  items-center
            justify-between
           py-2"
          >
            <div className="md:hidden flex justify-start">
              <img className="bg-red flex justify-start" src={logo} alt="" />
            </div>
            <div className="flex ">
              <img className="" src={userCircle} alt="" />
              <button
                className="mobile-menu-button"
                onClick={() => setOpen(!open)}
              >
                <svg
                  className="w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between">
            <div className="flex space-x-4">
              <div className="hidden md:flex">
                <Link
                  to="/"
                  className="flex items-center py-5 px-2 text-gray-700 hover:text-gray-900"
                >
                  <img className="h-8 w-auto sm:h-10" src={logo} alt="" />
                </Link>
              </div>

              <div className="hidden md:flex  items-center space-x-1 text-center align-middle">
                <div>
                  <a
                    href="/"
                    className="py-5 px-3 text-[#ffffff] hover:text-gray-900 text-center items-center flex align-middle "
                  >
                    <div className="flex">
                      <img src={catalog} className="object-contain" alt="" />
                      <MegaMenu />
                    </div>
                  </a>
                </div>

                <label className="relative block">
                  <span className="sr-only">Search</span>
                  <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                    <img className="h-2 w-auto sm:h-5" src={search} alt="" />
                  </span>
                  <input
                    className=" placeholder:text-slate-400 block bg-black w-full border-none rounded-full py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
                    placeholder="Поиск..."
                    type="text"
                    name="search"
                  />
                </label>
                <div className="flex flex-col mx-8"></div>
              </div>
            </div>

            <div className="hidden md:flex items-center space-x-1 gap-4">
              <Link to="/cart">
                <div className="flex items-center align-middle text-center gap-2">
                  <img src={shopbag} alt="" />
                  <span className="text-white">Корзина</span>
                </div>
              </Link>
              <Link to="/signup">
                <button className="text-white">Регистрация</button>
              </Link>
              <Link to="/signin">
                <button className="rounded-full w-auto text-white px-10 py-1  bg-[#1F1F1F] ">
                  Войти
                </button>
              </Link>
            </div>
          </div>

          <div
            className="md:hidden flex  items-center
            justify-between
           py-2"
          >
            <div className="items-center flex  md:hidden pb-0">
              <label className="relative block  pb-0">
                <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                  <img className="h-2 w-auto sm:h-5" src={search} alt="" />
                </span>
                <input
                  className=" placeholder:text-slate-400 block bg-black w-full border-none rounded-full py-2  pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
                  placeholder="Поиск..."
                  type="text"
                  name="search"
                />
              </label>
            </div>
            <div>
              <Link to="/cart">
                <div className="flex items-center align-middle text-center gap-2">
                  <img src={shopbag} alt="" />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </nav>
      {/* <MegaMenu /> */}
    </>
  );
};
export default NavBar;
