import React from "react";
import "./Deals.scss";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";
import { Navigation } from "swiper/modules";
import { Scrollbar } from "swiper/modules";
const images = [
  { url: "https://m.media-amazon.com/images/I/51G9bqx8XKL._AC_SY200_.jpg" },
  { url: "https://m.media-amazon.com/images/I/61ZEu5xukIL._AC_SY200_.jpg" },
  { url: "https://m.media-amazon.com/images/I/51wmAZWsAOL._AC_SY200_.jpg" },
  { url: "https://m.media-amazon.com/images/I/51GG80wVztL._AC_SY200_.jpg" },
  { url: "https://m.media-amazon.com/images/I/51bnUg3cAmL._AC_SY200_.jpg" },
  { url: "https://m.media-amazon.com/images/I/41XXP6IkNyL._AC_SY200_.jpg" },
  { url: "https://m.media-amazon.com/images/I/51chuhxJweL._AC_SY200_.jpg" },
  { url: "https://m.media-amazon.com/images/I/31ySUbuK-7L._AC_SY200_.jpg" },
  { url: "https://m.media-amazon.com/images/I/51rLdRsVncL._AC_SY200_.jpg" },
  { url: "https://m.media-amazon.com/images/I/41y7AY7lzdL._AC_SY200_.jpg" },
  { url: "https://m.media-amazon.com/images/I/51RH458E6RL._AC_SY200_.jpg" },
  { url: "	https://m.media-amazon.com/images/I/51LU0dLFNJL._AC_SY200_.jpg" },
  { url: "https://m.media-amazon.com/images/I/51kKR1v8eUL._AC_SY200_.jpg" },
  { url: "https://m.media-amazon.com/images/I/41vwjh3V6JL._AC_SY200_.jpg" },
  { url: "https://m.media-amazon.com/images/I/51gGWrsCcXL._AC_SY200_.jpg" },
  { url: "https://m.media-amazon.com/images/I/51dJ1Wzf7EL._AC_SY200_.jpg" },
  { url: "https://m.media-amazon.com/images/I/41-oO77ybWL._AC_SY200_.jpg" },
  { url: "https://m.media-amazon.com/images/I/51nDed6ONmL._AC_SY200_.jpg" },
  { url: "https://m.media-amazon.com/images/I/51rx60la5PL._AC_SY200_.jpg" },
  { url: "https://m.media-amazon.com/images/I/511InSG4CAL._AC_SY200_.jpg" },
];

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
          slidesPerView={9}
          spaceBetween={30}
          scrollbar={{
            hide: true,
          }}
          navigation={true}
          modules={[Scrollbar, Navigation]}
          className="mySwiper"
        >
          {images.map((img) => {
            return (
              <SwiperSlide className="slider-images">
                <img src={img.url} alt="" />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default Deals;
