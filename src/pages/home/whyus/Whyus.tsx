import React from "react";
import loading from "./assets/loading.svg";
import diamond from "./assets/diamond.svg";
import deal from "./assets/deal.svg";
import apps from "./assets/apps.svg";

const Whyus = () => {
  return (
    <div className="py-5 bg-[#383838]">
      <div className=" px-2 flex md:flex-row flex-col justify-between text-white font-jost ">
        <div className="md:w-4/12 w-auto  md:flex md:justify-start flex justify-center md:pt-2 md:pl-6 ">
          <h1 className="font-bold text-4xl xl:pl-[3rem] 2xl:pl-0">Почему мы?</h1>
        </div>
        <div className=" flex justify-center items-start flex-col md:flex md:flex-wrap md:justify-between md:flex-row md:w-8/12  w-12/12 px-2 pt-3 pb-4">
          <div className="flex md:gap-4 md:w-112 justify-center items-start">
            <div className="flex justify-end items-start ">
              <img
                src={loading}
                className="h-10 w-10 flex justify-start items-start"
                alt=""
              />
            </div>
            <div className="w-10/12 mb-10 ">
              <span className="text-xl font-bold ">Мы предлагаем комплексное решение ваших бизнес-задач:</span>
              <ul className="font-light text-sm pl-4 pt-2.5">
                <li className="list-disc text-base">производство сувенирной продукции</li>
                <li className="list-disc text-base">
                  нанесение логотипа на любую поверхность
                </li>
                <li className="list-disc text-base">производство POSM</li>
                <li className="list-disc text-base">
                  изготовление полиграфической продукции
                </li>
                <li className="list-disc text-base"> производство упаковок</li>
                <li className="list-disc text-base">
                  {" "}
                  производство текстильной продукции
                </li>
              </ul>
            </div>
          </div>
          <div className="flex md:gap-4 md:w-112 justify-center items-start  ">
            <div  >
              <img
                src={diamond}
                className="md:h-8    object-center md:flex"
                alt=""
              />
            </div>
            <div className="w-10/12">
            <span className="text-xl font-bold">Европейское качество</span>
              <p className="font-light text-base pt-2.5">
                Прямой выход на производителей сувенирной продукции и
                собственное производство, позволяют нам делать самые вкусные
                цены. Наши возможности по поиску и поставке сувенирной продукции
                практически не ограничены!
              </p>
            </div>
          </div>
          <div className="md:w-112 flex md:gap-4 md:py-16  justify-center items-start ">
            <div  >
              <img
                src={apps}
                className="md:h-8    object-contain"
                alt=""
              />
            </div>
            <div className="w-10/12">
            <span className="text-xl font-bold">Богатый ассортимент</span>
              <p className="font-light text-base pt-2.5">
                У нас огромный ассортимент продукции, вы всегда можете найти
                сувенирную продукцию согласно ваших предпочтений. Вам остается
                только выбрать понравившиеся идеи!
              </p>
            </div>
          </div>
          <div className="md:w-112 flex md:gap-4 md:py-16 justify-center items-start">
            <div  >
              <img src={deal} className="md:h-8   " alt="" />
            </div>
            <div className="w-10/12">
            <span className="text-xl font-bold">Забота о клиентах</span>
              <p className="font-light text-base pt-2.5">
                Мы постоянно держим руку на пульсе рекламного мира, о всех
                новинках. Мы сразу информируем своих клиентов, чтобы дать им
                конкурентное преимущество перед другими
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Whyus;
