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
    const home = useHome();
    const [btn, setBtn] = useState<number | undefined>(home?.catalogs?.[0]?.categories?.length)

    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(fetchHome() as any);
    }, []);

useEffect(() => {
    console.log(btn)
}, [btn])

    return (
        <div className="container mx-auto px-4 ">
            {home?.catalogs && (
                <>
                    <div className="flex flex-col md:flex-row  justify-start text-center  items-start md:items-center align-middle  py-2 ">
            <span className="  py-4 font-semibold text-black text-bold text-center text-4xl">
              Каталог
            </span>

                        <div className="flex flex-row gap-4 scroll-photo  overflow-x-auto overflow-y-clip h-10 justify-start md:justify-center xl:pl-14 w-full md:w-auto">
                            {home.catalogs.map((item, index) => (
                               
                               <button
                                    key={index}
                                    onClick={() => {
                                        setOpenTab(index);
                                        setBtn(item?.categories?.length)
                                    }}
                                    className={`${
                                        index === openTab
                                            ? "bg-black text-white "
                                            : "bg-white text-black"
                                    } flex whitespace-nowrap  align-middle justify-center items-center  rounded-full ... py-2 px-4 w-auto  text-center text-3xl md:text-base text-black border-[1px] border-black`}
                                >
                                    <img
                                        className=" flex px-2 h-3 w-3"
                                        src={item.icon ? `http://212.42.106.82/${item.icon}` : calendar}
                                        alt=""
                                    />
                                    <span className="flex justify-center items-center text-[16px] flex-nowrap w-full">
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
                                className="flex  md:flex-row justify-start flex-wrap items-center md:gap-20 gap-10 py-3"
                            >
                                {item.categories.length && item.categories.length > 4 && !more
                                    ? item.categories.slice(0, 4).map((el, i) => (
                                        <Link
                                            className=""
                                            key={i}
                                            to={
                                                item.is_holidays
                                                    ? `catalog?categoryId=${el.id}&is-holidays=true`
                                                    : `catalog?categoryId=${el.id}`
                                            }
                                        >
                                            <div className="  md:h-72 md:w-72 h-32 w-32 border  border-black">
                                                <img
                                                    src={el.picture ? el.picture : one}
                                                    alt=""
                                                    className="object-contain"
                                                />
                                                <span className="flex align-bottom justify-center text-black text-sm  md:text-base text-center">
                            {el.name}
                          </span>
                                            </div>
                                        </Link>
                                    ))
                                    : item.categories.map((el, i) => (
                                        <Link
                                            className="border-[1px]  border-black"
                                            key={i}
                                            to={
                                                item.is_holidays
                                                    ? `catalog?categoryId=${el.id}&is-holidays=true`
                                                    : `catalog?categoryId=${el.id}`
                                            }
                                        >
                                            <div className="md:h-72 md:w-72 h-40 w-36">
                                                <div>
                                                    <img
                                                        src={el.picture ? el.picture : one}
                                                        alt=""
                                                        className="object-contain"
                                                    />
                                                </div>
                                                <span
                                                    className="flex align-bottom justify-center items-end text-black text-sm  md:text-base !text-center !leading-10"
                                                >{el.name}
                                                </span>
                                            </div>
                                        </Link>
                                    ))}
                            </div>
                        ) : null;
                    })}
                </>
            )}


            {btn ? btn > 4 &&
            <div className="flex justify-center py-14 ">
                <button
                    onClick={() => setMore(!more)}
                    className=" flex align-middle justify-center items-center rounded-full ... bg-[#1F1F1F] py-2 px-16  text-white text-[20px]"
                >
                    {more ? "Скрыть" : "Больше товаров"}
                    <img
                        className=" flex justify-center items-center align-middle"
                        src={arrow}
                        alt=""
                    />
                </button>
            </div> : <></>
}
        </div>
    );
};

export default Catalog;