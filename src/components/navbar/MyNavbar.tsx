import React, { useState } from "react";
import logo from "../../assets/img/logo.svg";
import search from "../../assets/img/Vector.png";
import phone from "../../assets/img/phone.png";
import location from "../../assets/img/location.png";
import catalog from "../../assets/img/catalog.png";
import shopbag from "../../assets/img/shopbag.png";

import userCircle from "../../assets/img/user-circle.png";

import { Link, useNavigate } from "react-router-dom";
import MegaMenu from "./MegaMenu";

import "./megamenu.css";

const NavBar = () => {
  const [open, setOpen] = React.useState(false);
  const [isExpanded, toggleExpansion] = React.useState(false);
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  // const [isLogged, setIsLogged] = useState(!false);
  const handleLogout = async (e: any) => {
    e.preventDefault();
    try {
      localStorage.removeItem("token");
      navigate("/signup");
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <nav className="bg-[#343434] font-jost">
        <div className="md:max-w-6xl md:mx-auto md:px-2 py-1  ">
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
           py-2 px-3"
          >
            <Link to="/">
              <div className="md:hidden flex justify-start">
                <img
                  className="bg-red flex justify-start h-7 w-auto"
                  src={logo}
                  alt=""
                />
              </div>
            </Link>
            <div className="flex gap-5">
              <img className="" src={userCircle} alt="" />
              <button
                className="mobile-menu-button"
                // onClick={() => setOpen(!open)}
                onClick={() => toggleExpansion(!isExpanded)}
              >
                <div className="space-y-2">
                  <span className="block w-6 h-0.5 bg-slate-50"></span>
                  <span className="block w-6 h-0.5 bg-slate-50"></span>
                  <span className="block w-6 h-0.5 bg-slate-50"></span>
                </div>
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
                  className="flex items-center py-2 px-2 text-gray-700 hover:text-gray-900"
                >
                  <img className="h-8 w-auto sm:h-10" src={logo} alt="" />
                </Link>
              </div>

              <div className="hidden md:flex  items-center space-x-1 text-center align-middle">
                <a
                  href="/"
                  className="py-2 px-3 text-[#ffffff] hover:text-gray-900 text-center items-center flex align-middle "
                >
                  <div className="flex">
                    {/* <img src={catalog} className="object-contain" alt="" /> */}
                    <MegaMenu />
                  </div>
                </a>

                <label className="relative block">
                  <span className="sr-only">Search</span>
                  <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                    <img className="h-2 w-auto sm:h-5" src={search} alt="" />
                  </span>
                  <input
                    className=" placeholder:text-slate-400 block bg-black w-full border-none rounded-full py-2 pl-9 pr-3 shadow-sm focus:outline-none  sm:text-sm"
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
              <div>
                {!token ? (
                  <Link to="/signin">
                    <button className=" rounded-full w-auto text-white px-10 py-1  bg-[#1F1F1F] ">
                      Войти
                    </button>
                  </Link>
                ) : (
                  <button
                    onClick={handleLogout}
                    className="block rounded-full w-auto text-white px-10 py-1  bg-[#1F1F1F] "
                  >
                    Выйти
                  </button>
                )}
              </div>
            </div>
          </div>

          <div
            className="md:hidden flex  items-center
            justify-between
           py-2"
          >
            <div className="items-center flex  md:hidden">
              <label className="relative block !mb-0">
                <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                  <img className="h-4 w-auto sm:h-5" src={search} alt="" />
                </span>
                <input
                  className=" placeholder:text-slate-400 block bg-black w-full border-none rounded-full py-2  pl-9 pr-3 shadow-sm focus:outline-none  focus:ring-1 sm:text-sm"
                  placeholder="Поиск"
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

      {/* <div
        className={`${
          isExpanded ? `block` : `hidden`
        } md:hidden  w-full block flex-grow lg:flex lg:items-center lg:w-auto`}
      >
        <div className=" md:hidden text-sm lg:flex-grow">
          <a
            href="#responsive-header"
            className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
          >
            Docs
          </a>
          <a
            href="#responsive-header"
            className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
          >
            Examples
          </a>
          <a
            href="#responsive-header"
            className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white"
          >
            Blog
          </a>
        </div>
        <div>
          <a
            href="#"
            className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0"
          >
            Download
          </a>
        </div>
      </div> */}
    </>
  );
};
export default NavBar;
