import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useAppDispatch } from "../../store";
import { fetchCategories } from "../../store/category";
import { useCategoryProducts } from "../../store/category/hooks";
import catalog from "../../assets/img/catalog.png";

import "./megamenu.css";
import { useHome } from "../../store/varia/hooks";
import { fetchHome } from "../../store/varia";

const MegaMenu = () => {
  const [isOpenCatalog, setIsOpenCatalog] = useState(false);
  const [isOpenSub, setIsOpenSub] = useState(false);

  const [isExpanded, toggleExpansion] = React.useState(false);
  const [subcategories, setSubcategories] = useState([]);

  const dispatch = useAppDispatch();
  const categories = useCategoryProducts();

  useEffect(() => {
    dispatch(fetchCategories() as any);
  }, [dispatch]);
  const home = useHome();
  return (
    <>
      <div className="w-full">
        <div className="  w-full">
          <div
            onMouseMove={() => setIsOpenCatalog(true)}
            onMouseLeave={() => setIsOpenCatalog(false)}
            className="drop-downn flex md:flex-row flex-col"
          >
            <div
              onClick={() => setIsOpenCatalog(!isOpenCatalog)}
              className="flex flex-row md:justify-center md:items-center justify-end items-center h-10"
            >
              <img src={catalog} className="object-contain" alt="" />
              Каталог
            </div>
            {/*  */}
            {/*  */}
            <div
              style={{
                display: isOpenCatalog ? "block" : "none",
              }}
              className="megablock bg-[#343434] py-2  "
              onClick={() => setIsOpenCatalog(true)}
            >
              {home && home.types.length && (
                <div className="sm:hidden  flex flex-row gap-4  overflow-x-auto  overflow-y-clip scroll-smooth justify-start md:justify-center px-4 w-full md:w-auto">
                  {home.types.map((item, i) => (
                    <button
                      key={i}
                      className="bg-[#65A8E0] px-4 rounded-full ..."
                    >
                      {item.name}
                    </button>
                  ))}
                  <></>
                  {/* <span>termos</span> */}
                </div>
              )}
              <ul className="flex justify-around items-start text-start">
                <div className="flex-col overflow-y-scroll scroll-photo overflow-x-clip  h-96 justify-start items-center text-start md:w-4/12 w-full  md:border-r-slate-100 md:border-r-[1px]">
                  {categories.length > 0 &&
                    categories.map((category: any, i: number) => (
                      <div key={i}>
                        <Link to={`catalog?categoryId=${category.id}`}>
                          <li
                            className="  category h-8 flex justify-start pl-14 text-left leading-normal items-center w-full md:border-0 border-b-white border-b-[1px] "
                            key={i}
                            onMouseMove={() =>
                              setSubcategories(category.subcategories)
                            }
                          // onClick={() => setIsOpenSub(!isOpenSub)}
                          >
                            {category.name}
                          </li>
                        </Link>
                      </div>
                    ))}
                </div>

                <ul className="hidden md:flex flex-col w-full px-6">
                  <div className="hidden  md:flex w-full overflow-x-auto ">
                    {home && home.types.length && (
                      <div className="flex flex-row gap-4   justify-start md:justify-center px-4 w-full md:w-auto">
                        {/* {home?.data.map((item) => { */}
                        {home.types.map((item, i) => (
                          <button
                            key={i}
                            className="bg-[#65A8E0] px-4 rounded-full ..."
                          >
                            {item.name}
                          </button>
                        ))}
                        <></>
                        {/* })} */}
                        <span>termos</span>
                      </div>
                    )}
                  </div>
                  <div
                  // style={{
                  //   display: isOpenSub ? "block" : "none",
                  // }}
                  // onClick={() => setIsOpenSub(true)}
                  >
                    <div className="w-4/12 h-56 overflow-x-auto overflow-y-clip">
                      {subcategories.length > 0 &&
                        subcategories.map((item: any, i: number) => (
                          <Link
                            key={i}
                            onClick={() => setIsOpenCatalog(true)}
                            to={`catalog?categoryId=${item.id}`}
                            className="h-8 py-2  w-full   md:flex"
                          >
                            {item.name}
                          </Link>
                        ))}
                    </div>
                  </div>
                </ul>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MegaMenu;
