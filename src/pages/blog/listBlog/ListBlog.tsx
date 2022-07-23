import React from "react";
import bottle from "../assets/bottle.png";
import newsone from "../assets/newsone.png";
import newstwo from "../assets/newsyellow.png";
import newsthree from "../assets/newsthree.png";
import BlogNews from "../blogDetail/BlogNews";
import search from "../assets/search.png";

const ListBlog = () => {
  return (
    <>
      <div className="bg-[#3A4FE9] mx-0 h-28 flex justify-center">
        <span className="flex items-center justify-center text-white text-2xl font-semibold">
          Блог
        </span>
      </div>

      <div className="mx-auto px-9   w-auto py-5 font-jost">
        <div className="mt-[-6vh] flex justify-center items-center">
          <label className="relative block">
            <span className="sr-only">Search</span>
            <span className="absolute inset-y-0 left-0 flex items-center pl-2">
              <img className="h-2 w-auto sm:h-5" src={search} alt="" />
            </span>
            <input
              className=" placeholder:text-slate-800 font-jost font-light block w-full border-none rounded-full py-2 pl-9 pr-3 shadow-xl  focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
              placeholder="Поиск..."
              type="text"
              name="search"
            />
          </label>
        </div>
        <BlogNews />

        <div className="flex flex-row  justify-center items-center">
          <div className="w-4/12 flex flex-col shadow-xl my-5 mx-5">
            <img
              src={newsone}
              alt=""
              className="w-96 flex justify-center items-center place-self-center "
            />
            <div className="px-4 ">
              <div className="flex justify-between px-5">
                <span>Последние новости</span>
                <p>
                  <time>11.07.2022</time> -- ММТ
                </p>
              </div>
              <div className="py-10">
                <h2 className="font-semibold text-black">
                  DTF: быстро, выгодно, неожиданно
                </h2>
                <p className="py-4">
                  Мы уже подробно рассказывали (и показывали!) о полноцветном
                  термотрансфере в нашем блоге, а в этой заметке хотим
                  напомнить, в каких случаях и почему стоит обратить...
                </p>
              </div>
            </div>
          </div>
          <div className="w-4/12 flex flex-col shadow-xl my-5 mx-5">
            <img
              src={newstwo}
              alt=""
              className="w-96 flex justify-center items-center place-self-center "
            />
            <div className="px-4">
              <div className="flex justify-between px-5">
                <span>Мероприятия</span>
                <p>
                  <time>11.07.2022</time> -- ММТ
                </p>
              </div>
              <div className="py-10">
                <h2 className="font-semibold text-black">
                  DTF: быстро, выгодно, неожиданно
                </h2>
                <p className="py-4">
                  Мы уже подробно рассказывали (и показывали!) о полноцветном
                  термотрансфере в нашем блоге, а в этой заметке хотим
                  напомнить, в каких случаях и почему стоит обратить...
                </p>
              </div>
            </div>
          </div>
          <div className="w-4/12 flex flex-col shadow-xl my-5 mx-5">
            <img
              src={newsthree}
              alt=""
              className="w-96 flex justify-center items-center place-self-center "
            />
            <div className="px-4">
              <div className="flex justify-between px-5">
                <span>Акции</span>
                <p>
                  <time>11.07.2022</time> -- ММТ
                </p>
              </div>
              <div className="py-10">
                <h2 className="font-semibold text-black">
                  DTF: быстро, выгодно, неожиданно
                </h2>
                <p className="py-4">
                  Мы уже подробно рассказывали (и показывали!) о полноцветном
                  термотрансфере в нашем блоге, а в этой заметке хотим
                  напомнить, в каких случаях и почему стоит обратить...
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row  justify-center items-center ">
          <div className="w-4/12 flex flex-col shadow-xl my-5 mx-5">
            <img
              src={newsone}
              alt=""
              className="w-96 flex justify-center items-center place-self-center "
            />
            <div className="px-4 ">
              <div className="flex justify-between px-5">
                <span>Последние новости</span>
                <p>
                  <time>11.07.2022</time> -- ММТ
                </p>
              </div>
              <div className="py-10">
                <h2 className="font-semibold text-black">
                  DTF: быстро, выгодно, неожиданно
                </h2>
                <p className="py-4">
                  Мы уже подробно рассказывали (и показывали!) о полноцветном
                  термотрансфере в нашем блоге, а в этой заметке хотим
                  напомнить, в каких случаях и почему стоит обратить...
                </p>
              </div>
            </div>
          </div>
          <div className="w-4/12 flex flex-col shadow-xl my-5 mx-5">
            <img
              src={newstwo}
              alt=""
              className="w-96 flex justify-center items-center place-self-center "
            />
            <div className="px-4">
              <div className="flex justify-between px-5">
                <span>Мероприятия</span>
                <p>
                  <time>11.07.2022</time> -- ММТ
                </p>
              </div>
              <div className="py-10">
                <h2 className="font-semibold text-black">
                  DTF: быстро, выгодно, неожиданно
                </h2>
                <p className="py-4">
                  Мы уже подробно рассказывали (и показывали!) о полноцветном
                  термотрансфере в нашем блоге, а в этой заметке хотим
                  напомнить, в каких случаях и почему стоит обратить...
                </p>
              </div>
            </div>
          </div>
          <div className="w-4/12 flex flex-col shadow-xl my-5 mx-5">
            <img
              src={newsthree}
              alt=""
              className="w-96 flex justify-center items-center place-self-center "
            />
            <div className="px-4">
              <div className="flex justify-between px-5">
                <span>Акции</span>
                <p>
                  <time>11.07.2022</time> -- ММТ
                </p>
              </div>
              <div className="py-10">
                <h2 className="font-semibold text-black">
                  DTF: быстро, выгодно, неожиданно
                </h2>
                <p className="py-4">
                  Мы уже подробно рассказывали (и показывали!) о полноцветном
                  термотрансфере в нашем блоге, а в этой заметке хотим
                  напомнить, в каких случаях и почему стоит обратить...
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ListBlog;
