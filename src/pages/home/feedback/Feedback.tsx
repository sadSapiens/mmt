import React from "react";
import valentina from "./feedback-images/Valentina.png";
import alexey from "./feedback-images/Alexey.png";
import aiday from "./feedback-images/Aiday.png";
import temirlan from "./feedback-images/Teemirlan.png";

const Feedback = () => {
  return (
    <div className="container mx-auto px-4">
      <div>
        <span className="text-[36px] text-[#383838] font-bold	">Отзывы</span>
      </div>
      <div>
        <div className="flex flex-row gap-4 justify-center align-middle items-center">
          <div className="basis-1/2 md:basis-1/3 flex justify-center align-middle items-center flex-col	">
            <img className="rounded-full" src={valentina} alt="" />
            <span className="px-5 flex  text-center">
              Валентина Евгеньевна Маркетолог “Alfa Bank”
            </span>
            <p className="font-light text-[18px]	">
              Работаю с компанией уже 5 год, ни разу не подвидили, профессионалы
              своего дела
            </p>
          </div>
          <div className="basis-1/2 md:basis-1/3  flex justify-center align-middle items-center flex-col">
            <img className="rounded-full" src={alexey} alt="" />
            <span className="px-5 flex  text-center">
              Валентина Евгеньевна Маркетолог “Alfa Bank”
            </span>
            <p className="font-light	">
              Работаю с компанией уже 5 год, ни разу не подвидили, профессионалы
              своего дела
            </p>
          </div>
          <div className="basis-1/2 md:basis-1/3  flex justify-center align-middle items-center flex-col">
            <img className="rounded-full" src={aiday} alt="" />
            <span className="px-5 flex  text-center">
              Валентина Евгеньевна Маркетолог “Alfa Bank”
            </span>
            <p className="font-light	">
              Работаю с компанией уже 5 год, ни разу не подвидили, профессионалы
              своего дела
            </p>
          </div>
          <div className="basis-1/2 md:basis-1/3  flex justify-center align-middle items-center flex-col">
            <img className="rounded-full" src={temirlan} alt="" />
            <span className="px-5 flex  text-center">
              Валентина Евгеньевна Маркетолог “Alfa Bank”
            </span>
            <p className="font-light	">
              Работаю с компанией уже 5 год, ни разу не подвидили, профессионалы
              своего дела
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
