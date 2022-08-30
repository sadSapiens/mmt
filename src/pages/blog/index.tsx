import React, { useEffect, useState } from "react";
import newsone from "./assets/newsone.png";
import newstwo from "./assets/newsyellow.png";
import newsthree from "./assets/newsthree.png";
import BlogNews from "./blogDetail/BlogNews";
import search from "./assets/search.png";
import newspoto from "./assets/blognew.png";
import { useAppDispatch } from "../../store";
import { useBlogNews } from "../../store/varia/hooks";
import { fetchBlogInfo } from "../../store/varia";
import { Link } from "react-router-dom";

const Blog = () => {
  const dispatch = useAppDispatch();
  const blogNews = useBlogNews();
  const [search, setSerch] = useState("");
  useEffect(() => {
    dispatch(fetchBlogInfo(search) as any);
  }, [search, dispatch]);

  console.log(blogNews, "blog");

  return (
    <>
      {blogNews ? (
        <>
          <div className="bg-[#3A4FE9] mx-0 h-28 flex justify-center container">
            <span className="flex items-center justify-center text-white text-2xl font-semibold">
              Блог
            </span>
          </div>

          <div className="mx-auto md:px-9 px-0   w-auto py-5 font-jost">
            <div className="mt-[-10vh] flex justify-center items-center">
              <label className="relative block">
                <span className="sr-only">Search</span>
                <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                  <img className="h-2 w-auto sm:h-5" src={search} alt="" />
                </span>
                <input
                  value={search}
                  onChange={(e: any) => setSerch(e.target.value)}
                  className=" placeholder:text-slate-800 font-jost font-light block w-full border-none rounded-full py-2 pl-9 pr-3 shadow-xl  focus:outline-none   sm:text-sm"
                  placeholder="Поиск..."
                  type="text"
                  name="search"
                />
              </label>
            </div>
            {/* <BlogNews /> */}

            <div className="mx-auto px-9   w-auto py-5 font-jost">
              <div className="flex flex-col md:flex-row justify-between">
                <div className="md:w-4/12  ">
                  <img src={newspoto} alt="" />
                </div>
                <div className="md:w-9/12  md:px-9    ">
                  <div className="">
                    <h2 className="font-semibold text-black">
                      {blogNews && blogNews.data
                        ? blogNews.data.map((item: any, i: number) => (
                            <div>{item.title}</div>
                          ))
                        : null}
                    </h2>
                    <p className="py-4 flex text-ellipsis overflow-hidden ... text-black">
                      {blogNews.data[0].content}
                    </p>
                    <div className="flex justify-center items-center md:flex md:justify-start">
                      <Link to={`/blog/${blogNews.data[0].author}`}>
                        <button className="  rounded-full bg-[#1F1F1F]  my-5 text-white  px-14 py-2">
                          Читать статью
                        </button>
                      </Link>
                    </div>

                    <p className="hidden md:flex">
                      <time>11.07.2022</time> -- ММТ
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {blogNews ? (
              <div className="flex flex-row gap-4 flex-wrap justify-center items-center">
                {blogNews.data.map((item, i) => (
                  <div
                    key={i}
                    className="md:w-3/12 w-5/12 flex flex-col shadow-xl my-5 md:mx-5 "
                  >
                    <Link to={`/blog/${item.author}`}>
                      <img
                        src={newsone}
                        alt=""
                        className="w-96 flex justify-center items-center place-self-center "
                      />
                      <div className="md:px-4 ">
                        <div className="flex justify-between ">
                          <span className="hidden md:flex">
                            Последние новости
                          </span>
                          <p className="text-sm flex items-center">
                            <time>11.07.2022</time> -- ММТ
                          </p>
                        </div>
                        <div className="py-10">
                          <h2 className="md:font-semibold md:text-lg text-black text-sm flex text-ellipsis overflow-hidden ... ">
                            {item.title ? item.title : null}
                          </h2>
                          <p className="py-4 hidden md:flex text-ellipsis overflow-hidden ... text-black">
                            {item.content}
                          </p>
                        </div>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            ) : (
              <p>nothing</p>
            )}
          </div>
        </>
      ) : null}
    </>
  );
};

export default Blog;
