import React from "react";
import perizatT from "./assets/perizat.png";
import bermet from "./assets/bermet.png";
import aidai from "./assets/aidai.png";
import zhyldyz from "./assets/zhyldyz.png";
import logo from "./assets/logo.png";
import call from "./assets/call.png";
import about from "./assets/about.png";
import mail from "./assets/Message.png";

const Team = () => {
  return (
    <div className=" text-white ">
      <div className="bg-white w-auto h-2"></div>
      <div className="  mx-auto px-9  bg-[#343434] w-auto py-10  md:flex md:justify-between flex flex-col ">
        <div className="md:w-8/12 ">
          <div className=" md:flex md:justify-start flex justify-center items-center ">
            <img src={logo} className="w-40" alt="" />
          </div>
          <div className="py-4 font-light md:px-4">
            <p>
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
            </p>
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
        <div className=" md:w-4/12 md:top-72 md:right-8 w-auto top-[60rem] absolute">
          <img
            src={about}
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
              src={perizatT}
              alt=""
            />
            <h2 className="font-bold py-2">Перизат Токтомаматова</h2>
            <span className="font-light">
              Основатель и Генеральный директор
            </span>

            <div className="flex text-center justify-center">
              <img src={mail} alt="" />
              <h5 className="font-light">p.toktomatova@mmt.kg</h5>
            </div>
          </div>
        </div>
        <div className="md:w-9/12 md:px-5 w-auto">
          <span className="font-bold hidden md:flex">
            «Мы - команда креативных людей, влюбленных в свое дело, более 9 лет
            занимаемся брендингом и заслужили доверие лидеров рынка. Свежий
            взгляд и неординарный подход к созданию бизнес мерча – наше кредо»
          </span>
          <div className="font-light flex flex-col w-auto">
            <p className="font-light text-sm ">
              Я выпускница технического ВУЗа, инженер. Свое дело открыла в 23
              года. Мой путь к предпринимательству казался мне естественной
              эволюцией. Он не был основан только на желании иметь свой бизнес,
              напротив, это было жизненно-важной необходимостью. После окончания
              ВУЗа я успела поработать на госслужбе, в международных проектах,
              подрабатывала продажами тяжелой спецтехники. Мой обычный рабочий
              день длился по 15 часов без перерыва. Я понимала, что хочу это
              время и энергию тратить на свое дело.
              <p className="py-5">
                Инженера по образованию и творческого человека по натуре, меня
                привлек яркий мир рекламной продукции. Ежедневно мимо нас
                проходят люди в майках Jack Daniel’s, с рюкзаками от Beelinе, с
                огромными кружками Nescafe в руках, а по дорогам столицы
                разъезжают автомобили с логотипами строительных компаний. Вы
                задумывались, насколько глубоко осели названия этих брендов в
                вашей голове? Для компаний, которые стремятся к успеху важно
                дифференцироваться и развивать свой бренд. Так и возникла идея
                создать рекламно-производственную компанию по брендированию
                бизнес-сувениров.  После панических страхов и борьбы с первыми
                препятствиями, потратив много времени на обучение и изучение
                рынка, я была на грани провала. Вместо того чтобы сдаться, я
                стала развивать в себе сильное чувство страсти и мотивации к
                самообразованию, чтобы достичь новых высот в развитии бизнеса и
                уровне дохода.
              </p>
              <p>
                  Для меня это превратилось в настоящий вызов, но я не
                представляю другой дороги для себя. После девяти лет неустанного
                труда над собственным бизнесом я ежегодно ставлю задачу
                наращивания масштабов своего дела.
              </p>
              <p className="py-5">
                  На сегодняшний день мы помогли более 1000 компаниям выгодно
                отличиться от конкурентов и повысить узнаваемость и лояльность
                не только в Кыргызстане, но и за пределами страны. Эта работа
                подарила мне свободу и гибкость, я ничуть не жалею о пройденном
                пути, потому что теперь у меня есть жизнь и дело, которые я
                обожаю!
              </p>
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row text-black justify-around mx-auto md:px-9 px-0   w-auto md:py-5">
        <div className="flex justify-center items-center flex-col px-9">
          <img
            className="bg-[#202020] md:w-80  w-56 h-auto md:h-[28rem]"
            src={bermet}
            alt=""
          />
          <div className="text-center">
            <h2 className="font-bold">Перизат Токтомаматова</h2>
            <span>Основатель и Генеральный директор</span>

            <div className="flex text-center justify-center">
              <img src={mail} alt="" />

              <h5>p.toktomatova@mmt.kg</h5>
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
        {/*  */}
        <div className="flex justify-center items-center flex-col px-9">
          <img
            className="bg-[#202020]  md:w-80  w-56 h-auto md:h-[28rem] "
            src={aidai}
            alt=""
          />
          <div className="text-center">
            <h2 className="font-bold">Перизат Токтомаматова</h2>
            <span>Основатель и Генеральный директор</span>

            <div className="flex text-center justify-center">
              <img src={mail} alt="" />

              <h5>p.toktomatova@mmt.kg</h5>
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

        {/*  */}
        <div className="flex justify-center items-center flex-col px-9">
          <img
            className="bg-[#202020]  md:w-80  w-56 h-auto md:h-[28rem]"
            src={zhyldyz}
            alt=""
          />
          <div className="text-center">
            <h2 className="font-bold">Перизат Токтомаматова</h2>
            <span>Основатель и Генеральный директор</span>

            <div className="flex text-center justify-center">
              <img src={mail} alt="" />

              <h5>p.toktomatova@mmt.kg</h5>
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
        {/*  */}
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
        </div>
      </div>
      <div className="bg-white w-auto h-7"></div>

      {/*  */}
    </div>
  );
};

export default Team;
