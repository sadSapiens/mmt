import React from "react";
import newspoto from "../assets/blognew.png";

const BlogNews = () => {
  return (
    <div className="mx-auto px-9   w-auto py-5 font-jost">
      <div className="flex justify-between">
        <div className="w-4/12">
          <img src={newspoto} alt="" />
        </div>
        <div className="w-9/12 px-9  ">
          <button className="text-[#3A4FE9]">Последние новости</button>
          <div className="py-10">
            <h2 className="font-semibold text-black">
              DTF: быстро, выгодно, неожиданно
            </h2>
            <p className="py-4">
              Мы уже подробно рассказывали (и показывали!) о полноцветном
              термотрансфере в нашем блоге, а в этой заметке хотим напомнить, в
              каких случаях и почему стоит обратить...
            </p>
            <button className="rounded-full bg-[#1F1F1F]  my-5 text-white w-52 py-1">
              Читать статью
            </button>

            <p>
              <time>11.07.2022</time> -- ММТ
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogNews;
