import React, { useEffect, useState } from "react";
import searchL from "./assets/search.png";
import union from "./assets/Union.png";
import rightarrow from "./assets/rightarrow.png";
import "./style.css";
import Cards from "./cards/Cards";
import { Link, useLocation, useParams } from "react-router-dom";
import { useAppDispatch } from "../../store";
import { Dispatch } from "@reduxjs/toolkit";
import {
  useCatalogProducts,
  useFilters,
  useSearchValue,
  useSelectedCatalogProduct,
} from "../../store/catalog/hooks";
import CardsRow from "./cards/CardsRow";
import {
  fetchCatalogSuccess,
  fetchFiltersSuccess,
  setSearchValue,
} from "../../store/catalog/actions";
import { PUBLIC_API } from "../../constants/api";
import { fetchSlectedCatalogProduct } from "../../store/catalog";
import { useWindowSize } from "../../hooks/UseWindowSize";

const CatalogPage = () => {
  const filters = useFilters();
  const width = useWindowSize();
  const [row, setRow] = useState("row");
  const searchValue = useSearchValue();
  const dispatch = useAppDispatch();
  const catalogProducts = useCatalogProducts();
  const { search } = useLocation();
  const location = useLocation();
  const categoryId = new URLSearchParams(search).get("categoryId");
  const [fetching, setFetching] = useState(true);
  const [isAllProducts, setIsAllProducts] = useState(false);
  const [productsCount, setProductsCount] = useState(12);
  const [totalCount, setTotalCount] = useState<any>();
  const [showFilter, setShowFilter] = useState(false);
  const [breadCrumbs, setBreadCrumbs] = useState([]);
  const selectedProduct = useSelectedCatalogProduct();
  const params = useParams();
  const isHolidaysCategory = new URLSearchParams(search).get("is-holidays");
  const type = new URLSearchParams(search).get("type");
  const [holiday, setHoliday] = useState<any>();
  const [subcategories, setSubcategories] = useState<any>([]);
  const [selectedFilters, setSelectedFilters] = useState<{
    colors: any[];
    materials: any[];
    custom_types: any[];
    types: any[];
  }>({
    colors: [],
    materials: [],
    custom_types: [],
    types: [],
  });
  const [price, setPrice] = useState({
    minPrice: 0,
    maxPrice: 999999999999999,
  });

  const [priceSort, setPriceSort] = useState({
    ascending: 0,
    descending: 0,
  });

  const fetchCatalogProducts =
    (categoryId: string | null, searchValue: string | null) =>
    async (dispatch: Dispatch) => {
      try {
        const url = `/products${
          categoryId
            ? `/${isHolidaysCategory ? "holiday" : "category"}/${categoryId}`
            : `/all`
        }?count=${
          productsCount + 12
        }&more=${isAllProducts}&search=${searchValue}&colors=${selectedFilters.colors.map(
          (color) => `${color}`
        )}&costom=${selectedFilters.custom_types.map(
          (custom_type) => `${custom_type}`
        )}&types=${selectedFilters.types.map(
          (type) => `${type}`
        )}&materials=${selectedFilters.materials.map(
          (material) => `${material}`
        )}&price_start=${price.minPrice}&price_end=${
          price.maxPrice
        }&price_ascending=${priceSort.ascending}&price_descending=${
          priceSort.descending
        }`;
        const res: any = await PUBLIC_API.get(url);
        dispatch(fetchCatalogSuccess(res.data.data));
        dispatch(
          fetchFiltersSuccess({
            colors: res.data.colors,
            costom_types: res.data.costom_types,
            materials: res.data.materials,
            types: res.data.types,
            total_count: res.data.total_count,
          })
        );
        res.data.holiday && setHoliday(res.data.holiday);
        res.data.holiday && setSubcategories(res.data.subcategories);
        res.data.bread_crumbs &&
          res.data.bread_crumbs.length > 0 &&
          setBreadCrumbs(res.data.bread_crumbs.slice(1));
        setIsAllProducts(res.data.is_all);
        setProductsCount(res.data.count);
        setTotalCount(res.data.total_count);
        setFetching(false);
      } catch (e) {
        console.log(e);
      }
    };

  useEffect(() => {
    if (!fetching) return;
    dispatch(fetchCatalogProducts(categoryId, searchValue) as any);
  }, [fetching]);

  useEffect(() => {
    dispatch(fetchCatalogProducts(categoryId, searchValue) as any);
  }, [
    selectedFilters,
    price,
    priceSort,
    dispatch,
    categoryId,
    searchValue,
    location,
  ]);

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
  const handleResetFilters = () => {
    setSelectedFilters({
      colors: [],
      materials: [],
      custom_types: [],
      types: [],
    });
    setPrice({
      minPrice: 0,
      maxPrice: 999999999999999,
    });
    window.location.reload();
  };

  const handleSelectFilters = (id: number, filterType: string) => {
    if (filterType === "color") {
      if (selectedFilters.colors.includes(id)) {
        const updatedArray = selectedFilters.colors.filter(
          (color) => color !== id
        );
        setSelectedFilters({ ...selectedFilters, colors: updatedArray });
        return;
      }
      setSelectedFilters({
        ...selectedFilters,
        colors: [...selectedFilters.colors, id],
      });
      return;
    }
    if (filterType === "customTypes") {
      if (selectedFilters.custom_types.includes(id)) {
        const updatedArray = selectedFilters.custom_types.filter(
          (costom) => costom !== id
        );
        setSelectedFilters({ ...selectedFilters, custom_types: updatedArray });
        return;
      }
      setSelectedFilters({
        ...selectedFilters,
        custom_types: [...selectedFilters.custom_types, id],
      });
      return;
    }
    if (filterType === "types") {
      if (selectedFilters.types.includes(id)) {
        const updatedArray = selectedFilters.types.filter(
          (type) => type !== id
        );
        setSelectedFilters({ ...selectedFilters, types: updatedArray });
        return;
      }
      setSelectedFilters({
        ...selectedFilters,
        types: [...selectedFilters.types, id],
      });
      return;
    }
    if (filterType === "materials") {
      if (selectedFilters.materials.includes(id)) {
        const updatedArray = selectedFilters.materials.filter(
          (material) => material !== id
        );
        setSelectedFilters({ ...selectedFilters, materials: updatedArray });
        return;
      }
      setSelectedFilters({
        ...selectedFilters,
        materials: [...selectedFilters.materials, id],
      });
      return;
    }
  };

  useEffect(() => {
    if (!params.id) return;
    dispatch(fetchSlectedCatalogProduct(params.id) as any);
  }, []);

  return (
    <div className="mx-auto md:px-9 px-4  w-auto  font-jost py-9">
      <div className="flex gap-5  py-3  justify-between flex-col  md:flex-row">
        <div className="flex items-baseline gap-5">
          <Link to="/catalog">
            <div className="flex items-center text-center justify-center align-middle">
              <h2 className=" text-black font-extrabold text-2xl flex items-center text-center object-center align-middle">
                ??????????????
              </h2>
            </div>
          </Link>
          <div className="hidden md:flex">
            <label className="relative flex justify-end flex-row items-center !mb-0">
              <img
                className="h-2 w-auto sm:h-5 absolute left-2 object-contain focus:outline-none"
                src={searchL}
                alt=""
              />
              <input
                value={searchValue}
                onChange={(e: any) => dispatch(setSearchValue(e.target.value))}
                className=" placeholder:text-black block   w-full border-[1px] font-normal border-black rounded-full py-1 pl-9 focus:outline-none sm:text-sm"
                placeholder="???????????? ??????????"
                type="text"
                name="search"
              />
            </label>
          </div>
        </div>

        {/*  */}
        <div className="md:hidden flex flex-row justify-between">
          <div className="md:hidden w-8/12 flex  ">
            <div className=" mx-auto  w-auto  font-jost py-2 flex justify-between flex-row ">
              <div className="flex justify-center flex-col">
                <div className="dropdown relative">
                  <button
                    className=" cursor-pointer dropdown-toggle text-black hover:bg-gray-100 focus:outline-none flex items-left  whitespace-nowrap "
                    type="button"
                    id="dropdownMenuButton1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    ?????????????????????? ????:{" "}
                    {priceSort.ascending
                      ? "???? ??????????????????????"
                      : priceSort.descending
                      ? "???? ????????????????"
                      : "?????? ????????????"}
                  </button>
                  <ul
                    className=" cursor-pointer dropdown-menu min-w-max absolute bg-white z-50 py-2 hidden border-2 border-black
          hover:text-black-200
        "
                    aria-labelledby="dropdownMenuButton1"
                  >
                    <li
                      onClick={() =>
                        setPriceSort({
                          descending: 0,
                          ascending: 0,
                        })
                      }
                      className="dropdown-item cursor-pointer text-sm px-4 block w-full text-black hover:bg-white border-2 border-black"
                    >
                      ?????? ????????????
                    </li>
                    <li
                      onClick={() =>
                        setPriceSort({ descending: 0, ascending: 1 })
                      }
                      className="dropdown-item cursor-pointer text-sm px-4 block w-full text-black hover:bg-white border-2 border-b-2 border-t-2 border-black"
                    >
                      ???? ?????????????????????? ????????
                    </li>
                    <li
                      onClick={() =>
                        setPriceSort({ descending: 1, ascending: 0 })
                      }
                      className="dropdown-item cursor-pointer text-sm px-4 block w-full text-black hover:bg-white border-2 border-black"
                    >
                      ???? ???????????????? ????????
                    </li>
                  </ul>
                </div>
                <span>
                  <> {selectedProduct?.total_stock} ??????????????</>
                </span>
              </div>
            </div>
            <div className="flex bg-black  h-0.5" />
          </div>
          <div className="flex justify-around items-end w-4/12">
            <button
              onClick={() => setRow("row")}
              className={`${
                row === "row" ? "bg-black text-white " : "bg-white text-black"
              } h-auto flex md:flex rounded-full ... w-auto px-2 py-2 gap-2  border-[1px] border-black`}
            >
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
              <span className="hidden md:flex">??????????</span>
            </button>
            <button
              onClick={() => setRow("column")}
              className={`${
                row !== "row" ? "bg-black text-white " : "bg-white text-black"
              }  h-auto flex md:flex rounded-full ... w-auto px-2 py-2 gap-2  border-[1px] border-black`}
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
              <span className="hidden md:flex">????????????</span>
            </button>
          </div>
        </div>
        <div className=" hidden md:flex justify-end items-center gap-3 w-6/12">
          <button
            onClick={() => setRow("row")}
            className={`${
              row === "row" ? "bg-black text-white " : "bg-white text-black"
            } border-gray-900 border-2  h-auto flex md:flex rounded-full ... w-auto px-3 items-center py-2 gap-2`}
          >
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

            <span className="hidden md:flex">??????????</span>
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

            <span className="hidden md:flex">????????????</span>
          </button>
        </div>
      </div>

      <div>
        <nav className="bg-grey-light rounded-md w-full">
          <ol className="flex  ">
            <li>
              <Link to="/catalog" className="tex-black !text-black ">
                ??????????????
              </Link>
            </li>
            <li></li>

            {breadCrumbs.length > 0 &&
              breadCrumbs.map((item: any, i) => (
                <li className="flex" key={i}>
                  <img src={rightarrow} className="object-contain" alt="" />
                  <span className="!text-black lg:text-base  text-sm">
                    {item.name}
                  </span>
                </li>
              ))}
          </ol>
        </nav>
      </div>
      {/*  */}

      <div className="py-3 ">
        <div className="flex justify-between items-center">
          {/* <div>
            <span className="text-black text-2xl">?????????????? ????????????????????</span>
          </div> */}
          <button
            className="md:hidden block focus:outline-none cursor-pointer"
            onClick={() => setShowFilter(!showFilter)}
          >
            <img src={union} alt="" />
          </button>
        </div>
        {/* <div className=" md:gap-4 gap-5 md:hidden  flex py-4  md:overflow-auto  overflow-scroll">
          <div className="block text-center self-center">
            <div className="bg-black h-[2px] w-4 my-1 p-0 m-0"></div>
            <div className="bg-black h-[2px] w-4 my-1 p-0 m-0"></div>
            <div className="bg-black h-[2px] w-4 my-1 p-0 m-0"></div>
          </div>
        </div> */}

        <div className="flex flex-row justify-start items-center gap-4">
          {isHolidaysCategory
            ? subcategories.map((item: any, i: number) => (
                <Link
                  key={i}
                  to={`/catalog?categoryId=${item.id}&is-holidays=true`}
                >
                  <div className="flex justify-center items-center gap-2 flex-row">
                    <button className="rounded-full ... border !border-black md:w-[10%] w-auto h-8 px-4 text-black">
                      {item.name}
                    </button>
                  </div>
                </Link>
              ))
            : null}
        </div>
      </div>
      {/*  */}

      <div className="md:flex pt-10 font-jost">
        <div
          className={
            showFilter && width.width < 1000
              ? " z-50 outline-none focus:outline-none bg-red w-full accordion block"
              : "hidden md:accordion flex-col md:w-3/12  md:justify-center md:block sticky h-[100%] pt-14"
          }
        >
          <div className="w-1/8">
            <input
              readOnly
              type="checkbox"
              name="panel"
              id="panel-1"
              className="hidden"
            />
            <label
              htmlFor="panel-1"
              className=" label-faq relative block text-black p-2  border-b border-black"
            >
              ?????? ????????????
            </label>
            <div className="accordion__content overflow-y-auto overflow-x-clip  flex justify-start items-center">
              <div className="gap-2 flex flex-col justify-center">
                {filters && (
                  <div className="form-check flex justify-start items-center flex-col px-3">
                    {filters.types.map((item: any, i) => (
                      <div
                        className="py-1 flex justify-start  items-center flex-row"
                        key={i}
                      >
                        <input
                          readOnly
                          className="  h-4 w-4 border border-black rounded-sm bg-white  focus:outline-none transition -200 items-center  bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                          type="checkbox"
                          value={item.id}
                          id={item.name}
                          checked={selectedFilters.types.includes(item.id)}
                          onClick={() => handleSelectFilters(item.id, "types")}
                        />

                        <label
                          htmlFor={item.name}
                          className="flex justify-center cursor-pointer items-center  px-4 py-1 rounded-full ... w-28 !mb-0 py-10 px-22 border border-black ml-6"
                        >
                          {item.name}
                        </label>
                      </div>
                    ))}
                  </div>
                )}
              </div>
              {/*  */}
            </div>
          </div>
          <div className="w-1/8">
            <input
              readOnly
              type="checkbox"
              name="panel"
              id="panel-2"
              className="hidden"
            />
            <label
              htmlFor="panel-2"
              className="label-faq  relative block  text-black p-2  border-b border-black"
            >
              ????????
            </label>
            <div className="accordion__content overflow-hidden  bg-grey-lighter flex justify-center">
              <div className="flex justify-around items-center">
                {/*  */}

                {/*  */}

                <div className="flex w-full sm:-mx-6 lg:-mx-8">
                  <div className="py-2  min-w-full sm:px-6 lg:px-8 flex flex-col">
                    <div className="flex flex-row justify-around items-center ">
                      <div>
                        <span>????</span>
                      </div>
                      <div>
                        <span>????</span>
                      </div>
                    </div>
                    <div className="flex flex-row justify-around gap-5 py-2">
                      <div>
                        <input
                          readOnly
                          className=" flex text-center font-jost  border-black border-[1px] rounded-full ... w-20 h-8 px-2 py-1 text-black placeholder:text-stone-900"
                          placeholder="15"
                          type="number"
                          name="search"
                          value={price.minPrice}
                          onChange={(e) =>
                            setPrice({
                              ...price,
                              minPrice: Number(e.target.value),
                            })
                          }
                        />
                      </div>
                      <div className="flex flex-row w-20 items-center justify-center">
                        ---
                      </div>
                      <div>
                        <input
                          readOnly
                          className=" flex text-center font-jost  border-black border-[1px] rounded-full ... w-20 h-8 px-2 py-1 text-black placeholder:text-stone-900"
                          placeholder="400"
                          type="number"
                          name="search"
                          value={price.maxPrice}
                          onChange={(e) =>
                            setPrice({
                              ...price,
                              maxPrice: Number(e.target.value),
                            })
                          }
                        />
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
              readOnly
              type="checkbox"
              name="panel"
              id="panel-3"
              className="hidden"
            />
            <label
              htmlFor="panel-3"
              className="label-faq relative block  text-black p-2  border-b border-black"
            >
              ????????
            </label>
            <div className="accordion__content overflow-y-scroll  bg-grey-lighter">
              <div className="flex justify-start   py-1 ">
                {filters && (
                  <div className="form-check py-2">
                    {filters.colors.map((item: any, i) => (
                      <div
                        className="py-2 flex justify-center items-center flex-row"
                        key={i}
                      >
                        <input
                          readOnly
                          className="  h-4 border border-gray-300 rounded-md bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                          type="checkbox"
                          value={item.id}
                          id={item.name}
                          checked={selectedFilters.colors.includes(item.id)}
                          onClick={() => handleSelectFilters(item.id, "color")}
                        />
                        <label
                          className="form-check-label text-gray-800 flex flex-col w-full justify-start"
                          htmlFor={item.name}
                        >
                          {item.name}
                        </label>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="w-1/8">
            <input
              readOnly
              type="checkbox"
              name="panel"
              id="panel-4"
              className="hidden"
            />
            <label
              htmlFor="panel-4"
              className="label-faq relative block  text-black p-2  border-b border-black"
            >
              ????????????????????
            </label>
            <div className="accordion__content overflow-hidden  bg-grey-lighter">
              <div className="flex flex-col justify-center">
                <div className="flex justify-center  py-2">
                  <span>????</span>
                </div>
                <div className=" flex justify-center items-center text-center font-normal">
                  <input
                    className=" font-jost text-center  border-black border-[1px] py-1 px-2 rounded-full ... w-auto text-black
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
              readOnly
              type="checkbox"
              name="panel"
              id="panel-5"
              className="hidden"
            />
            <label
              htmlFor="panel-5"
              className="label-faq relative block  text-black p-2  border-b border-black"
            >
              ????????????????
            </label>
            <div className="accordion__content overflow-y-scroll  overflow-x-clip bg-grey-lighter">
              <div className="flex justify-start  py-3">
                <div className="flex flex-col justify-start">
                  {filters && (
                    <div className="form-check px-4">
                      {filters.materials.map((item: any, i) => (
                        <div key={i}>
                          <input
                            readOnly
                            className="  h-4 w-4 border border-black rounded-md bg-white  focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                            type="checkbox"
                            value={item.id}
                            id={item.name}
                            checked={selectedFilters.materials.includes(
                              item.id
                            )}
                            onClick={() =>
                              handleSelectFilters(item.id, "materials")
                            }
                          />
                          <label
                            className="form-check-label  text-gray-800 flex flex-col justify-center"
                            htmlFor={item.name}
                          >
                            {item.name}
                          </label>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="w-1/8">
            <input
              readOnly
              type="checkbox"
              name="panel"
              id="panel-6"
              className="hidden"
            />
            <label
              htmlFor="panel-6"
              className="label-faq relative block  text-black p-2  border-b border-black"
            >
              ?????????? ??????????????????
            </label>
            <div className="accordion__content overflow-y-scroll  overflow-x-clip bg-grey-lighter">
              <div className="flex justify-center py-3">
                <div className="flex flex-col justify-start">
                  {/*  */}
                  {filters && (
                    <div className="form-check px-4">
                      {filters.costom_types.map((item: any, i) => (
                        <div className="py-2" key={i}>
                          <input
                            readOnly
                            className=" h-4 w-4 border border-black rounded-md bg-white  focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                            type="checkbox"
                            value=""
                            id="MethodChase"
                            checked={selectedFilters.custom_types.includes(
                              item.id
                            )}
                            onClick={() =>
                              handleSelectFilters(item.id, "customTypes")
                            }
                          />
                          <label
                            className="form-check-label text-gray-800 w-1/8 flex flex-col"
                            htmlFor={item.name}
                          >
                            {item.name}
                          </label>
                        </div>
                      ))}
                    </div>
                  )}

                  {/*  */}
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col  justify-center items-center gap-4 font-jost py-2">
            <Link to="/catalog">
              <button
                onClick={() => handleResetFilters()}
                className="border border-black rounded-full ... w-48  px-4 py-1
          
          hover:text-white hover:bg-purple-600  focus:outline-none text-black
          "
              >
                ???????????????? ??????????????
              </button>
            </Link>
          </div>
        </div>
        <div className="flex  justify-between md:w-9/12 w-[100%] items-center align-middle text-center self-start flex-col">
          <div className="md:w-[100%] md:px-10 hidden md:block">
            <div className=" mx-auto  w-auto  font-jost py-9 flex justify-between flex-row ">
              <div className="">
                <span>
                  <> {selectedProduct?.total_stock} ??????????????</>
                </span>
              </div>
              <div className="flex justify-center">
                <div className="dropdown relative">
                  <button
                    className=" cursor-pointer dropdown-toggle px-6 text-black hover:bg-gray-100 focus:outline-none flex items-center  whitespace-nowrap "
                    type="button"
                    id="dropdownMenuButton1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    ?????????????????????? ????:{" "}
                    {priceSort.ascending
                      ? "???? ??????????????????????"
                      : priceSort.descending
                      ? "???? ????????????????"
                      : "?????? ????????????"}
                  </button>
                  <ul
                    className=" cursor-pointer dropdown-menu min-w-max absolute bg-white z-50 py-2 hidden border-2 border-black
          hover:text-black-200
        "
                    aria-labelledby="dropdownMenuButton1"
                  >
                    <li
                      onClick={() =>
                        setPriceSort({
                          descending: 0,
                          ascending: 0,
                        })
                      }
                      className="dropdown-item cursor-pointer text-sm px-4 block w-full text-black hover:bg-white border-2 border-black"
                    >
                      ?????? ????????????
                    </li>
                    <li
                      onClick={() =>
                        setPriceSort({ descending: 0, ascending: 1 })
                      }
                      className="dropdown-item cursor-pointer text-sm px-4 block w-full text-black hover:bg-white border-2 border-black"
                    >
                      ???? ?????????????????????? ????????
                    </li>
                    <li
                      onClick={() =>
                        setPriceSort({ descending: 1, ascending: 0 })
                      }
                      className="dropdown-item cursor-pointer text-sm px-4 block w-full text-black hover:bg-white border-2 border-black"
                    >
                      ???? ???????????????? ????????
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="flex bg-black  h-0.5"></div>
          </div>

          {/*  */}
          {holiday ? (
            <div className="py-4 px-4">
              <div className="flex justify-center items-center text-3xl font-bold px-4 flex-wrap">
                <span>{holiday.name}</span>
              </div>
              <div>
                <img
                  src={holiday.banner}
                  className="object-contain flex justify-center items-center h-40 w-72 py-4"
                  alt=""
                />
              </div>

              <div className="flex justify-start text-left ... items-center py-5">
                <p>{holiday.description}</p>
              </div>
            </div>
          ) : null}

          {/*  */}
          {row === "row" ? (
            <div className="md:flex md:flex-wrap flex flex-wrap items-center gap-20 justify-center ">
              {catalogProducts ? (
                <>
                  {catalogProducts.map((item, i: number) => (
                    <Cards product={item} key={i} />
                  ))}
                </>
              ) : null}
              {fetching && (
                <div className="flex justify-center items-center py-4 p-96">
                  <p>????????????????...</p>
                </div>
              )}
            </div>
          ) : (
            <div className=" w-[100%] flex justify-start flex-col items-start pl-11 flex-wrap">
              {catalogProducts ? (
                <>
                  {catalogProducts.map((item, i: number) => (
                    <CardsRow product={item} key={i} />
                  ))}
                </>
              ) : null}
              {fetching && (
                <div className="flex justify-center items-center py-4">
                  <p>????????????????...</p>
                </div>
              )}
              r
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CatalogPage;
