import React, { useState, useEffect } from "react";
import "./Home.scss";
import Pagination from "./Pagination/Pagination";
import Product from "../Products/Product";
import Product2 from "../Products/Product2";
import ProductPromo from "../Products/ProductPromo";

function Home() {
  const sliderImg = [
    {
      urls: "https://m.media-amazon.com/images/I/61lwJy4B8PL._SX3000_.jpg",
    },
    {
      urls: "https://m.media-amazon.com/images/I/71Ie3JXGfVL._SX3000_.jpg",
    },
    {
      urls: "https://m.media-amazon.com/images/I/71U-Q+N7PXL._SX3000_.jpg",
    },
    {
      urls: "https://m.media-amazon.com/images/I/81KkrQWEHIL._SX3000_.jpg",
    },
    {
      urls: "https://m.media-amazon.com/images/I/61zAjw4bqPL._SX3000_.jpg",
    },
  ];

  const len = sliderImg.length - 1;
  const [activeIndex, setActiveIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(activeIndex === len ? 0 : activeIndex + 1);
    }, 4000);
    return () => clearInterval(interval);
  }, [activeIndex]);

  return (
    <div className="home container-wrapper">
      {sliderImg.map((slide, index) => (
        <div
          key={index}
          className={index === activeIndex ? "slides active" : "inactive"}
        >
          <div className="home-container">
            <img className="home-image" src={slide.urls} alt="" />

            <div className="home-row container-common">
              <Product />
              <Product2 
              title="Toys Under $30"
              image="./Kids.jpg"
              link="Shop now"
              />
              <Product2 
              title="Electronics"
              image="./Electronics.jpg"
              link="See more"
              />
              <ProductPromo/>
              <Product2 
              
              title="Shop School Essentials"
              image="./School.jpg"
              link="See more"
              />
              <Product2 
              title="Home & Kitchen Under $30"
              image="./Home.jpg"
              link="Shop now"
              />
              <Product2 
              title="Health & Personal Care"
              image="./Health.jpg"
              link="Shop now"
              />
              <Product2 
              title="Beauty Picks"
              image="Beauty.jpg"
              link="Shop now"
              />
            </div>
            <div className="home-row"></div>
          </div>
        </div>
      ))}
      <Pagination
        prevSlide={() =>
          setActiveIndex(activeIndex < 1 ? len : activeIndex - 1)
        }
        nextSlide={() =>
          setActiveIndex(activeIndex === len ? 0 : activeIndex + 1)
        }
      />
    </div>
  );
}

export default Home;
