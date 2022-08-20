import React, { useEffect } from "react";
// import heart from "./assets/love.svg";
// import calendar from "./assets/calendar.svg";
// import client from "./assets/client.png";
// import bag from "./assets/bag.png";

import one from "./assets/one.png";
// import two from "./assets/two.png";
// import three from "./assets/three.png";
// import four from "./assets/four.png";
// import five from "./assets/five.png";
// import six from "./assets/six.png";
// import seven from "./assets/seven.png";
// import eight from "./assets/eight.png";
import { useAppDispatch } from "../../store";
import { usePortfolio } from "../../store/varia/hooks";
import { fetchPortfolio } from "../../store/varia";

const Portfolio = () => {
  const dispatch = useAppDispatch();
  const portfolio = usePortfolio();
  useEffect(() => {
    dispatch(fetchPortfolio() as any);
  }, []);

  return (
    <div className="mx-auto md:px-9 px-6   w-auto py-5">
      <div>
        <h1>Портфолио</h1>
      </div>
      <div className="flex flex-row overflow-x-auto ...  align-middle items-center py-5 gap-4">
        {portfolio &&
          portfolio.categories.map((item: any, i: number) => (
            <div className="flex gap-3">
              <button className=" border h-10 w-28 !border-[black]  rounded-full ... px-2  py-1 flex justify-start items-center gap-2">
                {/* <img src={one} alt="" /> */}
                <span>{item.name}</span>
              </button>
            </div>
          ))}
      </div>
      <div className="flex flex-wrap md:columns-4 md:gap-8 md:justify-evenly justify-center items-center gap-4 columns-2 flex-row">
        {portfolio?.data.length > 0 &&
          portfolio?.data.map((item: any, i: number) => (
            <div
              key={i}
              className="md:h-56 md:w-56 h-36 w-36 border border-[#1F1F1F] "
            >
              <img src={one} alt="" />
              <span className="flex align-bottom justify-center text-black text-center">
                {item.description}
              </span>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Portfolio;
