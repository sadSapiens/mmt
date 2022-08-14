import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAppDispatch } from "../../store";
import { fetchCategories } from "../../store/category";
import { useCategoryProducts } from "../../store/category/hooks";
import catalog from "../../assets/img/catalog.png";

import "./megamenu.css";

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
        <ul className="  w-full" onClick={() => setOpen(true)}>
          <li
            onMouseMove={() => setIsOpenCatalog(true)}
            onMouseLeave={() => setIsOpenCatalog(false)}
            className="drop-downn flex flex-row w-full"
          >
            <div className="flex flex-row justify-center items-center h-10">
              <img src={catalog} className="object-contain" alt="" />
              Каталог
            </div>

            <div
              style={{
                display: isOpenCatalog ? "block" : "none",
              }}
              className="megablock bg-[#343434] p-3  "
            >
              <ul className="flex justify-around items-start text-start">
                <div className="flex-col justify-start items-center text-start w-3/12  border-r-slate-100 border-r-2">
                  {categories.length > 0 &&
                    categories.map((category: any, i: number) => (
                      <li
                        className="  category h-10 flex justify-start "
                        key={i}
                        onMouseMove={() =>
                          setSubcategories(category.subcategories)
                        }
                      >
                        {category.name}
                      </li>
                    ))}
                </div>

                <ul className=" w-9/12 px-6">
                  <div className="py-3 flex gap-5 justify-around row-start-1 flex-start text-start">
                    <button className="bg-[#65A8E0] px-4 rounded-full ...">
                      Новинки
                    </button>
                    <button className="bg-[#79B15E] px-4 rounded-full ...">
                      Эко
                    </button>
                    <button className="bg-yellow-500 px-4 rounded-full ...">
                      Акция
                    </button>
                    <span>termos</span>
                    <span>termos</span>
                    <span>termos</span>
                    <span>termos</span>
                    <span>termos</span>
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
        </ul>
      </div>
    </>
  );
};

export default MegaMenu;
