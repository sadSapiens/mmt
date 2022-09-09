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
    <div>
      <div className="w-full flex justify-center">
        {selectedBlog && (
          <>
            <h1>{selectedBlog.data.title}</h1>
            <img src={selectedBlog.data.picture} alt="" />
          </>
        )}
      </div>
      {selectedBlog && (
        <div
          className="break-all"
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
              <Link to={`/blog/${item.id}`} className="w-96">
                <div className="flex py-3 w-96 mx-2">
                  <div>
                    <img
                      src={item.picture}
                      alt=""
                      className="object-contain md:h-32 h-24 w-52"
                    />
                  </div>

                  <div className="md:px-4 px-1 flex flex-col flex-wrap w-46">
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
  );
};
export default BlogDetail;
