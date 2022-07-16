import React from "react";
import bottle from "../assets/bottle.png";

const BlogDetail = () => {
  return (
    <div className="mx-auto px-9   w-auto py-5 font-jost">
      <div className="flex justify-center items-center flex-col px-14 font-jost">
        <h3 className="font-medium text-2xl text-black py-5 ">
          Многоразовая бутылка или фляга — удачный вариант корпоративного
          подарка
        </h3>
        <p className="font-light text-black">
          Все чаще у людей, занимающихся спортом, туристов, путешественников,
          родителей с маленькими детьми можно заметить многоразовую бутылку с
          водой. В отличие от дешевого пластикового аналога она абсолютна
          безопасна для здоровья, более практична и функциональна. Многие
          изделия комплектуются клапанами для открытия и питья при помощи одной
          руки, удобными ручками и креплениями. Если вы хотите, чтобы ваш бренд
          ассоциировали с заботой об окружающих людях и природе, тогда стоит
          заказать партию бутылок или фляг с логотипом вашей компании. Такой
          презент пригодится всегда и везде. Независимо от того, будете вы
          находиться на отдыхе, в спортивном зале или в офисе, тара с нанесением
          будет ненавязчиво напоминать о компании, которая ее презентовала.
        </p>
      </div>
      <div className="py-16 ">
        <div className="flex">
          <div className="w-4/12  ">
            <div className="border border-black h-56 w-56">
              <img
                className=" mt-8 right-[65rem]  absolute h-[29vh] w-auto"
                src={bottle}
                alt=""
              />
            </div>
          </div>
          <div className="w-8/12  flex flex-col font-jost">
            <span>16.02.22</span>
            <b className="py-3">
              Многоразовая бутылка или фляга — удачный вариант корпоративного
              подарка
            </b>
            <p className="font-light  py-3 w-3/5">
              Выбирая бутылку или флягу под нанесение, у вас есть возможность
              выбрать не только материал основы, но и объем, дизайн, цветовую
              палитру, метод нанесения, наличие ряда дополнительных функций.
            </p>
            <button className="text-gray flex font-light">Подробнее...</button>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default BlogDetail;
