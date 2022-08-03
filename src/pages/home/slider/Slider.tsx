import React from "react";
import "./slider.css";
import eco from "../../../assets/img/eco-bottle.png";
import ecomobile from "../../../assets/img/ecomobile.png";

const Slider = () => {
  return (
    <div className="bg-[#8ABFBB] h-52 md:h-96 min-w-full	">
      <div className="slider">
        <input
          type="radio"
          name="slider"
          title="slide1"
          //   checked="checked"
          className="slider__nav"
        />
        <input
          type="radio"
          name="slider"
          title="slide2"
          className="slider__nav"
        />
        <input
          type="radio"
          name="slider"
          title="slide3"
          className="slider__nav"
        />
        <input
          type="radio"
          name="slider"
          title="slide4"
          className="slider__nav"
        />
        <div className="slider__inner">
          <div className="slider__contents ">
            <div className="flex justify-between">
              <div className=" flex  w-auto">
                <img
                  className="hidden h-44  left-4 md:flex md:w-auto  md:h-[22rem]"
                  src={eco}
                  alt=""
                />
                <img
                  className="md:hidden h-44 flex justify-center items-center w-36  "
                  src={ecomobile}
                  alt=""
                />
              </div>
              <div className="flex font-extrabold text-xl  md:flex justify-start md:justify-center flex-col text-white text-center ">
                <p
                  className="
                   w-6/12   md:text-8xl "
                >
                  ЭКОЛОГИЧНЫЕ
                </p>
                <p className="  w-6/12   md:text-8xl ">ПОДАРКИ</p>
              </div>
            </div>
            <div></div>
          </div>
          <div className="slider__contents">
            <p className="slider__txt">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. At
              cupiditate omnis possimus illo quos, corporis minima!
            </p>
          </div>
          <div className="slider__contents">
            <p className="slider__txt">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. At
              cupiditate omnis possimus illo quos, corporis minima!
            </p>
          </div>
          <div className="slider__contents">
            <p className="slider__txt">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. At
              cupiditate omnis possimus illo quos, corporis minima!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
