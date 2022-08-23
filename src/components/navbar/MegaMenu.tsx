import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useAppDispatch } from "../../store";
import { fetchCategories } from "../../store/category";
import { useCategoryProducts } from "../../store/category/hooks";
import catalog from "../../assets/img/catalog.png";

import "./megamenu.css";
import TypeProduct from "./TypeProduct";
import { useHome } from "../../store/varia/hooks";
import { fetchHome } from "../../store/varia";

const MegaMenu = () => {
  const [open, setOpen] = useState(false);
  const [isOpenCatalog, setIsOpenCatalog] = useState(false);
  const dispatch = useAppDispatch();
  const categories = useCategoryProducts();

  useEffect(() => {
    dispatch(fetchCategories() as any);
  }, []);

  const [subcategories, setSubcategories] = useState([]);

  //
  const home = useHome();
  useEffect(() => {
    dispatch(fetchHome() as any);
  }, []);

  return (
    <>
      <div className="w-full">
        <div className="  w-full" onClick={() => setOpen(true)}>
          <div
            onMouseMove={() => setIsOpenCatalog(true)}
            onMouseLeave={() => setIsOpenCatalog(false)}
            className="drop-downn flex md:flex-row flex-col"
          >
            <div className="flex flex-row md:justify-center md:items-center justify-end items-end h-10">
              <img src={catalog} className="object-contain" alt="" />
              Каталог
            </div>
            {/*  */}
            {/*  */}
            <div
              style={{
                display: isOpenCatalog ? "block" : "none",
              }}
              className="megablock bg-[#343434] p-3  "
            >
              {home && home.types.length && (
                <div className="sm:hidden  flex flex-row gap-4  overflow-x-auto overflow-y-clip scroll-smooth justify-start md:justify-center px-4 w-full md:w-auto">
                  {home.types.map((item) => (
                    <button className="bg-[#65A8E0] px-4 rounded-full ...">
                      {item.name}
                    </button>
                  ))}
                  <></>
                  <span>termos</span>
                  <span>termos</span>
                  <span>termos</span>
                  <span>termos</span>
                  <span>termos</span>
                </div>
              )}
              <ul className="flex justify-around items-start text-start">
                <div className="flex-col justify-start items-center text-start md:w-4/12 w-full  md:border-r-slate-100 md:border-r-[1px]">
                  {categories.length > 0 &&
                    categories.map((category: any, i: number) => (
                      <>
                        <li
                          className="  category h-10 flex justify-start pl-14 text-left leading-normal items-center w-full"
                          key={i}
                          onMouseMove={() =>
                            setSubcategories(category.subcategories)
                          }
                        >
                          {category.name}
                        </li>
                      </>
                    ))}
                </div>

                <ul className=" w-full px-6">
                  <div className="hidden  md:flex w-full overflow-x-auto ">
                    {home && home.types.length && (
                      <div className="flex flex-row gap-4  overflow-x-auto overflow-y-clip  justify-start md:justify-center px-4 w-full md:w-auto">
                        {/* {home?.data.map((item) => { */}
                        {home.types.map((item) => (
                          <button className="bg-[#65A8E0] px-4 rounded-full ...">
                            {item.name}
                          </button>
                        ))}
                        <></>
                        {/* })} */}
                        <span>termos</span>
                        <span>termos</span>
                        <span>termos</span>
                        <span>termos</span>
                        <span>termos</span>
                      </div>
                    )}
                  </div>
                  <div className="flex flex-row">
                    <div className="w-4/12">
                      {subcategories.length > 0 &&
                        subcategories.map((item: any, i: number) => (
                          <Link
                            // key={i}
                            onClick={() => setIsOpenCatalog(false)}
                            to={`catalog?categoryId=${item.id}`}
                            className="h-8 py-2  w-full hidden md:flex"
                          >
                            {item.name}
                          </Link>
                        ))}
                    </div>
                    <div className="w-4/12">
                      {subcategories.length > 0 &&
                        subcategories.map((item: any, i: number) => (
                          <Link
                            // key={i}
                            onClick={() => setIsOpenCatalog(false)}
                            to={`catalog?categoryId=${item.id}`}
                            className="h-8 py-2  w-full hidden md:flex"
                          >
                            {item.name}
                          </Link>
                        ))}
                    </div>
                    <div className="w-4/12">
                      {subcategories.length > 0 &&
                        subcategories.map((item: any, i: number) => (
                          <Link
                            // key={i}
                            onClick={() => setIsOpenCatalog(false)}
                            to={`catalog?categoryId=${item.id}`}
                            className="h-8 py-2  w-full hidden md:flex"
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
//  {home.reviews.map((item) => (
//                   <>
//                     <img className="rounded-full" src={item.picture} alt="" />
//                     <span className=" flex  text-center">
//                       Валентина Евгеньевна <br /> Маркетолог “Alfa Bank”
//                     </span>
//                     <p className="font-light	">
//                       {item.review}
//                     </p>
//                   </>
//                 )}
