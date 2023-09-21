import React from "react";
import "./Footer.scss";
import GoTop from "./GoTop";
import { CiGlobe } from "react-icons/ci";
import { BiDollar } from "react-icons/bi";
import { US } from "country-flag-icons/react/3x2";
const Footer = () => {
  return (
    <div className="footer-main-wrapper">
      <GoTop />
      <div className="footer-container">
        <div className="footer-main">
          <div className="cols">
            <div className="footer-title">Get to Know Us</div>
            <div className="footer-menu-list">
              <ul className="footer-items">
                <li className="items">Careers</li>
                <li className="items">Blog</li>
                <li className="items">About Amazon</li>
                <li className="items">Investor Relations</li>
                <li className="items">Amazon Devices</li>
                <li className="items">Amazon Science</li>
              </ul>
            </div>
          </div>
          <div className="cols">
            <div className="footer-title">Make Money with Us</div>
            <div className="footer-menu-list">
              <ul className="footer-items">
                <li className="items">Sell products on Amazon</li>
                <li className="items">Sell on Amazon Business</li>
                <li className="items">Sell apps on Amazon</li>
                <li className="items">Become an Affiliate</li>
                <li className="items">Advertise Your Products</li>
                <li className="items">Self-Publish with Us</li>
                <li className="items">Host an Amazon Hub</li>
                <li className="items">See More Make Money with Us</li>
              </ul>
            </div>
          </div>
          <div className="cols">
            <div className="footer-title">Amazon Payment Products</div>
            <div className="footer-menu-list">
              <ul className="footer-items">
                <li className="items">Amazon Business Card</li>
                <li className="items">Shop with Points</li>
                <li className="items">Reload Your Balance</li>
                <li className="items">Amazon Currency Converter</li>
              </ul>
            </div>
          </div>
          <div className="cols">
            <div className="footer-title">Let's Help You</div>
            <div className="footer-menu-list">
              <ul className="footer-items">
                <li className="items">Amazon and COVID-19</li>
                <li className="items">Your Account</li>
                <li className="items">Your Orders</li>
                <li className="items">Shipping Rates & Policies</li>
                <li className="items">Returns & Replacements</li>
                <li className="items">Manage Your Content and Devices</li>
                <li className="items">Amazon Assistant Help</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="logo">
          <img
            src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
            alt=""
          />
        </div>
        <div className="btn-lang">
          <button>
            <span>
              <CiGlobe color="white" size={16} />
            </span>
            <sapn>English</sapn>
          </button>
        </div>
        <div className="btn-exchange">
          <button>
            <span>
              <BiDollar color="white" size={16} />
            </span>
            <span>USD - U.S. Dollar</span>
          </button>
        </div>
        <div className="btn-country">
          <button>
            <span>
              <US className="flag" />
            </span>
            <span>United States</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
