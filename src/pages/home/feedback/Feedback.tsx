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
  useEffect(() => {
    dispatch(fetchHome() as any);
  }, []);
  return (
    <div className="container mx-auto px-4">
      <div className="flex md:flex-auto md:justify-start justify-center">
        <span className="text-3xl text-[#383838] font-bold	flex py-4">
          Отзывы
        </span>
      </div>

      <div className="flex flex-row md:overflow-auto overflow-x-auto overflow-y-clip h-auto items-start w-full">
        {home && home.reviews.length && (
          <div className=" flex flex-row md:overflow-auto overflow-x-auto overflow-y-clip h-auto  w-full  items-start   justify-start align-middle ">
            {home.reviews.map((item) => (
              <>
                <div className="flex flex-col overflow-y-clip px-4 w-full">
                  <img className="rounded-full" src={item.picture} alt="" />
                  <span className=" flex  text-center">
                    {item.name} <br /> {item.position}
                  </span>
                  <p className="font-light	">{item.review}</p>
                </div>
              </>
            ))}
            <></>
          </div>
        )}
      </div>
    </div>
  );
};

export default Feedback;
