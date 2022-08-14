import React, { useEffect } from "react";
import arrow from "./assets/direction-right.png";
import orderhistoryphoto from "./assets/orderhistoryphoto.png";
import minus from "./assets/minus.png";
import plus from "./assets/plus.png";
import cLine from "../../assets/img/c-line.png";
import close from "./assets/close.png";
import { useAppDispatch } from "../../store";
import { useOrder } from "../../store/order/hooks";
import { fetchOrder } from "../../store/order";

const Basket = () => {
  const [showModal, setShowModal] = React.useState(false);

  const dispatch = useAppDispatch();
  const order = useOrder();
  useEffect(() => {
    dispatch(fetchOrder() as any);
  }, []);
  console.log(order);

  return (
    <div className="mx-auto md:px-9 px-4   w-auto py-5  font-jost">
      <span className="text-[#000000]">Моя корзина</span>
      <div className="flex md:justify-between md:flex-row flex-col ">
        <div className="md:w-8/12 w-full md:flex flex-col hidden ">
          <div className="flex flex-col ">
            <div className="overflow-x-auto sm:-mx-6 lg:-mx-8 ">
              <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                <div className="overflow-hidden">
                  <table className="min-w-full">
                    <thead className="border-b  ">
                      <tr className="">
                        <th
                          scope="col"
                          className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                        >
                          Товар
                        </th>

                        <th
                          scope="col"
                          className="text-sm font-medium text-gray-900 px-6 py-4 text-center"
                        >
                          Количество
                        </th>
                        <th
                          scope="col"
                          className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                        >
                          Цена
                        </th>
                      </tr>
                    </thead>
                    <tbody className="">
                      {/*  */}

                      {/*  */}

                      <tr className="md:bg-white bg-[#F1F1F1] border-b">
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          <div className="flex">
                            <img src={orderhistoryphoto} alt="" />
                            <div className="flex flex-col  px-8 flex-wrap">
                              <h2 className="font-semibold">
                                Ручка пластиковая <br /> шариковая «Наварра»
                              </h2>
                              <span className="font-light">Цвет: Черный</span>
                              <span className="font-light">
                                Тип нанесения: термопечать
                              </span>
                            </div>
                          </div>
                        </td>

                        <td className="text-sm text-gray-900 font-light px-1 py-4 whitespace-nowrap">
                          <div className="flex justify-center items-center align-middle gap-2">
                            {/* <label
                              htmlFor="exampleFormControlInput5"
                              className="form-label inline-block mb-2 text-gray-700 "
                            ></label> */}

                            {/* <img
                              className="rounded-full  p-1 bg-cover ... bg-[#343434] h-5 w-5"
                              src={minus}
                              alt=""
                            /> */}
                            <label
                              htmlFor="minus"
                              className="flex justify-center items-center px-2 py-2"
                            >
                              -
                            </label>
                            <input
                              type="text"
                              className="rounded-full ... border border-black px-2 w-[39%] text-base "
                              value="500 шт."
                            />
                            <img
                              className="rounded-full p-1  ... bg-[#343434] h-5 w-5"
                              src={plus}
                              alt=""
                            />
                          </div>
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          <div className="flex gap-2">
                            <span>32 000, 00</span>
                            <div className="flex flex-col justify-center items-center text-center">
                              <div className="flex">C</div>
                              <div className="mt-[-4vh] flex items-center">
                                _
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          <div className="flex justify-center">
                            {/*  */}

                            <button
                              className="  font-bold uppercase text-sm px-6 py-3 "
                              type="button"
                              onClick={() => setShowModal(true)}
                            >
                              X
                            </button>
                            {showModal ? (
                              <>
                                <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                                  <div className="relative w-auto my-6 mx-auto max-w-3xl">
                                    {/*content*/}
                                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                      {/*header*/}
                                      <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                                        <h3 className="text-3xl font-semibold">
                                          Удалить товар из корзины?
                                        </h3>
                                        <button
                                          className="p-1 ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                          onClick={() => setShowModal(false)}
                                        >
                                          <span className="bg-transparent text-black h-4 w-6 text-3xl font-light block outline-none focus:outline-none">
                                            X
                                          </span>
                                        </button>
                                      </div>
                                      {/*body*/}
                                      <div className="relative p-6 flex-auto ">
                                        {/* <p className="my-4 text-slate-500 text-lg leading-relaxed">
                                         
                                        </p> */}
                                        <div className="flex justify-between">
                                          <img src={orderhistoryphoto} alt="" />
                                          <div className="">
                                            <span className="font-semibold flex flex-wrap">
                                              Ручка пластиковая <br /> шариковая
                                              «Наварра»
                                            </span>
                                            <span className="font-light">
                                              Цвет: Черный
                                            </span>
                                            <span className="font-light">
                                              Тип нанесения: термопечать
                                            </span>
                                          </div>
                                          <div className="flex justify-center items-center">
                                            <input
                                              type="text"
                                              className="rounded-full ... border border-black px-2 w-[39%] text-base "
                                              value="500 шт."
                                            />
                                          </div>
                                        </div>
                                      </div>
                                      {/*footer*/}
                                      <div className="flex items-center justify-center gap-5 p-6 border-t border-solid border-slate-200 rounded-b ">
                                        <button
                                          className="rounded-full ... bg-[#CECECE] w-[30vh] h-7"
                                          type="button"
                                          onClick={() => setShowModal(false)}
                                        >
                                          Отмена
                                        </button>
                                        <button
                                          className=" rounded-full ... bg-[#1F1F1F] shadow hover:shadow-lg outline-none text-white w-[30vh] h-7"
                                          type="button"
                                          onClick={() => setShowModal(false)}
                                        >
                                          Удалить
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                              </>
                            ) : null}

                            {/*  */}
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className=" md:hidden">
          <tr className="md:bg-white bg-[#F1F1F1] border-b flex flex-col">
            <td className="px-2 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
              {/*  */}

              <div className="flex justify-end items-end">
                {/*  */}

                <button
                  className="  font-bold uppercase text-sm  "
                  type="button"
                  onClick={() => setShowModal(true)}
                >
                  <img src={close} alt="" />
                </button>
                {showModal ? (
                  <>
                    <div className=" justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                      <div className="relative w-auto my-6 mx-auto ">
                        {/*content*/}
                        <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                          {/*header*/}

                          <div className="flex flex-col p-2">
                            {/* <div className="flex"> */}
                            <button
                              className="p-1 ml-auto bg-transparent border-0   flex "
                              onClick={() => setShowModal(false)}
                            >
                              <img src={close} alt="" />
                            </button>
                            {/* </div> */}
                            <div className="flex items-start justify-between py-2 border-b border-solid border-slate-200 rounded-t">
                              <h3 className="text-sm font-semibold">
                                Удалить товар из корзины?
                              </h3>
                            </div>
                          </div>
                          {/*body*/}
                          <div className="relative p-2 flex-auto ">
                            {/* <p className="my-4 text-slate-500 text-lg leading-relaxed">
                                         
                                        </p> */}
                            <div className="flex justify-between">
                              <div>
                                <img src={orderhistoryphoto} alt="" />
                              </div>{" "}
                              <div className=" flex flex-col px-2">
                                <span className="font-semibold flex flex-wrap">
                                  Ручка пластиковая <br /> шариковая «Наварра»
                                </span>
                                <span className="font-light">Цвет: Черный</span>
                                <span className="font-light">
                                  Тип нанесения: термопечать
                                </span>
                                <div className="flex justify-center items-center align-middle gap-2 py-2">
                                  <button className="text-white font-medium text-2xl flex justify-center items-center   bg-[#343434] rounded-full ... h-5 w-5">
                                    <img src={minus} alt="" />
                                  </button>
                                  <input
                                    type="text"
                                    className="rounded-full ... border border-solid border-black  px-2 text-sm w-16"
                                    value="500 шт."
                                  />

                                  <button className="text-white font-medium text-2xl flex justify-center items-center   bg-[#343434] rounded-full ... h-5 w-5 ">
                                    <img src={plus} alt="" />
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/*footer*/}
                          <div className="flex flex-col items-center justify-center gap-5 py-4 border-t border-solid border-slate-200 rounded-b w-full">
                            <button
                              className=" rounded-full ... bg-[#1F1F1F] shadow hover:shadow-lg outline-none text-white w-60 py-2"
                              type="button"
                              onClick={() => setShowModal(false)}
                            >
                              Удалить
                            </button>

                            <button
                              className="rounded-full ... bg-[#CECECE] w-60 py-2"
                              type="button"
                              onClick={() => setShowModal(false)}
                            >
                              Отмена
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                  </>
                ) : null}

                {/*  */}
              </div>

              {/*  */}
              <div className="flex justify-between">
                <div>
                  <img src={orderhistoryphoto} alt="" />
                </div>
                <div className="flex flex-col  px-2 flex-wrap">
                  <h2 className="font-semibold">
                    Ручка пластиковая <br /> шариковая «Наварра»
                  </h2>
                  <span className="font-light">Цвет: Черный</span>
                  <span className="font-light">Тип нанесения: термопечать</span>

                  <div className="flex justify-center items-center align-middle gap-2 py-2">
                    <button className="text-white font-medium text-2xl flex justify-center items-center   bg-[#343434] rounded-full ... h-5 w-5">
                      <img src={minus} alt="" />
                    </button>
                    <input
                      type="text"
                      className="rounded-full ... border border-solid border-black  px-2 text-sm w-20"
                      value="500 шт."
                    />

                    <button className="text-white font-medium text-2xl flex justify-center items-center   bg-[#343434] rounded-full ... h-5 w-5 ">
                      <img src={plus} alt="" />
                    </button>
                  </div>
                </div>
              </div>
            </td>

            <div className="  flex justify-center items-center bg-center content-center">
              <div className="border-b border-[#BCBABA] w-[90%]"></div>
            </div>
            <div className="flex justify-between flex-row py-4 items-center px-2">
              <div>
                <span>Цена:</span>
              </div>
              <div className="flex gap-3">
                <span>32 000, 00</span>
                <img className="flex object-contain" src={cLine} alt="" />
              </div>
            </div>
          </tr>
        </div>

        {/*  */}

        <div className="font-jost md:w-4/12 w-full md:px-6 px-4 md:bg-[#F5F5F5] bg-none m-0">
          <h2 className="font-semibold py-4">Характеристики</h2>

          <div className="row font-jost text-sm m-0">
            <div className="w-8/12 catalog-items__characteristics  flex flex-col gap-4 p-0">
              <p className="">
                Итого
                <span className="font-light">Товары, 3 шт.</span>
              </p>
              <p>Адрес доставки</p>
              <p>Цвет товара</p>
              <p>Материал товара</p>
              <p>Размер товара</p>
            </div>
            <div className="w-4/12 flex flex-col gap-4 p-0">
              <p className="flex">
                96 000, 00
                <img className="flex object-contain" src={cLine} alt="" />
              </p>
              <p>
                <button className="underline underline-offset-2">
                  Добавить
                </button>
              </p>
              <p>Черный</p>
              <p>АБС пластик</p>
              <p>d 2,4 x 2,2 x 5,7 см</p>
            </div>
          </div>

          <div>
            <h2 className="font-semibold py-4">Характеристики</h2>
            <div className="flex justify-center">
              <div className="form-check form-check-inline">
                <input
                  className="  rounded-sm h-4 w-4 border border-red-600 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition  mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                  type="radio"
                  name="inlineRadioOptions"
                  id="inlineRadio1"
                  value="option1"
                />
                <label
                  className="form-check-label inline-block text-gray-800"
                  htmlFor="inlineRadio10"
                >
                  Картой VISA
                </label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  className=" form-check-input  rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                  type="radio"
                  name="inlineRadioOptions"
                  id="inlineRadio2"
                  value="option2"
                />
                <label
                  className="form-check-label inline-block text-gray-800"
                  htmlFor="inlineRadio20"
                >
                  Наличными
                </label>
              </div>
            </div>
          </div>
          <div className="flex justify-center py-5">
            <button className="bg-[#1F1F1F] rounded-full ... px-4 py-2 flex justify-center items-center text-white">
              К оплате
              <img src={arrow} alt="" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Basket;
