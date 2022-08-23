import React from "react";
import shopbag from "../assets/shopbag.png";
import som from "../assets/som.png";

interface IProduct {
  id: string;
  color: {
    hex_code: any;
    id: number;
    name: string;
  };
  images: [
    {
      big: string;
      small: string;
      superbig: string;
    }
  ];
}
interface Props {
  product: {
    article: string;
    colors: IProduct[];
    id: string;
    name: string;
    price: number;
    total_stock: number;
  };
}
const CardsRow = ({ product }: Props) => {
  return (
    <div className="py-7 flex justify-center  md:w-11/12 w-full">
      <div className=" py-2 border border-black w-[100%] flex flex-row">
        <div className=" flex md:w-3/12 w-4/12">
          <img
            className="w-[100%] object-contain"
            src={product.colors[0].images[0].small}
            alt=""
          />
        </div>
        <div className="md:w-6/12 pl-3 w-full flex flex-col justify-center">
          <h4 className="flex font-jost md:font-medium font-normal text-black text-start">
            {product.name}
          </h4>

          <div className="flex justify-between flex-col text-sm">
            <div className="flex flex-col justify-start flex-start items-start">
              <span>WASS. Гелиевая ручка</span>
              <span> Остаток: {product.total_stock}</span>
              <h5 className=""> Код товара: {product.article}</h5>
            </div>
            <div className="flex md:justify-end md:items-end md:gap-3  py-2 justify-between">
              <div className="flex ">
                <span className="font-light md:flex hidden">Цена:</span>
                <b className="flex">
                  {product.price}
                  <img src={som} alt="" className="object-contain" />
                </b>
              </div>
              <div>
                <button className="md:w-10 md:h-10 h-7 w-7 bg-[#343434] rounded-full ... focus:outline-none flex justify-center items-center">
                  <img src={shopbag} alt="" className="h-5 w-5" />
                </button>
              </div>
              <div className="flex  md:hidden justify-center items-center gap-3 w-3/12">
                <div className="bg-[#14153C] h-3 w-3 rounded-full ... "></div>
                <div className="bg-[#65A8E0] h-3 w-3 rounded-full ... "></div>
              </div>
            </div>
          </div>

          <div className="flex justify-center flex-col px-5 text-black font-jost "></div>
        </div>
        <div className="md:flex hidden justify-center items-center gap-3 w-3/12">
          <div className="bg-[#14153C] h-2 w-2 rounded-full ... "></div>
          <div className="bg-[#65A8E0] h-2 w-2 rounded-full ... "></div>
          <div className="bg-[#A91E1E] h-2 w-2 rounded-full ... "></div>
          <div className="bg-[#00F20A] h-2 w-2 rounded-full ... "></div>
          <div className="bg-[#FFCC33] h-2 w-2 rounded-full ... "></div>
          <div className="bg-[#F1A400] h-2 w-2 rounded-full ... "></div>
        </div>
      </div>
    </div>
  );
};

export default CardsRow;
