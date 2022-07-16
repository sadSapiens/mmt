import React from "react";
import Footer from "../../../components/footer/Footer";
import NavBar from "../../../components/navbar/MyNavbar";
import CatalogChangeDetail from "../catalog-change-detail/CatalogChangeDetail";
import CatalogTabs from "../catalog-tools/CatalogTabs";
import penOne from "../assets/penOne.png";
import penTwo from "../assets/penTwo.png";
import penThree from "../assets/penThree.png";
import penBig from "../assets/penBig.png";
import shoppingbag from "../assets/shoppingbag.png";
import arrow from "../assets/arrowLink.png";
import { Link } from "react-router-dom";

const CatalogDetails = () => {
  return (
    <div
      className="mx-auto
    px-16
    w-auto
    py-5"
    >
      <div></div>
      <div>
        <nav className="bg-grey-light rounded-md w-full">
          <ol className="flex  ">
            <li>
              <Link to="/catalog">
                <a href="#" className="text-blue-600 hover:text-blue-700">
                  Каталог
                </a>
              </Link>
            </li>
            <li>
              {/* <span className="text-gray-500 mx-2"> |</span> */}
              <img src={arrow} alt="" />
            </li>
            <li>
              <a href="#" className="text-blue-600 hover:text-blue-700">
                Категории
              </a>
            </li>
            <li>
              {/* <span className="text-gray-500 mx-2"> */}
              <img src={arrow} alt="" />
              {/* </span> */}
            </li>
            <li className="text-gray-500">Ручки</li>
          </ol>
        </nav>
      </div>
      <div className="flex justify-between py-5">
        <div className="flex flex-col w-1/12 gap-5">
          <img src={penOne} alt="" className="w-16 h-16" />
          <img src={penTwo} alt="" className="w-16 h-16" />
          <img src={penThree} alt="" className="w-16 h-16" />
        </div>
        <div className="w-5/12">
          {" "}
          <img className="w-96 h-96" src={penBig} alt="" />
        </div>
        <div className="flex w-6/12 flex-col">
          <span className="text-2xl font-medium font-jost text-black">
            Ручка пластиковая шариковая «Наварра»
          </span>
          <h4>Код товара: 1050</h4>
          <div>
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
                            Цена:
                          </th>
                          <th
                            scope="col"
                            className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                          >
                            Количество:
                          </th>
                          <th
                            scope="col"
                            className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                          ></th>
                          <th
                            scope="col"
                            className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                          ></th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b">
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                            <div className="flex gap-2">
                              <span>650</span>
                              <div className="flex flex-col justify-center items-center text-center">
                                <div className="flex">C</div>
                                <div className="mt-[-5vh] flex items-center">
                                  _
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                            <button className="gap-3 border border-black rounded-full ...  flex items-center align-middle w-auto h-10 px-6 ">
                              {/* <img src={shoppingbag} alt="" /> */}
                              Введите количество
                            </button>
                          </td>
                          <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                            <button className="gap-3 bg-[#1F1F1F] rounded-full ...  flex items-center align-middle w-auto h-10 px-6 text-white ">
                              <img src={shoppingbag} alt="" />
                              Корзина
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
          {/* <CatalogChangeDetail /> */}
        </div>
      </div>
      <div>
        <CatalogTabs />
      </div>
    </div>
  );
};

export default CatalogDetails;
