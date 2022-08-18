import React from "react";

const TypeProduct = () => {
  return (
    <div
      className="
      flex flex-col md:flex-row py-3 justify-start text-center  items-center align-middle 
      "
      // overflow-x-scroll overflow-y-clip gap-8 w-full flex justify-around px-2
      // flex flex-row gap-4 md:overflow-x-auto overflow-y-clip overflow-x-scroll h-8  justify-start md:justify-center px-4 w-full md:w-auto
    >
      <div className="flex flex-row gap-4  overflow-x-auto overflow-y-clip  justify-start md:justify-center px-4 w-full md:w-auto">
        <button className="bg-[#65A8E0] px-4 rounded-full ...">Новинки</button>
        <button className="bg-[#79B15E] px-4 rounded-full ...">Эко</button>
        <button className="bg-yellow-500 px-4 rounded-full ...">Акция</button>
        <span>termos</span>
        <span>termos</span>
        <span>termos</span>
        <span>termos</span>
        <span>termos</span>
      </div>
    </div>
  );
};

export default TypeProduct;
