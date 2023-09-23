import React from "react";
import "./Product.scss";
import headset from "../../Assets/Images/headset1.jpg";
import keyboard from "../../Assets/Images/keyboad2.jpg";
import mouse from "../../Assets/Images/mouse3.jpg";
import chairs from "../../Assets/Images/chairs4.jpg";
import { useStateValue } from "../StateProvider/StateProvider";

function Product({ id, title, image, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();
  const addToBasket = () => {
    dispatch({
      type: "ADD_To_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };

  return (
    <div className="product ">
      <div className="product-info">
        <h2>Gaming accessories</h2>
        {/* <p className="product-price">
            <small>$</small>
            <strong>price</strong>
          </p>
          <div className="product-rating">
            <p>*</p>
          </div> */}
      </div>
      <div className="prod-images">
        <div className="img-wrapper" style={{ marginBottom: 10 }}>
          <img src={headset} alt="" />
          <span className="prod-name">Headsets</span>
        </div>
        <div className="img-wrapper" style={{ marginBottom: 10 }}>
          <img src={keyboard} alt="" />
          <span className="prod-name">Keyboards</span>
        </div>
        <div className="img-wrapper">
          <img src={mouse} alt="" />
          <span className="prod-name">Computer mice</span>
        </div>
        <div className="img-wrapper">
          <img src={chairs} alt="" />
          <span className="prod-name">Chairs</span>
        </div>
      </div>
      {/* <img
          src="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL.SX325_BO1,204,203,200.jpg"
          alt=""
        /> */}
      <div className="card-btns-wrapper">
        <div className="card-link">
          <a href="">See more</a>
        </div>
        {/* <div className="add-btn">
          <button onClick={addToBasket}>Add To Cart</button>
        </div> */}
      </div>
    </div>
  );
}

export default Product;
