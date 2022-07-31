import React from "react";
import search from "../assets/search.png";
import newyear from "../assets/image.png";
import rightarrow from "../assets/rightarrow.png";
import schema from "../assets/schema.png";
import list from "../assets/list.png";

import "./style.css";
import Filters from "../filters/Filters";
import Cards from "../cards/Cards";
import { Link } from "react-router-dom";
import CardsRow from "../cards/CardsRow";

const CatalogTools = () => {
  return (
    <div className="mx-auto px-9   w-auto  font-jost py-9">
      <div className="flex gap-5  py-3  justify-between">
        <div className="flex items-baseline gap-5">
          <div className="flex items-center text-center justify-center align-middle">
            <h2 className="font-extrabold text-2xl flex items-center text-center object-center align-middle">
              Каталог
            </h2>
          </div>
          <div>
            <label className="relative block">
              <span className="sr-only">Search</span>
              <span className="absolute inset-y-0  flex items-center pl-2">
                <img className="h-2 w-auto sm:h-5" src={search} alt="" />
              </span>
              <input
                className=" placeholder:text-slate-400 block   w-full border border-black rounded-full py-1 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
                placeholder="Искать товар"
                type="text"
                name="search"
              />
            </label>
          </div>
        </div>

        {/*  */}
        <div className="flex justify-center items-center gap-3">
          <button className="bg-black text-white flex rounded-full ... w-auto px-5 py-2 gap-2">
            <img src={schema} alt="" />
            Схема
          </button>
          <button className="flex rounded-full ... w-auto px-5 py-2 border border-black">
            <img src={list} alt="" />
            Список
          </button>
        </div>
      </div>

      {/*  */}
      <div>
        <nav className="bg-grey-light rounded-md w-full">
          <ol className="flex  ">
            <li>
              <Link to="/catalog" className="tex-black">
                <a href="#" className="text-black hover:text-blue-700">
                  Каталог
                </a>
              </Link>
            </li>
            <li>
              {/* <span className="text-gray-500 mx-2"> |</span> */}
              <img src={rightarrow} alt="" />
            </li>
            <li>
              <a href="#" className="text-black hover:text-blue-700">
                Мужские аксессуары
              </a>
            </li>
          </ol>
        </nav>
      </div>
      {/*  */}

      <div className="py-3 ">
        <div>
          <span className="text-black text-2xl">Мужские аксессуары</span>
        </div>
        <div className="gap-4 flex py-4 ">
          <button className="rounded-full ... border border-black w-[10%] h-8">
            Барсетки
          </button>
          <button className="rounded-full ... border border-black w-[10%] h-8">
            Визитницы
          </button>
          <button className="rounded-full ... border border-black w-[10%] h-8">
            Одежда
          </button>
          <button className="rounded-full ... border border-black w-[10%] h-8">
            Органайзеры
          </button>
          <button className="rounded-full ... border border-black w-[10%] h-8">
            Портмоне
          </button>
          <button className="rounded-full ... border border-black w-[10%] h-8">
            Часы{" "}
          </button>
        </div>
      </div>
      {/*  */}
      <div className="flex pt-10 font-jost">
        <div className="accordion  flex-col w-3/12  justify-center block ">
          <div className="w-1/8">
            <input
              type="checkbox"
              name="panel"
              id="panel-1"
              className="hidden"
            />
            <label
              htmlFor="panel-1"
              className=" label-faq relative block text-black p-4 shadow border-b border-black"
            >
              Тип товара
            </label>
            <div className="accordion__content overflow-hidden  flex">
              {/* <h2 className="accordion__header pt-4 pl-4">Header</h2> */}

              <div className="flex gap-3  px-5 justify-start">
                <form id="root" name="tree">
                  <div className="flex justify-center">
                    <div className="gap-3 flex flex-col justify-start">
                      <div className="form-check">
                        <input
                          className="form-check-input  h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                          type="checkbox"
                          value=""
                          id="typeNew"
                        />

                        <button className="flex justify-center  bg-[#65A8E0] px-5 rounded-full ... w-28">
                          Новинки
                        </button>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input  h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                          type="checkbox"
                          value=""
                          id="typeEko"
                        />

                        <button className="flex justify-center bg-[#79B15E] px-5 rounded-full ... w-28">
                          Эко
                        </button>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input  h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                          type="checkbox"
                          value=""
                          id="typeShare"
                        />
                        <button className="flex justify-center bg-[#F1A400] px-5 rounded-full ... w-28">
                          Акция
                        </button>
                      </div>
                    </div>
                  </div>

                  {/*  */}
                </form>
              </div>
            </div>
          </div>
          <div className="w-1/8">
            <input
              type="checkbox"
              name="panel"
              id="panel-2"
              className="hidden"
            />
            <label
              htmlFor="panel-2"
              className="label-faq  relative block  text-black p-4 shadow border-b border-black"
            >
              Цена
            </label>
            <div className="accordion__content overflow-hidden bg-grey-lighter flex justify-center">
              <div className="flex justify-around items-center">
                {/*  */}

                {/*  */}

                <div className="flex flex-col">
                  <div className=" sm:-mx-6 lg:-mx-8">
                    <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                      <div className="overflow-hidden">
                        <table className="min-w-full">
                          <thead className="">
                            <tr>
                              <th
                                scope="col"
                                className="text-sm font-medium text-gray-900 px-6  text-center"
                              >
                                <label htmlFor="от">От</label>
                              </th>
                              <th
                                scope="col"
                                className="text-sm font-medium text-gray-900 px-6  text-left"
                              ></th>
                              <th
                                scope="col"
                                className="text-sm font-medium text-gray-900 px-6  text-center"
                              >
                                <label htmlFor="от">До</label>
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr className="">
                              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                <input
                                  className=" flex text-center font-normal font-jost justify-center border-black border rounded-full ... w-20 text-black
                    placeholder:text-stone-900
                    "
                                  placeholder="15"
                                  type="text"
                                  name="search"
                                />
                              </td>
                              <td className="text-sm text-gray-900 font-light px-6  whitespace-nowrap">
                                ---
                              </td>
                              <td className="text-sm text-gray-900 font-light px-6  whitespace-nowrap">
                                <input
                                  className=" flex text-center font-normal font-jost justify-center border-black border rounded-full ... w-20 text-black
                    placeholder:text-stone-900
                    "
                                  placeholder="400"
                                  type="text"
                                  name="search"
                                />
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
                {/*  */}
              </div>
            </div>
          </div>
          <div className="w-1/8">
            <input
              type="checkbox"
              name="panel"
              id="panel-3"
              className="hidden"
            />
            <label
              htmlFor="panel-3"
              className="label-faq relative block  text-black p-4 shadow border-b border-black"
            >
              Цвет
            </label>
            <div className="accordion__content overflow-hidden bg-grey-lighter">
              <div className="flex justify-start px-5 ">
                <div className="flex flex-col justify-start">
                  <div className="form-check">
                    <input
                      className="form-check-input  h-4 w-4 border border-gray-300 rounded-md bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                      type="checkbox"
                      value=""
                      id="colorBlack"
                    />
                    <label
                      className="form-check-label inline-block text-gray-800"
                      htmlFor="colorBlack"
                    >
                      Черный
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input  h-4 w-4 border border-gray-300 rounded-md bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                      type="checkbox"
                      value=""
                      id="colorRed"
                    />
                    <label
                      className="form-check-label inline-block text-gray-800"
                      htmlFor="colorRed"
                    >
                      Красный
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input  h-4 w-4 border border-gray-300 rounded-md bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                      type="checkbox"
                      value=""
                      id="colorYellow"
                    />
                    <label
                      className="form-check-label inline-block text-gray-800"
                      htmlFor="colorYellow"
                    >
                      Жёлтый
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input  h-4 w-4 border border-gray-300 rounded-md bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                      type="checkbox"
                      value=""
                      id="colorAqua"
                    />
                    <label
                      className="form-check-label inline-block text-gray-800"
                      htmlFor="colorAqua"
                    >
                      Голубой
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input  h-4 w-4 border border-gray-300 rounded-md bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                      type="checkbox"
                      value=""
                      id="colorRed"
                    />
                    <label
                      className="form-check-label inline-block text-gray-800"
                      htmlFor="colorRed"
                    >
                      Красный
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input  h-4 w-4 border border-gray-300 rounded-md bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                      type="checkbox"
                      value=""
                      id="colorBlue"
                    />
                    <label
                      className="form-check-label inline-block text-gray-800"
                      htmlFor="colorBlue"
                    >
                      Синий
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input  h-4 w-4 border border-gray-300 rounded-md bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                      type="checkbox"
                      value=""
                      id="colorOrange"
                    />
                    <label
                      className="form-check-label inline-block text-gray-800"
                      htmlFor="colorOrange"
                    >
                      Оранжевый
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input  h-4 w-4 border border-gray-300 rounded-md bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                      type="checkbox"
                      value=""
                      id="colorFiolet"
                    />
                    <label
                      className="form-check-label inline-block text-gray-800"
                      htmlFor="colorFiolet"
                    >
                      Фиолетовое
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input  h-4 w-4 border border-gray-300 rounded-md bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                      type="checkbox"
                      value=""
                      id="colorMajent"
                    />
                    <label
                      className="form-check-label inline-block text-gray-800"
                      htmlFor="colorMajent"
                    >
                      Мажента
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-1/8">
            <input
              type="checkbox"
              name="panel"
              id="panel-4"
              className="hidden"
            />
            <label
              htmlFor="panel-4"
              className="label-faq relative block  text-black p-4 shadow border-b border-black"
            >
              Количество
            </label>
            <div className="accordion__content overflow-hidden bg-grey-lighter">
              <div className="flex flex-col justify-center">
                <div className="flex justify-center w-1/4 py-2">
                  <span>От</span>
                </div>
                <div>
                  <input
                    className=" flex text-center font-normal font-jost justify-center border-black border rounded-full ... w-20 text-black
                    placeholder:text-stone-900
                    "
                    placeholder="400"
                    type="text"
                    name="search"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="w-1/8">
            <input
              type="checkbox"
              name="panel"
              id="panel-5"
              className="hidden"
            />
            <label
              htmlFor="panel-5"
              className="label-faq relative block  text-black p-4 shadow border-b border-black"
            >
              Материал
            </label>
            <div className="accordion__content overflow-hidden bg-grey-lighter">
              <div className="flex justify-start px-5 ">
                <div className="flex flex-col justify-start">
                  <div className="form-check">
                    <input
                      className="form-check-input  h-4 w-4 border border-gray-300 rounded-md bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                      type="checkbox"
                      value=""
                      id="materialPaper"
                    />
                    <label
                      className="form-check-label inline-block text-gray-800"
                      htmlFor="materialPaper"
                    >
                      Бумага
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input  h-4 w-4 border border-gray-300 rounded-md bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                      type="checkbox"
                      value=""
                      id="materialTree"
                    />
                    <label
                      className="form-check-label inline-block text-gray-800"
                      htmlFor="materialTree"
                    >
                      Дерево
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input  h-4 w-4 border border-gray-300 rounded-md bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                      type="checkbox"
                      value=""
                      id="materialEko"
                    />
                    <label
                      className="form-check-label inline-block text-gray-800"
                      htmlFor="materialEko"
                    >
                      Эко-кожа
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input  h-4 w-4 border border-gray-300 rounded-md bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                      type="checkbox"
                      value=""
                      id="materialMetall"
                    />
                    <label
                      className="form-check-label inline-block text-gray-800"
                      htmlFor="materialMetall"
                    >
                      Металл
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input  h-4 w-4 border border-gray-300 rounded-md bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                      type="checkbox"
                      value=""
                      id="materialNaturalSkin"
                    />
                    <label
                      className="form-check-label inline-block text-gray-800"
                      htmlFor="materialNaturalSkin"
                    >
                      Натуральная кожа
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input  h-4 w-4 border border-gray-300 rounded-md bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                      type="checkbox"
                      value=""
                      id="materialPVH"
                    />
                    <label
                      className="form-check-label inline-block text-gray-800"
                      htmlFor="materialPVH"
                    >
                      ПВХ
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input  h-4 w-4 border border-gray-300 rounded-md bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                      type="checkbox"
                      value=""
                      id="materialPlastik"
                    />
                    <label
                      className="form-check-label inline-block text-gray-800"
                      htmlFor="materialPlastik"
                    >
                      Пластик
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input  h-4 w-4 border border-gray-300 rounded-md bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                      type="checkbox"
                      value=""
                      id="materialPoliester"
                    />
                    <label
                      className="form-check-label inline-block text-gray-800"
                      htmlFor="materialPoliester"
                    >
                      Полиэстер
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input  h-4 w-4 border border-gray-300 rounded-md bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                      type="checkbox"
                      value=""
                      id="materialSilikon"
                    />
                    <label
                      className="form-check-label inline-block text-gray-800"
                      htmlFor="materialSilikon"
                    >
                      Силикон
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input  h-4 w-4 border border-gray-300 rounded-md bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                      type="checkbox"
                      value=""
                      id="materialFetr"
                    />
                    <label
                      className="form-check-label inline-block text-gray-800"
                      htmlFor="materialFetr"
                    >
                      Фетр
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-1/8">
            <input
              type="checkbox"
              name="panel"
              id="panel-6"
              className="hidden"
            />
            <label
              htmlFor="panel-6"
              className="label-faq relative block  text-black p-4 shadow border-b border-black"
            >
              Метод нанесения
            </label>
            <div className="accordion__content overflow-hidden bg-grey-lighter">
              <div className="flex justify-start px-5 ">
                <div className="flex flex-col justify-start">
                  <div className="form-check">
                    <input
                      className="form-check-input  h-4 w-4 border border-gray-300 rounded-md bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                      type="checkbox"
                      value=""
                      id="MethodChase"
                    />
                    <label
                      className="form-check-label inline-block text-gray-800"
                      htmlFor="MethodChase"
                    >
                      Гравировка (СО2 лазер)
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input  h-4 w-4 border border-gray-300 rounded-md bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                      type="checkbox"
                      value=""
                      id="MethodChase2"
                    />
                    <label
                      className="form-check-label inline-block text-gray-800"
                      htmlFor="MethodChase2"
                    >
                      Гравировка (оптоволоконный лазер)
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input  h-4 w-4 border border-gray-300 rounded-md bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                      type="checkbox"
                      value=""
                      id="methodPrinting"
                    />
                    <label
                      className="form-check-label inline-block text-gray-800"
                      htmlFor="methodPrinting"
                    >
                      Тампопечать
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input  h-4 w-4 border border-gray-300 rounded-md bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                      type="checkbox"
                      value=""
                      id="methodTermo"
                    />
                    <label
                      className="form-check-label inline-block text-gray-800"
                      htmlFor="methodTermo"
                    >
                      Термотрансфер
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input  h-4 w-4 border border-gray-300 rounded-md bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                      type="checkbox"
                      value=""
                      id="methodLettering"
                    />
                    <label
                      className="form-check-label inline-block text-gray-800"
                      htmlFor="methodLettering"
                    >
                      Тиснение
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input  h-4 w-4 border border-gray-300 rounded-md bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                      type="checkbox"
                      value=""
                      id="methodStencil"
                    />
                    <label
                      className="form-check-label inline-block text-gray-800"
                      htmlFor="methodStencil"
                    >
                      Трафаретная печать
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input  h-4 w-4 border border-gray-300 rounded-md bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                      type="checkbox"
                      value=""
                      id="methodUF"
                    />
                    <label
                      className="form-check-label inline-block text-gray-800"
                      htmlFor="methodUF"
                    >
                      УФ-печать
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input  h-4 w-4 border border-gray-300 rounded-md bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                      type="checkbox"
                      value=""
                      id="methodSpectrum"
                    />
                    <label
                      className="form-check-label inline-block text-gray-800"
                      htmlFor="methodSpectrum"
                    >
                      Шильд-спектрум
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col  justify-center items-center gap-4 font-jost">
            <button
              className="bg-white text-black font-normal rounded-full ... border border-black w-48 hover:text-white  px-4 py-1 
            hover:bg-[#79B15E]
            "
            >
              Показать товары (67)
            </button>
            <button
              className="border border-black rounded-full ... w-48  px-4 py-1 
            
            hover:text-white hover:bg-purple-600  focus:outline-none text-black
            "
            >
              Сбросить фильтры
            </button>
          </div>
        </div>
        <div className="flex  justify-between w-9/12 items-center align-middle text-center self-start flex-col">
          <div className="w-[100%] px-10">
            <Filters />
          </div>
          <div className="flex flex-wrap gap-1 justify-center ">
            <Cards />
            <Cards />
            <Cards />
            <Cards />
            <Cards />
            <Cards />
            <Cards />
            <Cards />
            <Cards />
          </div>
          {/* <div className=" w-[100%] flex justify-center">
            <CardsRow />
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default CatalogTools;
