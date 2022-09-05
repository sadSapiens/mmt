import React from "react";
import loading from "./assets/loading.svg";
import diamond from "./assets/diamond.svg";
import deal from "./assets/deal.svg";
import apps from "./assets/apps.svg";

const Whyus = () => {
  return (
    <div className="py-5">
      <div className="bg-[#383838] px-2 flex md:flex-row flex-col justify-between text-white font-jost ">
        <div className="md:w-4/12 w-auto pt-4 md:flex md:justify-start flex justify-center md:pt-5 md:pl-6 ">
          <h1 className="font-bold">Почему мы?</h1>
        </div>
        <div className=" flex justify-center items-center flex-col md:flex md:flex-wrap md:justify-around md:flex-row md:w-8/12  w-12/12 px-2 pt-5 pb-4">
          <div className="flex md:gap-4 md:w-96 justify-center items-start">
            <div className="flex justify-start items-start w-2/12">
              <img
                src={loading}
                className="h-10 w-10 flex justify-start items-start"
                alt=""
              />
            </div>
            <div className="w-10/12">
              <span>Мы предлагаем комплексное решение ваших бизнес-задач:</span>
              <ul className="font-light text-sm pl-4">
                <li className="list-disc">производство сувенирной продукции</li>
                <li className="list-disc">
                  нанесение логотипа на любую поверхность
                </li>
                <li className="list-disc">производство POSM</li>
                <li className="list-disc">
                  изготовление полиграфической продукции
                </li>
                <li className="list-disc"> производство упаковок</li>
                <li className="list-disc">
                  {" "}
                  производство текстильной продукции
                </li>
              </ul>
            </div>
          </div>
          <div className="flex md:gap-4 md:w-96 justify-center items-start py-5">
            <div className="w-2/12">
              <img
                src={diamond}
                className="md:h-8 md:w-24 object-center md:flex"
                alt=""
              />
            </div>
            <div className="w-10/12">
              <p className="font-light text-sm">
                Прямой выход на производителей сувенирной продукции и
                собственное производство, позволяют нам делать самые вкусные
                цены. Наши возможности по поиску и поставке сувенирной продукции
                практически не ограничены!
              </p>
            </div>
          </div>
          <div className="md:w-96 flex md:gap-4 md:py-16 justify-center items-start py-5">
            <div className="w-2/12">
              <img
                src={apps}
                className="md:h-8 md:w-24 object-contain"
                alt=""
              />
            </div>
            <div className="w-10/12">
              <p className="font-light text-sm">
                У нас огромный ассортимент продукции, вы всегда можете найти
                сувенирную продукцию согласно ваших предпочтений. Вам остается
                только выбрать понравившиеся идеи!
              </p>
            </div>
          </div>
          <div className="md:w-96 flex md:gap-4 md:py-16 justify-center items-start py-5">
            <div className="w-2/12">
              <img src={deal} className="md:h-8 md:w-24" alt="" />
            </div>
            <div className="w-10/12">
              <p className="font-light text-sm">
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
