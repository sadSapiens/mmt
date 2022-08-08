import React from "react";
import shopbag from "../assets/shopbag.png";

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
    <div className="py-7 flex justify-center  w-11/12">
      <div className=" border border-black w-[100%] flex justify-between">
        <div className=" flex w-3/12">
          <img
            className="w-[100%]"
            src={product.colors[0].images[0].small}
            alt=""
          />
        </div>
        <div className="w-6/12 flex flex-col justify-center">
          <h4 className="w-6/12 font-jost font-medium text-black">
            {product.name}
          </h4>
          {/*  */}
          {/* <div className="flex flex-wrap break-all flex-col md:flex-row justify-center items-center px-1 ">
            <h5 className="flex px-3">Код товара: 1050</h5>

            <div className="w-6/12 flex justify-center gap-2">
              <div className="h-3 w-3 bg-[#14153C] rounded-full ..."></div>
              <div className="h-3 w-3 bg-[#65A8E0] rounded-full ..."></div>
              <div className="h-3 w-3 bg-[#A91E1E] rounded-full ..."></div>
            </div> */}

          {/* <div className="flex flex-wrap break-all"></div> */}
          <div className="flex justify-between">
            <div className="flex flex-col justify-start px-5 flex-start items-start">
              <span>WASS. Гелиевая ручка</span>
              <span> Остаток: {product.total_stock}</span>
              <h5 className=""> Код товара: {product.article}</h5>
            </div>
            <div className="flex justify-end items-end gap-3">
              <div className="flex ">
                <span className="font-light">Цена:</span>
                <b>{product.price} C</b>
              </div>
              <div>
                <div className="w-10 h-10 bg-[#343434] rounded-full ... flex justify-center items-center">
                  <img src={shopbag} alt="" />
                </div>
              </div>
            </div>
          </div>
          {/* </div> */}
          <div className="flex justify-center flex-col px-5 text-black font-jost "></div>
        </div>
        <div className="flex justify-center items-center gap-3 w-3/12">
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
