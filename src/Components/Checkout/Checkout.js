import React from "react";
import "./Checkout.scss";
import Subtotal from "./Subtotals/Subtotal";
const Checkout = () => {
  return (
    <div className="checkout">
      <div className="checkout-left">
        <img
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt=""
        />
        <h3>Hello,</h3>
        <h2 className="checkout-title">Your Shopping Basket</h2>
      </div>
      <div className="checkout-right">
        <Subtotal />
      </div>
    </div>
  );
};

export default Checkout;
