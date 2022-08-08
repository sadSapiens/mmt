import React from "react";
import clock from "./assets/clock-circle.svg";
import settings from "./assets/settings.png";
import orderhistoryphoto from "./assets/orderhistoryphoto.png";
import settingWhite from "./assets/settingWhite.png";

const OrderHistory = () => {
  return (
    <div
      className="mx-auto
    md:px-16
    px-2
    w-auto
    py-5
    font-jost
    "
    >
      <div className="flex justify-between  items-center px-1 md:flex-row flex-col">
        <div>
          <h1 className="font-bold  text-2xl">Личный кабинет</h1>
          <span>У вас пока нет заказов</span>
        </div>
        <div className="flex gap-5">
          <button className="gap-1 bg-[#1F1F1F] rounded-full ...  flex text-sm items-center align-middle w-auto h-8 px-6 text-white">
            <img src={clock} alt="" />
            История заказов
          </button>
          <button className="gap-1 bg-[#1F1F1F] rounded-full ...  flex text-sm items-center  w-auto h-8 px-1 text-white">
            <img src={settings} className="hidden md:flex" alt="" />
            <div className=" md:hidden">
              <img src={settingWhite} alt="" />
            </div>
            Мой профиль
          </button>
        </div>
      </div>
      <div>
        <div className="flex flex-col font-jost">
          <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="py-2 inline-block min-w-full sm:px-6 lg:px-4 flex-col">
              <div className="overflow-hidden">
                <table className="min-w-full ">
                  <thead className="border-b  font-jost font-light  first-letter ">
                    <tr className="font-light">
                      <th
                        scope="col"
                        className="text-sm font-light text-black px-6 py-4 text-left"
                      >
                        Товар
                      </th>
                      {/* <div className="hidden md:block"> */}
                      <th
                        scope="col"
                        className="text-sm font-light text-black px-6 py-4 text-left"
                      >
                        Дата заказа
                      </th>
                      <th
                        scope="col"
                        className="text-sm font-light text-black px-6 py-4 text-center"
                      >
                        Количество
                      </th>
                      <th
                        scope="col"
                        className="text-sm font-light text-black px-6 py-4 text-center"
                      >
                        Цена
                      </th>
                      <th
                        scope="col"
                        className="text-sm font-light text-black px-6 py-4 text-center "
                      >
                        Доставка
                      </th>
                      <th
                        scope="col"
                        className="text-sm font-light text-black px-6 py-4 text-center "
                      >
                        Статус
                      </th>
                      {/* </div> */}
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b flex-col">
                      <td className="md:flex-col px-3 py-4 whitespace-nowrap text-sm font-medium text-gray-900 flex flex-col md:flex">
                        <div className="flex">
                          <img src={orderhistoryphoto} alt="" />
                          <div className="flex flex-col px-8 flex-wrap">
                            <h2 className="font-semibold flex flex-wrap">
                              Ручка пластиковая <br /> шариковая «Наварра»
                            </h2>
                            <span className="font-normal">Цвет: Черный</span>
                            <span className="font-normal">
                              Тип нанесения: термопечать
                            </span>
                          </div>
                        </div>
                        {/* responsive */}
                        <div className="md:hidden flex flex-col">
                          <div className="flex justify-between">
                            <th
                              scope="col"
                              className="text-sm font-light text-black px-6 py-4 text-left"
                            >
                              Дата заказа
                            </th>
                            <div className="flex justify-center items-center align-middle flex-col">
                              <h3 className="font-semibold">18.07.2022</h3>
                              <span>12:30:55</span>
                            </div>
                          </div>
                          <div className="flex justify-between">
                            <th
                              scope="col"
                              className="text-sm font-light text-black px-6 py-4 text-left"
                            >
                              Количество
                            </th>
                            <div className="flex justify-center items-center align-middle flex-col">
                              <h3 className="font-semibold">18.07.2022</h3>
                              <span>12:30:55</span>
                            </div>
                          </div>
                          <div className="flex justify-between">
                            <th
                              scope="col"
                              className="text-sm font-light text-black px-6 py-4 text-left"
                            >
                              Цена
                            </th>
                            <div className="flex justify-center items-center align-middle flex-col">
                              <div className="flex gap-2">
                                <span>32 000, 00</span>
                                <div className="flex flex-col justify-center items-center text-center">
                                  <div className="flex">C</div>
                                  <div className="mt-[-4vh] flex items-center">
                                    _
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="flex justify-between">
                            <th
                              scope="col"
                              className="text-sm font-light text-black px-6 py-4 text-left"
                            >
                              Доставка
                            </th>
                            <div className="flex justify-center items-center align-middle flex-col">
                              <button className="rounded-full ... border border-[#5FBA33] text-[#5FBA33] px-2 py-1">
                                Доставлено
                              </button>
                            </div>
                          </div>
                          <div className="flex justify-between">
                            <th
                              scope="col"
                              className="text-sm font-light text-black px-6 py-4 text-left"
                            >
                              Статус
                            </th>
                            <div className="flex justify-center items-center align-middle flex-col">
                              <button className="text-[#F1A400] rounded-full ... border border-[#F1A400] px-2 py-1">
                                В процессе
                              </button>
                            </div>
                          </div>
                        </div>

                        {/*  */}
                      </td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap ">
                        <div className="flex justify-center items-center align-middle flex-col">
                          <h3 className="font-semibold">18.07.2022</h3>
                          <span>12:30:55</span>
                        </div>
                      </td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap ">
                        <div className="flex justify-center items-center align-middle">
                          <label
                            htmlFor="exampleFormControlInput5"
                            className="form-label inline-block mb-2 text-gray-700 "
                          ></label>
                          <input
                            type="text"
                            className="rounded-full ... border border-black px-2 w-[39%] text-base text-center"
                            value="500 шт."
                          />
                        </div>
                      </td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        <div className="flex gap-2">
                          <span>32 000, 00</span>
                          <div className="flex flex-col justify-center items-center text-center">
                            <div className="flex">C</div>
                            <div className="mt-[-4vh] flex items-center">_</div>
                          </div>
                        </div>
                      </td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        <button className="rounded-full ... border border-[#5FBA33] text-[#5FBA33] px-2 py-1">
                          Доставлено
                        </button>
                      </td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        <button className="text-[#F1A400] rounded-full ... border border-[#F1A400] px-2 py-1">
                          В процессе
                        </button>
                      </td>
                    </tr>
                    <tr className="bg-white border-b">
                      <td className="px-3 py-4 whitespace-nowrap text-sm font-medium text-gray-900 ">
                        <div className="flex">
                          <img src={orderhistoryphoto} alt="" />
                          <div className="flex flex-col  px-8 flex-wrap">
                            <h2 className="font-semibold">
                              Ручка пластиковая <br /> шариковая «Наварра»
                            </h2>
                            <span className="font-normal">Цвет: Черный</span>
                            <span className="font-normal">
                              Тип нанесения: термопечать
                            </span>
                          </div>
                        </div>
                      </td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap ">
                        <div className="flex justify-center items-center align-middle flex-col">
                          <h3 className="font-semibold">18.07.2022</h3>
                          <span>12:30:55</span>
                        </div>
                      </td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        <div className="flex justify-center items-center align-middle">
                          <label
                            htmlFor="exampleFormControlInput5"
                            className="form-label inline-block mb-2 text-gray-700 "
                          ></label>
                          <input
                            type="text"
                            className="rounded-full ... border border-black px-2 w-[39%] text-base text-center "
                            value="500 шт."
                          />
                        </div>
                      </td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        <div className="flex gap-2">
                          <span>32 000, 00</span>
                          <div className="flex flex-col justify-center items-center text-center">
                            <div className="flex">C</div>
                            <div className="mt-[-4vh] flex items-center">_</div>
                          </div>
                        </div>
                      </td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        <button className="text-[#F1A400] rounded-full ... border border-[#F1A400] px-2 py-1">
                          В процессе
                        </button>
                      </td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        <button className="text-[#F1A400] rounded-full ... border border-[#F1A400] px-2 py-1">
                          В процессе
                        </button>
                      </td>
                    </tr>
                    <tr className="bg-white border-b">
                      <td className="px-3 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        <div className="flex">
                          <img src={orderhistoryphoto} alt="" />
                          <div className="flex flex-col  px-8 flex-wrap">
                            <h2 className="font-semibold">
                              Ручка пластиковая <br /> шариковая «Наварра»
                            </h2>
                            <span className="font-normal">Цвет: Черный</span>
                            <span className="font-normal">
                              Тип нанесения: термопечать
                            </span>
                          </div>
                        </div>
                      </td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap ">
                        <div className="flex justify-center items-center align-middle flex-col">
                          <h3 className="font-semibold">18.07.2022</h3>
                          <span>12:30:55</span>
                        </div>
                      </td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        <div className="flex justify-center items-center align-middle">
                          <label
                            htmlFor="exampleFormControlInput5"
                            className="form-label inline-block mb-2 text-gray-700 "
                          ></label>
                          <input
                            type="text"
                            className="rounded-full ... border border-black px-2 w-[39%] text-base text-center"
                            value="500 шт."
                          />
                        </div>
                      </td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        <div className="flex gap-2">
                          <span>32 000, 00</span>
                          <div className="flex flex-col justify-center items-center text-center">
                            <div className="flex">C</div>
                            <div className="mt-[-4vh] flex items-center">_</div>
                          </div>
                        </div>
                      </td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        <button className="text-[#F1A400] rounded-full ... border border-[#F1A400] px-2 py-1">
                          В процессе
                        </button>
                      </td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        <button className="text-[#F1A400] rounded-full ... border border-[#F1A400] px-2 py-1">
                          В процессе
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderHistory;
