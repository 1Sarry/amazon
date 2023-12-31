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
    <div className="home-main container-wrapper">
      <div className="home">
        {sliderImg.map((slide, index) => (
          <div
            key={index}
            className={
              index === activeIndex
                ? " home-container container-common slides active"
                : "inactive"
            }
          >
            <img className="home-image" src={slide.urls} alt="" />
            <div className="home-row container-common">
              <Product id="12321340" />
              <Product2
                id="12321341"
                title="Toys Under $30"
                price={28}
                image="./Kids.jpg"
                link="Shop now"
                rating={3}
              />
              <Product2
                id="12321342"
                title="Electronics"
                price={25}
                image="./Electronics.jpg"
                link="See more"
                rating={3}
              />
              <ProductPromo />
              <Product2
                id="12321343"
                title="Shop School Essentials"
                price={90}
                image="./School.jpg"
                link="See more"
                rating={3}
              />
              <Product2
                id="12321344"
                title="Home & Kitchen Under $30"
                price={125}
                image="./Home.jpg"
                link="Shop now"
                rating={3}
              />
              <Product2
                id="12321345"
                title="Health & Personal Care"
                price={85}
                image="./Health.jpg"
                link="Shop now"
                rating={3}
              />
              <Product2
                id="12321346"
                title="Beauty Picks"
                price={10}
                image="Beauty.jpg"
                link="Shop now"
                rating={3}
              />
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
    </div>
  );
}

export default Home;
