import React, { useState, useEffect } from "react";
import calendar from "./catalog-images/calendar.svg";
import one from "./catalog-images/one.png";
import arrow from "./catalog-images/arrow.svg";
import { useAppDispatch } from "../../../store";
import { useHome } from "../../../store/varia/hooks";
import { fetchHome } from "../../../store/varia";
import { Link } from "react-router-dom";

const Catalog = () => {
  const [openTab, setOpenTab] = useState(0);
  const [more, setMore] = useState(false);

  const dispatch = useAppDispatch();
  const home = useHome();
  useEffect(() => {
    dispatch(fetchHome() as any);
  }, []);

  return (
    <div className="container mx-auto px-4 ">
      {home?.catalogs && (
        <>
          <div className="flex flex-col md:flex-row  justify-start text-center  items-center align-middle  py-2 ">
            <span className="  py-4 font-semibold text-black text-bold text-center ">
              Каталог
            </span>

            <div className="flex flex-row gap-4 scroll-photo  overflow-x-auto overflow-y-clip h-8 justify-start md:justify-center px-10 w-full md:w-auto">
              {home.catalogs.map((item, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setOpenTab(index);
                  }}
                  className={`${
                    index === openTab
                      ? "bg-black text-white "
                      : "bg-white text-black"
                  } flex   align-middle justify-center items-center  rounded-full ... py-1 px-5 w-auto  text-center text-xs md:text-base text-black border-[1px] border-black  `}
                >
                  <img
                    className=" flex px-2 h-3 w-3"
                    src={item.icon ? item.icon : calendar}
                    alt=""
                  />
                  <span className="flex justify-center items-center">
                    {item.name}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {home.catalogs.map((item, index) => {
            return index === openTab ? (
              <div
                key={index}
                className="flex flex-wrap md:flex-row justify-center items-center md:gap-20 gap-10 py-3"
              >
                {item.categories.length && item.categories.length > 6 && !more
                  ? item.categories.slice(0, 6).map((el) => (
                      <Link
                        to={
                          item.is_holidays
                            ? `catalog?categoryId=${el.id}&is-holidays=true`
                            : `catalog?categoryId=${el.id}`
                        }
                      >
                        <div className="  md:h-56 md:w-52 h-32 w-32 border  border-black ">
                          <img src={el.picture ? el.picture : one} alt="" />
                          <span className="flex align-bottom justify-center text-black text-sm  md:text-base text-center">
                            {el.name}
                          </span>
                        </div>
                      </Link>
                    ))
                  : item.categories.map((el) => (
                      <Link
                        to={
                          item.is_holidays
                            ? `catalog?categoryId=${el.id}&is-holidays=true`
                            : `catalog?categoryId=${el.id}`
                        }
                      >
                        <div className="  md:h-56 md:w-52 h-32 w-32 border  border-black ">
                          <img src={el.picture ? el.picture : one} alt="" />
                          <span className="flex align-bottom justify-center text-black text-sm  md:text-base text-center">
                            {el.name}
                          </span>
                        </div>
                      </Link>
                    ))}
              </div>
            ) : null;
          })}
        </>
      )}

      <div className="flex justify-center py-3">
        <button
          onClick={() => setMore(!more)}
          className=" flex align-middle justify-center items-center rounded-full ... bg-[#1F1F1F] py-2 px-10 text-white"
        >
          {more ? "Скрыть" : "Больше товаров"}
          <img
            className=" flex justify-center items-center align-middle"
            src={arrow}
            alt=""
          />
        </button>
      </div>
    </div>
  );
};

export default Catalog;
