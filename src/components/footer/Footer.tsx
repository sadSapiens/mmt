import React from "react";
import "./footer.css";
import instagram from "./assets/instagram.png";
import facebook from "./assets/facebook.png";
import discovery from "./assets/Discovery.png";
import message from "./assets/Message.png";
import call from "./assets/Call.png";
import logo from "./assets/logo.png";

const Footer = () => {
  return (
    <div>
      <footer className="footer-1 bg-[#484848] py-8 sm:py-12">
        <div className="container mx-auto px-4">
          <div className="sm:flex sm:flex-wrap sm:-mx-4 md:py-4">
            <div className="px-4 sm:w-1/2 md:w-1/4 xl:w-1/6">
              {/* <h5 className="text-xl font-bold mb-6 text-white">PRODUCT</h5> */}
              <div className="flex gap-2">
                <img src={instagram} alt="" />{" "}
                <span className="text-white">INSTAGRAM</span>
              </div>
              <ul className="list-none footer-links">
                <li className="mb-2">
                  <a
                    href="#"
                    className="border-b border-solid border-transparent hover:border-purple-800 hover:text-white text-white"
                  >
                    Download
                  </a>
                </li>
                <li className="mb-2">
                  <a
                    href="#"
                    className="border-b border-solid border-transparent hover:border-purple-800 hover:text-white text-white"
                  >
                    Random feature
                  </a>
                </li>
                <li className="mb-2">
                  <a
                    href="#"
                    className="border-b border-solid border-transparent hover:border-purple-800 hover:text-white text-white"
                  >
                    Team feature
                  </a>
                </li>
                <li className="mb-2">
                  <a
                    href="#"
                    className="border-b border-solid border-transparent hover:border-purple-800 hover:text-white text-white"
                  >
                    Stuff for developers
                  </a>
                </li>
                <li className="mb-2">
                  <a
                    href="#"
                    className="border-b border-solid border-transparent hover:border-purple-800 hover:text-white text-white"
                  >
                    Another one
                  </a>
                </li>
                <li className="mb-2">
                  <a
                    href="#"
                    className="border-b border-solid border-transparent hover:border-purple-800 hover:text-white text-white"
                  >
                    Last time
                  </a>
                </li>
              </ul>
            </div>
            <div className="px-4 sm:w-1/2 md:w-1/4 xl:w-1/6 mt-8 sm:mt-0">
              {/* <h5 className="text-xl font-bold mb-6 text-white">Resources</h5> */}
              <div className="flex gap-2">
                <img src={facebook} alt="" />{" "}
                <span className="text-white">FACEBOOK</span>
              </div>
              <ul className="list-none footer-links">
                <li className="mb-2">
                  <a
                    href="#"
                    className="border-b border-solid border-transparent hover:border-purple-800 hover:text-white text-white"
                  >
                    Resource
                  </a>
                </li>
                <li className="mb-2">
                  <a
                    href="#"
                    className="border-b border-solid border-transparent hover:border-purple-800 hover:text-white text-white"
                  >
                    Resource name
                  </a>
                </li>
                <li className="mb-2">
                  <a
                    href="#"
                    className="border-b border-solid border-transparent hover:border-purple-800 hover:text-white text-white"
                  >
                    Another resource
                  </a>
                </li>
                <li className="mb-2">
                  <a
                    href="#"
                    className="border-b border-solid border-transparent hover:border-purple-800 hover:text-white text-white"
                  >
                    Final resource
                  </a>
                </li>
              </ul>
            </div>
            <div className="px-4 mt-4 sm:w-1/3 xl:w-1/4 sm:mx-auto xl:mt-0 xl:ml-auto">
              {/* <h5 className="text-xl font-bold mb-6 text-white">About</h5> */}
              <div className="flex gap-2">
                <img src={message} alt="" />{" "}
                <span className="text-white">info@mmt.kg</span>
              </div>
              <ul className="list-none footer-links">
                <li className="mb-2">
                  <a
                    href="#"
                    className="border-b border-solid border-transparent hover:border-purple-800 hover:text-white text-white"
                  >
                    <div className="flex gap-2">
                      <img
                        className="w-[30px] h-[30px]"
                        src={discovery}
                        alt=""
                      />{" "}
                      <span className="text-white font-thin">
                        г.Бишкек, пер.Сонкульский, 8
                      </span>
                    </div>
                  </a>
                </li>
                <li className="mb-2">
                  <a
                    href="#"
                    className="border-b border-solid border-transparent hover:border-purple-800 hover:text-white text-white"
                  >
                    Locations
                  </a>
                </li>
                <li className="mb-2">
                  <a
                    href="#"
                    className="border-b border-solid border-transparent hover:border-purple-800 hover:text-white text-white"
                  >
                    Privacy
                  </a>
                </li>
                <li className="mb-2">
                  <a
                    href="#"
                    className="border-b border-solid border-transparent hover:border-purple-800 hover:text-white text-white"
                  >
                    Terms
                  </a>
                </li>
              </ul>
            </div>
            <div className="px-4 sm:w-1/2 md:w-1/4 xl:w-1/6 mt-8 md:mt-0">
              {/* <h5 className="text-xl font-bold mb-6 text-white">Help</h5> */}
              <div className="flex gap-2">
                <img src={call} alt="" />{" "}
                {/* <span className="text-white">INSTAGRAM</span> */}
                <a href="tel:+1234567890 " className="text-white">
                  {" "}
                  0 555 88 35 00{" "}
                </a>
              </div>
              <ul className="list-none footer-links">
                <li className="mb-2">
                  <a href="tel:+1234567890 " className="text-white">
                    {" "}
                    0 555 88 35 00{" "}
                  </a>
                </li>
                <li className="mb-2">
                  <a href="tel:+1234567890 " className="text-white">
                    {" "}
                    0 555 88 35 00{" "}
                  </a>
                </li>
                <li className="mb-2">
                  <a
                    href="#"
                    className="border-b border-solid border-transparent hover:border-purple-800 hover:text-white"
                  >
                    Contact Us
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
                Заказать звонок
              </button>

              <div className="flex sm:justify-center xl:justify-start">
                {/* <a
                  href=""
                  className="w-8 h-8  border-2 border-gray-400 rounded-full text-center py-1 text-gray-600 hover:text-white hover:bg-blue-600 hover:border-blue-600"
                >
                  <i className="fab fa-twitter"></i>
                </a>
                <a
                  href=""
                  className="w-8 h-8 border-2 border-gray-400 rounded-full text-center py-1 ml-2 text-gray-600 hover:text-white hover:bg-blue-400 hover:border-blue-400"
                >
                  <i className="fab fa-instagram"></i>
                </a>
                <a
                  href=""
                  className="w-8 h-8  border-2 border-gray-400 rounded-full text-center py-1 ml-2 text-gray-600 hover:text-white hover:bg-red-600 hover:border-red-600"
                >
                  <i className="fab fa-discord"></i>
                </a> */}
              </div>
            </div>
          </div>
        </div>
      </footer>
      <hr className=" bg-white w-auto h-0.1 " />
      <div className="flex justify-center bg-[#484848] py-5">
        <img src={logo} alt="" />
      </div>
    </div>
  );
};

export default Footer;
