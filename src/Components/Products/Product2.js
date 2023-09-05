import React from "react";
import "./Product.scss";

const Product2 = ({title, image, link}) => {
  return (
    <div className="product2 ">
      <div className="product2-info">
        <h2>{title}</h2>
      </div>
      <div className="prod2-images">
        <div className="img-wrapper2">
          <img src={image} alt="" />
        </div>
      </div>
      <div className="card-link">
        <a href="">{link}</a>
      </div>
    </div>
  );
};

export default Product2;
