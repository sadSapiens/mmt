import React from "react";
import bottle from "../assets/bottle.png";
import newsone from "../assets/newsone.png";
import newstwo from "../assets/newsyellow.png";
import newsthree from "../assets/newsthree.png";
import BlogNews from "../blogDetail/BlogNews";

const ListBlog = () => {
  return (
    <div className="mx-auto px-9   w-auto py-5 font-jost">
      <BlogNews />

      <div className="flex flex-row  justify-center items-center">
        <div className="w-4/12 flex flex-col">
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
                термотрансфере в нашем блоге, а в этой заметке хотим напомнить,
                в каких случаях и почему стоит обратить...
              </p>
            </div>
          </div>
        </div>
        <div className="w-4/12 flex flex-col">
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
                термотрансфере в нашем блоге, а в этой заметке хотим напомнить,
                в каких случаях и почему стоит обратить...
              </p>
            </div>
          </div>
        </div>
        <div className="w-4/12 flex flex-col">
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
                термотрансфере в нашем блоге, а в этой заметке хотим напомнить,
                в каких случаях и почему стоит обратить...
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row  justify-center items-center">
        <div className="w-4/12 flex flex-col">
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
                термотрансфере в нашем блоге, а в этой заметке хотим напомнить,
                в каких случаях и почему стоит обратить...
              </p>
            </div>
          </div>
        </div>
        <div className="w-4/12 flex flex-col">
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
                термотрансфере в нашем блоге, а в этой заметке хотим напомнить,
                в каких случаях и почему стоит обратить...
              </p>
            </div>
          </div>
        </div>
        <div className="w-4/12 flex flex-col">
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
                термотрансфере в нашем блоге, а в этой заметке хотим напомнить,
                в каких случаях и почему стоит обратить...
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListBlog;
