import React from "react";
import "./CheckoutProduct.scss";
import Beauty from "../../../Assets/Images/Beauty.jpg";
import { useStateValue } from "../../StateProvider/StateProvider";

const CheckoutProduct = ({ id, image, title, price, rating, hideButton }) => {
  const [{ basket }, dispatch] = useStateValue();
  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };
  return (
    <div className="checkoutProduct">
      <div className="checkoutProduct-image-wrap">
        <img className="checkoutProduct-image" src={image} alt="" />
      </div>
      <div className="checkoutProduct-info">
        <p className="checkoutProduct-title">{title}</p>
        <p className="checkoutProduct-price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="checkoutProduct-rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </div>
        {!hideButton && (
          <button onClick={removeFromBasket}>Remove from Basket</button>
        )}
      </div>
    </div>
  );
};

export default CheckoutProduct;
