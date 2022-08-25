import React, { useEffect } from "react";
// import CatalogChangeDetail from "../catalog-change-detail/CatalogChangeDetail";
import penOne from "../assets/penOne.png";
import penTwo from "../assets/penTwo.png";
import penThree from "../assets/penThree.png";
import penBig from "../assets/penBig.png";
import arrow from "../assets/arrowLink.png";
import detailtrash from "../assets/detailtrash.png";
import shopbag from "../assets/shopbag.png";

import colich from "../assets/colich.png";

import "../catalogDetailsOasis/catalogStyle.css";

import { Link, useParams } from "react-router-dom";
import { useAppDispatch } from "../../../store";
import { useSelectedCatalogProduct } from "../../../store/catalog/hooks";
import { fetchSlectedCatalogProduct } from "../../../store/catalog";

const CatalogDetailsHiidea = () => {
  const dispatch = useAppDispatch();
  const selectedProduct = useSelectedCatalogProduct();
  const params = useParams();
  useEffect(() => {
    if (!params.id) return;
    dispatch(fetchSlectedCatalogProduct(params.id) as any);
  }, []);
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
            <Link
              to="/catalog"
              className="text-gray-900 no-underline hover:text-red-600"
            >
              Каталог
            </Link>
          </li>
          <li>
            <img src={arrow} alt="" />
          </li>
          <li className="text-black">Категории</li>
          <li>
            <img src={arrow} alt="" />
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
          </div>
          <div className="font-jost">
            <h2 className="font-semibold py-4">Упаковка</h2>

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
                +Добавить нанесение
              </button>
            </div>
            <div>
              {" "}
              <img src={detailtrash} alt="" />
            </div>
          </div>
          <div className="flex justify-between flex-wrap gap-2">
            <div className="w-[100%]">
              <label htmlFor="input2">Место</label>
              {/*  */}

              <form className="w-full p-2">
                <fieldset>
                  <div className="relative border-b-2 border-black text-gray-800 bg-white ">
                    <label htmlFor="frm-whatever" className="sr-only">
                      My field
                    </label>
                    <select
                      className="appearance-none w-full py-1 px-2 bg-white"
                      name="whatever"
                      id="frm-whatever"
                    >
                      <option value="">Please choose&hellip;</option>
                      <option value="1">Item 1</option>
                      <option value="2">Item 2</option>
                      <option value="3">Item 3</option>
                    </select>
                    <div className="pointer-events-none absolute right-0 top-0 bottom-0 flex items-center px-2 text-gray-700 border-l">
                      <svg
                        className="h-4 w-4"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                      </svg>
                    </div>
                  </div>
                </fieldset>
              </form>

              {/*  */}
            </div>

            <div className="flex justify-between w-full">
              <div className="w-6/12">
                <form className="w-full p-2">
                  <label htmlFor="input2">Тип нанесения</label>
                  <fieldset>
                    <div className="relative border-b-2 border-black  text-gray-800 bg-white ">
                      <label htmlFor="frm-whatever" className="sr-only">
                        My field
                      </label>
                      <select
                        className="appearance-none w-full py-1 px-2 bg-white"
                        name="whatever"
                        id="frm-whatever"
                      >
                        <option value="">Please choose&hellip;</option>
                        <option value="1">Item 1</option>
                        <option value="2">Item 2</option>
                        <option value="3">Item 3</option>
                      </select>
                      <div className="pointer-events-none absolute right-0 top-0 bottom-0 flex items-center px-2 text-gray-700 border-l">
                        <svg
                          className="h-4 w-4"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                        </svg>
                      </div>
                    </div>
                  </fieldset>
                </form>
              </div>

              {/*  */}
              <div className="w-6/12">
                <form className="w-full p-2">
                  <label htmlFor="input2">Цветность</label>
                  <fieldset>
                    <div className="relative border-b-2 border-black text-gray-800 bg-white ">
                      <label htmlFor="frm-whatever" className="sr-only">
                        My field
                      </label>
                      <select
                        className="appearance-none w-full py-1 px-2 bg-white"
                        name="whatever"
                        id="frm-whatever"
                      >
                        <option value="">Please choose&hellip;</option>
                        <option value="1">Item 1</option>
                        <option value="2">Item 2</option>
                        <option value="3">Item 3</option>
                      </select>
                      <div className="pointer-events-none absolute right-0 top-0 bottom-0 flex items-center px-2 text-gray-700 border-l">
                        <svg
                          className="h-4 w-4"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                        </svg>
                      </div>
                    </div>
                  </fieldset>
                </form>
              </div>
            </div>

            <div className="flex justify-between w-full">
              <div className="flex  w-5/12 justify-between">
                <div>
                  <label htmlFor="input2">Ширина</label>
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder="1"
                    className=" border-b-2 border-black w-20"
                  />
                </div>
                <div>
                  <label htmlFor="input2">Высота</label>
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder="1"
                    className=" border-b-2 border-black w-20"
                  />
                </div>
              </div>
              <div className="flex justify-center items-center py-4 w-7/12">
                <button className="font-jost text-[#06AF5E]  border !border-black rounded-full ... px-5 py-2">
                  Применить
                </button>
              </div>
            </div>
          </div>
          {/*  */}

          <div className="flex flex-col">
            <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                <div className="overflow-hidden ">
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
                            type="number"
                            placeholder="1"
                            className="border-b-2 w-40 border-5  border-b-black  ..."
                          />
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
                            type="number"
                            placeholder="1"
                            className="border-b-2 w-40 border-5  border-b-black  ..."
                          />
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
                            type="number"
                            placeholder="1"
                            className="border-b-2 w-40 border-5 !block  border-b-black  ..."
                          />
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
                            type="number"
                            placeholder="1"
                            className="border-b-2 w-40 border-5  border-b-black  ..."
                          />
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
                            type="number"
                            placeholder="1"
                            className="border-b-2 w-40 border-5  border-b-black  ..."
                          />
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
                            type="number"
                            placeholder="1"
                            className="border-b-2 w-40 border-5  border-b-black  ..."
                          />
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

export default CatalogDetailsHiidea;
