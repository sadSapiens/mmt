import React, { useEffect } from "react";
import valentina from "./feedback-images/Valentina.png";
import alexey from "./feedback-images/Alexey.png";
import aiday from "./feedback-images/Aiday.png";
import temirlan from "./feedback-images/Teemirlan.png";
import { useAppDispatch } from "../../../store";
import { useHome } from "../../../store/varia/hooks";
import { fetchHome } from "../../../store/varia";

const Feedback = () => {
  const dispatch = useAppDispatch();
  const home = useHome();
  console.log("home ==>", home);
  
  return (
    <div className="container mx-auto px-4">
      <div className="flex md:flex-auto md:justify-start justify-center">
        <span className="md:text-4xl text-2xl text-[#383838] font-bold	flex py-4">
          Отзывы
        </span>
      </div>

      <div className="flex flex-row md:overflow-auto overflow-x-auto overflow-y-clip h-auto items-start w-full">
        {home && home.reviews.length && (
          <div className=" flex flex-row md:overflow-auto overflow-x-auto overflow-y-clip h-auto  w-full  items-start   justify-start align-middle ">
            {home.reviews.map((item, i) => (
              <div key={i} className="mx-[15px] md:mx-[40px]">
                <div className={i > 0 ? "flex flex-col justify-center w-[210px] items-center overflow-y-clip" : 'flex w-[210px] flex-col justify-center items-center overflow-y-clip pr-4 w-full ml-0'}>
                  <img
                    className="rounded-full  w-20 h-20 pb-1.5 flex justify-center items-center place-items-center"
                    src={item ? `http://212.42.106.82/${item?.picture}` : ""}
                    alt=""
                  />
                  <span className=" flex  text-center font-bold text-[14px] md:text-[17px]">
                    {item.name} <br /> {item.position} 
                  </span>
                  <p className="font-light text-center	text-[14px] md:text-[14px] mt-2">{item.review}</p>
                </div>
              </div>
            ))}
            <></>
          </div>
        )}
      </div>
    </div>
  );
};

export default Feedback;
