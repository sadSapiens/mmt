import React from "react";
import logo from "../../assets/img/logo.svg";
import search from "../../assets/img/Vector.png";
import cart from "../../assets/img/cart-navbar.png";
import phone from "../../assets/img/phone.png";

const NavBar = () => {
  const [open, setOpen] = React.useState(false);
  const [flyer, setFlyer] = React.useState(false);
  const [flyerTwo, setFlyerTwo] = React.useState(false);

  return (
    <>
      <nav className="bg-[#343434]">
        <div className="max-w-6xl mx-auto px-2">
          <div className="flex justify-between">
            <div className="flex space-x-4">
              {/* <div>
                <a
                  href="#"
                  className="flex items-center py-5 px-2 text-gray-700 hover:text-gray-900"
                >
                  <img className="h-8 w-auto sm:h-10" src={logo} alt="" />
                </a>
              </div> */}

              <div className="hidden md:flex items-center space-x-1">
                <a
                  href="#"
                  className="py-5 px-3 text-[#ffffff] hover:text-gray-900"
                >
                  Каталог
                </a>
                <a
                  href="#"
                  className="py-5 px-3 text-[#ffffff]  hover:text-gray-900"
                >
                  Компания
                </a>
                <a
                  href="#"
                  className="py-5 px-3 text-[#ffffff]  hover:text-gray-900"
                >
                  Портфолио
                </a>
                <a
                  href="#"
                  className="py-5 px-3 text-[#ffffff]  hover:text-gray-900"
                >
                  Портфолио
                </a>
                <a
                  href="#"
                  className="py-5 px-3 text-[#ffffff]  hover:text-gray-900"
                >
                  FAQ
                </a>
                {/* <label className="relative block">
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
                </label> */}
                {/* <div className="flex flex-col ">
                  <div className="flex mx-8">
                    <img className="h-1 w-auto sm:h-5" src={phone} alt="" />
                    <a href="tel:+1234567890 " className="text-white">
                      {" "}
                      0 555 88 35 00{" "}
                    </a>
                  </div>
                  <div className="mx-8">
                    <span className="text-sm text-white  font-extralight underline underline-offset-1 ...">
                      Заказать звонок!
                    </span>
                  </div>
                </div>
                <div>
                  <img src={cart} alt="" />
                </div> */}
              </div>
            </div>

            <div className="flex items-center align-middle justify-between row-auto gap-6  ">
              <div className="flex mx-8">
                <img className="h-1 w-auto sm:h-5" src={phone} alt="" />
                <a href="tel:+1234567890 " className="text-white">
                  {" "}
                  0 555 88 35 00{" "}
                </a>
              </div>
              <button className="rounded-full w-auto text-white px-7 py-1  border border-white ">
                Заказать звонок
              </button>
            </div>

            <div className="md:hidden flex items-center">
              <button className="mobile-menu-button">
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
              <div>
                <a
                  href="#"
                  className="flex items-center py-5 px-2 text-gray-700 hover:text-gray-900"
                >
                  <img className="h-8 w-auto sm:h-10" src={logo} alt="" />
                </a>
              </div>

              <div className="hidden md:flex items-center space-x-1">
                <a
                  href="#"
                  className="py-5 px-3 text-[#ffffff] hover:text-gray-900"
                >
                  Каталог
                </a>

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
              <div className="flex items-center align-middle text-center">
                <img src={cart} alt="" />
                <span className="text-white">Корзина</span>
              </div>
              <button className="text-white">Регистрация</button>
              <button className="rounded-full w-auto text-white px-10 py-1  bg-[#1F1F1F] ">
                Войти
              </button>
            </div>

            <div className="md:hidden flex items-center">
              <button className="mobile-menu-button">
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

        <div className="mobile-menu hidden md:hidden">
          <a href="#" className="block py-2 px-4 text-sm hover:bg-gray-200">
            Features
          </a>
          <a href="#" className="block py-2 px-4 text-sm hover:bg-gray-200">
            Pricing
          </a>
        </div>
      </nav>
    </>
  );
};
export default NavBar;
