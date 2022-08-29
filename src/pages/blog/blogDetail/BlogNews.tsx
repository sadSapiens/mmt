import React, { useEffect } from "react";
import { useAppDispatch } from "../../../store";
import { fetchBlogInfo } from "../../../store/varia";
import { useBlogNews } from "../../../store/varia/hooks";
import newspoto from "../assets/blognew.png";

const BlogNews = () => {
  const dispatch = useAppDispatch();
  const blogNews = useBlogNews();
  useEffect(() => {
    dispatch(fetchBlogInfo() as any);
  }, []);
  return (
    <div className="mx-auto px-9   w-auto py-5 font-jost">
      <div className="flex flex-col md:flex-row justify-between">
        <div className="md:w-4/12  ">
          <img src={newspoto} alt="" />
        </div>
        <div className="md:w-9/12  md:px-9    ">
          <div className="">
            <h2 className="font-semibold text-black">
              {/* {blogNews.data.map(item) => (
              <span>{ item.id}</span>
              )} */}
              {/* {} */}
              загловок
            </h2>
            <p className="py-4 flex">
              Мы уже подробно рассказывали (и показывали!) о полноцветном
              термотрансфере в нашем блоге, а в этой заметке хотим напомнить, в
              каких случаях и почему стоит обратить...
            </p>
            <div className="flex justify-center items-center md:flex md:justify-start">
              <button className="  rounded-full bg-[#1F1F1F]  my-5 text-white  px-14 py-2">
                Читать статью
              </button>
            </div>

            <p className="hidden md:flex">
              <time>11.07.2022</time> -- ММТ
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogNews;
