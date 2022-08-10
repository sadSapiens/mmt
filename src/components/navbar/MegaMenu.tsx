import React, { useState } from "react";
import "./megamenu.css";

const MegaMenu = () => {
  const [open, setOpen] = useState(false);
  console.log(open);

  return (
    <div className="w-full">
      <ul className="exo-menu w-full" onClick={() => setOpen(true)}>
        <li className="drop-down ">
          <a href="/">
            <i className="fa fa-cogs"></i> Каталог
          </a>
          {/* <div className="w-[730px]"> */}
          <ul className="drop-down-ul animated fadeIn zet w-[730px]">
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

            <li className="w-full">
              <a href="/">Авто</a>
            </li>
            <li className="w-full">
              {" "}
              <a href="/">Деловые подарки</a>
            </li>
            <li className="w-full">
              <a href="/">Для дома</a>
            </li>
            <li className="w-full">
              <a href="/">Для отдыха</a>
            </li>
            <li className="w-full">
              <a href="/">Для путешествий</a>
            </li>
            <li className="w-full">
              <a href="/">Для спорта</a>
            </li>
            <li className="w-full">
              <a href="/">Женские аксессуары</a>
            </li>
            <li className="w-full">
              <a href="/">Зонты</a>
            </li>
            <li className="w-full">
              <a href="/">Кухня и посуда</a>
            </li>
            <li className="w-full">
              <a href="/">Личные аксессуары</a>
            </li>
            <li className="w-full">
              <a href="/">Мужские аксессуары</a>
            </li>
            <li className="w-full">
              <a href="/">Одежда</a>
            </li>
            <li className="w-full">
              <a href="/">Офисные аксессуары</a>
            </li>
            <li className="w-full">
              <a href="/">Пишущие инструменты</a>
            </li>
            <li className="w-full">
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
