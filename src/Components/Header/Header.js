import React from "react";
import "./Header.css";
import SearchIcon from '@mui/icons-material/Search'; 
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';

function Header() {
  return (
    <div className="header">
      <img
        src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
        alt=""
        className="header-logo"
      />
      <div className="header-search">
        <input type="text" className="header_searchInput" />
        <SearchIcon className="header_searchIcon " />
      </div>
      <div className="header_nav">
        <div className="header-option">
          <span className="header-optionLineOne">Hello</span>
          <span className="header-optionLineTwo">Sign In</span>
        </div>
        <div className="header-option">
          <span className="header-optionLineOne">Returns</span>
          <span className="header-optionLineTwo">& Orders</span>
        </div>
        <div className="header-option">
          <span className="header-optionLineOne">Your</span>
          <span className="header-optionLineTwo">Prime</span>
        </div>
        <div className="header-optionBasket">
          <ShoppingBasketIcon/>
          <span className="header-optionLineTwo header-basketCount"></span>
          0 
        </div>
        
      </div>
    </div>
  );
}

export default Header;
