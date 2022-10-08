import React, { useEffect, useState } from "react";
import detailtrash from "../assets/detailtrash.png";
import shopbag from "../assets/shopbag.png";
import som from "../assets/som.png";
import "../catalogDetailsOasis/catalogStyle.css";
import { Link, useLocation, useParams } from "react-router-dom";
import { useAppDispatch } from "../../../store";
import {
  useSelectedCatalogProduct,
  useSimilartProducts,
} from "../../../store/catalog/hooks";
import { fetchSlectedCatalogProduct } from "../../../store/catalog";
import API from "../../../constants/api";
import { fetchOrder } from "../../../store/order";

const CatalogDetailsHiidea = () => {
  const location = useLocation();
  const dispatch = useAppDispatch();
  const selectedProduct = useSelectedCatalogProduct();
  const params = useParams();
  const similar = useSimilartProducts();
  const [currentProduct, setCurrentProduct] = useState<any>();
  const [currentDrawing, setCurrentDrawing] = useState<any>();
  const [sizesCost, setSizesCost] = useState(1)
  const [cardWord, setCardWord] = useState("В корзину");
  const [drawing, setDrawing] = useState(false);

  const [widthHeight, setWidthHeight] = useState({
    width: "",
    height: "",
  });
  const [priceDrawing, setPriceDrawing] = useState(0);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!params.id) return;
    dispatch(fetchSlectedCatalogProduct(params.id) as any);
  }, [location, dispatch, params]);

  useEffect(() => {
    if (!selectedProduct || !selectedProduct.color_groups[0]) return;
    setCurrentProduct(selectedProduct.color_groups[0]);
    if (selectedProduct.locations) {
      console.log(selectedProduct.locations[0]);
      try {
        setCurrentDrawing({
          ...selectedProduct.locations[0],
          selectedCostomTypeId: selectedProduct.locations[0].costom_types[0].id,
          // @ts-ignore
          color_id: selectedProduct.locations[0].costom_types[0].colors[0].id,
          costom_type_id: selectedProduct.locations[0].costom_types[0].id,
        });
      } catch (e) {
        setCurrentDrawing({
          ...selectedProduct.locations[0],
          selectedCostomTypeId: "",
        });
      }
    }
  }, [selectedProduct]);

  const handleSendProductToCart = async () => {
    if (!currentProduct) return;
    const sizes = currentProduct.sizes
      .filter((item: any) => item.quantityToCart)
      .map((size: any) => {
        return {
          product_size_id: size.id,
          quantity: size.quantity,
        };
      });
    if (sizes.length === 0) {
      setError("Добавьте количество товара");
      return;
    }
    try {
      const res = await API.post("/orders/cart", {
        product_color_group_id: currentProduct.id,
        sizes,
        costoms: [
          {
            costom_type_id: +currentDrawing.costom_type_id,
            color_id: +currentDrawing.color_id,
            width: +widthHeight.width,
            height: +widthHeight.height,
          },
        ],
      });
      setCardWord("Добавлено");
      dispatch(fetchOrder() as any);
    } catch (e) {
      console.log(e);
    }
  };

  const handleSendCostomCost = async () => {
    if (!selectedProduct) return;
    try {
      const res = await API.post(
        `/products/${selectedProduct.id}/costom-cost`,
        {
          costom_type_id: +currentDrawing.costom_type_id,
          color_id: +currentDrawing.color_id,
          width: +widthHeight.width,
          height: +widthHeight.height,
        }
      );
      setPriceDrawing(Math.ceil(res.data.data.cost));
    } catch (e) {
      console.log(e);
    }
  };
  console.log(selectedProduct);

  return (
    <div>
      {selectedProduct ? (
        <>
          <div className="mx-auto md:px-10 px-3 w-auto md:py-5">
            <div />

            {/* <div className="rounded-md w-full font-jost">
              <ol className="flex !text-black ">
                <li className="text-black font-jost">
                  <Link
                    to="/catalog"
                    className="!text-gray-900 hover:text-black"
                  >
                    Каталог
                  </Link>
                </li>
                <li>
                  <img src={arrow} alt="" />
                </li>
                <li className="!text-black">Категории</li>
                <li>
                  <img src={arrow} alt="" />
                </li>
                <li className="text-gray-500">Ручки</li>
              </ol>
            </div> */}
            <div className="flex justify-between py-5 md:flex-row flex-col">
              {/* {selectedProduct.color_groups[0].images[0].map((item: any) => { */}

              <div className="md:w-5/12 w-full gap-4">
                <span className="md:hidden flex text-2xl font-medium font-jost text-black py-2">
                  {selectedProduct && selectedProduct.full_name}
                </span>{" "}
                {currentProduct &&
                currentProduct.images &&
                currentProduct.images.length > 0 ? (
                  <div className="flex md:justify-start justify-center">
                    <img
                      className="w-auto md:h-96  h-72 object-fill"
                      src={currentProduct.images[0].big}
                      alt=""
                    />
                  </div>
                ) : (
                  <div role="status">
                    <svg aria-hidden="true" className="mr-2 w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                      <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                    </svg>
                    <span className="sr-only">Loading...</span>
                  </div>
                )}
                <div className="flex justify-start items-center w-full">
                  <div className="flex flex-row  gap-2   overflow-y-clip  overflow-x-scroll general">
                    {selectedProduct &&
                    selectedProduct.color_groups.length &&
                    selectedProduct.color_groups.length >= 6
                      ? selectedProduct.color_groups
                          .slice(0, 5)
                          .map((product, i) => (
                            <div key={i} className="cursor-pointer">
                              <img
                                onClick={() => setCurrentProduct(product)}
                                src={product.images[0]?.big}
                                alt=""
                                className="w-16 h-16 object-fill"
                                style={{
                                  opacity:
                                    product?.images[0]?.big ===
                                    currentProduct?.images[0]?.big
                                      ? "1"
                                      : "0.4",
                                }}
                              />
                            </div>
                          ))
                      : selectedProduct.color_groups.map((product, i) => (
                          <div key={i} className="cursor-pointer">
                            <img
                              onClick={() => setCurrentProduct(product)}
                              src={product.images[0]?.big}
                              alt=""
                              className={"w-16 h-16 object-fill"}
                              style={{
                                opacity:
                                  product?.images[0]?.big ===
                                  currentProduct?.images[0]?.big
                                    ? "1"
                                    : "0.5",
                              }}
                            />
                          </div>
                        ))}
                  </div>
                </div>
                <div className="flex md:hidden justify-between pr-5 pb-2">
                  <h4>Код товара: {selectedProduct.article}</h4>
                  <h4>На складе: {selectedProduct.total_stock}</h4>
                </div>
                <div className="flex md:hidden pb-3">
                  <p>{selectedProduct?.description}</p>
                </div>
                {/*  */}
                <div className=" pl-5">
                  <div className="md:flex w-full justify-center hidden md:flex-col">
                    <h2 className="font-semibold py-4 text-xl">
                      Характеристики
                    </h2>
                    {selectedProduct.attributes.map((item, i) => (
                      <div
                        key={i}
                        className="row font-jost text-md"
                        style={{ textTransform: "uppercase" }}
                      >
                        <div className="col-6 catalog-items__characteristics flex flex-col gap-4">
                          <p>{item.name}</p>
                        </div>
                        <div className="col-6 flex flex-col gap-4">
                          <p>{item.value}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="flex md:w-8/12 w-full flex-col gap-4 items-start">
                <div className="hidden md:flex flex-col gap-4">
                  <span className=" text-2xl font-medium font-jost text-black">
                    {selectedProduct.full_name}
                  </span>
                  <div className="flex gap-14">
                    <h4>
                      Код товара:{" "}
                      {selectedProduct.article ? selectedProduct.article : null}
                    </h4>
                    <h4>
                      На складе:{" "}
                      {selectedProduct.total_stock
                        ? selectedProduct.total_stock
                        : null}
                    </h4>
                  </div>
                  <div>
                    <p>
                      {selectedProduct?.description
                        ? selectedProduct?.description
                        : null}
                    </p>
                  </div>
                </div>

                <div className="flex justify-start gap-4 items-start flex-col">
                  <div className="flex justify-start gap-3 border-b-2 border-[#898989] pb-3">
                    <span>Цвета: </span>
                    <div className="flex gap-2">
                      {selectedProduct.color_groups?.map((product, index) => (
                        <>
                        {index <= 7 &&
                          <div
                            className={`w-[27px] h-[27px] rounded-[50%] cursor-pointer`}
                            onClick={() => setCurrentProduct(product)}
                            style={{
                              background: product.color.hex_code,
                              border: ".5px solid #000",
                            }}
                          ></div>}
                        </>
                      ))}
                    </div>
                  </div>

                  <div className="justify-start flex items-center gap-3  w-full">
                    <button
                      onClick={() => setDrawing(!drawing)}
                      className="rounded-full ... border  border-black px-5 py-2 font-jost font-medium"
                    >
                      {drawing
                        ? "- Не добавлять нанесение"
                        : "+Добавить нанесение"}
                    </button>
                    <img src={detailtrash} alt="" className="cursor-pointer" />
                  </div>
                </div>
                {drawing && (
                  <div className="flex justify-between flex-wrap gap-2">
                    <div className="w-[100%]">
                      <>
                        <label htmlFor="input2">
                          <span className="ml-[10px]">Место</span>
                        </label>
                        <form className="w-full p-2">
                          <fieldset>
                            <div className="relative border-b-2 border-black text-gray-800 bg-white ">
                              <div>
                                <select
                                  className="appearance-none w-full py-1 px-2 bg-white"
                                  name="whatever"
                                  id="frm-whatever"
                                >
                                  {selectedProduct &&
                                    selectedProduct.locations &&
                                    selectedProduct.locations.map(
                                      (item: any, i) => (
                                        <option value="" key={i}>
                                          {" "}
                                          {item.name}
                                        </option>
                                      )
                                    )}
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
                            </div>
                          </fieldset>
                        </form>
                      </>

                      {/*  */}
                    </div>

                    <div className="flex md:justify-between md:flex-row flex-col w-full">
                      <div className="md:w-6/12 w-full">
                        <form className="w-full p-2">
                          <label htmlFor="input2">Тип нанесения</label>
                          <fieldset>
                            <div className="relative border-b-2 border-black  text-gray-800 bg-white ">
                              <label htmlFor="frm-whatever" className="sr-only">
                                My field
                              </label>
                              <select
                                onChange={(e) =>
                                  setCurrentDrawing({
                                    ...currentDrawing,
                                    selectedCostomTypeId: e.target.value,
                                  })
                                }
                                className="appearance-none w-full py-1 px-2 bg-white"
                                name="whatever"
                                id="frm-whatever"
                              >
                                {currentDrawing &&
                                  currentDrawing.costom_types &&
                                  currentDrawing.costom_types.map(
                                    (type: any, i: number) => (
                                      <option key={i} value={type.id}>
                                        {type.costom}
                                      </option>
                                    )
                                  )}
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

                      <div className="md:w-6/12 w-full">
                        {/* {selectedProduct.color_groups[0].color.map((item) => ( */}
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
                                {currentDrawing &&
                                currentDrawing.selectedCostomTypeId ? (
                                  currentDrawing.costom_types.map(
                                    (type: any, i: number) => {
                                      return type.id ===
                                        currentDrawing.selectedCostomTypeId
                                        ? type.colors.map(
                                            (color: any, i: number) => (
                                              <option key={i} value="">
                                                {color.name}
                                              </option>
                                            )
                                          )
                                        : null;
                                    }
                                  )
                                ) : (
                                  <option value="">
                                    Выберите тип нанесения
                                  </option>
                                )}

                                {/* {currentDrawing.selectedCostomTypeId ? (
                                currentDrawing.map((type: any) => {
                                  type.id == currentDrawing.selectedCostomTypeId
                                    ? type.colors.map((color: any) => (
                                        <option value="">{color.name}</option>
                                      ))
                                    : null;
                                })
                              ) : (
                                <option value="">Выберите тип нанесения</option>
                              )} */}
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
                        {/* ))} */}
                      </div>
                    </div>

                    <div className="flex md:justify-between flex-col md:flex-row w-full">
                      <div className="flex  w-5/12 justify-between">
                        <div>
                          {currentDrawing &&
                          currentDrawing.selectedCostomTypeId ? (
                            currentDrawing.costom_types.map(
                              (type: any, i: number) => {
                                return (
                                  type.id == currentDrawing.costom_type_id && (
                                    <>
                                      <label htmlFor="input2">
                                        Максимальная Ширина({type.width}мм)
                                      </label>

                                      <input
                                        type="number"
                                        defaultValue={0}
                                        // value={widthHeight.width}
                                        onChange={(e) =>
                                          setWidthHeight({
                                            ...widthHeight,
                                            width: e.target.value,
                                          })
                                        }
                                        className=" border-b-2 border-black w-20"
                                      />
                                    </>
                                  )
                                );
                              }
                            )
                          ) : (
                            <input
                              type="text"
                              value={"Выберите тип нанесения"}
                              className=" border-b-2 border-black max-w-[100px] ml-[8px] pl-2"
                            />
                          )}
                        </div>

                        <div>
                          {currentDrawing &&
                          currentDrawing.selectedCostomTypeId ? (
                            currentDrawing.costom_types.map(
                              (type: any, i: number) => {
                                return type.id ==
                                  currentDrawing.costom_type_id ? (
                                  <>
                                    <label htmlFor="input2">
                                      Максимальная Высота({type.height}мм)
                                    </label>

                                    <input
                                      type="number"
                                      defaultValue={0}
                                      // value={widthHeight.height}
                                      onChange={(e) =>
                                        setWidthHeight({
                                          ...widthHeight,
                                          height: e.target.value,
                                        })
                                      }
                                      className=" border-b-2 border-black w-20"
                                    />
                                  </>
                                ) : null;
                              }
                            )
                          ) : (
                            <input
                              type="text"
                              value={"Выберите тип нанесения"}
                              className=" border-b-2 border-black max-w-[100px] ml-[20px] pl-2"
                            />
                          )}
                        </div>
                      </div>
                      <div className="flex justify-center items-center py-4 w-7/12">
                        <button
                          onClick={handleSendCostomCost}
                          className="font-jost text-[#06AF5E]  border !border-black rounded-full ... px-5 py-2"
                        >
                          {priceDrawing ? "Нанесение Добавлено" : "Применить"}
                        </button>
                        {!!priceDrawing && (
                          <div className="flex flex-col flex-wrap grid lg:grid-cols-2">
                            <span>Цена:</span>
                            <p className="flex justify-center items-center">
                              {" "}
                              {priceDrawing}
                              <img
                                src={som}
                                alt=""
                                className="object-contain h-3 w-3"
                              />
                            </p>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                )}

                {/*  */}

                <div className="flex flex-col w-full">
                  <div className="overflow-x-auto scroll-photo sm:-mx-4 lg:-mx-4 lg:grid-cols-1">
                    <div className=" inline-block sm:px-6 lg:px-8 w-full">
                      <div className="">
                        {selectedProduct.total_stock && (
                          <>
                            <table className=" flex justify-between flex-wrap">
                              <thead className="w-full">
                                <tr className="flex">
                                  <th
                                    scope="col"
                                    className="text-sm font-medium w-[33.3%] text-gray-900 px-6 py-4 text-left ml-[-15px]"
                                  >
                                    Размер
                                  </th>
                                  <th
                                    scope="col"
                                    className="text-sm font-medium w-[33.3%] text-gray-900 py-4 text-left ml-[30px]"
                                  >
                                    На складе
                                  </th>
                                  <th
                                    scope="col"
                                    className="text-sm font-medium w-[33.3%] text-gray-900 px-6 py-4 text-left ml-[-15px]"
                                  >
                                    Количество
                                  </th>
                                </tr>
                              </thead>
                              <tbody className="w-full">
                                {currentProduct && currentProduct.sizes.length
                                  ? currentProduct.sizes.map(
                                      (size: any, i: number) => (
                                        <tr
                                          key={i}
                                          className={
                                            size.quantity ? "flex" : "hidden"
                                          }
                                        >
                                          <td className="mx-2 w-[33.3%]   px-2 py-2 border-b-2  border-b-black  ...">
                                            {" "}
                                            {size.size}
                                          </td>
                                          <td className=" mx-2 w-[33.3%]   px-2 py-2 border-b-2  border-b-black  ...">
                                            {size.quantity}
                                          </td>
                                          <td className="flex mx-2 w-[33.3%] px-2 py-2 border border-5">
                                            <input
                                              type="number"
                                              placeholder="0"
                                              onChange={(e) => {
                                                const updatedSizes =
                                                  currentProduct.sizes.map(
                                                    (el: any) => {
                                                      return el.id !== size.id
                                                        ? el
                                                        : {
                                                            ...el,
                                                            quantityToCart:
                                                              el.quantity === 0
                                                                ? 0
                                                                : e.target
                                                                    .value,
                                                          };
                                                    }
                                                  );
                                                                                                  
                                                  setSizesCost(+e.target.value > 0 ? +e.target.value : 1)

                                                setCurrentProduct({
                                                  ...currentProduct,
                                                  images: currentProduct.images,
                                                  sizes: updatedSizes,
                                                });
                                              }}
                                              className="border-b-2 w-full border-5  border-b-black  ..."
                                            />
                                          </td>
                                        </tr>
                                      )
                                    )
                                  : null}
                              </tbody>
                            </table>
                            <div className="flex py-4 items-center justify-around px-3">
                              <>
                                <div className="flex flex-col flex-wrap grid lg:grid-cols-2">
                                  <span>Цена:</span>
                                  <p className="flex justify-center items-center">
                                    {" "}
                                    {(selectedProduct.color_groups[0].price * sizesCost).toFixed(2)}
                                    <img
                                      src={som}
                                      alt=""
                                      className="object-contain h-3 w-3"
                                    />
                                  </p>
                                </div>

                                <div className="flex gap-3">
                                  <div>
                                    <button
                                      onClick={() => handleSendProductToCart()}
                                      className="flex rounded-full ... bg-[#767676] px-2 w-32 py-2 justify-center items-center gap-2 text-white"
                                    >
                                      Создать макет
                                    </button>
                                    <button
                                      onClick={() => handleSendProductToCart()}
                                      className="md:hidden flex rounded-full mt-2 ... bg-[#1F1F1F] px-2 w-32 py-2 justify-center items-center gap-2 text-white"
                                    >
                                      <img src={shopbag} alt="" />
                                      {cardWord}
                                    </button>
                                  </div>

                                  {error && (
                                    <span className="text-red-500">
                                      {error}
                                    </span>
                                  )}
                                  <button
                                    onClick={() => handleSendProductToCart()}
                                    className="md:flex hidden rounded-full ... bg-[#1F1F1F] px-2 w-32 py-2 justify-center items-center gap-2 text-white"
                                  >
                                    <img src={shopbag} alt="" />
                                    {cardWord}
                                  </button>
                                </div>
                                {/* ) : (
                              navigate("/signup")
                            )} */}
                                <div className="bg-red-600">{/*  */}</div>

                                <div className="flex flex-col">
                                  <span className="text-[#30B956] font-bold">
                                    {selectedProduct.total_stock} c
                                  </span>
                                  <hr className="border-b-2 border-b-black ..." />
                                  <span>Итого</span>
                                </div>
                              </>
                            </div>
                          </>
                        )}
                        <div className="font-jost md:hidden block pl-2">
                          <div className="font-jost">
                            <h2 className="font-semibold py-4 text-md">
                              Характеристики
                            </h2>
                            {selectedProduct.attributes.map((item, i) => (
                              <div key={i} className="row font-jost">
                                <div className="col-6 catalog-items__characteristics flex flex-col ">
                                  <p className="font-medium text-sm leading-loose ">
                                    {item.name}
                                  </p>
                                </div>
                                <div className="col-6 flex flex-col ">
                                  <p className="font-normal text-sm leading-loose py-2">
                                    {item.value}
                                  </p>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                        {/*  */}

                        {/* <div className="font-jost md:hidden flex">
                          <h2 className="font-semibold py-4">Характеристики</h2>
                          {selectedProduct.attributes.map((item, i) => (
                            <div key={i} className="row font-jost text-sm">
                              <div className="col-6 catalog-items__characteristics flex flex-col gap-4">
                                <p>{item.name}</p>
                              </div>
                              <div className="col-6 flex flex-col gap-4 ">
                                <p className="py-3">{item.value}</p>
                              </div>
                            </div>
                          ))}

                          <div className="font-jost">
                            <h2 className="font-semibold py-4">Упаковка</h2>
                            {selectedProduct && selectedProduct.package && (
                              <div className="row font-jost text-sm">
                                <div className="col-6 catalog-items__characteristics flex flex-col gap-4">
                                  <p>Вид упаковки</p>
                                  <p>Вес с упаковкой</p>
                                  <p>Количество в упаковке</p>
                                  <p>Объем единицы</p>
                                </div>
                                <div className="col-6 flex flex-col gap-5 ">
                                  <p>{selectedProduct.package.package_type}</p>
                                  <p>{selectedProduct.package.weight}.</p>
                                  <p>
                                    {selectedProduct.package.package_quantity}.
                                  </p>
                                  <p>{selectedProduct.package.volume}.</p>
                                </div>
                              </div>
                            )}
                          </div>
                        </div> */}
                        {/*  */}

                        <div className=" py-10 md:flex hidden">
                          <p>
                            Компания MMT оставляет за собой право вносить
                            изменения в характеристики товара и его упаковку без
                            предварительного уведомления.
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
              <div className="columns-5" />
              <div className="columns-5" />
              <div className="columns-2" />
            </div>
            <div className="flex" />
          </div>
        </>
      ) : null}

      {similar.length ? (
        <>
          <div className=" border-b-2 border-[#898989]">
            <h2 className="text-2xl font-blog pl-[40px] py-2">
              Похожие товары
            </h2>
          </div>
          <div className="py-7 flex justify-between flex-wrap">
            {similar.map((item: any, i) => (
              <Link
              // onClick={() => window.location.reload()}
                        className="!text-black"
                        to={
                          item.shop === "1"
                            ? `/catalog-detailoasis/${item.id}`
                            : `/catalog-detailhiidea/${item.id}`
                        }
                      >
              <div
                key={i}
                className="py-7  flex justify-center md:w-72 w-64  mx-3 overflow-x-auto "
              >
                <div className=" border border-black  w-full h-80 flex justify-between pb-2 flex-col items-center object-center content-center place-items-center">
                  <div className="flex justify-center">
                    <img
                      className="md:w-[100%]  "
                      src={item.colors[0].images[0].small}
                      alt=""
                    />
                  </div>
                  <div className="px-2 w-full">
                    <div className="flex">
                      <h5 className="text-sm font-light">
                        Код товара: {item.article}
                      </h5>
                    </div>
                    <div className="flex justify-between items-center text-black font-jost ">
                      
                        {" "}
                        {item.name.length <= 29 ? item.name : item.name.slice(0, 29) + "..."}
                      
                      {/* <div className="flex gap-1 pl-[30px] items-center">
                        <div className="h-3 w-3 rounded-full" />
                        <div className="h-3 w-3 rounded-full" />
                        <div className="h-3 w-3 rounded-full" />
                      </div> */}
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="flex flex-col">
                        <span className="font-light">Цена:</span>
                        <span className="font-black">{item.price} C</span>
                      </div>
                      <div className="w-10 h-10 bg-[#343434] rounded-full ... flex justify-center items-center">
                        <img src={shopbag} className="h-5 w-5" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              </Link>
            ))}
          </div>
        </>
      ) : null}
    </div>
  );
};

export default CatalogDetailsHiidea;
