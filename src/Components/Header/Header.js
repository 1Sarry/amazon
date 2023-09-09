import React from "react";
import "./Header.scss";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { Link } from "react-router-dom";
import { useStateValue } from "../StateProvider/StateProvider";

function Header() {
  const [{ basket, user }, dispatch] = useStateValue();

  return (
    <div className="header">
      <Link to="/">
        <img
          src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt=""
          className="header-logo"
        />
      </Link>
      <div className="header-search">
        <input type="text" className="header_searchInput" />
        <SearchIcon className="header_searchIcon " />
      </div>
      <div className="header_nav">
        <Link to="/login">
          <div className="header-option">
            <span className="header-optionLineOne">Hello {user?.email}</span>
            <span className="header-optionLineTwo">Sign In</span>
          </div>
        </Link>
        <div className="header-option">
          <span className="header-optionLineOne">Returns</span>
          <span className="header-optionLineTwo">& Orders</span>
        </div>
        <div className="header-option">
          <span className="header-optionLineOne">Your</span>
          <span className="header-optionLineTwo">Prime</span>
        </div>
        <Link to="/checkout  ">
          <div className="header-optionBasket">
            <ShoppingBasketIcon />
            <span className="header-optionLineTwo header-basketCount">
              {basket.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
