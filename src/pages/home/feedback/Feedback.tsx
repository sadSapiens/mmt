import React from "react";
import valentina from "./feedback-images/Valentina.png";
import alexey from "./feedback-images/Alexey.png";
import aiday from "./feedback-images/Aiday.png";
import temirlan from "./feedback-images/Teemirlan.png";

const Feedback = () => {
  return (
    <div className="container mx-auto px-4">
      <div className="flex md:flex-auto md:justify-start justify-center">
        <span className="text-3xl text-[#383838] font-bold	flex py-4">
          Отзывы
        </span>
      </div>
      <div className="flex flex-row md:overflow-auto overflow-scroll h-auto">
        <div className="basis-1/2 md:basis-1/3 px-2 flex justify-center align-middle items-center flex-col">
          <img className="rounded-full" src={valentina} alt="" />
          <span className=" flex  text-center">
            Валентина Евгеньевна <br /> Маркетолог “Alfa Bank”
          </span>
          <p className="font-light	">
            Работаю с компанией уже 5 год, ни разу не подвидили, профессионалы
            своего дела
          </p>
        </div>
        <div className="basis-1/2 md:basis-1/3 px-2  flex justify-center align-middle items-center flex-col">
          <img className="rounded-full" src={alexey} alt="" />
          <span className=" flex  text-center">
            Валентина Евгеньевна <br /> Маркетолог “Alfa Bank”
          </span>
          <p className="font-light	">
            Работаю с компанией уже 5 год, ни разу не подвидили, профессионалы
            своего дела
          </p>
        </div>
        <div className="basis-1/2 md:basis-1/3 px-2 flex justify-center align-middle items-center flex-col">
          <img className="rounded-full" src={aiday} alt="" />
          <span className=" flex  text-center">
            Валентина Евгеньевна <br /> Маркетолог “Alfa Bank”
          </span>
          <p className="font-light	">
            Работаю с компанией уже 5 год, ни разу не подвидили, профессионалы
            своего дела
          </p>
        </div>
        <div className="basis-1/2 md:basis-1/3 px-2 flex justify-center align-middle items-center flex-col">
          <img className="rounded-full" src={temirlan} alt="" />
          <span className=" flex  text-center">
            Валентина Евгеньевна <br /> Маркетолог “Alfa Bank”
          </span>
          <p className="font-light	">
            Работаю с компанией уже 5 год, ни разу не подвидили, профессионалы
            своего дела
          </p>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
