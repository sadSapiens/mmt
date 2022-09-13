import React from "react";
import eco from "../../../assets/img/eco-bottle.png";
import ecomobile from "../../../assets/img/ecomobile.png";

const Slider = () => {
  return (
    <>
      <div
        id="carouselDarkVariant"
        className="carousel slide carousel-fade carousel-dark relative"
        data-bs-ride="carousel"
      >
        <div className=" items-center carousel-indicators indicat absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4 ">
          <button
            data-bs-target="#carouselDarkVariant"
            data-bs-slide-to="0"
            className="active  w-[6px] h-[6px]"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            data-bs-target="#carouselDarkVariant"
            data-bs-slide-to="1"
            aria-label="Slide 1"
          ></button>
          <button
            data-bs-target="#carouselDarkVariant"
            data-bs-slide-to="2"
            aria-label="Slide 1"
          ></button>
        </div>

        <div className="carousel-inner relative overflow-hidden ">
          <div className="carousel-item active relative float-left w-full ">
            <div className="flex justify-evenly bg-[#8ABFBB] py-2">
              <div className=" flex  w-auto">
                <img
                  className="hidden   left-4 md:flex md:w-auto  md:h-[25rem]"
                  src={eco}
                  alt=""
                />
                <img
                  className="md:hidden  flex justify-center items-center w-36 h-36 "
                  src={ecomobile}
                  alt=""
                />
              </div>
              <div className="flex font-extrabold text-xl  md:flex md:justify-center flex-col text-white text-center ">
                <p
                  className="
                   w-6/12   md:text-8xl "
                >
                  ЭКОЛОГИЧНЫЕ
                </p>
                <p className="  w-6/12   md:text-8xl ">ПОДАРКИ 1</p>
              </div>
            </div>
          </div>

          <div className="carousel-item  relative float-left w-full">
            <div className="flex justify-between bg-[#8ABFBB] py-2">
              <div className=" flex  w-auto">
                <img
                  className="hidden   left-4 md:flex md:w-auto  md:h-[25rem]"
                  src={eco}
                  alt=""
                />
                <img
                  className="md:hidden  flex justify-center items-center w-36 h-36 "
                  src={ecomobile}
                  alt=""
                />
              </div>
              <div className="flex font-extrabold text-xl  md:flex md:justify-center flex-col text-white text-center ">
                <p
                  className="
                   w-6/12   md:text-8xl "
                >
                  ЭКОЛОГИЧНЫЕ
                </p>
                <p className="  w-6/12   md:text-8xl ">ПОДАРКИ 2</p>
              </div>
            </div>
          </div>

          <div className="carousel-item  relative float-left w-full">
            <div className="flex justify-between bg-[#8ABFBB] py-2">
              <div className=" flex  w-auto">
                <img
                  className="hidden   left-4 md:flex md:w-auto  md:h-[25rem]"
                  src={eco}
                  alt=""
                />
                <img
                  className="md:hidden  flex justify-center items-center w-36 h-36 "
                  src={ecomobile}
                  alt=""
                />
              </div>
              <div className="flex font-extrabold text-xl  md:flex md:justify-center flex-col text-white text-center ">
                <p
                  className="
                   w-6/12   md:text-8xl "
                >
                  ЭКОЛОГИЧНЫЕ
                </p>
                <p className="  w-6/12   md:text-8xl ">ПОДАРКИ 3</p>
              </div>
            </div>
          </div>
        </div>

        <button
          className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0 "
          type="button"
          data-bs-target="#carouselDarkVariant"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon inline-block bg-no-repeat"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
          type="button"
          data-bs-target="#carouselDarkVariant"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon inline-block bg-no-repeat"
            aria-hidden="true"
          />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
};

export default Slider;
