import React from "react";
import clock from "../room/assets/clock-circle.svg";
import settings from "../room/assets/settings.png";
import orderhistoryphoto from "../room/assets/orderhistoryphoto.png";

const OrderHistory = () => {
  return (
    <div
      className="mx-auto
    px-16
    w-auto
    py-5
    font-jost
    "
    >
      <div className="flex justify-between">
        <div>
          <h1 className="font-bold  text-2xl">Личный кабинет</h1>
          <span>У вас пока нет заказов</span>
        </div>
        <div className="flex gap-5">
          <button className="gap-3 bg-[#1F1F1F] rounded-full ...  flex items-center align-middle w-auto h-10 px-6 text-white">
            <img src={clock} alt="" />
            История заказов
          </button>
          <button className="gap-3 border border-[black] rounded-full ...  flex items-center align-middle w-auto h-10 px-6 ">
            <img src={settings} alt="" />
            Мой профиль
          </button>
        </div>
      </div>
      <div>
        <div className="flex flex-col font-jost">
          <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="py-2 inline-block min-w-full sm:px-6 lg:px-4">
              <div className="overflow-hidden">
                <table className="min-w-full">
                  <thead className="border-b font-jost font-light">
                    <tr className="font-light">
                      <th
                        scope="col"
                        className="text-sm font-light text-black px-6 py-4 text-left"
                      >
                        Товар
                      </th>
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
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="px-3 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
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
