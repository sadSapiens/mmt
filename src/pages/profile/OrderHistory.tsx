import { useEffect } from "react";
import { useAppDispatch } from "../../store";
import { fetcHistoryhOrder, fetchOrder } from "../../store/order";
import { useHistoryOrder } from "../../store/order/hooks";
import orderhistoryphoto from "./assets/orderhistoryphoto.png";
import som from "./assets/som.png";

const formatDate = (date: string): { date: string, time: string } => {
  let d = new Date(date);
  let datestring = ("0" + d.getDate()).slice(-2) + "." + ("0" + (d.getMonth() + 1)).slice(-2) + "." +
    d.getFullYear()
  let dateTime = ("0" + d.getHours()).slice(-2) + ":" + ("0" + d.getMinutes()).slice(-2);
  let newDate = {
    date: datestring,
    time: dateTime
  }
  return newDate
}
const OrderHistory = () => {
  const dispatch = useAppDispatch();
  const historyOrder = useHistoryOrder();
  useEffect(() => {
    dispatch(fetcHistoryhOrder() as any);
  }, [dispatch]);

  console.log(historyOrder);
  const checkStatus = (status: string): boolean => {
    return status === "В процессе" ? false : true
  }

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

                    {historyOrder &&
                      historyOrder.map((item, i) => (
                        <>
                          <tr className="border-b flex-col">

                            <td className="md:flex-col py-4 whitespace-nowrap text-sm font-medium text-gray-900 flex flex-col md:flex">
                              <div
                                className="flex "
                              >
                                <img width="100" src={item.order_item?.product.images.small} alt="" />
                                <div className="flex flex-col flex-wrap">
                                  <h2 className="font-semibold flex flex-wrap">
                                    {item.order_item?.product.name}
                                  </h2>
                                  <span className="font-normal">
                                    {item.order_item?.product.article}
                                  </span>
                                  <span className="font-normal">
                                    Цвет:  {item.order_item?.product.color}
                                  </span>
                                </div>
                              </div>
                            </td>
                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap ">
                              <div className="flex justify-center items-center align-middle flex-col">
                                <h3 className="font-semibold">{formatDate(item.created_at).date}</h3>
                                 <span>{formatDate(item.created_at).time}</span>
                              </div>
                            </td>
                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap ">
                              <div className="flex justify-center items-center align-middle">
                                <label
                                  htmlFor="exampleFormControlInput5"
                                  className="form-label inline-block mb-2 text-gray-700 "
                                />
                                <input
                                  type="text"
                                  className="rounded-full ... border border-black px-2 w-[39%] text-base text-center"
                                  value={item.order_item.quantity}
                                />
                              </div>
                            </td>
                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                              <div className="flex gap-2">
                                <span>{item.order_item.amount}</span>
                                <img src={som} className="object-contain" alt="" />
                              </div>
                            </td>
                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                              <button className={`rounded-full border-[1px] ${checkStatus(item.delivery_status) ? 'border-success text-success' : "border-error text-error"} px-2 py-1`}>
                                {item.delivery_status}
                              </button>


                            </td>
                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                              <button className={`rounded-full border-[1px] ${checkStatus(item.payment_status) ? 'border-success text-success' : "border-error text-error"} px-2 py-1`}>
                                {item.payment_status}
                              </button>
                            </td>
                          </tr>

                        </>
                      ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* responsive */}
            {historyOrder &&
              historyOrder.map((item, i) => (
                <div className="md:hidden flex flex-col">
                  <div className="flex justify-between">
                    <th
                      scope="col"
                      className="text-sm font-light text-black px-6 py-4 text-left"
                    >
                      <div key={i} id={item.order_item?.product.id} className="flex flex-col">
                        <img src={item.order_item?.product.images.small} alt="" />

                      </div>
                    </th>
                    <div className="flex justify-center items-center align-middle flex-col">
                      <div className="flex flex-col px-8 flex-wrap">
                        <h2 className="font-semibold flex flex-wrap">
                          {item.order_item?.product.name}
                        </h2>
                        <span className="font-normal">{item.order_item?.product.article}</span>
                        <span className="font-normal">{item.order_item?.product.color}</span>
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
                      <h3 className="font-semibold">{formatDate(item.created_at).date}</h3>
                      <span>{formatDate(item.created_at).time}</span>
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
                      <input
                        type="text"
                        className="rounded-full border border-black px-2 w-[39%] text-base text-center"
                        value={item.order_item.quantity}
                      />
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
                        <span>{item.order_item.amount}</span>
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

                      <button className={`rounded-full border-[1px] ${checkStatus(item.delivery_status) ? 'border-success text-success' : "border-error text-error"} px-2 py-1`}>
                        {item.delivery_status}
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
                      <button className={`rounded-full border-[1px] ${checkStatus(item.payment_status) ? 'border-success text-success' : "border-error text-error"} px-2 py-1`}>
                        {item.payment_status}
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
