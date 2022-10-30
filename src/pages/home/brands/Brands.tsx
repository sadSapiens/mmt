import React, { useEffect } from "react";
import hiidea from "./assets/hiidea.png";
import ekston from "./assets/ekston.png";
import oasis from "./assets/oasis.png";
import arrow from "./assets/arrow.svg";
import { useAppDispatch } from "../../../store";
import { useHome } from "../../../store/varia/hooks";
import { fetchHome } from "../../../store/varia";

const Brands = () => {
  const dispatch = useAppDispatch();
  const home = useHome();

  console.log(home?.brands)

  return (
    <div className="container mx-auto px-4 my-5">
      <div>
        <span className="font-semibold  text-black md:mr-8 md:text-4xl text-2xl">
          Бренды
        </span>
      </div>

      {home?.brands.length ? (
        <div className="flex my-4  flex-col md:flex-row justify-between items-center">
          {home.brands.map((item: any, i) => (
            <div key={i} className="flex flex-col items-center  py-2">
              <div>
                
                {item?.logotype ? (
                  <img src={item?.logotype} className="w-[388px] h-[125px]" alt="" />
                ) : (
                  <img src={oasis} alt="" />
                )}
              </div>
              <h6 className=" flex justify-center items-center">
                {item.name}
              </h6>
            </div>
          ))}
        </div>
      ) : (
        <p>Ничего нету ( </p>
      )}
     
    </div>
  );
};

export default Brands;
