import React, { useEffect, useState } from "react";
import perizatT from "./assets/perizat.png";
import bermet from "./assets/bermet.png";
import aidai from "./assets/aidai.png";
import zhyldyz from "./assets/zhyldyz.png";
import logo from "./assets/logo.png";
import call from "./assets/call.png";
import aboutImage from "./assets/about.png";
import mail from "./assets/Message.png";
import { useAppDispatch } from "../../store";
import { useAbout } from "../../store/varia/hooks";
import { fetchAbout } from "../../store/varia";

const About = () => {
  const dispatch = useAppDispatch();
  const about = useAbout();
  useEffect(() => {
    dispatch(fetchAbout() as any);
  }, []);

  return (
    <div className=" text-white ">
      <div className="bg-white w-auto h-2"></div>
      <div className="  mx-auto px-9  bg-[#343434] w-auto py-10  md:flex md:justify-between flex flex-col ">
        <div className="md:w-8/12 ">
          <div className=" md:flex md:justify-start flex justify-center items-center ">
            <img src={logo} className="w-40" alt="" />
          </div>
          <div className="py-4 font-light md:px-4">
            {/* <p>
              Ведущая компания на рынке сувенирной продукции, Ваш партнер,
              консультант и помощник в сфере брендированных подарков и рекламной
              продукции. Мы – фанаты сувенирной индустрии! Наши светлые головы
              работают на Ваш бизнес. Мы – созидатели. Творим от создания
              концепта до полного воплощения проекта в жизнь. Мы –
              производители. Произведем то, чего еще нет в природе. А еще, мы –
              немножечко волшебники.
            </p>
            <p className="py-2 ">
              Наша работа – создавать красоту, хорошее настроение и классные
              подарки! Чем мы занимаемся? Мы производим корпоративную,
              рекламную, полиграфическую и текстильную продукцию «под ключ»: от
              концепции подарка или подарочного набора до его реализации. Мы
              работаем напрямую с фабриками-производителями рекламной продукции
              в Китае, с ассортиментом ведущих европейских каталогов, а также
              имеем собственную производственную базу, поэтому мы найдем или
              придумаем подарки для любой целевой аудитории. Мы отлично владеем
              современными технологиями персонализации и всегда порекомендуем
              вам оптимальный вариант.
            </p> */}
            <p>{about && about.main_info.description}</p>
          </div>
          <div className="flex items-center align-middle gap-4 pb-56 md:pb-2">
            <button className="border border-white rounded-full ... w-auto px-12 ">
              Связаться
            </button>
            <button>
              <img src={call} alt="" />
            </button>
          </div>
        </div>
        <div className=" md:w-4/12 md:top-56 md:right-8 w-auto top-[60rem] absolute">
          <img
            // src={about && about.main_info.picture}
            className="md:h-[33rem] md:w-[25rem] h-auto w-72"
            alt=""
          />
        </div>
      </div>

      {/*  */}
      <div className="flex text-black  mx-auto md:px-9 px-4  w-auto pt-28 flex-col md:flex-row">
        <div className="md:hidden flex flex-col">
          <span className="font-semibold ">
            «Мы - команда креативных людей, влюбленных в свое дело, более 9 лет
            занимаемся брендингом и заслужили доверие лидеров рынка.
            <p className="py-3">
              {" "}
              Свежий взгляд и неординарный подход к созданию бизнес мерча – наше
              кредо»
            </p>
          </span>
        </div>
        <div className=" md:w-3/12 w-auto flex md:justify-start items-center flex-col">
          <div className="md:text-center md:w-56 md:flex md:justify-start flex justify-center flex-col items-center pb-4">
            <img
              className="bg-[#343434] w-44 md:w-56 md:flex md:justify-start "
              src={about?.director.picture}
              alt=""
            />
            <h2 className="font-bold py-2">{about?.director.name}</h2>
            <span className="font-light">{about?.director.position}</span>

            <div className="flex text-center justify-center">
              <img src={mail} alt="" />
              <h5 className="font-light">{about?.director.email}</h5>
            </div>
          </div>
        </div>
        <div className="md:w-9/12 md:px-5 w-auto">
          <span className="font-bold hidden md:flex">
            {about?.director.slogan}
          </span>
          <div className="font-light flex flex-col w-auto">
            <p className="font-light text-sm ">
              {about?.director.personal_information}
            </p>
          </div>
        </div>
      </div>
      <div className="flex  md:flex-row text-black justify-around mx-auto md:px-9 px-0   w-auto md:py-5">
        {/*  */}

        <div>
          {about?.employers.map((item: any) => (
            <>
              <div className="flex justify-center items-center flex-col px-9">
                <img
                  className="bg-[#202020]  md:w-80  w-56 h-auto md:h-[28rem] "
                  src={item.picture}
                  alt=""
                />
                <div className="text-center">
                  <h2 className="font-bold">{item.name}</h2>
                  <span>{item.position}</span>

                  <div className="flex text-center justify-center">
                    <img src={mail} alt="" />

                    <h5>{item.email}</h5>
                  </div>
                </div>
              </div>
              <div className=" flex flex-col justify-center items-center bg-[#343434] text-white px-0 py-4 my-4">
                <span className="font-normal text-sm flex justify-center items-center text-center px-4">
                  «От идеи до воплощения корпоративных подарков – волшебный
                  творческий процесс, требующий четкой организации. Время –
                  самое бесценное в нашей жизни. Мы стремимся к эффективному
                  управлению, чтобы потребители вашего бренда стали еще ближе к
                  вам»
                </span>
              </div>
            </>
          ))}
        </div>

        {/*  */}
        {/* <div className="flex justify-center items-center flex-col px-9">
          <img
            className="bg-[#202020]  md:w-80  w-56 h-auto md:h-[28rem]"
            src={zhyldyz}
            alt=""
          />
          <div className="text-center">
            <h2 className="font-bold">{about?.employers[1].name}</h2>
            <span>{about?.employers[1].position}</span>

            <div className="flex text-center justify-center">
              <img src={mail} alt="" />

              <h5>{about?.employers[1].email}</h5>
            </div>
          </div>
        </div>
        <div className="md:hidden flex flex-col justify-center items-center bg-[#343434] text-white px-0 py-4 my-4">
          <span className="font-normal text-sm flex justify-center items-center text-center px-4">
            «От идеи до воплощения корпоративных подарков – волшебный творческий
            процесс, требующий четкой организации. Время – самое бесценное в
            нашей жизни. Мы стремимся к эффективному управлению, чтобы
            потребители вашего бренда стали еще ближе к вам»
          </span>
        </div>
      </div>

      <div className=" hidden md:flex flex-col md:flex-row bg-[#343434]  mx-auto px-9   w-auto py-5">
        <div>
          <span className="font-normal	 text-sm">
            «От идеи до воплощения корпоративных подарков – волшебный творческий
            процесс, требующий четкой организации. Время – самое бесценное в
            нашей жизни. Мы стремимся к эффективному управлению, чтобы
            потребители вашего бренда стали еще ближе к вам»
          </span>
        </div>
        <div>
          <span className="font-normal	 text-sm">
            «Наша цель - помочь компаниям заявить о себе эффективно используя
            бизнес сувениры. Мы постоянно держим руку на пульсе рекламного мира,
            о всех трендах, едва только появившихся, мы сразу информируем своих
            клиентов, чтобы дать им конкурентное преимущество перед другими»
          </span>
        </div>
        <div>
          <span className="font-normal	 text-sm">
            «Люди и бренды неразрывно связаны и находятся в постоянном
            взаимодействии. Моя задача – настроить эту связь на нужную волну,
            чтобы аудитория отвечала взаимностью, впуская ваш бренд в свою
            повседневную жизнь»
          </span>
        </div> */}
      </div>
      <div className="bg-white w-auto h-7"></div>

      {/*  */}
    </div>
  );
};

export default About;
