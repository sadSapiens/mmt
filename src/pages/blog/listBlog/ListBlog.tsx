import React from "react";
import bottle from "../assets/bottle.png";
import shirt from "../assets/shirt.png";
import water from "../assets/water.png";
import book from "../assets/book.png";

const ListBlog = () => {
  return (
    <>
      <div className="mx-auto px-9   w-auto py-5 font-jost">
        <div className="py-3">
          <span>
            {" "}
            <b>Блог</b>
          </span>
        </div>
        <div className="py-10">
          <div className="flex">
            <div className="w-4/12  ">
              <div className="border border-black h-56 w-56">
                <img
                  className=" mt-8 right-[65rem]  absolute h-[29vh] w-auto"
                  src={bottle}
                  alt=""
                />
              </div>
            </div>
            <div className="w-8/12  flex flex-col font-jost">
              <span>16.02.22</span>
              <b className="py-3">
                Многоразовая бутылка или фляга — удачный вариант корпоративного
                подарка
              </b>
              <p className="font-light  py-3 w-3/5">
                Выбирая бутылку или флягу под нанесение, у вас есть возможность
                выбрать не только материал основы, но и объем, дизайн, цветовую
                палитру, метод нанесения, наличие ряда дополнительных функций.
              </p>
              <button className="text-gray flex font-light">
                Подробнее...
              </button>
            </div>
          </div>
        </div>
        <div className="py-10">
          <div className="flex">
            <div className="w-4/12  ">
              <div className="border border-black h-56 w-56">
                <img
                  className=" mt-8 right-[65rem]  absolute h-[29vh] w-auto"
                  src={shirt}
                  alt=""
                />
              </div>
            </div>
            <div className="w-8/12  flex flex-col font-jost">
              <span>16.02.22</span>
              <b className="py-3">
                Многоразовая бутылка или фляга — удачный вариант корпоративного
                подарка
              </b>
              <p className="font-light  py-3 w-3/5">
                Выбирая бутылку или флягу под нанесение, у вас есть возможность
                выбрать не только материал основы, но и объем, дизайн, цветовую
                палитру, метод нанесения, наличие ряда дополнительных функций.
              </p>
              <button className="text-gray flex font-light">
                Подробнее...
              </button>
            </div>
          </div>
        </div>
        <div className="py-10">
          <div className="flex">
            <div className="w-4/12  ">
              <div className="border border-black h-56 w-56">
                <img
                  className=" mt-8 right-[65rem]  absolute h-[29vh] w-auto"
                  src={water}
                  alt=""
                />
              </div>
            </div>
            <div className="w-8/12  flex flex-col font-jost">
              <span>16.02.22</span>
              <b className="py-3">
                Многоразовая бутылка или фляга — удачный вариант корпоративного
                подарка
              </b>
              <p className="font-light  py-3 w-3/5">
                Выбирая бутылку или флягу под нанесение, у вас есть возможность
                выбрать не только материал основы, но и объем, дизайн, цветовую
                палитру, метод нанесения, наличие ряда дополнительных функций.
              </p>
              <button className="text-gray flex font-light">
                Подробнее...
              </button>
            </div>
          </div>
        </div>
        <div className="py-10">
          <div className="flex">
            <div className="w-4/12  ">
              <div className="border border-black h-56 w-56">
                <img
                  className=" mt-8 right-[65rem]  absolute h-[29vh] w-auto"
                  src={book}
                  alt=""
                />
              </div>
            </div>
            <div className="w-8/12  flex flex-col font-jost">
              <span>16.02.22</span>
              <b className="py-3">
                Многоразовая бутылка или фляга — удачный вариант корпоративного
                подарка
              </b>
              <p className="font-light  py-3 w-3/5">
                Выбирая бутылку или флягу под нанесение, у вас есть возможность
                выбрать не только материал основы, но и объем, дизайн, цветовую
                палитру, метод нанесения, наличие ряда дополнительных функций.
              </p>
              <button className="text-gray flex font-light">
                Подробнее...
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ListBlog;
