import React from "react";
import { Link } from "react-router-dom";
import arrow from "../../assets/direction-right.png";
import orderhistoryphoto from "../../assets/orderhistoryphoto.png";
import minus from "../../assets/minus.png";
import plus from "../../assets/plus.png";

const CartFull = () => {
  const [showModal, setShowModal] = React.useState(false);

  return (
    <div className="mx-auto px-9   w-auto py-5  font-jost">
      <span className="text-[#000000]">Моя корзина</span>
      <div className="flex justify-between">
        <div className="w-8/12 flex flex-col">
          <div className="flex flex-col">
            <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                <div className="overflow-hidden">
                  <table className="min-w-full">
                    <thead className="border-b">
                      <tr>
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
                    <tbody>
                      <tr className="border-b">
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          <div className="flex">
                            <img src={orderhistoryphoto} alt="" />
                            <div className="flex flex-col px-8 flex-wrap">
                              <h2 className="font-semibold flex flex-wrap">
                                Ручка пластиковая <br /> шариковая «Наварра»
                              </h2>
                              <span className="font-light">Цвет: Черный</span>
                              <span className="font-light">
                                Тип нанесения: термопечать
                              </span>
                            </div>
                          </div>
                        </td>

                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap ">
                          <div className="flex justify-center items-center align-middle gap-2">
                            {/* <label
                              htmlFor="exampleFormControlInput5"
                              className="form-label inline-block mb-2 text-gray-700 "
                            ></label> */}

                            <img
                              className="rounded-full  p-1 bg-cover ... bg-[#343434] h-5 w-5"
                              src={minus}
                              alt=""
                            />
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
                                          Modal Title
                                        </h3>
                                        <button
                                          className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                          onClick={() => setShowModal(false)}
                                        >
                                          <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                                            ×
                                          </span>
                                        </button>
                                      </div>
                                      {/*body*/}
                                      <div className="relative p-6 flex-auto">
                                        {/* <p className="my-4 text-slate-500 text-lg leading-relaxed">
                                          I always felt like I could do
                                          anything. That’s the main thing people
                                          are controlled by! Thoughts- their
                                          perception of themselves! They're
                                          slowed down by their perception of
                                          themselves. If you're taught you can’t
                                          do anything, you won’t do anything. I
                                          was taught I could do everything.
                                        </p> */}
                                      </div>
                                      {/*footer*/}
                                      <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                                        <button
                                          className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                          type="button"
                                          onClick={() => setShowModal(false)}
                                        >
                                          Close
                                        </button>
                                        <button
                                          className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                          type="button"
                                          onClick={() => setShowModal(false)}
                                        >
                                          Save Changes
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
                      <tr className="bg-white border-b">
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 ">
                          <div className="flex">
                            <img src={orderhistoryphoto} alt="" />
                            <div className="flex flex-col  px-8 flex-wrap">
                              <h2 className="font-semibold flex flex-wrap">
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

                            <img
                              className="rounded-full  p-1 bg-cover ... bg-[#343434] h-5 w-5"
                              src={minus}
                              alt=""
                            />
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
                        <td className="text-sm text-gray-900 font-light px-1 py-4 whitespace-nowrap">
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
                                          Modal Title
                                        </h3>
                                        <button
                                          className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                          onClick={() => setShowModal(false)}
                                        >
                                          <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                                            ×
                                          </span>
                                        </button>
                                      </div>
                                      {/*body*/}
                                      <div className="relative p-6 flex-auto">
                                        {/* <p className="my-4 text-slate-500 text-lg leading-relaxed">
                                          I always felt like I could do
                                          anything. That’s the main thing people
                                          are controlled by! Thoughts- their
                                          perception of themselves! They're
                                          slowed down by their perception of
                                          themselves. If you're taught you can’t
                                          do anything, you won’t do anything. I
                                          was taught I could do everything.
                                        </p> */}
                                      </div>
                                      {/*footer*/}
                                      <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                                        <button
                                          className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                          type="button"
                                          onClick={() => setShowModal(false)}
                                        >
                                          Close
                                        </button>
                                        <button
                                          className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                          type="button"
                                          onClick={() => setShowModal(false)}
                                        >
                                          Save Changes
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
                      <tr className="bg-white border-b">
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

                            <img
                              className="rounded-full  p-1 bg-cover ... bg-[#343434] h-5 w-5"
                              src={minus}
                              alt=""
                            />
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
        <div className="w-4/12 flex flex-col justify-center items-center bg-[#F5F5F5] p-5 gap-6">
          <span className="font-jost font-extrabold text-xl text-black">
            Информация о заказе
          </span>
          <div>
            <div className="flex justify-between">
              <h3>Итого</h3>
              <hr className="border-dotted" />
              <div>
                <span>96 000, 00</span>
              </div>
            </div>
          </div>
          <div className="flex justify-around">
            <span>Адрес доставки</span>
            <div className="w-auto border-dotted"></div>
            <button>Добавить</button>
          </div>

          <div>
            <div className="flex justify-center">
              <div className="flex">
                <div className="form-check">
                  <input
                    className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault1"
                  />
                  <label
                    className="form-check-label inline-block text-gray-800"
                    htmlFor="flexRadioDefault1"
                  >
                    Картой VISA
                  </label>
                </div>
                <div className="form-check ">
                  <input
                    className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault2"
                    checked
                  />
                  <label
                    className="form-check-label inline-block text-gray-800"
                    htmlFor="flexRadioDefault2"
                  >
                    Наличными
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div>
            <button className="bg-[#1F1F1F] rounded-full ...  flex justify-center text-white font-jost px-9 py-2">
              <span>К оплате</span>
              <img src={arrow} alt="" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartFull;
