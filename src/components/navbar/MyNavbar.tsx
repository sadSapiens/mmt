import React, { useEffect, useState } from "react";
import logo from "../../assets/img/logo.svg";
import searchl from "../../assets/img/Vector.png";
import phone from "../../assets/img/phone.png";
import location from "../../assets/img/location.png";
import catalog from "../../assets/img/catalog.png";
import shopbag from "../../assets/img/shopbag.png";

import userCircle from "../../assets/img/user-circle.png";

import { Link, useLocation, useNavigate } from "react-router-dom";
import MegaMenu from "./MegaMenu";

import "./megamenu.css";
import { useAppDispatch } from "../../store";
import { useSearchValue } from "../../store/catalog/hooks";
import { setSearchValue } from "../../store/catalog/actions";
import { fetchOrder } from "../../store/order";
import { useOrder } from "../../store/order/hooks";

const NavBar = ({}) => {
  const [open, setOpen] = React.useState(false);
  const [isExpanded, toggleExpansion] = React.useState(false);
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const searchValue = useSearchValue();
  const { search } = useLocation();
  const order = useOrder();

  const [categoryId, setCategoryId] = useState(
    new URLSearchParams(search).get("categoryId")
  );
  useEffect(() => {
    if (searchValue) navigate("/catalog");
  }, [categoryId, searchValue]);

  useEffect(() => {
    dispatch(fetchOrder() as any);
  }, [dispatch]);

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
      <nav className="bg-[#343434] font-jost ">
        <div className="md:max-w-full md:mx-auto md:px-6 py-1 container ">
          <div className="flex justify-between">
            <div className=" md:flex items-center flex space-x-5 font-jost">
              <div>
                <Link
                  to="/"
                  className=" hidden md:flex items-center py-3 px-2 text-white  gap-3 font-light"
                >
                  <img className="" src={location} alt="" />
                  Бишкек
                </Link>
              </div>

              <div className="hidden md:flex md:items-center items-end gap-5 font-light  text-[#ffffff]  hover:text-gray-400">
                <Link to="/" className="py-3 px-3 text-[#ffffff]  ">
                  Компания
                </Link>
                <Link to="/portfolio" className="py-3 px-3 text-[#ffffff]  ">
                  Портфолио
                </Link>
                <Link to="/blog" className="py-3 px-3 text-[#ffffff]  ">
                  Блог
                </Link>
                <Link to="/contacts" className="py-3 px-3 text-[#ffffff]  ">
                  Контакты
                </Link>
                <Link to="/" className="py-3 px-3 text-[#ffffff]  ">
                  FAQ
                </Link>
              </div>
            </div>

            <div className="hidden md:flex items-center align-middle justify-between  gap-6  ">
              <div className="sm:hidden hidden  md:flex md:mx-3">
                <img
                  className="h-1 w-auto sm:h-5 sm:hidden"
                  src={phone}
                  alt=""
                />
                <a href="tel:+1234567890" className="text-white sm:hidden">
                  {" "}
                  0 555 88 35 00{" "}
                </a>
              </div>
              <button className=" md:flex flex rounded-full w-auto text-white px-2 py-1  border border-white ">
                <a
                  href="tel:+1234567890"
                  className="text-white text-base font-light"
                >
                  {" "}
                  Заказать звонок
                </a>
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
              <Link to="/profile">
                <img className="" src={userCircle} alt="" />
              </Link>
              <button
                className="mobile-menu-button"
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

        {/*  */}
        <div className="md:max-w-full md:mx-auto md:px-6 px-3  py-2">
          <div className="flex justify-between">
            <div className="flex space-x-4">
              <div className="hidden md:flex">
                <Link
                  to="/"
                  className="flex items-center py-2 px-2 text-gray-700 "
                >
                  <img className="h-8 w-auto sm:h-10" src={logo} alt="" />
                </Link>
              </div>

              <div className="hidden md:flex  items-center space-x-1 text-center align-middle">
                <div className="py-2 px-3 text-[#ffffff]  text-center items-center flex align-middle ">
                  <Link to="/catalog">
                    <MegaMenu />
                  </Link>
                </div>

                <div className="flex justify-center items-center py-1 ">
                  <label className="relative flex justify-end flex-row items-center !mb-0">
                    <input
                      value={searchValue}
                      onChange={(e: any) =>
                        dispatch(setSearchValue(e.target.value))
                      }
                      className="  placeholder:text-white block bg-[#1F1F1F] md:w-72  border-none rounded-full py-2 pl-9 !pr-0 shadow-sm focus:outline-none  sm:text-sm text-white"
                      placeholder="Поиск..."
                      type="text"
                      name="search"
                    />
                    <img
                      className="absolute pr-64 focus:outline-none h-2 w-auto sm:h-5"
                      src={searchl}
                      alt=""
                    />
                  </label>
                </div>
              </div>
            </div>

            <div className="hidden md:flex items-center  justify-center gap-4">
              <Link to="/cart">
                <div className="flex items-center align-middle text-center gap-2 sm:gap-1">
                  <div className="relative flex space-x-2 justify-center">
                    <img className="h-6 w-6 " src={shopbag} alt="" />
                    <span className="text-[10px] absolute left-2 font-normal px-0.5 h-3 w-3 flex justify-center items-center py-1 rounded-full leading-none text-center whitespace-nowrap align-baseline bg-red-600 text-white  ">
                      {/* {size}7 */}
                      {order?.items.length}
                    </span>
                    <span className="text-white flex flex-wrap sm:text-sm p-0">
                      Корзина
                    </span>
                  </div>
                </div>
              </Link>
              <div>
                {!token ? (
                  <>
                    <div className="flex gap-4 justify-center items-center">
                      <Link to="/signup">
                        <button className="text-white flex items-center text-center justify-center">
                          Регистрация
                        </button>
                      </Link>

                      <Link to="/signin">
                        <button className=" flex justify-center rounded-full w-auto text-white px-10 items-center py-1  bg-[#1F1F1F] ">
                          Войти
                        </button>
                      </Link>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="flex  gap-4">
                      <Link to="/profile">
                        <div className="flex items-center align-middle text-center gap-2 sm:gap-1">
                          <img className="h-6 w-6" src={userCircle} alt="" />

                          <span className="text-white flex flex-wrap sm:text-sm p-0">
                            Личный кабинет
                          </span>
                        </div>
                      </Link>
                      <button
                        onClick={handleLogout}
                        className="block rounded-full w-auto text-white px-10 py-1  bg-[#1F1F1F] "
                      >
                        Выйти
                      </button>
                    </div>
                  </>
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
                <input
                  value={searchValue}
                  onChange={(e: any) =>
                    dispatch(setSearchValue(e.target.value))
                  }
                  className=" placeholder:text-slate-400 block bg-black w-full border-none rounded-full py-2  pl-9 pr-3 shadow-sm focus:outline-none  focus:ring-1 sm:text-sm"
                  placeholder="Поиск"
                  type="text"
                  name="search"
                />
                <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                  <img className="h-4 w-auto sm:h-5" src={search} alt="" />
                </span>
              </label>
            </div>
            <div>
              <Link to="/cart">
                <div className="flex relative items-center align-middle text-center gap-2">
                  <img src={shopbag} alt="" className="relative h-7 w-7" />
                  <div className="flex justify-end items-end">
                    <span className="text-[10px] absolute  font-normal bottom-5 left-3 px-0.5 h-3 w-3 flex justify-center items-center py-1 rounded-full leading-none text-center whitespace-nowrap align-baseline bg-red-600 text-white  ">
                      {/* {size}7 */}
                      {order?.items.length}
                    </span>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <div
        className={`${
          isExpanded ? `block` : `hidden`
        } md:hidden  bg-[#343434] w-full block flex-grow lg:flex lg:items-center !items-end lg:w-auto`}
      >
        <Link
          to="/"
          className="md:hidden py-1 px-3 text-[#ffffff] !items-start flex"
        >
          <MegaMenu />
        </Link>
        <div className="md:hidden flex flex-col items-end gap-5 font-light">
          <Link to="/" className="py-1 px-3 text-[#ffffff] ">
            Компания
          </Link>
          <Link to="/portfolio" className="py-1 px-3 text-[#ffffff]  ">
            Портфолио
          </Link>
          <Link to="/blog" className="py-1 px-3 text-[#ffffff]  ">
            Блог
          </Link>
          <Link to="/contacts" className="py-1 px-3 text-[#ffffff]  ">
            Контакты
          </Link>
          <Link to="/" className="py-1 px-3 text-[#ffffff]  ">
            FAQ
          </Link>
          <button onClick={handleLogout} className="py-1 px-3 text-[#ffffff]  ">
            Выйти
          </button>
        </div>
      </div>
    </>
  );
};
export default NavBar;
