import React from "react";
import "./Product.scss";
import Promo from "../../Assets/Images/Promo.jpg";

const ProductPromo = () => {
  return (
    <div className="product product-promo">
        <div className="card-promo">
          <div className="signin">
            <div className="singin-title">
              <h2>Sing in for the best experience</h2>
            </div>
            <button className="signin-btn1">Sing in securely</button>
          </div>
          <div className="promo-image">
            <img src={Promo} alt="" />
          </div>
        </div>
    </div>
  );
};

export default ProductPromo;
