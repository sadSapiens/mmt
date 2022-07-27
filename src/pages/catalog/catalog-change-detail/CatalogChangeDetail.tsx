import React from "react";
import "../catalog-tools/style.css";

const CatalogChangeDetail = () => {
  return (
    <div>
      <div id="card">
        <img
          src="https://res.cloudinary.com/valery/image/upload/v1581966733/berta-red_tjy8sr.jpg"
          alt="berta"
        />
      </div>

      <div className="radio-box">
        <label className="color--red">
          <input type="radio" checked name="radio" />
        </label>
        <label className="color--green" id="green">
          <input type="radio" name="radio" />
        </label>
        <label className="color--blue" id="blue">
          <input type="radio" name="radio" />
        </label>
        <label className="color--orange" id="orange">
          <input type="radio" name="radio" />
        </label>
      </div>
    </div>
  );
};

export default CatalogChangeDetail;
