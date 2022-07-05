import React from "react";
import "./slider.css";
import eco from "../../../assets/img/eco-bottle.png";

const Slider = () => {
  return (
    <div className="bg-[#8ABFBB] h-96 min-w-full	">
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
              <img className="h-[22rem] w-4/12" src={eco} alt="" />
              <div
                className="flex 
              justify-center flex-col text-white text-center
              "
              >
                {/* 
              text-center justify-center place-items-start text-white flex-column
                
                */}
                <p
                  className="
                  text-8xl w-6/12

              font-extrabold   
              "
                >
                  ЭКОЛОГИЧНЫЕ
                </p>
                <p
                  className="
              text-8xl w-6/12
              font-extrabold 
              
              "
                >
                  ПОДАРКИ
                </p>
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
