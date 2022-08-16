import React, { useEffect, useState } from "react";
import searchL from "./assets/search.png";
import rightarrow from "./assets/rightarrow.png";
import schema from "./assets/schema.svg";
import list from "./assets/list.svg";
import "./style.css";
import Filters from "./filters/Filters";
import Cards from "./cards/Cards";
import { Link, useLocation, useParams } from "react-router-dom";
// import { fetchCatalogProducts } from "../../store/catalog";
import { useAppDispatch } from "../../store";
import { Dispatch } from "@reduxjs/toolkit";
import { useCatalogProducts, useSearchValue } from "../../store/catalog/hooks";
import CardsRow from "./cards/CardsRow";
import {
  fetchCatalogSuccess,
  setSearchValue,
} from "../../store/catalog/actions";
import axios from "axios";
import API from "../../constants/api";

const CatalogPage = () => {
  const [row, setRow] = useState("row");
  const searchValue = useSearchValue();
  const dispatch = useAppDispatch();
  const catalogProducts = useCatalogProducts();
  const { search } = useLocation();
  const [categoryId, setCategoryId] = useState(
    new URLSearchParams(search).get("categoryId")
  );
  const [fetching, setFetching] = useState(true);
  const [isAllProducts, setIsAllProducts] = useState(false);
  const [productsCount, setProductsCount] = useState(12);

  const fetchCatalogProducts =
    (categoryId: string | null, searchValue: string | null) =>
    async (dispatch: Dispatch) => {
      try {
        console.log("fetching");
        if (categoryId) {
          const res: any = await API.get(
            `/products/category/${categoryId}?count=${
              productsCount + 12
            }&more=${isAllProducts}&search=${searchValue}`
          );
          dispatch(fetchCatalogSuccess(res.data.data));
          setIsAllProducts(res.data.is_all);
          setProductsCount(res.data.count);
          setFetching(false);
          return;
        }

        const res: any = await API.get(
          `/products/all?count=${
            productsCount + 12
          }&more=${isAllProducts}&search=${searchValue}`
        );
        console.log(productsCount + 12);

        dispatch(fetchCatalogSuccess(res.data.data));
        setIsAllProducts(res.data.is_all);
        setProductsCount(res.data.count);
        setFetching(false);
      } catch (e) {
        console.log(e);
      }
    };

  useEffect(() => {
    if (!fetching) return;
    dispatch(fetchCatalogProducts(categoryId, searchValue) as any);
  }, [categoryId, searchValue, fetching]);

  useEffect(() => {
    document.addEventListener("scroll", scrollHandler);

    return function () {
      document.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  const scrollHandler = (e: any) => {
    if (
      e.target.documentElement.scrollHeight -
        (e.target.documentElement.scrollTop + window.innerHeight) <
        100 &&
      !isAllProducts
    ) {
      setFetching(true);
    }
  };

  return (
    <div className="mx-auto md:px-9 px-4  w-auto  font-jost py-9">
      <div className="flex gap-5  py-3  justify-between flex-col  md:flex-row">
        <div className="flex items-baseline gap-5">
          <Link to="/catalog">
            <div className="flex items-center text-center justify-center align-middle">
              <h2 className=" text-black font-extrabold text-2xl flex items-center text-center object-center align-middle">
                Каталог
              </h2>
            </div>
          </Link>
          <div className="hidden md:flex">
            <label className="relative block">
              <span className="sr-only">Search</span>
              <span className="absolute inset-y-0  flex items-center pl-2">
                <img className="h-2 w-auto sm:h-5" src={searchL} alt="" />
              </span>
              <input
                value={searchValue}
                onChange={(e: any) => dispatch(setSearchValue(e.target.value))}
                className=" placeholder:text-slate-400 block   w-full border border-black rounded-full py-1 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
                placeholder="Искать товар"
                type="text"
                name="search"
              />
            </label>
          </div>
        </div>

        {/*  */}
        <div className="md:hidden flex flex-row justify-between">
          <div className="md:hidden w-8/12 flex  ">
            <Filters />
          </div>
          <div className="flex justify-center items-center gap-3 w-4/12">
            <button
              className={`bg-black text-white h-auto flex md:flex rounded-full ... w-auto px-2 py-2 gap-2 `}
            >
              <img src={schema} className="h-auto w-auto  flex" alt="" />
              <span className="hidden md:flex">Схема</span>
            </button>
            <button className="flex rounded-full ... w-auto px-2 py-2 border !border-black">
              <img src={list} alt="" />
              <span className="hidden md:flex">Список</span>
            </button>
          </div>
        </div>
        <div className=" hidden md:flex justify-center items-center gap-3 w-6/12">
          <button
            onClick={() => setRow("row")}
            className={`${
              row === "row" ? "bg-black text-white " : "bg-white text-black"
            } border-gray-900 border-2  h-auto flex md:flex rounded-full ... w-auto px-3 items-center py-2 gap-2`}
          >
            {/* <img src={schema} className="h-auto w-auto  flex" alt="" /> */}

            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4 2.75H8V1.25H4V2.75ZM9.25 4V8H10.75V4H9.25ZM8 9.25H4V10.75H8V9.25ZM2.75 8V4H1.25V8H2.75ZM4 9.25C3.30964 9.25 2.75 8.69036 2.75 8H1.25C1.25 9.51878 2.48122 10.75 4 10.75V9.25ZM9.25 8C9.25 8.69036 8.69036 9.25 8 9.25V10.75C9.51878 10.75 10.75 9.51878 10.75 8H9.25ZM8 2.75C8.69036 2.75 9.25 3.30964 9.25 4H10.75C10.75 2.48122 9.51878 1.25 8 1.25V2.75ZM4 1.25C2.48122 1.25 1.25 2.48122 1.25 4H2.75C2.75 3.30964 3.30964 2.75 4 2.75V1.25ZM16 2.75H20V1.25H16V2.75ZM21.25 4V8H22.75V4H21.25ZM20 9.25H16V10.75H20V9.25ZM14.75 8V4H13.25V8H14.75ZM16 9.25C15.3096 9.25 14.75 8.69036 14.75 8H13.25C13.25 9.51878 14.4812 10.75 16 10.75V9.25ZM21.25 8C21.25 8.69036 20.6904 9.25 20 9.25V10.75C21.5188 10.75 22.75 9.51878 22.75 8H21.25ZM20 2.75C20.6904 2.75 21.25 3.30964 21.25 4H22.75C22.75 2.48122 21.5188 1.25 20 1.25V2.75ZM16 1.25C14.4812 1.25 13.25 2.48122 13.25 4H14.75C14.75 3.30964 15.3096 2.75 16 2.75V1.25ZM4 14.75H8V13.25H4V14.75ZM9.25 16V20H10.75V16H9.25ZM8 21.25H4V22.75H8V21.25ZM2.75 20V16H1.25V20H2.75ZM4 21.25C3.30964 21.25 2.75 20.6904 2.75 20H1.25C1.25 21.5188 2.48122 22.75 4 22.75V21.25ZM9.25 20C9.25 20.6904 8.69036 21.25 8 21.25V22.75C9.51878 22.75 10.75 21.5188 10.75 20H9.25ZM8 14.75C8.69036 14.75 9.25 15.3096 9.25 16H10.75C10.75 14.4812 9.51878 13.25 8 13.25V14.75ZM4 13.25C2.48122 13.25 1.25 14.4812 1.25 16H2.75C2.75 15.3096 3.30964 14.75 4 14.75V13.25ZM16 14.75H20V13.25H16V14.75ZM21.25 16V20H22.75V16H21.25ZM20 21.25H16V22.75H20V21.25ZM14.75 20V16H13.25V20H14.75ZM16 21.25C15.3096 21.25 14.75 20.6904 14.75 20H13.25C13.25 21.5188 14.4812 22.75 16 22.75V21.25ZM21.25 20C21.25 20.6904 20.6904 21.25 20 21.25V22.75C21.5188 22.75 22.75 21.5188 22.75 20H21.25ZM20 14.75C20.6904 14.75 21.25 15.3096 21.25 16H22.75C22.75 14.4812 21.5188 13.25 20 13.25V14.75ZM16 13.25C14.4812 13.25 13.25 14.4812 13.25 16H14.75C14.75 15.3096 15.3096 14.75 16 14.75V13.25Z"
                fill={row === "row" ? "white" : "black"}
              />
            </svg>

            <span className="hidden md:flex">Схема</span>
          </button>
          <button
            onClick={() => setRow("column")}
            className={`${
              row !== "row" ? "bg-black text-white " : "bg-white text-black"
            } border-gray-900 border-2 h-auto flex md:flex rounded-full ... w-auto px-3 items-center py-2 gap-2`}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M22 18H22.75H22ZM18 22V21.25V22ZM18 2V1.25V2ZM22 6H21.25H22ZM2 6H1.25H2ZM6 2V2.75V2ZM2 18H1.25H2ZM6 22V22.75V22ZM2 15.25C1.58579 15.25 1.25 15.5858 1.25 16C1.25 16.4142 1.58579 16.75 2 16.75L2 15.25ZM22 16.75C22.4142 16.75 22.75 16.4142 22.75 16C22.75 15.5858 22.4142 15.25 22 15.25V16.75ZM6 2.75L18 2.75V1.25L6 1.25V2.75ZM18 21.25H6V22.75H18V21.25ZM21.25 18C21.25 19.7949 19.7949 21.25 18 21.25V22.75C20.6234 22.75 22.75 20.6234 22.75 18H21.25ZM18 2.75C19.7949 2.75 21.25 4.20508 21.25 6H22.75C22.75 3.37665 20.6234 1.25 18 1.25V2.75ZM2.75 6C2.75 4.20507 4.20508 2.75 6 2.75V1.25C3.37665 1.25 1.25 3.37665 1.25 6H2.75ZM1.25 18C1.25 20.6234 3.37665 22.75 6 22.75V21.25C4.20507 21.25 2.75 19.7949 2.75 18H1.25ZM2 16.75L22 16.75V15.25L2 15.25L2 16.75ZM2.75 18L2.75 8H1.25L1.25 18H2.75ZM2.75 8L2.75 6H1.25L1.25 8H2.75ZM21.25 6V8H22.75V6H21.25ZM21.25 8V18H22.75V8H21.25ZM2 8.75H22V7.25H2V8.75Z"
                fill={row === "row" ? "black" : "white"}
              />
            </svg>

            <span className="hidden md:flex">Список</span>
          </button>
        </div>
      </div>

      {/*  */}
      <div>
        <nav className="bg-grey-light rounded-md w-full">
          <ol className="flex  ">
            <li>
              <Link
                to="/catalog"
                className="tex-black !text-black hover:text-blue-700"
              >
                Каталог
              </Link>
            </li>
            <li>
              <img src={rightarrow} alt="" />
            </li>
            <li>
              <a href="/" className="!text-black hover:text-blue-700">
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
        <div className="md:gap-4 gap-5 flex py-4  md:overflow-auto overflow-scroll">
          <button className="rounded-full ... border !border-black md:w-[10%] w-auto h-8 px-4">
            Барсетки
          </button>
          <button className="rounded-full ... border !border-black md:w-[10%] w-auto h-8 px-4">
            Визитницы
          </button>
          <button className="rounded-full ... border !border-black md:w-[10%] w-auto h-8 px-4">
            Одежда
          </button>
          <button className="rounded-full ... border !border-black md:w-[10%] w-auto h-8 px-4">
            Органайзеры
          </button>
          <button className="rounded-full ... border !border-black md:w-[10%] w-auto h-8 px-4">
            Портмоне
          </button>
          <button className="rounded-full ... border !border-black md:w-[10%] w-auto h-8 px-4">
            Часы{" "}
          </button>
        </div>
      </div>
      {/*  */}
      <div className="flex pt-10 font-jost">
        <div className="accordion  hidden  flex-col w-3/12  justify-center md:block ">
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
              <div className="flex justify-start px-5 py-3 ">
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
              <div className="flex justify-start px-5 py-3">
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
              <div className="flex justify-start px-5 py-3">
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
          <div className="flex flex-col  justify-center items-center gap-4 font-jost py-2">
            <button
              className="bg-white text-black font-normal rounded-full ... border border-black w-48 hover:text-white  px-4 py-1 
          hover:!bg-[#79B15E]
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
        <div className="flex  justify-between md:w-9/12 w-[100%] items-center align-middle text-center self-start flex-col">
          <div className="md:w-[100%] md:px-10 hidden md:block">
            <Filters />
            ``
          </div>
          {row === "row" ? (
            <div className="md:flex md:flex-wrap flex flex-wrap items-center gap-4  justify-center ">
              {catalogProducts.map((item, i: number) => (
                <Cards product={item} key={i} />
              ))}
            </div>
          ) : (
            <div className=" w-[100%] flex justify-center flex-col items-center">
              {catalogProducts.map((item, i: number) => (
                <CardsRow product={item} key={i} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CatalogPage;
