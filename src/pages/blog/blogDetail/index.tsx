import React, { useEffect, useRef } from "react";
import blognew from "../assets/blognew.png";
import cap from "../assets/cap.png";
import left from "../assets/arrow-left.svg";
import right from "../assets/arrow-right.svg";
import interesting from "../assets/interesting.png";
import { useAppDispatch } from "../../../store";
import { useSelectedBlog } from "../../../store/varia/hooks";
import { fetchSelectedBlog } from "../../../store/varia";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const BlogDetail = () => {
  const dispatch = useAppDispatch();
  const selectedBlog = useSelectedBlog();
  const params = useParams();
  const containerRef = useRef(null);

  useEffect(() => {
    if (!params.id) return;
    dispatch(fetchSelectedBlog(params.id) as any);
  }, [dispatch, params]);

  return (
    <div>
      {selectedBlog && (
        <div dangerouslySetInnerHTML={{ __html: selectedBlog.data.content }} />
      )}
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
  //<div className="mx-auto md:px-5  px-3  w-auto py-5 font-jost">
  //   <div className="font-jost flex justify-center flex-col items-center py-4">
  //     <h2 className=" font-jost font-medium py-4 text-black md:text-3xl text-base">
  //       DTF: быстро, выгодно, неожиданно
  //     </h2>
  //     <img src={blognew} alt="" className="md:w-5/12 flex" />
  //   </div>

  //   <div className="font-jost font-light md:py-5 py-2">
  //     <p>
  //       Мы уже подробно рассказывали (и показывали!) о полноцветном
  //       термотрансфере в нашем блоге, а в этой заметке хотим напомнить, в
  //       каких случаях и почему стоит обратить внимание на DTF. Подробно и на
  //       пальцах объясняем принцип работы, честно говорим о плюсах и минусах,
  //       показываем цифры, при которых нанесение выгодно.{" "}
  //     </p>
  //     <p className="py-3 font-black text-2xl">
  //       <b>Начнем издалека: что такое термотрансфер</b>
  //     </p>
  //     <p className="py-2">
  //       Термотрансфер — метод непрямой печати, для которого создается
  //       промежуточный носитель, с которого изображение переносится при помощи
  //       термопресса. Традиционно промежуточный носитель создается при помощи
  //       трафаретной печати на специальной бумаге, затем обсыпается
  //       гранулированным клеем, его излишек сдувается, и тут термопресс быстро
  //       и надежно фиксирует изображение на ткани. Готово! Термотрансфер обычно
  //       используется в тех случаях, когда прямая трафаретная печать
  //       невозможна, с выступающей фурнитурой, на грубых тканях, где хорошо
  //       закрепляется термопрессом. Часто используется для печати по ветровкам,
  //       рюкзакам и другому неплоскому текстилю. Напомним, что для трафаретной
  //       печати нужно столько же сеток-трафаретов, сколько цветов в вашем
  //       изображении, плюс одна для подложки, если печать производится на
  //       цветном текстиле. Как это реализовано: изображение раскладывается на
  //       отдельные цвета, и под каждый создается своя сетка, при помощи которой
  //       и запечатывается самое изделие (в случае трафаретной печати) или
  //       промежуточный носитель (в нашем случае). Именно поэтому настройка
  //       тиража для обычного термотрансфера и трафаретной печати достаточно
  //       дорогие, потому что предполагают создание сеток, и чем больше сеток
  //       нужно изготовить, тем дороже настройка, зато нанесение на единицу
  //       товара недорогое, что делает эти два метода печати идеальными для
  //       больших тиражей. Поскольку на промежуточный носитель изображение
  //       переносится трафаретной печатью, градиент и полноцветную картинку
  //       сложно воспроизвести из-за ограничений этого метода нанесения.
  //       Оговоримся сразу, что проблему полноцветного изображения и градиента,
  //       теоретически, решить можно оборудованием для трафаретной печати,
  //       которое позволяет использовать многочисленные сетки, но в сфере мерча,
  //       в частности, у нас, применяется оборудование, печатающее шестью
  //       цветами (в среднем).
  //     </p>
  //   </div>
  //   <div className="font-jost md:flex-row md:flex flex-col flex md:py-10 py-6">
  //     <div className="md:w-7/12  flex flex-col justify-end md:py-3 ">
  //       <h2 className="font-medium text-black text-2xl">Что такое DTF?</h2>
  //       <p className="w-auto font-light leading-10">
  //         DTF — это нанесение методом термотрансфера, при котором изображение
  //         печатается на специальном принтере на пленке (поэтому и DTF,
  //         direct-to-film, печать на пленке), а затем термопрессом
  //         прикрепляется к изделию. Изображение, нанесенное методом DTF, может
  //         состоять из нескольких цветов, а может — быть полноцветным. При
  //         печати может использоваться и специальная бумага, но мы печатаем
  //         именно на прозрачной пленке: это помогает нам правильно и быстро
  //         позиционировать термотрансфер на изделии.
  //       </p>
  //     </div>
  //     <div className="md:w-5/12 ">
  //       <img src={cap} className="flex object-cover py-3" alt="" />
  //     </div>
  //   </div>
  //   <div className="font-jost font-light py-10">
  //     <p>
  //       DTF — это нанесение методом термотрансфера, при котором изображение
  //       печатается на специальном принтере на пленке (поэтому и DTF,
  //       direct-to-film, печать на пленке), а затем термопрессом прикрепляется
  //       к изделию. Изображение, нанМы используем белую подложку, для которой
  //       требуется создание одной трафаретной сетки — это позволяет добиться
  //       правильного воспроизведения цвета на цветных товарах. Кстати,
  //       поскольку основу трансфера мы печатаем трафаретным способом, у нас
  //       есть возможность использовать различного рода добавки, которые могут
  //       делать основу более стойкой либо более эластичной.{" "}
  //     </p>
  //     <p>
  //       Отличие от обычного термотрансфера — в методе, которым создается
  //       промежуточный носитель: вместо трафаретной печати используется, как мы
  //       уже говорили, специальный цифровой принтер. Это значит, что
  //       ограничения трафаретной печати сняты: можно перенести и полноцветное
  //       изображение, и градиенты! А поскольку трафаретная сетка нам нужна
  //       всего одна, для подложки, то решена и проблема цены: настройка для DTF
  //       дешевле, чем для обычного термотрансфера в два и более цветов.есенное
  //       методом DTF, может состоять из нескольких цветов, а может — быть
  //       полноцветным. При печати может использоваться и специальная бумага, но
  //       мы печатаем именно на прозрачной пленке: это помогает нам правильно и
  //       быстро позиционировать термотрансфер на изделии.
  //     </p>
  //   </div>
  //   <div className="flex md:justify-center justify-between gap-5 font-jost">
  //     <div>
  //       <button className="rounded-full ... bg-[#BEBEBE] flex md:px-2  justify-center px-2 py-2 gap-3">
  //         <img src={left} alt="" />
  //         <span className="hidden md:flex text-black">Предыдущая статья</span>
  //       </button>
  //       <h5 className="md:hidden font-light text-sm">Пред. статья</h5>
  //     </div>

  //     <div className="flex justify-end flex-col items-end">
  //       <button className="bg-[#1F1F1F] rounded-full ...  flex md:px-8 px-2 py-2 gap-3 justify-end">
  //         <span className="hidden md:flex text-white">Следующая статья</span>
  //         <img src={right} alt="" />
  //       </button>
  //       <h5 className="md:hidden font-light text-sm">След. статья</h5>
  //     </div>
  //   </div>
  //   <div className="font-jost py-7">
  //     <span className="text-black md:py-2 ">Может быть интересно</span>
  //     <div className="py-2">
  //       <hr className=" bg-[#898989] w-auto h-0.4 " />
  //     </div>
  //     <div className="flex md:flex-row flex-col font-jost">
  //       <div className="flex py-3">
  //         <div>
  //           <img src={interesting} alt="" className="md:h-32 h-24 w-96" />
  //         </div>
  //         <div className="md:px-4 px-1 flex flex-col flex-wrap">
  //           <p className="hidden md:block">
  //             <time>11.07.2022</time>
  //           </p>
  //           <span className="font-bold text-xs flex">
  //             DTF: быстро, выгодно, неожиданно
  //           </span>
  //           <p className="text-xs">
  //             Мы уже подробно рассказывали (и показывали!) о полноцветном
  //             термотрансфере в нашем блоге, а в этой заметке хотим{" "}
  //           </p>
  //         </div>
  //       </div>
  //       <div className="flex py-3">
  //         <div>
  //           <img src={interesting} alt="" className="md:h-32 h-24 w-96" />
  //         </div>
  //         <div className="md:px-4 px-1 flex flex-col flex-wrap">
  //           <p className="hidden md:block">
  //             <time>11.07.2022</time>
  //           </p>
  //           <span className="font-bold text-xs flex">
  //             DTF: быстро, выгодно, неожиданно
  //           </span>
  //           <p className="text-xs">
  //             Мы уже подробно рассказывали (и показывали!) о полноцветном
  //             термотрансфере в нашем блоге, а в этой заметке хотим{" "}
  //           </p>
  //         </div>
  //       </div>
  //       <div className="flex py-3">
  //         <div>
  //           <img src={interesting} alt="" className="md:h-32 h-24 w-96" />
  //         </div>
  //         <div className="md:px-4 px-1 flex flex-col flex-wrap">
  //           <p className="hidden md:block">
  //             <time>11.07.2022</time>
  //           </p>
  //           <span className="font-bold text-xs flex">
  //             DTF: быстро, выгодно, неожиданно
  //           </span>
  //           <p className="text-xs">
  //             Мы уже подробно рассказывали (и показывали!) о полноцветном
  //             термотрансфере в нашем блоге, а в этой заметке хотим{" "}
  //           </p>
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  // </div>
};

export default BlogDetail;
