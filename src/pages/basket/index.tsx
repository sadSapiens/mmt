import React, { useEffect, useState } from "react";
import arrow from "./assets/direction-right.png";
import orderhistoryphoto from "./assets/orderhistoryphoto.png";
import minus from "./assets/minus.png";
import plus from "./assets/plus.png";
import cLine from "../../assets/img/c-line.png";
import close from "./assets/close.png";
import som from "./assets/som.png";
import { useAppDispatch } from "../../store";
import { useOrder } from "../../store/order/hooks";
import API from "../../constants/api";
import CartEmpty from "./cart/cartEmpty/CartEmpty";
import { fetchOrder } from "../../store/order";
import { IOrderProductsCart } from "../../store/order/interfaces/data.interface";
import { useNavigate } from "react-router-dom";

const Basket = () => {
  const [showModal, setShowModal] = useState(false);
  const [payModalShow, setPayModalShow] = useState(false);
  const order = useOrder();
  const [cartProducts, setCartProducts] = useState<IOrderProductsCart | null>();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [modal, setModal] = useState(0)
  const [payInputs, setPayInputs] = useState({
    city: "",
    address: "",
    company: "",
    referalCode: "",
    paymantType: "",
  });
  // console.log(payInputs.paymantType);
  

  // const [extraContent, setExtraContent] = useState<any>()

  useEffect(() => {
    setCartProducts(order);
    // console.log(cartProducts)
  }, [order]);
  
  
    // const handleProductChek = (someProduct: { product: { id: any; }; }) => {
    //   if(cartProducts) {
    //   for(let i = 0; i <= cartProducts?.items?.length; i++ ) {
    //   someProduct?.product?.id === cartProducts?.items?.[i]?.product?.id ? 
    //   <>123123123123123</> : <></> }}
      
    // }
    
    useEffect(()=> {
      console.log(cartProducts?.items?.[0], "cartProducts?.items?.[modal]")
      console.log(cartProducts?.items?.[modal], "cartProducts?.items?.[modal]12123")
    }, [modal])
  
  

  const handleChangePayInputs = (e: any) => {
    setPayInputs({ ...payInputs, [e.target.name]: e.target.value });
  };

  const handleDeleteProductFromCart = async (id: any) => {
    if (!id) return;
    setShowModal(false);
    try {
      const res = await API.delete("/orders/cart", {
        params: {
          item_id: id,
        },
      });
      dispatch(fetchOrder() as any);
      console.log(res);
    } catch (e) {
      console.log(e);
    }
  };

  const handlePay = async () => {
    if (!payInputs.paymantType) {
      setError("Заполните все поля!");
      return;
    }
    const referalCode = payInputs.referalCode && payInputs.referalCode;
    try {
      const res = await API.post("/orders/payment", {
        total_amount: cartProducts?.total_amount,
        address: `address:${payInputs.address}, city:${payInputs.city}, company:${payInputs.company}`,
        referalCode,
        payment_type: payInputs.paymantType,
      });
      console.log(res);
      if (res.data.payment_url) {
        window.location.href = res.data.payment_url;
        return;
      }
      setError("");
      navigate("/profile/order-history");
    } catch (e) {
      console.log(e);
    }
  };
  // console.log(order);

  // console.log(cartProducts, "cartProducts");

  return (
    <div className="mx-auto md:px-9 px-4   w-auto py-5  font-jost">
      <span className="text-[#000000]">Моя корзина</span>

      {cartProducts ? (
        <div className="flex md:justify-between md:flex-row flex-col ">
          <div className="md:w-8/12 w-full md:flex flex-col hidden ">
            <div className="flex flex-col ">
              <div className=" sm:-mx-6 lg:-mx-8 flex flex-col ">
                <div className="py-2 flex flex-col min-w-full sm:px-6 lg:px-8">
                  <table className="min-w-full ">
                    <thead className="border-b  ">
                      <tr className="flex justify-between">
                        <th
                          scope="col"
                          className="text-sm font-medium text-black px-6 py-4 text-left"
                        >
                          Товар
                        </th>

                        <div className="flex w-[50%] justify-evenly">
                          <th
                          scope="col"
                          className="text-sm font-medium text-black px-6 py-4 text-center"
                        >
                          Количество
                        </th>
                        <th
                          scope="col"
                          className="text-sm font-medium text-black px-6 py-4 text-left"
                        >
                          Цена
                        </th>
                        </div>
                      </tr>
                    </thead>
                    <tbody className="">
                      {cartProducts ? (
                        <>
                           {Object.values(cartProducts?.items?.reduce((acc: any, cur: any) => {
                                  if(!acc[cur?.product?.id]){
                                    acc[cur?.product?.id] = []
                                  }
                                  acc[cur?.product?.id].push(cur)
                                  return acc
                                }, {})).map((item: any, i: number)=> (
                                item.map((item: any, i: number) => (
                                i === 0 ?
                              <>
                              <tr className="md:bg-white bg-[#F1F1F1] border-t flex flex-col  border-b-[1px]">
                                <div
                                  key={i}
                                  className="flex flex-row justify-center items-center "
                                >
                                  {/*  */}
                                  <td className="flex py-4 whitespace-nowrap text-sm font-medium text-black w-full">
                                    <div>
                                      <img
                                        src={
                                          item.product.images.small
                                            ? item.product.images.small
                                            : item.product.images.big
                                        }
                                        alt=""
                                        className="h-28 w-44"
                                      />
                                    </div>
                                    <div className="flex flex-col justify-start items-start pl-4 w-72 flex-wrap">
                                      <h2 className="font-semibold">
                                        {item.product.name}, {item?.sizes?.[0]?.size}
                                      </h2>
                                      <span className="font-light">
                                        {/* Тип нанесения: термопечать */}
                                      </span>
                                    </div>
                                  </td>

                                  <td className="text-sm text-black font-light px-1 py-4 whitespace-nowrap">
                                    <div className="flex justify-start items-start align-middle gap-2 py-2">
                                      <button
                                        onClick={() => {
                                          cartProducts.items.map((el: any) => {
                                            if (el.id === item.id) {
                                              API.put("/orders/cart", {
                                                item_id: el.id,
                                                quantity:
                                                  Number(el.quantity) - 1,
                                              }).then((res) => {
                                                dispatch(fetchOrder() as any);
                                              });
                                            }
                                          });
                                        }}
                                        className="text-white font-medium text-2xl flex justify-center items-center   bg-[#343434] rounded-full ... h-5 w-5"
                                      >
                                        <img src={minus} alt="" />
                                      </button>
                                      <input
                                        type="text"
                                        className="rounded-full ... border border-solid border-black  px-2 text-sm w-20"
                                        value={item.quantity}
                                        onChange={(e) => {
                                          let changetItemId = 0;
                                          const updatedItems =
                                            cartProducts.items.map(
                                              (el: any) => {
                                                if (el.id !== item.id) {
                                                  return JSON.parse(
                                                    JSON.stringify(el)
                                                  );
                                                } else {
                                                  changetItemId = el.id;
                                                  return {
                                                    ...el,
                                                    costoms: JSON.parse(
                                                      JSON.stringify(el.costoms)
                                                    ),
                                                    product: JSON.parse(
                                                      JSON.stringify(el.product)
                                                    ),
                                                    quantity: e.target.value,
                                                  };
                                                }
                                              }
                                            );

                                          setCartProducts({
                                            ...cartProducts,
                                            //@ts-ignore
                                            items: updatedItems,
                                          });
                                          API.put("/orders/cart", {
                                            item_id: changetItemId,
                                            quantity: e.target.value
                                              ? e.target.value
                                              : 0,
                                          }).then((res) => {
                                            dispatch(fetchOrder() as any);
                                          });
                                        }}
                                      />

                                      <button
                                        onClick={() => {
                                          cartProducts.items.map((el: any) => {
                                            if (el.id === item.id) {
                                              {console.log(el, "el")}
                                              API.put("/orders/cart", {
                                                item_id: el.id,
                                                quantity:
                                                  Number(el.quantity) + 1,
                                              }).then((res) => {
                                                dispatch(fetchOrder() as any);
                                              });
                                            }
                                          });
                                        }}
                                        className="text-white font-medium text-2xl flex justify-center items-center   bg-[#343434] rounded-full ... h-5 w-5 "
                                      >
                                        <img src={plus} alt="" />
                                      </button>
                                    </div>
                                  </td>
                                  <td className="text-sm text-black font-light px-6 py-4 whitespace-nowrap">
                                    <div className="flex gap-2">
                                      <span className="flex text-base text-black">
                                        {item.amount}
                                      </span>
                                      <img className="h-[15px] self-center" src={som} alt="" />
                                    </div>
                                  </td>

                                  <div className="text-sm text-black font-light px-6 py-4 whitespace-nowrap">
                                    <div className="flex justify-center">
                                      <button
                                        className="  font-bold uppercase text-sm px-6 py-3 "
                                        type="button"
                                        onClick={() => {
                                          setShowModal(true)
                                          setModal(i)}}
                                      >
                                        X
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </tr>
                              </> : 
                              <>
                             <tr className="md:bg-white bg-[#F1F1F1] border-t flex flex-col  border-b-[1px]">
                                <div
                                  key={i}
                                  className="flex flex-row justify-center items-center "
                                >
                                  {/*  */}
                                  <td className="flex whitespace-nowrap text-sm font-medium text-black w-full">
                                    {/* <div className="w-[1px] h-[50px] bg-[#808080]"></div> */}
                                    <div className="flex justify-center items-center xl:ml-[10%]">
                                      <div className="w-[80px] h-[1px] bg-[#808080]"></div>
                                      <div className="w-[30px] h-[30px] bg-[#808080] rounded-[7px] flex justify-center items-center">
                                        <p className="text-[18px] font-[500] text-[#fff]">{item?.sizes?.[0]?.size}</p>
                                      </div>
                                    </div>
                                    <div className="flex flex-col justify-center items-start pl-4 w-72 flex-wrap">
                                      <h2 className="font-[300] text-[16px]">
                                        Размер {item?.sizes?.[0]?.size}
                                      </h2>
                                      <span className="font-light">
                                        {/* Тип нанесения: термопечать */}
                                      </span>
                                    </div>
                                  </td>

                                  <td className="text-sm text-black font-light  whitespace-nowrap">
                                    <div className="flex justify-start items-start align-middle gap-2 py-2">
                                      <button
                                        onClick={() => {
                                          cartProducts.items.map((el: any) => {
                                            if (el.id === item.id) {
                                              API.put("/orders/cart", {
                                                item_id: el.id,
                                                quantity:
                                                  Number(el.quantity) - 1,
                                              }).then((res) => {
                                                dispatch(fetchOrder() as any);
                                              });
                                            }
                                          });
                                        }}
                                        className="text-white font-medium text-2xl flex justify-center items-center   bg-[#343434] rounded-full ... h-5 w-5"
                                      >
                                        <img src={minus} alt="" />
                                      </button>
                                      <input
                                        type="text"
                                        className="rounded-full ... border border-solid border-black   text-sm w-20"
                                        value={item.quantity}
                                        onChange={(e) => {
                                          let changetItemId = 0;
                                          const updatedItems =
                                            cartProducts.items.map(
                                              (el: any) => {
                                                if (el.id !== item.id) {
                                                  return JSON.parse(
                                                    JSON.stringify(el)
                                                  );
                                                } else {
                                                  changetItemId = el.id;
                                                  return {
                                                    ...el,
                                                    costoms: JSON.parse(
                                                      JSON.stringify(el.costoms)
                                                    ),
                                                    product: JSON.parse(
                                                      JSON.stringify(el.product)
                                                    ),
                                                    quantity: e.target.value,
                                                  };
                                                }
                                              }
                                            );

                                          setCartProducts({
                                            ...cartProducts,
                                            //@ts-ignore
                                            items: updatedItems,
                                          });
                                          API.put("/orders/cart", {
                                            item_id: changetItemId,
                                            quantity: e.target.value
                                              ? e.target.value
                                              : 0,
                                          }).then((res) => {
                                            dispatch(fetchOrder() as any);
                                          });
                                        }}
                                      />

                                      <button
                                        onClick={() => {
                                          cartProducts.items.map((el: any) => {
                                            if (el.id === item.id) {
                                              {console.log(el, "el")}
                                              API.put("/orders/cart", {
                                                item_id: el.id,
                                                quantity:
                                                  Number(el.quantity) + 1,
                                              }).then((res) => {
                                                dispatch(fetchOrder() as any);
                                              });
                                            }
                                          });
                                        }}
                                        className="text-white font-medium text-2xl flex justify-center items-center   bg-[#343434] rounded-full ... h-5 w-5 "
                                      >
                                        <img src={plus} alt="" />
                                      </button>
                                    </div>
                                  </td>
                                  <td className="text-sm text-black font-light px-6 py-4 whitespace-nowrap">
                                    <div className="flex gap-2">
                                      <span className="flex text-base text-black">
                                        {item.amount}
                                      </span>
                                      <img className="h-[15px] self-center" src={som} alt="" />
                                    </div>
                                  </td>

                                  <div className="text-sm text-black font-light px-6 py-4 whitespace-nowrap">
                                    <div className="flex justify-center">
                                      <button
                                        className="  font-bold uppercase text-sm px-6 py-3 "
                                        type="button"
                                        onClick={() => setShowModal(true)}
                                      >
                                        X
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </tr>
                              </> 
                              ))
                                  
                                )) }          
                        </>
                      ) : (
                        <CartEmpty />
                      )}

                    </tbody>
                  </table>

                  
                                      {showModal  ? (
                                        <>
                                          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                                            <div className="relative w-auto my-6 mx-auto max-w-3xl">
                                              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                                                  <h3 className="text-3xl font-semibold">
                                                    Удалить товар из корзины?
                                                  </h3>
                                                  <button
                                                    className="p-1 ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                                    onClick={() =>
                                                      setShowModal(false)
                                                    }
                                                  >
                                                    <span className="bg-transparent text-black h-4 w-6 text-3xl font-light block outline-none focus:outline-none">
                                                      X
                                                    </span>
                                                  </button>
                                                </div>
                                                <div className="relative p-6 flex-auto ">
                                                  <div className="flex justify-between items-center">
                                                    <div className="flex items-center ">
                                                      <img
                                                        src={
                                                          cartProducts?.items?.[modal]?.product?.images
                                                            ?.small
                                                            ? cartProducts[modal]?.product
                                                                ?.images.small
                                                            : cartProducts[modal]?.product
                                                                ?.images.big
                                                        }
                                                        alt=""
                                                      />
                                                      <div className="">
                                                        <span className="font-semibold text-lg flex flex-wrap pb-2">
                                                          {cartProducts?.items?.[modal]?.product.name}
                                                        </span>
                                                        {/* <span className="font-light">
                                                      Цвет: Черный
                                                    </span> */}
                                                        <span className="font-light">
                                                          Цвет:{" "}
                                                          {cartProducts?.items?.[modal]?.product?.color}
                                                        </span>{" "}
                                                        <br />
                                                        <span className="font-light">
                                                          Тип нанесения:
                                                          {cartProducts?.items?.[modal]?.costoms?.map(
                                                            (el: any) => el.name
                                                          )}
                                                        </span>
                                                      </div>
                                                    </div>
                                                    

                                                    <div className=" mt-5">
                                                      <input
                                                        type="text"
                                                        className="rounded-full ... border border-black px-2 w-[39%] text-base "
                                                        value={cartProducts?.items?.[modal]?.quantity}
                                                        readOnly
                                                      />
                                                    </div>
                                                  </div>
                                                </div>

                                                <div className="flex items-center justify-center gap-5 p-6 border-t border-solid border-slate-200 rounded-b ">
                                                  <button
                                                    className="rounded-full ... bg-[#CECECE] w-[30vh] h-7"
                                                    type="button"
                                                    onClick={() =>
                                                      setShowModal(false)
                                                    }
                                                  >
                                                    Отмена
                                                  </button>
                                                  <button
                                                    className=" rounded-full ... bg-[#1F1F1F] shadow hover:shadow-lg outline-none text-white w-[30vh] h-7"
                                                    type="button"
                                                    onClick={() =>
                                                      handleDeleteProductFromCart(
                                                        cartProducts?.items?.[modal]?.id
                                                      )
                                                    }
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
                </div>
              </div>
            </div>
          </div>
          {/*  */}
          {cartProducts ? (
            <>
              <div className=" md:hidden my-2">
                {cartProducts.items.map((item, i) => (
                  <>
                    {/* {console.log(item, "item basket")} */}
                  <tr
                    key={i}
                    className="md:bg-white bg-[#F1F1F1] border-b flex flex-col my-4"
                  >
                    <td className="px-2 py-4 whitespace-nowrap text-sm font-medium text-black">
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
                                    <div className="flex justify-between">
                                      <div>
                                        <img
                                          src={
                                            item.product.images.small
                                              ? item.product.images.small
                                              : item.product.images.big
                                          }
                                          alt=""
                                          className=""
                                        />
                                      </div>
                                      <div className=" flex flex-col px-2">
                                        <span className="font-semibold flex flex-wrap">
                                          {item.product.name}
                                        </span>
                                        <span className="font-light">
                                          Цвет: Черный
                                        </span>
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
                                            value={item.quantity}
                                            readOnly
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
                                      onClick={() =>
                                        handleDeleteProductFromCart(item.id)
                                      }
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
                        <img
                          // src={item.product.images.small}
                          src={
                            item.product.images.small
                              ? item.product.images.small
                              : item.product.images.big
                          }
                          alt=""
                          className="h-20 w-20"
                        />
                        <div className="flex flex-col  px-2 flex-wrap whitespace-pre-line ... break-words">
                          <h2 className="font-semibold flex flex-wrap">
                            {item.product.name}
                          </h2>
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
                              className="rounded-full ... border border-solid border-black  px-2 text-sm w-20"
                              value={item.quantity}
                              readOnly
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
                        <img className="flex object-contain" src={som} alt="" />
                      </div>
                    </div>
                  </tr>
                  </>

                ))}
              </div>

              <div className="font-jost md:w-4/12 w-full md:px-6 px-4 md:bg-[#F5F5F5] bg-none m-0 static right-0">
                <h2 className="font-semibold py-4">Характеристики</h2>

                <div className="row font-jost text-sm m-0">
                  <div className="w-8/12 catalog-items__characteristics  flex flex-col gap-4 p-0">
                    <p className="">Итого</p>
                    <span className="font-light">Товары, {cartProducts?.items?.length} шт.</span>
                    <p>
                      Адрес доставки {payInputs.city},{" "}
                      {payInputs.address.length > 5
                        ? payInputs.address.slice(0, 5)
                        : payInputs.address}
                    </p>
                    <div className="">
                      <label htmlFor=""> Промокод:</label>
                      <input
                        type="text"
                        className="px-5 py-1 border-black border-[1px] rounded-full ... "
                        placeholder="Промокод"
                        name="referalCode"
                        value={payInputs.referalCode}
                        onChange={handleChangePayInputs}
                      />
                    </div>
                  </div>

                  <div className="w-4/12 flex flex-col gap-5 p-0">
                    <p className="flex">
                      {cartProducts?.total_amount}
                      <img className="flex object-contain" src={cLine} alt="" />
                    </p>
                    <p></p>
                    <p>
                      <button
                        onClick={() => setPayModalShow(true)}
                        className="underline underline-offset-2"
                      >
                        Добавить
                      </button>
                    </p>
                    {payModalShow ? (
                      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none ">
                        <div className="flex flex-col  rounded-md p-8  justify-center items-center gap-3 border-[1px] border-black bg-white">
                          <div className="flex justify-end">
                            <button
                              className=" flex justify-end items-end relative"
                              onClick={() => setPayModalShow(false)}
                            >
                              <img src={close} alt="" />
                            </button>
                          </div>
                          <label htmlFor="address">Адреса доставки</label>
                          <input
                            type="text"
                            className="px-5 py-2 border-black border-[1px] rounded-full ... text-black"
                            placeholder="Город"
                            name="city"
                            value={payInputs.city}
                            onChange={handleChangePayInputs}
                          />
                          <input
                            type="text"
                            className="px-5 py-2 border-black border-[1px] rounded-full ... text-black"
                            placeholder="Адрес"
                            name="address"
                            value={payInputs.address}
                            onChange={handleChangePayInputs}
                          />
                          <input
                            type="text"
                            className="px-5 py-2 border-black border-[1px] rounded-full ... text-black"
                            placeholder="Компания"
                            name="company"
                            value={payInputs.company}
                            onChange={handleChangePayInputs}
                          />
                          <button
                            onClick={() => setPayModalShow(false)}
                            className="bg-[#1F1F1F] rounded-full px-3 py-2 w-full text-white flex justify-center items-center"
                          >
                            Сохранить
                          </button>
                        </div>
                      </div>
                    ) : null}
                  </div>
                </div>

                <div>
                  <div className="flex justify-center py-10">
                    <div className="form-check form-check-inline">
                      <input
                        className="  rounded-sm h-4 w-4 border border-red-600 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition  mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                        type="radio"
                        name="paymantType"
                        id="inlineRadio1"
                        value="2"
                        onChange={handleChangePayInputs}
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
                        name="paymantType"
                        id="inlineRadio2"
                        value="1"
                        onChange={handleChangePayInputs}
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
                <div className="flex flex-col items-center  py-2">
                  {error && <span className="text-red-600">{error}</span>}
                  <button
                    onClick={handlePay}
                    className="bg-[#1F1F1F] rounded-full ... px-4 py-2 flex justify-center items-center text-white"
                  >
                    {payInputs.paymantType && payInputs.paymantType === "2"
                      ? "К оплате"
                      : "Заказать"}
                    <img src={arrow} alt="" />
                  </button>
                </div>
              </div>
            </>
          ) : null}
        </div>
      ) : (
        <CartEmpty />
      )}
    </div>
  );
};

export default Basket;
