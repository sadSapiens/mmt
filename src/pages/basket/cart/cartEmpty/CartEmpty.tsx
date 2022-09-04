import React from "react";
import { Link } from "react-router-dom";

import empty from "../../assets/cart-empty.png";
import arrow from "../../assets/direction-right.png";

const CartEmpty = () => {
  return (
    <div>
      <div className="mx-auto px-9   w-auto py-5 h-screen font-jost">
        <div className="flex justify-center flex-col items-center">
          <h1 className="font-bold font-jost text-3xl text-black ">
            Корзина пуста
          </h1>
          <span className="py-3">Похоже вы еще не добавили товары</span>

          <div className="flex justify-center lg:mr-36 mr-10 py-3">
            <img src={empty} alt="" />
          </div>
          <Link to="/catalog">
            <button className="bg-[#1F1F1F] flex  rounded-full ... w-40 items-center justify-center h-9 text-white font-jost ">
              <span>В каталог</span>
              <img src={arrow} alt="" />
            </button>
          </Link>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default CartEmpty;
