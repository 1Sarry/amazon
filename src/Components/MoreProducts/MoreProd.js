import React from "react";
import "./MoreProd.scss"
const moreProd = [
  {
    title: "Discover fashion trends",
    img: "https://images-na.ssl-images-amazon.com/images/G/01/softlines/shopbop/ingress/2023/March/mp_20230219_ff_desktopsinglecategory_desktop_379x304_1._SY304_CB612639047_.jpg",
    link: "See more",
  },
  {
    title: "For your Fitness Needs",
    img: "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/September/DashboardCards/Fuji_Dash_Fitness_1X._SY304_CB639748186_.jpg",
    link: "Shop Now",
  },
  {
    title: "Shop Laptops & Tablets",
    img: "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Laptops_379x304_1X_en_US._SY304_CB418608471_.jpg",
    link: "See more",
  },
  {
    title: "New arrivals in Toys",
    img: "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/September/DashboardCards/Fuji_Dash_Toys_1X._SY304_CB639759658_.jpg",
    link: "Shop now",
  },
  {
    title: "Kindle E readers",
    img: "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/September/DashboardCards/Fuji_Desktop_Dash_Kindle_1x._SY304_CB639752818_.jpg",
    link: "Shop Now",
  },
  {
    title: "Home refresh ideas",
    img: "https://images-na.ssl-images-amazon.com/images/G/01/home/THILGMA/SpringEvent2023/XCM_CUTTLE_1559454_3018199_379x304_1X_en_US._SY304_CB592739737_.jpg",
    link: "Shop kitchen upgrades",
  },
  {
    title: "reate with strip lights",
    img: "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_StripLighting_379x304_1X_en_US._SY304_CB418597476_.jpg",
    link: "Shop now",
  },
  {
    title: "Shop Pet supplies",
    img: "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/September/DashboardCards/Fuji_Dash_Pets_1X._SY304_CB639746743_.jpg",
    link: "See more",
  },
];
const MoreProd = () => {
  return (
    <div className="more-prod-container">
      <div className="more-prod-main">
        {moreProd.map((more) => {
          return (
            <div className="more-prod-grid">
              <div className="more-prod">
                <div className="more-prod-info">
                  <h2>{more.title}</h2>
                </div>
                <div className="more-prod-images">
                  <div className="more-prodimg-wrapper2">
                    <img src={more.img} alt="" />
                  </div>
                </div>
                <div className="card-btns-wrapper">
                  <div className="card-link">
                    <a href="#">{more.link}</a>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MoreProd;
