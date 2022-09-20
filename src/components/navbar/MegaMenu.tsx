import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAppDispatch } from "../../store";
import { fetchCategories } from "../../store/category";
import { useCategoryProducts } from "../../store/category/hooks";
import catalog from "../../assets/img/catalog.png";
import "./megamenu.css";
import { useHome } from "../../store/varia/hooks";
interface IMyProps {
  isBurger: boolean;
  setIsBurger: (value: boolean) => void;
}
const MegaMenu: React.FC<IMyProps> = (props: IMyProps) => {
  const [isOpenCatalog, setIsOpenCatalog] = useState(false);
  //   console.log("isOpenCatalog", isOpenCatalog);
  // const [isOpenSub, setIsOpenSub] = useState(false);

  const [isCategoryes, setIsCategoryes] = React.useState(false);
  const [subcategories, setSubcategories] = useState([]);
  const [activeCategory, setActiveCategory] = useState("");

  const dispatch = useAppDispatch();
  const categories = useCategoryProducts();

  useEffect(() => {
    dispatch(fetchCategories() as any);
  }, [dispatch]);
  const home = useHome();

  const handleClear = () => {
    setSubcategories([]);
    setActiveCategory("");
    setIsCategoryes(false);
    setIsOpenCatalog(false);
  };

  return (
    <>
      <div className="w-full">
        <div className="  w-full">
          <div
            className="drop-downn flex md:flex-row flex-col"
            onMouseLeave={() => setIsOpenCatalog(!isOpenCatalog)}
            // onClick={() => setIsOpenCatalog(!isOpenCatalog)}
          >
            {!isOpenCatalog && (
              <div
                className="flex flex-row md:justify-center md:items-center justify-end items-center h-10 px-3"
                onMouseMove={() => setIsOpenCatalog(!isOpenCatalog)}
              >
                <img src={catalog} className="object-contain flex" alt="" />
                <span>Каталог</span>
              </div>
            )}
            <div
              className="megablock bg-[#343434] py-2"
              style={{
                display: isOpenCatalog ? "block " : "none",
              }}
              // onClick={() => setIsOpenCatalog(!isOpenCatalog)}
            >
              {props.isBurger && (
                <div className="ml-3 mb-3 text-left">
                  {`< `}
                  {/* <img src={arrow} alt="" /> */}
                  {subcategories.length > 0 ? (
                    <span
                      className="font-light text-xl top-36"
                      onClick={handleClear}
                    >
                      {activeCategory}
                    </span>
                  ) : (
                    <span
                      className="font-light text-xl"
                      onClick={() => setIsOpenCatalog(!isOpenCatalog)}
                    >
                      Каталог
                    </span>
                  )}
                </div>
              )}

              {home && home.types.length && (
                <div className="sm:hidden m-auto pb-4 flex flex-row gap-4  overflow-x-auto  overflow-y-clip scroll-smooth justify-start md:justify-center px-4 w-full md:w-auto">
                  {home.types.map((item, i) => (
                    <Link key={i} to={`/catalog?type=${item.id}`}>
                      <button
                        onClick={() => props.setIsBurger(false)}
                        className="bg-[#65A8E0] px-4 rounded-full ..."
                      >
                        {item.name}
                      </button>
                    </Link>
                  ))}
                </div>
              )}
              <ul className="flex justify-around items-start text-start ">
                <div className="flex-col overflow-y-scroll scroll-photo overflow-x-clip  h-96 justify-start items-center text-start md:w-4/12 w-full  md:border-r-slate-100 md:border-r-[1px]">
                  {!isCategoryes && categories.length > 0 ? (
                    categories.map((category: any, i: number) => (
                      <div key={i}>
                        <li
                          className=" hover:bg-gray-600 category h-8 flex justify-start pl-14 text-left leading-normal items-center w-full md:border-0 border-b-white border-b-[1px] "
                          key={i}
                          onMouseMove={() =>
                            setSubcategories(category.subcategories)
                          }
                          onClick={() => {
                            setSubcategories(category.subcategories);
                            setActiveCategory(category.name);
                            setIsCategoryes(props.isBurger);
                          }}
                          // onClick={() => setIsOpenSub(!isOpenSub)}
                        >
                          {category.name}
                        </li>
                      </div>
                    ))
                  ) : (
                    <div className="header__link md:hidden flex flex-col gap-1 items-start font-light ml-3">
                      <span className="text-xl font-medium mt-4">
                        {activeCategory}
                      </span>

                      {subcategories.length > 0 &&
                        subcategories.map((item: any, i: number) => (
                          <div key={item.id}>
                            <Link
                              key={i}
                              onClick={() => props.setIsBurger(false)}
                              //   onClick={() => setIsOpenCatalog(true)}
                              to={`/catalog?categoryId=${item.id}`}
                              className="w-full py-1 md:flex"
                            >
                              {item.name}
                            </Link>
                          </div>
                        ))}
                    </div>
                  )}
                </div>

                <ul className="hidden md:flex flex-col w-full px-6">
                  <div className="hidden  md:flex w-full overflow-x-auto ">
                    {home && home.types.length && (
                      <div className="flex flex-row gap-4   justify-start md:justify-center px-4 w-full md:w-auto">
                        {home.types.map((item, i) => (
                          <Link key={i} to={`/catalog?type=${item.id}`}>
                            <button
                              onClick={() => props.setIsBurger(false)}
                              className="bg-[#65A8E0]  px-4 rounded-full ..."
                            >
                              {item.name}
                            </button>
                          </Link>
                        ))}
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
                            onClick={() => props.setIsBurger(false)}
                            to={`/catalog?categoryId=${item.id}`}
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
