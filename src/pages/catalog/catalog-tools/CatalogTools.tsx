import React from "react";
import search from "../assets/search.png";
import newyear from "../assets/image.png";
import "./style.css";

const CatalogTools = () => {
  return (
    <div className="mx-auto px-9   w-auto  font-jost py-9">
      <div className="flex justify-between items-center py-10">
        <h2 className="font-extrabold text-2xl">Каталог</h2>
        <label className="relative block">
          <span className="sr-only">Search</span>
          <span className="absolute inset-y-0 left-0 flex items-center pl-2">
            <img className="h-2 w-auto sm:h-5" src={search} alt="" />
          </span>
          <input
            className=" placeholder:text-slate-400 block  w-full border border-black rounded-full py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
            placeholder="Искать товар"
            type="text"
            name="search"
          />
        </label>
      </div>
      <div className="flex pt-10 ">
        <div className="accordion  flex-col w-3/12  justify-center block ">
          <div className="w-1/8">
            <input
              type="checkbox"
              name="panel"
              id="panel-1"
              className="hidden"
            />
            <label
              htmlFor="panel-1"
              className=" label-faq relative block text-black p-4 shadow border-b border-black"
            >
              Panel 1
            </label>
            <div className="accordion__content overflow-hidden bg-grey-lighter">
              {/* <h2 className="accordion__header pt-4 pl-4">Header</h2> */}

              <div className="flex gap-3 bg-[#ebebe1] px-5">
                {/* <input
                  type="checkbox"
                  className=" checked:bg-blue-500 ... gap-5"
                  placeholder="checkbox"
                  id="checkboxone"
                /> */}
                {/* <label htmlFor="checkboxone">Праздники</label> */}

                <form id="root" name="tree">
                  <header>
                    {/* <h1>Праздники</h1> */}
                    {/* <code>id="root" name="tree" ⽊</code> */}
                  </header>

                  <input id="A" name="trunk" type="checkbox" />
                  <label htmlFor="A" className="far">
                    <code> Праздники</code>
                  </label>
                  <fieldset id="aX" name="branch">
                    {/* <legend>
                      <code> id="aX" name="branch" ⽀</code>
                    </legend> */}
                    <menu>
                      <input
                        id="a1"
                        name="a"
                        className="leaf"
                        type="checkbox"
                      />
                      <label htmlFor="a1" className="far">
                        <code>Новый год</code>
                      </label>
                      <input
                        id="a2"
                        name="a"
                        className="leaf"
                        type="checkbox"
                      />
                      <label htmlFor="a2" className="far">
                        <code>23 февраля</code>
                      </label>
                      <input
                        id="a3"
                        name="a"
                        className="leaf"
                        type="checkbox"
                      />
                      <label htmlFor="a3" className="far">
                        <code> 8 Марта</code>
                      </label>
                      <input
                        id="a4"
                        name="a"
                        className="leaf"
                        type="checkbox"
                      />
                      <label htmlFor="a4" className="far">
                        <code> Нооруз</code>
                      </label>
                    </menu>
                  </fieldset>

                  <header>
                    {/* <h1>Праздники</h1> */}
                    {/* <code>id="root" name="tree" ⽊</code> */}
                  </header>

                  <input id="B" name="trunk" type="checkbox" />
                  <label htmlFor="B" className="far">
                    <code> Праздники</code>
                  </label>
                  <fieldset id="bX" name="branch">
                    {/* <legend>
                      <code> id="aX" name="branch" ⽀</code>
                    </legend> */}
                    <menu>
                      <input
                        id="b1"
                        name="b"
                        className="leaf"
                        type="checkbox"
                      />
                      <label htmlFor="b1" className="far">
                        <code>Новый год</code>
                      </label>
                      <input
                        id="b2"
                        name="b"
                        className="leaf"
                        type="checkbox"
                      />
                      <label htmlFor="b2" className="far">
                        <code>23 февраля</code>
                      </label>
                      <input
                        id="b3"
                        name="b"
                        className="leaf"
                        type="checkbox"
                      />
                      <label htmlFor="b3" className="far">
                        <code> 8 Марта</code>
                      </label>
                      <input
                        id="b4"
                        name="b"
                        className="leaf"
                        type="checkbox"
                      />
                      <label htmlFor="b4" className="far">
                        <code> Нооруз</code>
                      </label>
                    </menu>
                  </fieldset>

                  {/*  */}

                  <input id="C" name="trunk" type="checkbox" />
                  <label htmlFor="C" className="far">
                    <code> Праздники</code>
                  </label>
                  <fieldset id="cX" name="branch">
                    {/* <legend>
                      <code> id="aX" name="branch" ⽀</code>
                    </legend> */}
                    <menu>
                      <input
                        id="c1"
                        name="c"
                        className="leaf"
                        type="checkbox"
                      />
                      <label htmlFor="c1" className="far">
                        <code>Новый год</code>
                      </label>
                      <input
                        id="c2"
                        name="c"
                        className="leaf"
                        type="checkbox"
                      />
                      <label htmlFor="c2" className="far">
                        <code>23 февраля</code>
                      </label>
                      <input
                        id="c3"
                        name="c"
                        className="leaf"
                        type="checkbox"
                      />
                      <label htmlFor="c3" className="far">
                        <code> 8 Марта</code>
                      </label>
                      <input
                        id="c4"
                        name="c"
                        className="leaf"
                        type="checkbox"
                      />
                      <label htmlFor="c4" className="far">
                        <code> Нооруз</code>
                      </label>
                    </menu>
                  </fieldset>

                  {/*  */}

                  <input id="D" name="trunk" type="checkbox" />
                  <label htmlFor="D" className="far">
                    <code> Праздники</code>
                  </label>
                  <fieldset id="dX" name="branch">
                    {/* <legend>
                      <code> id="aX" name="branch" ⽀</code>
                    </legend> */}
                    <menu>
                      <input
                        id="d1"
                        name="d"
                        className="leaf"
                        type="checkbox"
                      />
                      <label htmlFor="d1" className="far">
                        <code>Новый год</code>
                      </label>
                      <input
                        id="d2"
                        name="d"
                        className="leaf"
                        type="checkbox"
                      />
                      <label htmlFor="d2" className="far">
                        <code>23 февраля</code>
                      </label>
                      <input
                        id="d3"
                        name="d"
                        className="leaf"
                        type="checkbox"
                      />
                      <label htmlFor="d3" className="far">
                        <code> 8 Марта</code>
                      </label>
                      <input
                        id="d4"
                        name="d"
                        className="leaf"
                        type="checkbox"
                      />
                      <label htmlFor="d4" className="far">
                        <code> Нооруз</code>
                      </label>
                    </menu>
                  </fieldset>
                  {/*  */}
                </form>

                {/* <div>
                  <input
                    type="checkbox"
                    className=" checked:bg-blue-500 ... gap-5"
                    placeholder="checkbox"
                    id="checkboxone"
                  />
                  <label htmlFor="checkboxone">Праздники</label>
                </div> */}
              </div>
            </div>
          </div>
          <div className="w-1/8">
            <input
              type="checkbox"
              name="panel"
              id="panel-2"
              className="hidden"
            />
            <label
              htmlFor="panel-2"
              className="label-faq  relative block  text-black p-4 shadow border-b border-black"
            >
              Panel 2
            </label>
            <div className="accordion__content overflow-hidden bg-grey-lighter">
              <h2 className="accordion__header pt-4 pl-4">Header</h2>
              <p className="accordion__body p-4">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto
                possimus at a cum saepe molestias modi illo facere ducimus
                voluptatibus praesentium deleniti fugiat ab error quia sit
                perspiciatis velit necessitatibus.Lorem ipsum dolor sit amet,
                consectetur adipisicing elit. Lorem ipsum dolor sit amet.
              </p>
            </div>
          </div>
          <div className="w-1/8">
            <input
              type="checkbox"
              name="panel"
              id="panel-3"
              className="hidden"
            />
            <label
              htmlFor="panel-3"
              className="label-faq relative block  text-black p-4 shadow border-b border-black"
            >
              Panel 3
            </label>
            <div className="accordion__content overflow-hidden bg-grey-lighter">
              <h2 className="accordion__header pt-4 pl-4">Header</h2>
              <p className="accordion__body p-4">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto
                possimus at a cum saepe molestias modi illo facere ducimus
                voluptatibus praesentium deleniti fugiat ab error quia sit
                perspiciatis velit necessitatibus.Lorem ipsum dolor sit amet,
                consectetur adipisicing elit. Lorem ipsum dolor sit amet.
              </p>
            </div>
          </div>
          <div className="w-1/8">
            <input
              type="checkbox"
              name="panel"
              id="panel-4"
              className="hidden"
            />
            <label
              htmlFor="panel-4"
              className="label-faq relative block  text-black p-4 shadow border-b border-black"
            >
              Panel 4
            </label>
            <div className="accordion__content overflow-hidden bg-grey-lighter">
              <h2 className="accordion__header pt-4 pl-4">Header</h2>
              <p className="accordion__body p-4">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto
                possimus at a cum saepe molestias modi illo facere ducimus
                voluptatibus praesentium deleniti fugiat ab error quia sit
                perspiciatis velit necessitatibus.Lorem ipsum dolor sit amet,
                consectetur adipisicing elit. Lorem ipsum dolor sit amet.
              </p>
            </div>
          </div>
          <div className="w-1/8">
            <input
              type="checkbox"
              name="panel"
              id="panel-5"
              className="hidden"
            />
            <label
              htmlFor="panel-5"
              className="label-faq relative block  text-black p-4 shadow border-b border-black"
            >
              Panel 5
            </label>
            <div className="accordion__content overflow-hidden bg-grey-lighter">
              <h2 className="accordion__header pt-4 pl-4">Header</h2>
              <p className="accordion__body p-4">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto
                possimus at a cum saepe molestias modi illo facere ducimus
                voluptatibus praesentium deleniti fugiat ab error quia sit
                perspiciatis velit necessitatibus.Lorem ipsum dolor sit amet,
                consectetur adipisicing elit. Lorem ipsum dolor sit amet.
              </p>
            </div>
          </div>
        </div>
        <div className="w-9/12 px-5  justify-center flex-col block">
          <h1>Подарки на “Новый год”</h1>
          <img src={newyear} alt="" />
          <span>
            <p>
              Новый год– это самый любимый праздник большинства взрослых и
              детей, ведь в ночь с 31 декабря на 1 января (а в большинстве стран
              начало года приходится именно на эти числа) случаются самые
              настоящие чудеса!
            </p>
            <p>
              С нетерпением, волнением и радостью люди ждут наступления
              торжественной ночи. Подготовка к празднику начинается заранее, и к
              концу декабря уже вовсю сверкают огнями улицы городов, а в каждом
              доме стоит наряженная елка.
            </p>
            <p>
              Праздничная атмосфера царит повсюду: в домах, магазинах,
              ресторанах.
            </p>
            <p>
              Приятная новогодняя суета охватывает всех без исключения. Люди
              ходят по магазинам в поисках подарков для своих друзей и родных,
              выбирают самые красивые наряды и продумывают меню праздничного
              стола.
            </p>
            <strong>История Нового года в Кыргызстане</strong>
            <p>
              Новый год в Кыргызстане 1 января в Кыргызстане отмечается
              общегосударственный праздник – Новый год (Кыргызстанда Жаңы жыл).
            </p>
            <p>
              Первая в истории Республики общественная новогодняя ёлка была
              проведена в Пишпеке (позже – город Фрунзе, ныне Бишкек) 28 декабря
              1895 года. Было приглашено 200 детей. Это были учащиеся мужского и
              женского училищ. Средства были собраны местной интеллигенцией.
            </p>
            <p>
              Веселый праздник удался, но он не закончился одной ёлкой – вечером
              того же дня был поставлен любительский спектакль с
              благотворительными целями. Вырученная по тем временам немалая
              сумма – 85 рублей – пошла в помощь бедным городским ученикам, а
              также на предполагавшуюся к открытию библиотеку-читальню.
            </p>

            <b>
              Корпоративные подарки на Новый год – это всегда головная боль для
              руководителей, их помощников, секретарей – всех, кто ломает голову
              над выбором и приобретением презентов для бизнес партнеров и
              клиентов. MMT Group предлагает эксклюзивные новогодние
              корпоративные подарки с логотипом. У нас можно заказать как
              простые сувениры с фирменной символикой, так и огромные
              гастрономические корзины или шоколад с логотипом.
            </b>
          </span>
        </div>
      </div>
    </div>
  );
};

export default CatalogTools;
