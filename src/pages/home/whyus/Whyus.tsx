import React from "react";
import loading from "./assets/loading.svg";
import diamond from "./assets/diamond.svg";
import deal from "./assets/deal.svg";
import apps from "./assets/apps.svg";

const Whyus = () => {
  return (
    <div className="py-5">
      <div className="bg-[#383838] flex justify-between text-white font-jost ">
        <div className="w-3/12 flex justify-start pt-5 pl-6 ">
          <h1 className="font-bold">Почему мы?</h1>
        </div>
        <div className="flex flex-wrap justify-around flex-row w-9/12 pt-5 pb-4">
          <div className="flex gap-4 w-96">
            <div>
              <img src={loading} className="h-10 w-10" alt="" />
            </div>
            <div>
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
          <div className="flex gap-4 w-96 ">
            <div>
              <img
                src={diamond}
                className="h-8 w-24 object-center flex"
                alt=""
              />
            </div>
            <div>
              <p className="font-light text-sm">
                Прямой выход на производителей сувенирной продукции и
                собственное производство, позволяют нам делать самые вкусные
                цены. Наши возможности по поиску и поставке сувенирной продукции
                практически не ограничены!
              </p>
            </div>
          </div>
          <div className="w-96 flex gap-4 py-16">
            <div>
              <img src={apps} className="h-8 w-24 object-contain" alt="" />
            </div>
            <div>
              <p className="font-light text-sm">
                У нас огромный ассортимент продукции, вы всегда можете найти
                сувенирную продукцию согласно ваших предпочтений. Вам остается
                только выбрать понравившиеся идеи!
              </p>
            </div>
          </div>
          <div className="w-96 flex gap-4 py-16">
            <div>
              <img src={deal} className="h-8 w-24" alt="" />
            </div>
            <div>
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
