import React from "react";
// import CatalogChangeDetail from "../catalog-change-detail/CatalogChangeDetail";
import CatalogTabs from "../catalog-tools/CatalogTabs";
import penOne from "../assets/penOne.png";
import penTwo from "../assets/penTwo.png";
import penThree from "../assets/penThree.png";
import penBig from "../assets/penBig.png";
import arrow from "../assets/arrowLink.png";
import detailtrash from "../assets/detailtrash.png";

import { Link } from "react-router-dom";

const CatalogDetailsHiidea = () => {
  return (
    <div
      className="mx-auto
    px-16
    w-auto
    py-5"
    >
      <div></div>
      <div className="rounded-md w-full font-jost">
        <ol className="flex  ">
          <li className="text-black font-jost">
            <Link to="/catalog">
              <a href="#" className="text-gray-900 hover:text-black">
                Каталог
              </a>
            </Link>
          </li>
          <li>
            {/* <span className="text-gray-500 mx-2"> |</span> */}
            <img src={arrow} alt="" />
          </li>
          <li>
            <a href="#" className="text-black">
              Категории
            </a>
          </li>
          <li>
            {/* <span className="text-gray-500 mx-2"> */}
            <img src={arrow} alt="" />
            {/* </span> */}
          </li>
          <li className="text-gray-500">Ручки</li>
        </ol>
      </div>
      <div className="flex justify-between py-5">
        <div className="flex flex-col w-1/12 gap-5">
          <img src={penOne} alt="" className="w-16 h-16" />
          <img src={penTwo} alt="" className="w-16 h-16" />
          <img src={penThree} alt="" className="w-16 h-16" />
        </div>
        <div className="w-5/12 gap-4">
          {" "}
          <img className="w-96 h-96" src={penBig} alt="" />
          <div className="flex justify-center py-5 gap-4">
            <img src={penBig} className="h-12 w-12" alt="" />
            <img src={penBig} className="h-12 w-12 opacity-25" alt="" />
            <img src={penBig} className="h-12 w-12 opacity-25" alt="" />
          </div>
          <div>
            <h2>Характеристики</h2>
            <div></div>
          </div>
        </div>
        <div className="flex w-6/12 flex-col gap-4">
          <span className="text-2xl font-medium font-jost text-black">
            Ручка пластиковая шариковая «Наварра»
          </span>
          <div className="flex justify-between">
            <h4>Код товара: 1050</h4>
            <h4>На складе: 8888</h4>
          </div>
          <div>
            <p>
              Эффектная шариковая ручка с поворотным механизмом. Смотрится очень
              стильно, корпус сделан из пластика, а отделка металлическая.
              Богатый выбор насыщенных цветов. Отлично подойдет для создания
              имиджа компании.
            </p>
          </div>
          <div className="flex  items-center">
            <span>Цвета:</span>
            <div className="flex justify-between flex-start gap-4 px-6">
              <div className="bg-[#14153C] h-2 w-2 rounded-full ..."></div>
              <div className="bg-[#14153C] h-2 w-2 rounded-full ..."></div>
              <div className="bg-[#14153C] h-2 w-2 rounded-full ..."></div>
              <div className="bg-[#14153C] h-2 w-2 rounded-full ..."></div>
              <div className="bg-[#14153C] h-2 w-2 rounded-full ..."></div>
              <div className="bg-[#14153C] h-2 w-2 rounded-full ..."></div>
            </div>
          </div>
          <div className="flex justify-start gap-4 items-center">
            <div>
              <button className="rounded-full ... border  border-black px-5 py-2 font-jost font-medium">
                Трафаретная печать
              </button>
            </div>
            <div>
              {" "}
              <img src={detailtrash} alt="" />
            </div>
          </div>

          <div className="flex justify-between flex-wrap gap-2">
            <div>
              <label htmlFor="input2">Компонент</label>
              <input
                type="text"
                name=""
                id=""
                placeholder="inpiut1"
                className="border border-black w-52"
              />
            </div>
            <div>
              <label htmlFor="input2">Место</label>
              <input
                type="text"
                name=""
                id=""
                placeholder="inpiut1"
                className="border border-black w-52"
              />
            </div>
            <div>
              <label htmlFor="input2">Тип нанесения</label>
              <input
                type="text"
                name=""
                id=""
                placeholder="inpiut1"
                className="border border-black w-52"
              />
            </div>
            <div>
              <label htmlFor="input2">Цветность</label>
              <input
                type="text"
                name=""
                id=""
                placeholder="inpiut1"
                className="border border-black w-52"
              />
            </div>
            <div className="flex justify-between w-[12rem]">
              <div>
                <label htmlFor="input2">input</label>
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="inpiut1"
                  className="border border-black w-10"
                />
              </div>
              <div>
                <label htmlFor="input2">input</label>
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="inpiut1"
                  className="border border-black w-10"
                />
              </div>
            </div>
            <div className="flex justify-center items-center">
              <button className="font-jost text-[#06AF5E]  border border-black rounded-full ... px-3">
                Применить
              </button>
            </div>
          </div>
          {/* <CatalogChangeDetail /> */}
        </div>
      </div>
      <div className="flex gap-3 ">
        <div className="columns-5"></div>
        <div className="columns-5"></div>
        <div className="columns-2"></div>
      </div>
      <div>
        <CatalogTabs />
      </div>
    </div>
  );
};

export default CatalogDetailsHiidea;
