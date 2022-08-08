import React from "react";
// import CatalogChangeDetail from "../catalog-change-detail/CatalogChangeDetail";
import penOne from "../assets/penOne.png";
import penTwo from "../assets/penTwo.png";
import penThree from "../assets/penThree.png";
import penBig from "../assets/penBig.png";
import arrow from "../assets/arrowLink.png";
import detailtrash from "../assets/detailtrash.png";
import shopbag from "../assets/shopbag.png";

import colich from "../assets/colich.png";

import "./catalogStyle.css";

import { Link } from "react-router-dom";

const CatalogDetailsOasis = () => {
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
            <Link to="/catalog" className="text-gray-900 hover:text-black">
              Каталог
            </Link>
          </li>
          <li>
            {/* <span className="text-gray-500 mx-2"> |</span> */}
            <img src={arrow} alt="" />
          </li>
          <li>
            <a href="/" className="text-black">
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
          <div className="flex justify-center items-center w-9/12 py-5 gap-4">
            <img src={penBig} className="h-12 w-12" alt="" />
            <img src={penBig} className="h-12 w-12 opacity-25" alt="" />
            <img src={penBig} className="h-12 w-12 opacity-25" alt="" />
          </div>
          <div className="font-jost">
            <h2 className="font-semibold py-4">Характеристики</h2>

            {/* <div className="container"> */}
            <div className="row font-jost text-sm">
              <div className="col-6 catalog-items__characteristics flex flex-col gap-4">
                <p>Производство</p>
                <p>Вес</p>
                <p>Вид нанесения</p>
                <p>Цвет товара</p>
                <p>Материал товара</p>
                <p>Размер товара</p>
              </div>
              <div className="col-6 flex flex-col gap-4">
                <p>Товар зарубежного производства</p>
                <p>16 г.</p>
                <p>Термопечать</p>
                <p>Черный</p>
                <p>АБС пластик</p>
                <p>d 2,4 x 2,2 x 5,7 см</p>
              </div>
            </div>
            {/* </div> */}
          </div>
          <div className="font-jost">
            <h2 className="font-semibold py-4">Упаковка</h2>

            {/* <div className="container"> */}
            <div className="row font-jost text-sm">
              <div className="col-6 catalog-items__characteristics flex flex-col gap-4">
                <p>Вид упаковки</p>
                <p>Вес с упаковкой</p>
                <p>Количество в упаковке</p>
                <p>Объем единицы</p>
              </div>
              <div className="col-6 flex flex-col gap-4">
                <p>Транспортная</p>
                <p>8000 г.</p>
                <p>500 шт.</p>
                <p>0,23 м</p>
              </div>
            </div>
            {/* </div> */}
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
          {/*  */}

          <div className="flex flex-col">
            <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                <div className="overflow-hidden">
                  <table className="min-w-full">
                    <thead className="">
                      <tr className="flex gap-24">
                        <th
                          scope="col"
                          className="text-sm font-medium text-gray-900 px-6 py-4 text-left 
                          "
                        >
                          Размер
                        </th>
                        <th
                          scope="col"
                          className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                        >
                          На складе
                        </th>
                        <th
                          scope="col"
                          className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                        >
                          Количество
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b flex">
                        <td className="mx-2 w-44   px-2 py-2 border-b-2  border-b-black  ...">
                          XS
                        </td>
                        <td className=" mx-2 w-44   px-2 py-2 border-b-2  border-b-black  ...">
                          Mark
                        </td>
                        <td className="flex mx-2 w-44   px-2 py-2 border border-5">
                          <input
                            type="text"
                            placeholder="1"
                            className="border-b-2 w-36 border-5  border-b-black  ..."
                          />
                          <img src={colich} alt="" />
                        </td>
                      </tr>
                      <tr className="bg-white border-b  flex ">
                        <td className=" mx-2 w-44   px-2 py-2 border-b-2  border-b-black  ...">
                          S
                        </td>
                        <td className=" mx-2 w-44   px-2 py-2 border-b-2  border-b-black  ...">
                          Jacob
                        </td>
                        <td className=" flex mx-2 w-44   px-2 py-2 border border-5">
                          <input
                            type="text"
                            placeholder="1"
                            className="border-b-2 w-36 border-5  border-b-black  ..."
                          />
                          <img src={colich} alt="" />
                        </td>
                      </tr>
                      <tr className="bg-white border-b  flex ">
                        <td className="mx-2 w-44   px-2 py-2 border-b-2  border-b-black  ...">
                          M
                        </td>
                        <td className=" mx-2 w-44   px-2 py-2 border-b-2  border-b-black  ...">
                          Larry
                        </td>
                        <td className=" flex mx-2 w-44   px-2 py-2 border border-5">
                          <input
                            type="text"
                            placeholder="1"
                            className="border-b-2 w-36 border-5  border-b-black  ..."
                          />
                          <img src={colich} alt="" />
                        </td>
                      </tr>
                      <tr className="bg-white  flex  ">
                        <td className="   mx-2 w-44   px-2 py-2 border-b-2  border-b-black  ... ">
                          L
                        </td>
                        <td className=" mx-2 w-44   px-2 py-2 border-b-2  border-b-black  ...">
                          Larry
                        </td>
                        <td className=" flex mx-2 w-44   px-2 py-2 border border-5">
                          <input
                            type="text"
                            placeholder="1"
                            className="border-b-2 w-36 border-5  border-b-black  ..."
                          />
                          <img src={colich} alt="" />
                        </td>
                      </tr>
                      <tr className="bg-white border-b  max-w-full flex ">
                        <td className=" mx-2 w-44   px-2 py-2 border-b-2  border-b-black  ... ">
                          XL
                        </td>
                        <td className=" mx-2  w-44 text-sm border-b-2 border-b-black ...">
                          Larry
                        </td>
                        <td className=" flex mx-2 w-44   px-2 py-2 border border-5">
                          <input
                            type="text"
                            placeholder="1"
                            className="border-b-2 w-36 border-5  border-b-black  ..."
                          />
                          <img src={colich} alt="" />
                        </td>
                      </tr>
                      <tr className="bg-white border-b  flex ">
                        <td className="mx-2 w-44   px-2 py-2 border-b-2  border-b-black  ...">
                          XXL
                        </td>
                        <td className=" mx-2 w-44   px-2 py-2 border-b-2  border-b-black  ...">
                          Larry
                        </td>
                        <td className="flex mx-2 w-44   px-2 py-2 border border-5">
                          <input
                            type="text"
                            placeholder="1"
                            className="border-b-2 w-36 border-5  border-b-black  ..."
                          />
                          <img src={colich} alt="" />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <div className="flex py-4 items-center justify-around px-3">
                    <div className="flex flex-col">
                      <span>Цена:</span>
                      <p> 650 C_</p>
                    </div>
                    <div className="flex gap-3">
                      <button className="rounded-full ... bg-[#767676] px-2 w-32 text-white">
                        Создать макет
                      </button>
                      <button className="flex rounded-full ... bg-[#1F1F1F] px-2 w-32 text-white">
                        <img src={shopbag} alt="" />В корзину
                      </button>
                    </div>
                    <div className="flex flex-col">
                      <span>8888</span>
                      <hr className="border-b-2 border-b-black ..." />
                      <span>Итого</span>
                    </div>
                  </div>

                  <div className="flex py-10">
                    <p>
                      Компания MMT оставляет за собой право вносить изменения в
                      характеристики товара и его упаковку без предварительного
                      уведомления.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*  */}
          {/* <CatalogChangeDetail /> */}
        </div>
      </div>
      <div className="flex gap-3 ">
        <div className="columns-5"></div>
        <div className="columns-5"></div>
        <div className="columns-2"></div>
      </div>
      <div className="flex"></div>
      {/* <div>
        <CatalogTabs />
      </div> */}
    </div>
  );
};

export default CatalogDetailsOasis;
