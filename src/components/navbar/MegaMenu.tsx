import React, { useState } from "react";
import "./megamenu.css";

const MegaMenu = () => {
  const [open, setOpen] = useState(false);
  console.log(open);

  return (
    <div className="">
      <ul className="exo-menu" onClick={() => setOpen(true)}>
        <li className="drop-down">
          <a href="/">
            <i className="fa fa-cogs"></i> Каталог
          </a>
          {/* <div className="w-[730px]"> */}
          <ul className="drop-down-ul animated fadeIn zet">
            <li className="flyout-right">
              <a href="/">Коллекции</a>

              <ul className="animated fadeIn bg-[#343434]">
                <li>
                  <a href="/">Зеленая серия</a>
                </li>
                <li>
                  <a href="/">Товары из бамбука</a>
                </li>
              </ul>
            </li>

            <li>
              <a href="/">Авто</a>
            </li>
            <li>
              <a href="/">Деловые подарки</a>
            </li>
            <li>
              <a href="/">Для дома</a>
            </li>
            <li>
              <a href="/">Для отдыха</a>
            </li>
            <li>
              <a href="/">Для путешествий</a>
            </li>
            <li>
              <a href="/">Для спорта</a>
            </li>
            <li>
              <a href="/">Женские аксессуары</a>
            </li>
            <li>
              <a href="/">Зонты</a>
            </li>
            <li>
              <a href="/">Кухня и посуда</a>
            </li>
            <li>
              <a href="/">Личные аксессуары</a>
            </li>
            <li>
              <a href="/">Мужские аксессуары</a>
            </li>
            <li>
              <a href="/">Одежда</a>
            </li>
            <li>
              <a href="/">Офисные аксессуары</a>
            </li>
            <li>
              <a href="/">Пишущие инструменты</a>
            </li>
            <li>
              <a href="/">Праздничые подарки</a>
            </li>
          </ul>
          {/* </div> */}
        </li>
      </ul>
    </div>

    // <nav className="navbar navbar-expand-lg shadow-lg py-2 bg-gray-50 relative flex items-center w-full justify-between">
    //   <div className="px-6">
    //     <button
    //       className="navbar-toggler border-0 py-3 lg:hidden leading-none text-xl bg-transparent text-gray-600 hover:text-gray-700 focus:text-gray-700 transition-shadow duration-150 ease-in-out"
    //       type="button"
    //       data-bs-toggle="collapse"
    //       data-bs-target="#navbarSupportedContentZ"
    //       aria-controls="navbarSupportedContentZ"
    //       aria-expanded="false"
    //       aria-label="Toggle navigation"
    //     >
    //       <svg
    //         aria-hidden="true"
    //         focusable="false"
    //         data-prefix="fas"
    //         className="w-5"
    //         role="img"
    //         xmlns="http://www.w3.org/2000/svg"
    //         viewBox="0 0 448 512"
    //       >
    //         <path
    //           fill="currentColor"
    //           d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"
    //         ></path>
    //       </svg>
    //     </button>
    //     <div
    //       className="navbar-collapse collapse grow items-center"
    //       id="navbarSupportedContentZ"
    //     >
    //       <ul className="navbar-nav mr-auto flex flex-row">
    //         <li className="nav-item">
    //           <a
    //             className="nav-link block pr-2 lg:px-2 py-2 text-gray-600 hover:text-gray-700 focus:text-gray-700 transition duration-150 ease-in-out"
    //             href="#!"
    //             data-mdb-ripple="true"
    //             data-mdb-ripple-color="light"
    //           >
    //             Regular link
    //           </a>
    //         </li>
    //         <li className="nav-item dropdown static">
    //           <a
    //             className="nav-link block pr-2 lg:px-2 py-2 text-gray-600 hover:text-gray-700 focus:text-gray-700 transition duration-150 ease-in-out dropdown-toggle flex items-center whitespace-nowrap"
    //             href="#"
    //             data-mdb-ripple="true"
    //             data-mdb-ripple-color="light"
    //             type="button"
    //             id="dropdownMenuButtonZ"
    //             data-bs-toggle="dropdown"
    //             aria-expanded="false"
    //           >
    //             Mega menu
    //             <svg
    //               aria-hidden="true"
    //               focusable="false"
    //               data-prefix="fas"
    //               data-icon="caret-down"
    //               className="w-2 ml-2"
    //               role="img"
    //               xmlns="http://www.w3.org/2000/svg"
    //               viewBox="0 0 320 512"
    //             >
    //               <path
    //                 fill="currentColor"
    //                 d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"
    //               ></path>
    //             </svg>
    //           </a>
    //           <div
    //             className="dropdown-menu w-full mt-0 hidden shadow-lg bg-white absolute left-0 top-full"
    //             aria-labelledby="dropdownMenuButtonZ"
    //           >
    //             <div className="px-6 lg:px-8 py-5">
    //               <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
    //                 <div className="bg-white text-gray-600">
    //                   <p className="block px-6 py-2 border-b border-gray-200 w-full uppercase font-semibold text-gray-700">
    //                     Lorem ipsum
    //                   </p>
    //                   <a
    //                     href="#!"
    //                     aria-current="true"
    //                     className="block px-6 py-2 border-b border-gray-200 w-full hover:bg-gray-50 hover:text-gray-700 transition duration-150 ease-in-out flex items-center"
    //                   >
    //                     <svg
    //                       aria-hidden="true"
    //                       focusable="false"
    //                       data-prefix="fas"
    //                       className="w-1.5 mr-1.5"
    //                       role="img"
    //                       xmlns="http://www.w3.org/2000/svg"
    //                       viewBox="0 0 192 512"
    //                     >
    //                       <path
    //                         fill="currentColor"
    //                         d="M0 384.662V127.338c0-17.818 21.543-26.741 34.142-14.142l128.662 128.662c7.81 7.81 7.81 20.474 0 28.284L34.142 398.804C21.543 411.404 0 402.48 0 384.662z"
    //                       ></path>
    //                     </svg>
    //                     Dolor sit
    //                   </a>
    //                   <a
    //                     href="#!"
    //                     aria-current="true"
    //                     className="block px-6 py-2 border-b border-gray-200 w-full hover:bg-gray-50 hover:text-gray-700 transition duration-150 ease-in-out flex items-center"
    //                   >
    //                     <svg
    //                       aria-hidden="true"
    //                       focusable="false"
    //                       data-prefix="fas"
    //                       className="w-1.5 mr-1.5"
    //                       role="img"
    //                       xmlns="http://www.w3.org/2000/svg"
    //                       viewBox="0 0 192 512"
    //                     >
    //                       <path
    //                         fill="currentColor"
    //                         d="M0 384.662V127.338c0-17.818 21.543-26.741 34.142-14.142l128.662 128.662c7.81 7.81 7.81 20.474 0 28.284L34.142 398.804C21.543 411.404 0 402.48 0 384.662z"
    //                       ></path>
    //                     </svg>
    //                     Amet consectetur
    //                   </a>
    //                   <a
    //                     href="#!"
    //                     aria-current="true"
    //                     className="block px-6 py-2 border-b border-gray-200 w-full hover:bg-gray-50 hover:text-gray-700 transition duration-150 ease-in-out flex items-center"
    //                   >
    //                     <svg
    //                       aria-hidden="true"
    //                       focusable="false"
    //                       data-prefix="fas"
    //                       className="w-1.5 mr-1.5"
    //                       role="img"
    //                       xmlns="http://www.w3.org/2000/svg"
    //                       viewBox="0 0 192 512"
    //                     >
    //                       <path
    //                         fill="currentColor"
    //                         d="M0 384.662V127.338c0-17.818 21.543-26.741 34.142-14.142l128.662 128.662c7.81 7.81 7.81 20.474 0 28.284L34.142 398.804C21.543 411.404 0 402.48 0 384.662z"
    //                       ></path>
    //                     </svg>
    //                     Cras justo odio
    //                   </a>
    //                   <a
    //                     href="#!"
    //                     aria-current="true"
    //                     className="block px-6 py-2 w-full hover:bg-gray-50 hover:text-gray-700 transition duration-150 ease-in-out flex items-center"
    //                   >
    //                     <svg
    //                       aria-hidden="true"
    //                       focusable="false"
    //                       data-prefix="fas"
    //                       className="w-1.5 mr-1.5"
    //                       role="img"
    //                       xmlns="http://www.w3.org/2000/svg"
    //                       viewBox="0 0 192 512"
    //                     >
    //                       <path
    //                         fill="currentColor"
    //                         d="M0 384.662V127.338c0-17.818 21.543-26.741 34.142-14.142l128.662 128.662c7.81 7.81 7.81 20.474 0 28.284L34.142 398.804C21.543 411.404 0 402.48 0 384.662z"
    //                       ></path>
    //                     </svg>
    //                     Adipisicing elit
    //                   </a>
    //                 </div>
    //                 <div className="bg-white text-gray-600">
    //                   <p className="block px-6 py-2 border-b border-gray-200 w-full uppercase font-semibold text-gray-700">
    //                     Explit voluptas
    //                   </p>
    //                   <a
    //                     href="#!"
    //                     aria-current="true"
    //                     className="block px-6 py-2 border-b border-gray-200 w-full hover:bg-gray-50 hover:text-gray-700 transition duration-150 ease-in-out flex items-center"
    //                   >
    //                     <svg
    //                       aria-hidden="true"
    //                       focusable="false"
    //                       data-prefix="fas"
    //                       className="w-1.5 mr-1.5"
    //                       role="img"
    //                       xmlns="http://www.w3.org/2000/svg"
    //                       viewBox="0 0 192 512"
    //                     >
    //                       <path
    //                         fill="currentColor"
    //                         d="M0 384.662V127.338c0-17.818 21.543-26.741 34.142-14.142l128.662 128.662c7.81 7.81 7.81 20.474 0 28.284L34.142 398.804C21.543 411.404 0 402.48 0 384.662z"
    //                       ></path>
    //                     </svg>
    //                     Perspiciatis quo
    //                   </a>
    //                   <a
    //                     href="#!"
    //                     aria-current="true"
    //                     className="block px-6 py-2 border-b border-gray-200 w-full hover:bg-gray-50 hover:text-gray-700 transition duration-150 ease-in-out flex items-center"
    //                   >
    //                     <svg
    //                       aria-hidden="true"
    //                       focusable="false"
    //                       data-prefix="fas"
    //                       className="w-1.5 mr-1.5"
    //                       role="img"
    //                       xmlns="http://www.w3.org/2000/svg"
    //                       viewBox="0 0 192 512"
    //                     >
    //                       <path
    //                         fill="currentColor"
    //                         d="M0 384.662V127.338c0-17.818 21.543-26.741 34.142-14.142l128.662 128.662c7.81 7.81 7.81 20.474 0 28.284L34.142 398.804C21.543 411.404 0 402.48 0 384.662z"
    //                       ></path>
    //                     </svg>
    //                     Cras justo odio
    //                   </a>
    //                   <a
    //                     href="#!"
    //                     aria-current="true"
    //                     className="block px-6 py-2 border-b border-gray-200 w-full hover:bg-gray-50 hover:text-gray-700 transition duration-150 ease-in-out flex items-center"
    //                   >
    //                     <svg
    //                       aria-hidden="true"
    //                       focusable="false"
    //                       data-prefix="fas"
    //                       className="w-1.5 mr-1.5"
    //                       role="img"
    //                       xmlns="http://www.w3.org/2000/svg"
    //                       viewBox="0 0 192 512"
    //                     >
    //                       <path
    //                         fill="currentColor"
    //                         d="M0 384.662V127.338c0-17.818 21.543-26.741 34.142-14.142l128.662 128.662c7.81 7.81 7.81 20.474 0 28.284L34.142 398.804C21.543 411.404 0 402.48 0 384.662z"
    //                       ></path>
    //                     </svg>
    //                     Laudant maiores
    //                   </a>
    //                   <a
    //                     href="#!"
    //                     aria-current="true"
    //                     className="block px-6 py-2 w-full hover:bg-gray-50 hover:text-gray-700 transition duration-150 ease-in-out flex items-center"
    //                   >
    //                     <svg
    //                       aria-hidden="true"
    //                       focusable="false"
    //                       data-prefix="fas"
    //                       className="w-1.5 mr-1.5"
    //                       role="img"
    //                       xmlns="http://www.w3.org/2000/svg"
    //                       viewBox="0 0 192 512"
    //                     >
    //                       <path
    //                         fill="currentColor"
    //                         d="M0 384.662V127.338c0-17.818 21.543-26.741 34.142-14.142l128.662 128.662c7.81 7.81 7.81 20.474 0 28.284L34.142 398.804C21.543 411.404 0 402.48 0 384.662z"
    //                       ></path>
    //                     </svg>
    //                     Provident dolor
    //                   </a>
    //                 </div>
    //                 <div className="bg-white text-gray-600">
    //                   <p className="block px-6 py-2 border-b border-gray-200 w-full uppercase font-semibold text-gray-700">
    //                     Iste quaerato
    //                   </p>
    //                   <a
    //                     href="#!"
    //                     aria-current="true"
    //                     className="block px-6 py-2 border-b border-gray-200 w-full hover:bg-gray-50 hover:text-gray-700 transition duration-150 ease-in-out flex items-center"
    //                   >
    //                     <svg
    //                       aria-hidden="true"
    //                       focusable="false"
    //                       data-prefix="fas"
    //                       className="w-1.5 mr-1.5"
    //                       role="img"
    //                       xmlns="http://www.w3.org/2000/svg"
    //                       viewBox="0 0 192 512"
    //                     >
    //                       <path
    //                         fill="currentColor"
    //                         d="M0 384.662V127.338c0-17.818 21.543-26.741 34.142-14.142l128.662 128.662c7.81 7.81 7.81 20.474 0 28.284L34.142 398.804C21.543 411.404 0 402.48 0 384.662z"
    //                       ></path>
    //                     </svg>
    //                     Cras justo odio
    //                   </a>
    //                   <a
    //                     href="#!"
    //                     aria-current="true"
    //                     className="block px-6 py-2 border-b border-gray-200 w-full hover:bg-gray-50 hover:text-gray-700 transition duration-150 ease-in-out flex items-center"
    //                   >
    //                     <svg
    //                       aria-hidden="true"
    //                       focusable="false"
    //                       data-prefix="fas"
    //                       className="w-1.5 mr-1.5"
    //                       role="img"
    //                       xmlns="http://www.w3.org/2000/svg"
    //                       viewBox="0 0 192 512"
    //                     >
    //                       <path
    //                         fill="currentColor"
    //                         d="M0 384.662V127.338c0-17.818 21.543-26.741 34.142-14.142l128.662 128.662c7.81 7.81 7.81 20.474 0 28.284L34.142 398.804C21.543 411.404 0 402.48 0 384.662z"
    //                       ></path>
    //                     </svg>
    //                     Est iure
    //                   </a>
    //                   <a
    //                     href="#!"
    //                     aria-current="true"
    //                     className="block px-6 py-2 border-b border-gray-200 w-full hover:bg-gray-50 hover:text-gray-700 transition duration-150 ease-in-out flex items-center"
    //                   >
    //                     <svg
    //                       aria-hidden="true"
    //                       focusable="false"
    //                       data-prefix="fas"
    //                       className="w-1.5 mr-1.5"
    //                       role="img"
    //                       xmlns="http://www.w3.org/2000/svg"
    //                       viewBox="0 0 192 512"
    //                     >
    //                       <path
    //                         fill="currentColor"
    //                         d="M0 384.662V127.338c0-17.818 21.543-26.741 34.142-14.142l128.662 128.662c7.81 7.81 7.81 20.474 0 28.284L34.142 398.804C21.543 411.404 0 402.48 0 384.662z"
    //                       ></path>
    //                     </svg>
    //                     Praesentium
    //                   </a>
    //                   <a
    //                     href="#!"
    //                     aria-current="true"
    //                     className="block px-6 py-2 w-full hover:bg-gray-50 hover:text-gray-700 transition duration-150 ease-in-out flex items-center"
    //                   >
    //                     <svg
    //                       aria-hidden="true"
    //                       focusable="false"
    //                       data-prefix="fas"
    //                       className="w-1.5 mr-1.5"
    //                       role="img"
    //                       xmlns="http://www.w3.org/2000/svg"
    //                       viewBox="0 0 192 512"
    //                     >
    //                       <path
    //                         fill="currentColor"
    //                         d="M0 384.662V127.338c0-17.818 21.543-26.741 34.142-14.142l128.662 128.662c7.81 7.81 7.81 20.474 0 28.284L34.142 398.804C21.543 411.404 0 402.48 0 384.662z"
    //                       ></path>
    //                     </svg>
    //                     Laboriosam
    //                   </a>
    //                 </div>
    //                 <div className="bg-white text-gray-600">
    //                   <p className="block px-6 py-2 border-b border-gray-200 w-full uppercase font-semibold text-gray-700">
    //                     Cras justo odio
    //                   </p>
    //                   <a
    //                     href="#!"
    //                     aria-current="true"
    //                     className="block px-6 py-2 border-b border-gray-200 w-full hover:bg-gray-50 hover:text-gray-700 transition duration-150 ease-in-out flex items-center"
    //                   >
    //                     <svg
    //                       aria-hidden="true"
    //                       focusable="false"
    //                       data-prefix="fas"
    //                       className="w-1.5 mr-1.5"
    //                       role="img"
    //                       xmlns="http://www.w3.org/2000/svg"
    //                       viewBox="0 0 192 512"
    //                     >
    //                       <path
    //                         fill="currentColor"
    //                         d="M0 384.662V127.338c0-17.818 21.543-26.741 34.142-14.142l128.662 128.662c7.81 7.81 7.81 20.474 0 28.284L34.142 398.804C21.543 411.404 0 402.48 0 384.662z"
    //                       ></path>
    //                     </svg>
    //                     Saepe
    //                   </a>
    //                   <a
    //                     href="#!"
    //                     aria-current="true"
    //                     className="block px-6 py-2 border-b border-gray-200 w-full hover:bg-gray-50 hover:text-gray-700 transition duration-150 ease-in-out flex items-center"
    //                   >
    //                     <svg
    //                       aria-hidden="true"
    //                       focusable="false"
    //                       data-prefix="fas"
    //                       className="w-1.5 mr-1.5"
    //                       role="img"
    //                       xmlns="http://www.w3.org/2000/svg"
    //                       viewBox="0 0 192 512"
    //                     >
    //                       <path
    //                         fill="currentColor"
    //                         d="M0 384.662V127.338c0-17.818 21.543-26.741 34.142-14.142l128.662 128.662c7.81 7.81 7.81 20.474 0 28.284L34.142 398.804C21.543 411.404 0 402.48 0 384.662z"
    //                       ></path>
    //                     </svg>
    //                     Vel alias
    //                   </a>
    //                   <a
    //                     href="#!"
    //                     aria-current="true"
    //                     className="block px-6 py-2 border-b border-gray-200 w-full hover:bg-gray-50 hover:text-gray-700 transition duration-150 ease-in-out flex items-center"
    //                   >
    //                     <svg
    //                       aria-hidden="true"
    //                       focusable="false"
    //                       data-prefix="fas"
    //                       className="w-1.5 mr-1.5"
    //                       role="img"
    //                       xmlns="http://www.w3.org/2000/svg"
    //                       viewBox="0 0 192 512"
    //                     >
    //                       <path
    //                         fill="currentColor"
    //                         d="M0 384.662V127.338c0-17.818 21.543-26.741 34.142-14.142l128.662 128.662c7.81 7.81 7.81 20.474 0 28.284L34.142 398.804C21.543 411.404 0 402.48 0 384.662z"
    //                       ></path>
    //                     </svg>
    //                     Sunt doloribus
    //                   </a>
    //                   <a
    //                     href="#!"
    //                     aria-current="true"
    //                     className="block px-6 py-2 w-full hover:bg-gray-50 hover:text-gray-700 transition duration-150 ease-in-out flex items-center"
    //                   >
    //                     <svg
    //                       aria-hidden="true"
    //                       focusable="false"
    //                       data-prefix="fas"
    //                       className="w-1.5 mr-1.5"
    //                       role="img"
    //                       xmlns="http://www.w3.org/2000/svg"
    //                       viewBox="0 0 192 512"
    //                     >
    //                       <path
    //                         fill="currentColor"
    //                         d="M0 384.662V127.338c0-17.818 21.543-26.741 34.142-14.142l128.662 128.662c7.81 7.81 7.81 20.474 0 28.284L34.142 398.804C21.543 411.404 0 402.48 0 384.662z"
    //                       ></path>
    //                     </svg>
    //                     Cum dolores
    //                   </a>
    //                 </div>
    //               </div>
    //             </div>
    //           </div>
    //         </li>
    //       </ul>
    //     </div>
    //   </div>
    // </nav>
  );
};

export default MegaMenu;
