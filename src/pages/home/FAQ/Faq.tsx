import React from "react";
import "./faq.css";
import faqImage from "./assets/zhyldyz2.png";
import calling from "./assets/Calling.png";
import { useHome } from "../../../store/varia/hooks";

const Faq = () => {
  const home = useHome();

  return (
    <div
      id="faq"
      className="flex md:justify-between justify-center container mx-auto px-4"
    >
      <div className="flex flex-col lg:w-10/12 w-full">
        <span className="flex justify-center items-center md:justify-start py-2 md:text-3xl text-2xl text-[#383838] font-bold">
          FAQ
        </span>

        <div className="accordion flex flex-col justify-center  mb-2">
          {home && home.faq.length && (
            <div className="width">
              {home.faq.map((item, i) => (
                <div key={i}>
                  <input
                    type="checkbox"
                    name="panel"
                    id={`panel-${i}`}
                    className="hidden"
                  />
                  <label
                    htmlFor={`panel-${i}`}
                    className="label-faq relative block text-black font-medium py-4 px-1 border-b border-black"
                  >
                    {item.question}
                  </label>
                  <div className="accordion__content overflow-hidden bg-grey-lighter ">
                    <p className="flex accordion__body  justify-start items-start  py-3 ">
                      {item.answer}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      <div className="hidden md:flex flex-row relative lg:flex lg:w-[30%] 2xl:h-[600px] xl:h-[33rem] justify-end">
        <div className="bg-[#424242] h-[99%] w-[95%]">
          <div className="flex  flex-col ">
          <label
            htmlFor=""
            className="text-white absolute right-[0] w-[95%] z-50 flex justify-center items-center text-center text-lg py-2 px-2 w-72"
          >
            Если у Вас остались вопросы, свяжитесь бесплатно с нашим менеджером
          </label>

          <img
            className="2xl:h-[33rem] xl:h-[28rem] absolute right-0 bottom-0  block object-contain "
            src={faqImage}
            alt="image"
          />
        </div>
        <div className="flex justify-center items-center ">
          <label
            htmlFor=""
            className="absolute flex 2xl:top-[32rem] xl:top-[28rem] lg:right-[8rem] right-[5rem] text-white text-lg	 font-semibold"
          >
            СВЯЗАТЬСЯ
          </label>

          <a href="tel:+1234567890">
            <img
              src={calling}
              className="absolute flex 2xl:top-[30rem] xl:top-[26rem] justify-end items-end top-80 right-7 h-24 w-24"
              alt="image"
            />
          </a>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
