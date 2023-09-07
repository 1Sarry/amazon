import React from "react";
import "./Product.scss";
import { useStateValue } from "../StateProvider/StateProvider";



const Product2 = ({ title, image, link }) => {
  const [{ basket }, dispatch] = useStateValue();
  console.log('This is the basket', basket)

  const addToBasket = () => {
    dispatch({
      type: 'ADD_To_BASKET',
      item: {
        // id: id,
        title: title,
        image: image,
        // price: price,
        //link: link, 
      },
    });
  };
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
      <div className="card-btns-wrapper">
        <div className="card-link">
          <a href="">{link}</a>
        </div>
        <div className="add-btn">
          <button onClick={addToBasket}>Add To Cart</button>
        </div>
      </div>
    </div>
  );
};

export default Product2;
