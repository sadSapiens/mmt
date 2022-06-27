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
          <div className="slider__contents flex justify-between">
            <img className="h-56" src={eco} alt="" />
            <span>ЭКОЛОГИЧНЫЕ ПОДАРКИ</span>
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
