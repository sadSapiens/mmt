import React from "react";
import "./faq.css";
import faqImage from "./assets/zhyldyz.svg";
import calling from "./assets/Calling.png";
import { useHome } from "../../../store/varia/hooks";

const Faq = () => {
  const home = useHome();

  return (
    <div className="flex md:justify-between justify-center container mx-auto px-4">
      <div className="flex flex-col w-10/12">
        <span className="flex justify-center items-center md:justify-start py-2 text-3xl text-[#383838] font-bold">
          FAQ
        </span>

        <div className="accordion flex flex-col justify-center  ">
          {home && home.faq.length && (
            <div className="w-1/8">
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
                    className=" label-faq relative block text-black font-medium p-4 shadow border-b border-black"
                  >
                    {item.question}
                  </label>
                  <div className="accordion__content overflow-hidden bg-grey-lighter ">
                    <p className="flex accordion__body  justify-center items-center px-10 py-3">
                      {item.answer}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      <div className="hidden md:flex flex-row relative lg:flex lg:w-3/12">
        <div className="flex  flex-col ">
          <label
            htmlFor=""
            className="text-white absolute z-50 flex justify-center items-center text-center text-sm py-2 px-2"
          >
            Если у Вас остались вопросы, свяжитесь бесплатно с нашим менеджером
          </label>

          <img
            className="h-[25rem]  relative  block object-contain bg-[#424242]"
            src={faqImage}
            alt=""
          />
        </div>
        <label
          htmlFor=""
          className="absolute   flex top-[22rem] right-[6rem] text-white font-jost font-semibold"
        >
          СВЯЗАТЬСЯ
        </label>

        <a href="tel:+1234567890">
          <img
            src={calling}
            className="absolute flex  justify-end items-end top-80 right-7 h-16 w-16"
            alt=""
          />
        </a>
      </div>
    </div>
  );
};

export default Faq;
