import React from "react";
import "./Deals.scss";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";
import { Navigation } from "swiper/modules";
import { Scrollbar } from "swiper/modules";
const images = [
  {
    url: "https://m.media-amazon.com/images/I/51G9bqx8XKL._AC_SY200_.jpg",
    off: "43% off",
    price: "21.25",
    discount: "$36.99",
    intro: "Digital SAT Study Guide Premium, 202...",
  },
  {
    url: "https://m.media-amazon.com/images/I/61ZEu5xukIL._AC_SY200_.jpg",
    off: "25% off",
    price: "14.99",
    discount: "$19.99",
    intro: "The Mediterranean Diet Cookbook for...",
  },
  {
    url: "https://m.media-amazon.com/images/I/51wmAZWsAOL._AC_SY200_.jpg",
    off: "23% off",
    price: "23",
    discount: "$30.00",
    intro: "Blessng of the Lost Gitls: A Brady and...",
  },
  {
    url: "https://m.media-amazon.com/images/I/51GG80wVztL._AC_SY200_.jpg",
    off: "23% off",
    price: "23",
    discount: "$30.00",
    intro: "Blessng of the Lost Gitls: A Brady and...",
  },
  {
    url: "https://m.media-amazon.com/images/I/51bnUg3cAmL._AC_SY200_.jpg",
    off: "23% off",
    price: "23",
    discount: "$30.00",
    intro: "Blessng of the Lost Gitls: A Brady and...",
  },
  {
    url: "https://m.media-amazon.com/images/I/41XXP6IkNyL._AC_SY200_.jpg",
    off: "35% off",
    price: "10.99",
    discount: "$16.99",
    intro: "Big Nate: No Worries!: Two Books in One...",
  },
  {
    url: "https://m.media-amazon.com/images/I/51chuhxJweL._AC_SY200_.jpg",
    off: "15% off",
    price: "10.19",
    discount: "$11.99",
    intro: "Cozy Sunday Crosswords (Sunday Cros...",
  },
  {
    url: "https://m.media-amazon.com/images/I/31ySUbuK-7L._AC_SY200_.jpg",
    off: "32% off",
    price: "18.29",
    discount: "$26.99",
    intro: "AP Computer Science A Premium 202...",
  },
  {
    url: "https://m.media-amazon.com/images/I/51rLdRsVncL._AC_SY200_.jpg",
    off: "32% off",
    price: "18.29",
    discount: "$26.99",
    intro: "AP Computer Science A Premium 202...",
  },
  {
    url: "https://m.media-amazon.com/images/I/41y7AY7lzdL._AC_SY200_.jpg",
    off: "23% off",
    price: "23",
    discount: "$30.00",
    intro: "Blessng of the Lost Gitls: A Brady and...",
  },
  {
    url: "https://m.media-amazon.com/images/I/51RH458E6RL._AC_SY200_.jpg",
    off: "36% off",
    price: "17.39",
    discount: "$26.99",
    intro: "AP Environmental Science Premium, 2...",
  },
  {
    url: "	https://m.media-amazon.com/images/I/51LU0dLFNJL._AC_SY200_.jpg",
    off: "23% off",
    price: "23",
    discount: "$30.00",
    intro: "Blessng of the Lost Gitls: A Brady and...",
  },
  {
    url: "https://m.media-amazon.com/images/I/51kKR1v8eUL._AC_SY200_.jpg",
    off: "23% off",
    price: "23",
    discount: "$30.00",
    intro: "Blessng of the Lost Gitls: A Brady and...",
  },
  {
    url: "https://m.media-amazon.com/images/I/41vwjh3V6JL._AC_SY200_.jpg",
    off: "23% off",
    price: "23",
    discount: "$30.00",
    intro: "Blessng of the Lost Gitls: A Brady and...",
  },
  {
    url: "https://m.media-amazon.com/images/I/51gGWrsCcXL._AC_SY200_.jpg",
    off: "23% off",
    price: "23",
    discount: "$30.00",
    intro: "Blessng of the Lost Gitls: A Brady and...",
  },
  {
    url: "https://m.media-amazon.com/images/I/51dJ1Wzf7EL._AC_SY200_.jpg",
    off: "23% off",
    price: "23",
    discount: "$30.00",
    intro: "Blessng of the Lost Gitls: A Brady and...",
  },
  {
    url: "https://m.media-amazon.com/images/I/41-oO77ybWL._AC_SY200_.jpg",
    off: "23% off",
    price: "23",
    discount: "$30.00",
    intro: "Blessng of the Lost Gitls: A Brady and...",
  },
  {
    url: "https://m.media-amazon.com/images/I/51nDed6ONmL._AC_SY200_.jpg",
    off: "23% off",
    price: "23",
    discount: "$30.00",
    intro: "Blessng of the Lost Gitls: A Brady and...",
  },
  {
    url: "https://m.media-amazon.com/images/I/51rx60la5PL._AC_SY200_.jpg",
    off: "23% off",
    price: "23",
    discount: "$30.00",
    intro: "Blessng of the Lost Gitls: A Brady and...",
  },
  {
    url: "https://m.media-amazon.com/images/I/511InSG4CAL._AC_SY200_.jpg",
    off: "23% off",
    price: "23",
    discount: "$30.00",
    intro: "Blessng of the Lost Gitls: A Brady and...",
  },
];
function truncate(str, n){
  return str?.length > n? str.substr(0, n-1)+ "...":str;
}
const Deals = () => {
  return (
    <div className="deals-container">
      <div className="deals-wrapper">
        <div className="deals-header">
          <h2>Deals Under $25</h2>{" "}
          <span>
            <a href="#">See more</a>
          </span>
        </div>

        <Swiper
          slidesPerView={6}
          spaceBetween={10}
          scrollbar={{
            hide: true,
          }}
          navigation={true}
          modules={[Scrollbar, Navigation]}
          className="mySwiper"
        >
          {images.map((img) => {
            return (
              <SwiperSlide className="slider-images-deal">
                <img src={img.url} alt="" />
                <div className="deal-content">
                  <div className="deal-btn-wrapper">
                    <span className="deal-btn">{img.off}</span>{" "}
                    <span className="deal">Deal</span>
                  </div>
                  <div className="discount">
                    <span className="dollar">
                      <sup>$</sup>
                    </span>
                    <span className="price">{img.price}</span>
                    <small className="price-discount">
                      List Price: <span className="line">{img.discount}</span>
                    </small>
                  </div>
                  <div className="intro">{truncate(img.intro, 30)}</div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default Deals;
