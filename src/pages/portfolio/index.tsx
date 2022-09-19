import React, {useEffect, useState} from "react";

import one from "./assets/one.png";

import {useAppDispatch} from "../../store";
import {usePortfolio} from "../../store/varia/hooks";
import {fetchPortfolio} from "../../store/varia";

const Portfolio = () => {
    const [openTab, setOpenTab] = useState(0);

    const dispatch = useAppDispatch();
    const portfolio = usePortfolio();
    useEffect(() => {
        dispatch(fetchPortfolio() as any);
    }, []);

    return (
        <div className="mx-auto md:px-9 px-6   w-auto py-5">
            {portfolio && (
                <>
                    <div>
                        <h1>Портфолио</h1>
                    </div>
                    <div className="flex flex-wrap overflow-x-auto ...  align-middle items-center py-5 gap-4">
                        <div className="flex gap-3">
                            <button
                                onClick={() => {
                                    setOpenTab(0);
                                }}
                                className={`${
                                    0 === openTab ? "bg-black text-white " : "bg-white text-black"
                                } flex   align-middle justify-center items-center  rounded-full ... py-1 px-5 w-auto  text-center text-xs md:text-base text-black border-[1px] border-black  `}
                            >
                                {/* <img src={one} alt="" /> */}
                                <span>Все</span>
                            </button>
                            {portfolio &&
                                portfolio.categories.map((item: any, i: number) => (
                                    <button
                                        key={i}
                                        onClick={() => {
                                            setOpenTab(i + 1);
                                        }}
                                        className={`${
                                            i + 1 === openTab
                                                ? "bg-black text-white "
                                                : "bg-white text-black"
                                        } flex   align-middle justify-center items-center  rounded-full ... py-1 px-5 w-auto  text-center text-xs md:text-base text-black border-[1px] border-black  `}
                                    >
                                        {/* <img src={one} alt="" /> */}
                                        <span>{item.name}</span>
                                    </button>
                                ))}
                        </div>
                    </div>

                    <div className=" flex flex-wrap justify-between items-center gap-4">
                        {portfolio?.data.map((item: any, index: number) => {
                            return openTab
                                ? index + 1 === openTab && (
                                <div
                                    key={index}
                                    className="flex flex-wrap md:columns-4 md:gap-4 md:justify-evenly justify-center items-center gap-4 columns-2 flex-row"
                                >
                                    <div className="md:h72 md:w-72 h-36 w-36 border border-[#1F1F1F] mb-32 ">
                                        <img src={one} alt=""/>
                                        <span className="flex align-bottom justify-center text-black text-center">
                          {item.description}
                        </span>
                                    </div>
                                </div>
                            )
                                : portfolio.data.map((item: any, index: number) => (
                                    <div
                                        key={index}
                                        className="flex flex-wrap md:columns-4 md:gap-8 md:justify-evenly justify-center items-center gap-4 columns-2 flex-row mb-4"
                                    >
                                        <div className="md:h-72 md:w-72 h-36 w-36 border border-[#1F1F1F] ">
                                            <img src={`http://212.42.106.82/${item.photo}`} alt="" className="w-full h-[80%] object-cover" style={{backgroundPosition: "top"}}/>
                                            <span className="flex align-bottom justify-center text-black text-center">
                          {item.description}
                        </span>
                                        </div>
                                    </div>
                                ));
                        })}
                    </div>
                </>
            )}
        </div>
    );
};

export default Portfolio;
