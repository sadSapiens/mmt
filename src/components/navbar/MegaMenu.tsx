import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAppDispatch } from "../../store";
import { fetchCategories } from "../../store/category";
import { useCategoryProducts } from "../../store/category/hooks";
import catalog from "../../assets/img/catalog.png";

import "./megamenu.css";
import TypeProduct from "./TypeProduct";

const MegaMenu = () => {
  const [open, setOpen] = useState(false);
  const [isOpenCatalog, setIsOpenCatalog] = useState(false);
  const dispatch = useAppDispatch();
  const categories = useCategoryProducts();
  useEffect(() => {
    dispatch(fetchCategories() as any);
  }, []);
  console.log(isOpenCatalog);
  const [subcategories, setSubcategories] = useState([]);

  return (
    <>
      <div className="w-full">
        <div className="  w-full" onClick={() => setOpen(true)}>
          <li
            onMouseMove={() => setIsOpenCatalog(true)}
            onMouseLeave={() => setIsOpenCatalog(false)}
            className="drop-downn flex md:flex-row flex-col w-full"
          >
            <div className="flex flex-row md:justify-center md:items-center justify-end items-end h-10">
              <img src={catalog} className="object-contain" alt="" />
              Каталог
            </div>
            <div className="md:hidden ">
              <TypeProduct />
            </div>

            <div
              style={{
                display: isOpenCatalog ? "block" : "none",
              }}
              className="megablock bg-[#343434] p-3  "
            >
              <ul className="flex justify-around items-start text-start">
                <div className="flex-col justify-start items-center text-start md:w-3/12 w-full  md:border-r-slate-100 md:border-r-2">
                  {categories.length > 0 &&
                    categories.map((category: any, i: number) => (
                      <>
                        <li
                          className="  category h-10 flex justify-start "
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

                <ul className=" w-9/12 px-6">
                  <div className="hidden md:flex">
                    <TypeProduct />
                  </div>
                  <div className="flex flex-col">
                    {subcategories.length > 0 &&
                      subcategories.map((item: any, i: number) => (
                        <Link
                          onClick={() => setIsOpenCatalog(false)}
                          to={`catalog?categoryId=${item.id}`}
                          className="h-8 py-2  w-5/12"
                          key={i}
                        >
                          {item.name}
                        </Link>
                      ))}
                    <div></div>
                  </div>
                </ul>
              </ul>
            </div>
          </li>
        </div>
      </div>
    </>
  );
};

export default MegaMenu;
