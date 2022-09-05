import { useEffect } from "react";
import { useAppDispatch } from "../../store";
import { fetchOrder } from "../../store/order";
import { useHistoryOrder } from "../../store/order/hooks";
import orderhistoryphoto from "./assets/orderhistoryphoto.png";
import som from "./assets/som.png";

const OrderHistory = () => {
  const dispatch = useAppDispatch();
  const historyOrder = useHistoryOrder();
  useEffect(() => {
    dispatch(fetchOrder() as any);
  }, []);
  return (
    <div className="mx-auto md:px-16 px-2 w-auto py-5 font-jost container">
      <div>
        <div className="flex flex-col font-jost">
          <div className="overflow-x-auto sm:-mx-6 lg:-mx-4">
            <div className="py-2 hidden  lg:inline-block min-w-full sm:px-6 lg:px-4 flex-col">
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
                      {/* {historyOrder ? ( */}
                      <>
                        <td className="md:flex-col px-3 py-4 whitespace-nowrap text-sm font-medium text-gray-900 flex flex-col md:flex">
                          <>
                            {historyOrder &&
                              historyOrder.item.product.map((item, i) => (
                                <div
                                  key={i}
                                  id={item.id}
                                  className="flex flex-col"
                                >
                                  <img src={orderhistoryphoto} alt="" />
                                  <div className="flex flex-col px-8 flex-wrap">
                                    <h2 className="font-semibold flex flex-wrap">
                                      {item.name}
                                    </h2>
                                    <span className="font-normal">
                                      {item.article}
                                    </span>
                                    <span className="font-normal">
                                      {item.color}
                                    </span>
                                  </div>
                                </div>
                              ))}
                          </>

                          {/*  */}

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
                              value={historyOrder?.item.quantity}
                            />
                          </div>
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          <div className="flex gap-2">
                            <span>32 000, 00</span>
                            <img src={som} className="object-contain" alt="" />
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
                      </>
                      {/* ) : ( */}
                      {/* <p>loading</p> */}
                      {/* )} */}
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* responsive */}
            {historyOrder &&
              historyOrder.item.product.map((item, i) => (
                <div className="md:hidden flex flex-col">
                  <div className="flex justify-between">
                    <th
                      scope="col"
                      className="text-sm font-light text-black px-6 py-4 text-left"
                    >
                      <div key={i} id={item.id} className="flex flex-col">
                        <img src={orderhistoryphoto} alt="" />
                      </div>
                    </th>
                    <div className="flex justify-center items-center align-middle flex-col">
                      <div className="flex flex-col px-8 flex-wrap">
                        <h2 className="font-semibold flex flex-wrap">
                          {item.name}
                        </h2>
                        <span className="font-normal">{item.article}</span>
                        <span className="font-normal">{item.color}</span>
                      </div>
                    </div>
                  </div>
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
                        <img src={som} className="object-contain" alt="" />
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
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderHistory;
