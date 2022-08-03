import React from "react";
import "./faq.css";
import faqImage from "./assets/faq-image.png";
import calling from "./assets/Calling.png";

const Faq = () => {
  return (
    <div className="flex justify-between container mx-auto px-4">
      <div className="flex">
        <div>
          <span className="flex justify-center items-center md:justify-start py-2 text-3xl text-[#383838] font-bold">
            FAQ
          </span>

          <div className="accordion flex flex-col  justify-center ">
            <div className="w-1/8">
              <input
                type="checkbox"
                name="panel"
                id="panel-1"
                className="hidden"
              />
              <label
                htmlFor="panel-1"
                className=" label-faq relative block text-black p-4 shadow border-b border-black"
              >
                Panel 1
              </label>
              <div className="accordion__content overflow-hidden bg-grey-lighter">
                <h2 className="accordion__header pt-4 pl-4">Header</h2>
                <p className="accordion__body p-4" id="panel1">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Iusto possimus at a cum saepe molestias modi illo facere
                  ducimus voluptatibus praesentium deleniti fugiat ab error quia
                  sit perspiciatis velit necessitatibus.Lorem ipsum dolor sit
                  amet, consectetur adipisicing elit. Lorem ipsum dolor sit
                  amet.
                </p>
              </div>
            </div>
            <div className="w-1/8">
              <input
                type="checkbox"
                name="panel"
                id="panel-2"
                className="hidden"
              />
              <label
                htmlFor="panel-2"
                className="label-faq  relative block  text-black p-4 shadow border-b border-black"
              >
                Panel 2
              </label>
              <div className="accordion__content overflow-hidden bg-grey-lighter">
                <h2 className="accordion__header pt-4 pl-4">Header</h2>
                <p className="accordion__body p-4">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Iusto possimus at a cum saepe molestias modi illo facere
                  ducimus voluptatibus praesentium deleniti fugiat ab error quia
                  sit perspiciatis velit necessitatibus.Lorem ipsum dolor sit
                  amet, consectetur adipisicing elit. Lorem ipsum dolor sit
                  amet.
                </p>
              </div>
            </div>
            <div className="w-1/8">
              <input
                type="checkbox"
                name="panel"
                id="panel-3"
                className="hidden"
              />
              <label
                htmlFor="panel-3"
                className="label-faq relative block  text-black p-4 shadow border-b border-black"
              >
                Panel 3
              </label>
              <div className="accordion__content overflow-hidden bg-grey-lighter">
                <h2 className="accordion__header pt-4 pl-4">Header</h2>
                <p className="accordion__body p-4">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Iusto possimus at a cum saepe molestias modi illo facere
                  ducimus voluptatibus praesentium deleniti fugiat ab error quia
                  sit perspiciatis velit necessitatibus.Lorem ipsum dolor sit
                  amet, consectetur adipisicing elit. Lorem ipsum dolor sit
                  amet.
                </p>
              </div>
            </div>
            <div className="w-1/8">
              <input
                type="checkbox"
                name="panel"
                id="panel-4"
                className="hidden"
              />
              <label
                htmlFor="panel-4"
                className="label-faq relative block  text-black p-4 shadow border-b border-black"
              >
                Panel 4
              </label>
              <div className="accordion__content overflow-hidden bg-grey-lighter">
                <h2 className="accordion__header pt-4 pl-4">Header</h2>
                <p className="accordion__body p-4">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Iusto possimus at a cum saepe molestias modi illo facere
                  ducimus voluptatibus praesentium deleniti fugiat ab error quia
                  sit perspiciatis velit necessitatibus.Lorem ipsum dolor sit
                  amet, consectetur adipisicing elit. Lorem ipsum dolor sit
                  amet.
                </p>
              </div>
            </div>
            <div className="w-1/8">
              <input
                type="checkbox"
                name="panel"
                id="panel-5"
                className="hidden"
              />
              <label
                htmlFor="panel-5"
                className="label-faq relative block  text-black p-4 shadow border-b border-black"
              >
                Panel 5
              </label>
              <div className="accordion__content overflow-hidden bg-grey-lighter">
                <h2 className="accordion__header pt-4 pl-4">Header</h2>
                <p className="accordion__body p-4">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Iusto possimus at a cum saepe molestias modi illo facere
                  ducimus voluptatibus praesentium deleniti fugiat ab error quia
                  sit perspiciatis velit necessitatibus.Lorem ipsum dolor sit
                  amet, consectetur adipisicing elit. Lorem ipsum dolor sit
                  amet.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden md:flex flex-row basis-1/2">
        <div className="flex  ">
          <img
            className="h-[30rem] w-[20rem] block object-contain"
            src={faqImage}
            alt=""
          />
        </div>
        <label
          htmlFor=""
          className="absolute   flex top-[168rem] right-32 text-white font-jost font-semibold"
        >
          СВЯЗАТЬСЯ
        </label>

        <img
          src={calling}
          className="absolute flex  justify-end items-end "
          alt=""
        />
      </div>
    </div>
  );
};

export default Faq;
