import React from 'react'

function Product({id, title, image, price, rating}) {
  return (
    <div className="product">
      <div className="product-info">
        <p>title</p>
        <p className="product-price">
          <small>$</small>
          <strong>price</strong>
        </p>
        <div className="product-rating">
          <p>*</p>
        </div>
      </div>
      <img src="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL.SX325_BO1,204,203,200.jpg" alt="" />
      <button>Add to Basket</button>
    </div>
  )
}

export default Product