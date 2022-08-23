import React, { useEffect } from "react";
import "./faq.css";
import faqImage from "./assets/faq-image.png";
import calling from "./assets/Calling.png";
import { fetchHome } from "../../../store/varia";
import { useHome } from "../../../store/varia/hooks";
import { useAppDispatch } from "../../../store";

const Faq = () => {
  const dispatch = useAppDispatch();
  const home = useHome();
  useEffect(() => {
    dispatch(fetchHome() as any);
  }, []);

  return (
    <div className="flex justify-between container mx-auto px-4">
      <div className="flex flex-col">
        <span className="flex justify-center items-center md:justify-start py-2 text-3xl text-[#383838] font-bold">
          FAQ
        </span>

        <div className="accordion flex flex-col  justify-center w-[59rem] ">
          {home && home.faq.length && (
            <div className="w-1/8">
              {home.faq.map((item, i) => (
                <>
                  <input
                    key={i}
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
                    {/* <h2 className="accordion__header pt-4 pl-4">Header</h2> */}
                    {/* <p className="accordion__body p-4" id="panel1">
                        Вы можете оформить на сайте заказ суммой не менее 5000
                        рублей. В сезон, с октября по декабрь, минимальная сумма
                        заказа увеличивается.
                      </p> */}
                    <p className="flex accordion__body  justify-center items-center px-10 py-3">
                      {item.answer}
                    </p>

                    {/* <p className="py-2">
                        Если вы приобретаете продукцию без нанесения логотипов,
                        тираж для каждого выбранного товара в рамках этой
                        минимальной суммы может быть любым.
                      </p>
                      <p>
                        Для некоторых товаров, поставляемых только упаковками,
                        существует ограничение по минимальной партии. Для
                        товаров с печатью приняты технологические ограничения по
                        минимальному тиражу. Информация о таких ограничениях
                        появляется в подсказках сайта при оформлении заказа.
                      </p> */}
                  </div>
                </>
              ))}
            </div>
          )}
        </div>
      </div>
      <div className="hidden md:flex flex-row basis-1/2 relative">
        <div className="flex  ">
          <img
            className="h-[30rem] w-auto block object-contain"
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

        <img
          src={calling}
          className="absolute flex  justify-end items-end top-80 right-7 h-16 w-16"
          alt=""
        />
      </div>
    </div>
  );
};

export default Faq;
