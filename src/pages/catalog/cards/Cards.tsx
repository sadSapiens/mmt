import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useAppDispatch } from "../../../store";
import { fetchSlectedCatalogProduct } from "../../../store/catalog";
import {
  useFilters,
  useSelectedCatalogProduct,
} from "../../../store/catalog/hooks";

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
    rating: string;
  };
}

const Cards = ({ product }: Props) => {
  const filters = useFilters();

  return (
    <>
      <Link
        className="!text-black"
        to={
          product.shop === "1"
            ? `/catalog-detailoasis/${product.id}`
            : `/catalog-detailhiidea/${product.id}`
        }
      >
        <div className="py-7  flex justify-center md:w-72 w-64  relative ">
          <div className=" border border-black  w-full h-80 md:flex justify-center flex-col items-center object-center content-center place-items-center">
            <div className=" flex">
              <img
                className="md:w-[100%] max-h-48"
                src={
                  product.shop === "1"
                    ? product.colors[0].images[0].small
                    : product.colors[0].images[0].big
                }
                alt=""
              />
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
                  {" "}
                  {product.name}
                  {/* <span className="hidden md:flex"> «Montreal»</span> */}
                </h4>
                <div className="md:w-6/12 flex md:justify-center gap-2 justify-start w-12/12">
                  <div className="h-3 w-3 bg-[#14153C] rounded-full ..."/>
                  <div className="h-3 w-3 bg-[#65A8E0] rounded-full ..."/>
                  <div className="h-3 w-3 bg-[#A91E1E] rounded-full ..."/>
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
          {product.rating &&
            (product.rating === "1" ? (
              <div className="absolute right-[-1rem]">
                {" "}
                <svg
                  width="110"
                  height="60"
                  viewBox="0 0 110 60"
                  fill="red"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                >
                  <rect width="110" height="60" fill="url(#pattern0)" />
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
                      width="652"
                      height="314"
                      xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAowAAAE6CAYAAACcSAMjAAAACXBIWXMAAAsTAAALEwEAmpwYAAAF0WlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDUgNzkuMTYzNDk5LCAyMDE4LzA4LzEzLTE2OjQwOjIyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDIyLTA4LTA4VDE3OjQyOjI1KzA2OjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDIyLTA4LTA4VDE3OjQyOjI1KzA2OjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyMi0wOC0wOFQxNzo0MjoyNSswNjowMCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpjMDFlZmYwOC0zOWUwLTcxNGQtYjNjOS05MmU1Y2Q2OGMwMGUiIHhtcE1NOkRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDoxN2UyOTdkMi1jMWQ0LTczNGItOTg5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"
                      fill="red"
                    />
                  </defs>
                </svg>
              </div>
            ) : product.rating === "3" ? (
              <div className="absolute right-[-1rem]">
                <svg
                  width="110"
                  height="60"
                  viewBox="0 0 110 60"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                >
                  <rect width="110" height="60" fill="url(#pattern0)" />
                  <defs>
                    <pattern
                      id="pattern0"
                      patternContentUnits="objectBoundingBox"
                      width="1"
                      height="1"
                    >
                      <use
                        xlinkHref="#image0_1131_10544"
                        transform="translate(0 -0.00166155) scale(0.00153374 0.0031953)"
                      />
                    </pattern>
                    <image
                      id="image0_1131_10544"
                      width="652"
                      height="314"
                      xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAowAAAE6CAYAAACcSAMjAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFwmlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDUgNzkuMTYzNDk5LCAyMDE4LzA4LzEzLTE2OjQwOjIyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDIyLTA4LTA4VDE3OjQzKzA2OjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDIyLTA4LTA4VDE3OjQzKzA2OjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyMi0wOC0wOFQxNzo0MyswNjowMCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDozNjk5YTc2Ny02MTRhLTA1NDQtYmQxNC01NTU3NTU2MmJhMmMiIHhtcE1NOkRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDo3MWIwN2UyYS0yZGU2LTA0NDAtYTI5OC0yZTJmZDdm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"
                    />
                  </defs>
                </svg>
              </div>
            ) : product.rating === "2" ? (
              <div className="absolute right-[-1rem]">
                <svg
                  width="110"
                  height="60"
                  viewBox="0 0 110 60"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                >
                  <rect width="110" height="60" fill="url(#pattern0)" />
                  <defs>
                    <pattern
                      id="pattern0"
                      patternContentUnits="objectBoundingBox"
                      width="1"
                      height="1"
                    >
                      <use
                        xlinkHref="#image0_1131_10542"
                        transform="translate(-0.0319787) scale(0.00163184 0.00318471)"
                      />
                    </pattern>
                    {}
                    <image
                      id="image0_1131_10542"
                      width="652"
                      height="314"
                      xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAowAAAE6CAYAAACcSAMjAAAACXBIWXMAAAsTAAALEwEAmpwYAAAF0WlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDUgNzkuMTYzNDk5LCAyMDE4LzA4LzEzLTE2OjQwOjIyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDIyLTA4LTA4VDE3OjQxOjQxKzA2OjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDIyLTA4LTA4VDE3OjQxOjQxKzA2OjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyMi0wOC0wOFQxNzo0MTo0MSswNjowMCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo1YmMzYjcxOS03NDYyLWFhNGQtODhkNi0xN2IwNWFhODY5NjMiIHhtcE1NOkRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDo2MTVjNGMxNC05YjRiLThmNGItYTY3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"
                    />
                  </defs>
                </svg>
              </div>
            ) : null)}
        </div>
      </Link>
    </>
  );
};

export default Cards;
