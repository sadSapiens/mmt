import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useAppDispatch } from "../../../store";
import { fetchSlectedCatalogProduct } from "../../../store/catalog";
import { useSelectedCatalogProduct } from "../../../store/catalog/hooks";

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
    shop: string;
  };
}

const Cards = ({ product }: Props) => {
  return (
    <>
      <div className="py-7  flex justify-center md:w-72 w-64   ">
        <div className=" border border-black  w-full h-80 md:flex justify-center flex-col items-center object-center content-center place-items-center">
          <div className=" flex">
            <img
              className="md:w-[100%]  "
              src={product.colors[0].images[0].small}
              alt=""
            />
            <div>
              <svg
                width="150"
                height="79"
                viewBox="0 0 182 79"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
              >
                <rect width="150" height="79" fill="url(#pattern0)" />
                <defs>
                  <pattern
                    id="pattern0"
                    patternContentUnits="objectBoundingBox"
                    width="1"
                    height="1"
                  >
                    <use
                      xlinkHref="#image0_1131_10565"
                      transform="translate(0 -0.0547488) scale(0.00153374 0.00353343)"
                    />
                  </pattern>
                  <image
                    id="image0_1131_10565"
                    width="400"
                    height="314"
                    xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAowAAAE6CAYAAACcSAMjAAAACXBIWXMAAAsTAAALEwEAmpwYAAAF0WlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDUgNzkuMTYzNDk5LCAyMDE4LzA4LzEzLTE2OjQwOjIyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDIyLTA4LTA4VDE3OjQyOjI1KzA2OjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDIyLTA4LTA4VDE3OjQyOjI1KzA2OjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyMi0wOC0wOFQxNzo0MjoyNSswNjowMCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpjMDFlZmYwOC0zOWUwLTcxNGQtYjNjOS05MmU1Y2Q2OGMwMGUiIHhtcE1NOkRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDoxN2UyOTdkMi1jMWQ0LTczNGItOTg5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"
                  />
                </defs>
              </svg>
            </div>
          </div>
          <div>
            <div className="flex justify-between">
              <h5 className="md:flex md:px-3 flex justify-start md:justify-center text-sm font-light">
                Код товара: {product.article}
              </h5>
              <h5 className="md:flex hidden md:px-3 justify-start md:justify-center text-sm font-light">
                Остаток: {product.total_stock}
              </h5>
            </div>
            <div className="flex justify-start flex-wrap break-all flex-col md:flex-row md:justify-center md:items-center px-1 ">
              <h4 className="md:w-6/12 font-jost md:font-medium font-normal text-base text-black flex  break-words justify-start w-auto text-start">
                <Link
                  className="!text-black"
                  to={
                    product.shop === "1"
                      ? `/catalog-detailoasis/${product.id}`
                      : `/catalog-detailhiidea/${product.id}`
                  }
                >
                  {" "}
                  {product.name}
                </Link>
                {/* <span className="hidden md:flex"> «Montreal»</span> */}
              </h4>
              <div className="md:w-6/12 flex md:justify-center gap-2 justify-start w-12/12">
                <div className="h-3 w-3 bg-[#14153C] rounded-full ..."></div>
                <div className="h-3 w-3 bg-[#65A8E0] rounded-full ..."></div>
                <div className="h-3 w-3 bg-[#A91E1E] rounded-full ..."></div>
              </div>

              {/* <div className="flex flex-wrap break-all"></div> */}
            </div>
            <div className="flex justify-between md:px-5 px-2 text-black font-jost ">
              <div className="flex flex-col">
                <span className="font-light">Цена:</span>
                <b>{product.price} C</b>
              </div>
              <div className="md:w-10 md:h-10 w-8 h-8 bg-[#343434] rounded-full ... flex justify-center items-center">
                <img src={shopbag} className="h-5 w-5" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;
