import React from "react";
import "./TopSeller.scss";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";
import { Navigation } from "swiper/modules";
import { Scrollbar } from "swiper/modules";
const images = [
  { url: "https://m.media-amazon.com/images/I/61sfUlu18JL._AC_SY200_.jpg" },
  { url: "https://m.media-amazon.com/images/I/71Y602T1GDL._AC_SY200_.jpg" },
  { url: "https://m.media-amazon.com/images/I/61CqEb2sJ+L._AC_SY200_.jpg" },
  { url: "https://m.media-amazon.com/images/I/61HThMPIrvL._AC_SY200_.jpg" },
  { url: "https://m.media-amazon.com/images/I/61zv8eCyFvL._AC_SY200_.jpg" },
  { url: "https://m.media-amazon.com/images/I/81hHy5XrdKL._AC_SY200_.jpg" },
  { url: "https://m.media-amazon.com/images/I/61VgZPzVIBL._AC_SY200_.jpg" },
  { url: "https://m.media-amazon.com/images/I/61Li7trlIcL._AC_SY200_.jpg" },
  { url: "https://m.media-amazon.com/images/I/617eFrJTatL._AC_SY200_.jpg" },
  { url: "https://m.media-amazon.com/images/I/918MziXVpLL._AC_SY200_.jpg" },
  { url: "https://m.media-amazon.com/images/I/61VctmCoszL._AC_SY200_.jpg" },
  { url: "https://m.media-amazon.com/images/I/61l51P8kcwL._AC_SY200_.jpg" },
  { url: "https://m.media-amazon.com/images/I/61G2efYUsaL._AC_SY200_.jpg" },
  { url: "https://m.media-amazon.com/images/I/612MgCCMr-L._AC_SY200_.jpg" },
  { url: "https://m.media-amazon.com/images/I/61YrI9N2amL._AC_SY200_.jpg" },
  { url: "https://m.media-amazon.com/images/I/91pI+zj6phL._AC_SY200_.jpg" },
  { url: "https://m.media-amazon.com/images/I/610x2lCdxzL._AC_SY200_.jpg" },
  { url: "https://m.media-amazon.com/images/I/51nDed6ONmL._AC_SY200_.jpg" },
  { url: "https://m.media-amazon.com/images/I/61zIclz5w-L._AC_SY200_.jpg" },
  { url: "https://m.media-amazon.com/images/I/81QxTfW8-PL._AC_SY200_.jpg" },
  { url: "https://m.media-amazon.com/images/I/61NHE9UJZkL._AC_SY200_.jpg" },
  { url: "https://m.media-amazon.com/images/I/71Qo6JXAQEL._AC_SY200_.jpg" },
  { url: "https://m.media-amazon.com/images/I/71GMS90bHOL._AC_SY200_.jpg" },
  { url: "https://m.media-amazon.com/images/I/71un6bB4BKL._AC_SY200_.jpg" },
  { url: "https://m.media-amazon.com/images/I/41tmWKXL2mL._AC_SY200_.jpg" },
  { url: "https://m.media-amazon.com/images/I/61gfwTE4sGL._AC_SY200_.jpg" },
  { url: "https://m.media-amazon.com/images/I/613IJTfd4JL._AC_SY200_.jpg" },
  { url: "https://m.media-amazon.com/images/I/61hjef+ql+L._AC_SY200_.jpg" },
  { url: "https://m.media-amazon.com/images/I/61rgeEExBPS._AC_SY200_.jpg" },
  { url: "https://m.media-amazon.com/images/I/51hJMeGWvhL._AC_SY200_.jpg" },
];
const TopSeller = () => {
  return (
    <div className="top-seller-main">
      <div className="top-seller-container">
        <h2>Top Sellers in Books for you</h2>
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

export default TopSeller;
