import React, { useEffect, useState } from "react";
// import CatalogChangeDetail from "../catalog-change-detail/CatalogChangeDetail";
import penOne from "../assets/penOne.png";
import penTwo from "../assets/penTwo.png";
import penThree from "../assets/penThree.png";
import penBig from "../assets/penBig.png";
import arrow from "../assets/arrowLink.png";
import detailtrash from "../assets/detailtrash.png";
import shopbag from "../assets/shopbag.png";
import som from "../assets/som.png";

import "./catalogStyle.css";

import { Link, useLocation, useParams } from "react-router-dom";
import { useAppDispatch } from "../../../store";
import {
  useSelectedCatalogProduct,
  useSimilartProducts,
} from "../../../store/catalog/hooks";
import { fetchSlectedCatalogProduct } from "../../../store/catalog";
import { IProductState } from "../../../store/catalog/interfaces/data.interface";
import API from "../../../constants/api";
import { stat } from "fs";
import { fetchOrder } from "../../../store/order";

const CatalogDetailsOasis = () => {
  const location = useLocation();
  const dispatch = useAppDispatch();
  const selectedProduct = useSelectedCatalogProduct();
  const params = useParams();
  const similar = useSimilartProducts();
  const [currentProduct, setCurrentProduct] = useState<any>();
  const [currentDrawing, setCurrentDrawing] = useState<any>();

  useEffect(() => {
    if (!params.id) return;
    dispatch(fetchSlectedCatalogProduct(params.id) as any);
  }, [location, dispatch, params]);

  useEffect(() => {
    if (!selectedProduct || !selectedProduct.color_groups[0]) return;
    setCurrentProduct(selectedProduct.color_groups[0]);
    if (selectedProduct.locations) {
      setCurrentDrawing({
        ...selectedProduct.locations[0],
        selectedCostomTypeId: "",
      });
    }
  }, [selectedProduct]);

  const handleSendProductToCart = async () => {
    if (!currentProduct) return;
    const sizes = currentProduct.sizes.map((size: any) => {
      return {
        product_size_id: size.id,
        quantity: size.quantity,
      };
    });
    try {
      const res = await API.post("/orders/cart", {
        product_color_group_id: currentProduct.id,
        sizes,
      });
      dispatch(fetchOrder() as any);
      console.log(res);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div>
      {selectedProduct ? (
        <>
          <div
            className="mx-auto
    md:px-10 px-3
    w-auto
    py-5"
          >
            <div></div>

            <div className="rounded-md w-full font-jost">
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
            </div>
            <div className="flex justify-between py-5 md:flex-row flex-col">
              {/* {selectedProduct.color_groups[0].images[0].map((item: any) => { */}
              <div className="md:flex hidden flex-col w-1/12 gap-5">
                {selectedProduct &&
                selectedProduct.color_groups.length &&
                selectedProduct.color_groups.length >= 6
                  ? selectedProduct.color_groups
                      .slice(0, 5)
                      .map((product, i) => (
                        <div key={i}>
                          <img
                            onClick={() => setCurrentProduct(product)}
                            src={product.images[0].small}
                            alt=""
                            className="w-16 h-16"
                          />
                        </div>
                      ))
                  : selectedProduct.color_groups.map((product, i) => (
                      <div key={i}>
                        <img
                          onClick={() => setCurrentProduct(product)}
                          src={product.images[0].small}
                          alt=""
                          className="w-16 h-16"
                        />
                      </div>
                    ))}
              </div>

              <div className="md:w-5/12 w-full gap-4">
                <span className="md:hidden flex text-2xl font-medium font-jost text-black py-2">
                  {selectedProduct.full_name}
                </span>{" "}
                {currentProduct && currentProduct.images.length ? (
                  <img
                    className="w-auto md:h-96  h-72"
                    src={currentProduct.images[0].superbig}
                    alt=""
                  />
                ) : (
                  "Loading..."
                )}
                <div className="flex justify-center items-center md:w-9/12 w-full py-5 gap-4">
                  <div className="md:flex hidden flex-row overflow-x-scroll scroll-photo w-96 gap-5">
                    {selectedProduct &&
                    selectedProduct.color_groups.length &&
                    selectedProduct.color_groups.length < 6
                      ? selectedProduct.color_groups
                          .slice(6)
                          .map((product, i) => (
                            <div key={i}>
                              <img
                                onClick={() => setCurrentProduct(product)}
                                src={product.images[0].small}
                                alt=""
                                className="w-16 h-16"
                              />
                            </div>
                          ))
                      : selectedProduct.color_groups.map((product, i) => (
                          <div key={i}>
                            <img
                              onClick={() => setCurrentProduct(product)}
                              src={product.images[0].small}
                              alt=""
                              className="h-12 w-12"
                            />
                          </div>
                        ))}
                  </div>
                </div>
                {/*  */}
                <div className="flex md:hidden justify-between">
                  <h4>Код товара: {selectedProduct.article}</h4>
                  <h4>На складе: {selectedProduct.total_stock}</h4>
                </div>
                <div className="flex md:hidden">
                  <p>{selectedProduct.description}</p>
                </div>
                {/*  */}
                <div className="font-jost md:flex hidden md:flex-col">
                  <div className="">
                    <h2 className="font-semibold py-4">Характеристики</h2>
                    {selectedProduct.attributes.map((item, i) => (
                      <div key={i} className="row font-jost text-sm">
                        <div className="col-6 catalog-items__characteristics flex flex-col gap-4">
                          <p>{item.name}</p>
                        </div>
                        <div className="col-6 flex flex-col gap-4">
                          <p>{item.value}</p>
                        </div>
                      </div>
                    ))}
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
                        <p>{selectedProduct.package.package_type}</p>
                        <p>{selectedProduct.package.weight}.</p>
                        <p>{selectedProduct.package.package_quantity}.</p>
                        <p>{selectedProduct.package.volume}.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex md:w-6/12 w-full flex-col gap-4">
                <div className="hidden md:flex flex-col gap-4">
                  <span className=" text-2xl font-medium font-jost text-black">
                    {selectedProduct.full_name}
                  </span>
                  <div className="flex justify-between">
                    <h4>Код товара: {selectedProduct.article}</h4>
                    <h4>На складе: {selectedProduct.total_stock}</h4>
                  </div>
                  <div>
                    <p>{selectedProduct.description}</p>
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

                    {selectedProduct.locations.length > 0 && (
                      <form className="w-full p-2">
                        <fieldset>
                          <div className="relative border-b-2 border-black text-gray-800 bg-white ">
                            <>
                              <select
                                className="appearance-none w-full py-1 px-2 bg-white"
                                name="whatever"
                                id="frm-whatever"
                              >
                                {selectedProduct.locations.map(
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
                            </>
                          </div>
                        </fieldset>
                      </form>
                    )}

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
                                <option value="">Выберите тип нанесения</option>
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
                        <label htmlFor="input2">Ширина</label>
                        {selectedProduct.locations.length > 0 ? (
                          <span className=" border-b-2 border-black w-20">
                            {selectedProduct.locations[0].costom_types[0].width}
                          </span>
                        ) : null}
                      </div>

                      <div>
                        <label htmlFor="input2">Высота</label>
                        {selectedProduct.locations.length > 0 ? (
                          <span className=" border-b-2 border-black w-72">
                            {
                              selectedProduct.locations[0].costom_types[0]
                                .height
                            }
                          </span>
                        ) : null}
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
                  <div className="overflow-x-auto scroll-photo sm:-mx-4 lg:-mx-4">
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
                            {currentProduct && currentProduct.sizes.length
                              ? currentProduct.sizes.map(
                                  (size: any, i: number) => (
                                    <tr key={i} className=" flex">
                                      <td className="mx-2 w-44   px-2 py-2 border-b-2  border-b-black  ...">
                                        {size.size}
                                      </td>
                                      <td className=" mx-2 w-44   px-2 py-2 border-b-2  border-b-black  ...">
                                        {size.quantity}
                                      </td>
                                      <td className="flex mx-2 w-44   px-2 py-2 border border-5">
                                        <input
                                          type="number"
                                          placeholder="1"
                                          className="border-b-2 w-40 border-5  border-b-black  ..."
                                        />
                                      </td>
                                    </tr>
                                  )
                                )
                              : null}
                          </tbody>
                        </table>
                        <div className="flex py-4 items-center justify-around px-3">
                          <div className="flex flex-col">
                            <span>Цена:</span>
                            <p className="flex justify-center items-center">
                              {" "}
                              {selectedProduct.color_groups[0].price}
                              <img
                                src={som}
                                alt=""
                                className="object-contain h-3 w-3"
                              />
                            </p>
                          </div>
                          <div className="flex gap-3">
                            <button
                              onClick={() => handleSendProductToCart()}
                              className="flex rounded-full ... bg-[#1F1F1F] px-2 w-32 py-2 justify-center items-center gap-2 text-white"
                            >
                              <img src={shopbag} alt="" />В корзину
                            </button>
                          </div>
                          <div className="flex flex-col">
                            <span>{selectedProduct.total_stock}</span>
                            <hr className="border-b-2 border-b-black ..." />
                            <span>Итого</span>
                          </div>
                        </div>

                        {/*  */}
                        <div className="font-jost md:hidden flex">
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
                          </div>
                        </div>
                        {/*  */}

                        <div className="flex py-10">
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
              <div className="columns-5"></div>
              <div className="columns-5"></div>
              <div className="columns-2"></div>
            </div>
            <div className="flex"></div>
          </div>
        </>
      ) : null}

      {similar.length ? (
        <div className="py-7 flex justify-center mx-3">
          {similar.map((item: any, i) => (
            <div
              key={i}
              className="py-7  flex justify-center md:w-72 w-64  mx-3 overflow-x-auto "
            >
              <div className=" border border-black  w-full h-80 md:flex justify-center flex-col items-center object-center content-center place-items-center">
                <div className=" flex">
                  <img
                    className="md:w-[100%]  "
                    src={item.colors[0].images[0].small}
                    alt=""
                  />
                </div>
                <div>
                  <div className="flex justify-between">
                    <h5 className="md:flex md:px-3 flex justify-start md:justify-center text-sm font-light">
                      Код товара: {item.article}
                    </h5>
                    <h5 className="md:flex hidden md:px-3 justify-start md:justify-center text-sm font-light">
                      Остаток: {item.total_stock}
                    </h5>
                  </div>
                  <div className="flex justify-start flex-wrap break-all flex-col md:flex-row md:justify-center md:items-center px-1 ">
                    <h4 className="md:w-6/12 font-jost md:font-medium font-normal text-base text-black flex  break-words justify-start w-auto text-start">
                      <Link
                        className="!text-black"
                        to={
                          item.shop === "1"
                            ? `/catalog-detailoasis/${item.id}`
                            : `/catalog-detailhiidea/${item.id}`
                        }
                      >
                        {" "}
                        {item.name}
                      </Link>
                    </h4>
                    <div className="md:w-6/12 flex md:justify-center gap-2 justify-start w-12/12">
                      <div className="h-3 w-3 bg-[#14153C] rounded-full ..."></div>
                      <div className="h-3 w-3 bg-[#65A8E0] rounded-full ..."></div>
                      <div className="h-3 w-3 bg-[#A91E1E] rounded-full ..."></div>
                    </div>
                  </div>
                  <div className="flex justify-between md:px-5 px-2 text-black font-jost ">
                    <div className="flex flex-col">
                      <span className="font-light">Цена:</span>
                      <b>{item.price} C</b>
                    </div>
                    <div className="md:w-10 md:h-10 w-8 h-8 bg-[#343434] rounded-full ... flex justify-center items-center">
                      <img src={shopbag} className="h-5 w-5" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
};

export default CatalogDetailsOasis;
