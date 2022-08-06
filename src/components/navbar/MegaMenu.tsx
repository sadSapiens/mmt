import React, { useState } from "react";
import "./megamenu.css";

const MegaMenu = () => {
  const [open, setOpen] = useState(false);
  console.log(open);

  return (
    <div className="">
      <ul className="exo-menu" onClick={() => setOpen(true)}>
        <li className="drop-down">
          <a href="/">
            <i className="fa fa-cogs"></i> Каталог
          </a>
          {/* <div className="w-[730px]"> */}
          <ul className="drop-down-ul animated fadeIn zet">
            <li className="flyout-right">
              <a href="/">Коллекции</a>

              <ul className="animated fadeIn bg-[#343434]">
                <li>
                  <a href="/">Зеленая серия</a>
                </li>
                <li>
                  <a href="/">Товары из бамбука</a>
                </li>
              </ul>
            </li>

            <li>
              <a href="/">Авто</a>
            </li>
            <li>
              <a href="/">Деловые подарки</a>
            </li>
            <li>
              <a href="/">Для дома</a>
            </li>
            <li>
              <a href="/">Для отдыха</a>
            </li>
            <li>
              <a href="/">Для путешествий</a>
            </li>
            <li>
              <a href="/">Для спорта</a>
            </li>
            <li>
              <a href="/">Женские аксессуары</a>
            </li>
            <li>
              <a href="/">Зонты</a>
            </li>
            <li>
              <a href="/">Кухня и посуда</a>
            </li>
            <li>
              <a href="/">Личные аксессуары</a>
            </li>
            <li>
              <a href="/">Мужские аксессуары</a>
            </li>
            <li>
              <a href="/">Одежда</a>
            </li>
            <li>
              <a href="/">Офисные аксессуары</a>
            </li>
            <li>
              <a href="/">Пишущие инструменты</a>
            </li>
            <li>
              <a href="/">Праздничые подарки</a>
            </li>
          </ul>
          {/* </div> */}
        </li>
      </ul>
    </div>
  );
};

export default MegaMenu;
