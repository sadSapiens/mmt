import React, { useEffect } from "react";
import { useSelectedBlog } from "../../../store/varia/hooks";
import { fetchSelectedBlog } from "../../../store/varia";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useAppDispatch } from "../../../store";
import left from "../assets/arrow-left.svg";
import right from "../assets/arrow-right.svg";

const BlogDetail = () => {
  const dispatch = useAppDispatch();
  const selectedBlog = useSelectedBlog();
  const params = useParams();

  useEffect(() => {
    if (!params.id) return;
    dispatch(fetchSelectedBlog(params.id) as any);
  }, [dispatch, params]);
  console.log(selectedBlog);

  return (
    <>
      <div className="w-full bg-[#3A4FE9] text-center relative pt-4 pb-11">
        <h2 className="text-3xl font-bold text-white">Блог</h2>
        <div className="absolute w-full text-center mt-6">
          <input
            type="text"
            className="w-[330px] rounded-[20px] py-2 outline-none text-center"
            style={{ boxShadow: "0 5px 5px rgba(123, 123, 123, 0.25)" }}
            placeholder="Поиск"
          />
        </div>
      </div>
      <div className="px-12 py-6">
        <div className="w-full flex justify-center text-center flex-col">
          {selectedBlog && (
            <>
              <h1 className="text-2xl py-3 font-bold">{selectedBlog.data.title}</h1>
              <img
                src={`http://212.42.106.82/${selectedBlog.data.picture}`}
                alt=""
                className="max-w-[732px] w-full mx-auto"
              />
            </>
          )}
        </div>
        {selectedBlog && (
          <div
            className="break-all mt-3"
            dangerouslySetInnerHTML={{ __html: selectedBlog.data.content }}
          />
        )}

        <div className="flex md:justify-center justify-between gap-5 font-jost mt-4">
          <Link
            to={`/blog/${
              selectedBlog &&
              selectedBlog.similar_news.length > 0 &&
              selectedBlog.similar_news[0].id
            }
        `}
          >
            <div>
              <button className="rounded-full ... bg-[#BEBEBE] flex md:px-2  justify-center px-2 py-2 gap-3">
                <img src={left} alt="" />
                <span className="hidden md:flex text-black">
                  Предыдущая статья
                </span>
              </button>

              <h5 className="md:hidden font-light text-sm">Пред. статья</h5>
            </div>
          </Link>
          <Link
            to={`/blog/${
              selectedBlog &&
              selectedBlog.similar_news.length > 0 &&
              selectedBlog.similar_news[selectedBlog.similar_news.length - 1].id
            }
        `}
          >
            <div className="flex justify-end flex-col items-end">
              <button className="bg-[#1F1F1F] rounded-full ...  flex md:px-8 px-2 py-2 gap-3 justify-end">
                <span className="hidden md:flex text-white">
                  Следующая статья
                </span>
                <img src={right} alt="" />
              </button>
              <h5 className="md:hidden font-light text-sm">След. статья</h5>
            </div>
          </Link>
        </div>
        <div className="font-jost py-7">
          <span className="text-black md:py-2 ">Может быть интересно</span>

          <div className="py-2">
            <hr className=" bg-[#898989] w-auto h-0.4 " />
          </div>

          <div className="flex md:flex-row md:flex-wrap flex-col font-jost">
            {selectedBlog &&
              selectedBlog.similar_news.length > 0 &&
              selectedBlog.similar_news.map((item: any) => (
                <Link to={`/blog/${item.id}`} className="max-w-[300px] w-full">
                  <div className="flex py-3 mx-2">
                    <div>
                      <img
                        src={`http://212.42.106.82/${item.picture}`}
                        alt=""
                        className="object-cover md:h-18 h-24 w-62"
                      />
                    </div>

                    <div className="md:px-4 px-1 flex flex-col flex-wrap max-w-46 w-full">
                      <p className="hidden md:block">
                        <time>{item.created_at.slice(0, 10)}</time>
                      </p>

                      <p className="font-bold text-xs flex">
                        {item.title.slice(0, 10)}...
                      </p>

                      <p className="text-xs break-all">
                        {item.brief_about.slice(0, 100)}...
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};
export default BlogDetail;
