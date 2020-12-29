import React from "react";
import AmazonLogo from "../Images/AmazonLogo1.png";
import Flag from "../Images/flag.png";
import "../Css/Header.css";
import SearchIcon from "@material-ui/icons/Search";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="Header">
      <div className="Header-Logo">
        <Link to="/">
          <img className="Header-Logo-img" src={AmazonLogo} />
        </Link>
      </div>
      <div className="Header-Search">
        <input type={Text} className="Header-Search-Input" />
        <SearchIcon className="Header-Search-Icon" />
      </div>
      <div className="Header-nav">
        <div className="Header-nav-Option">
          <span className="Option-Line-1">
            <img src={Flag} className="FlagLogo" />
          </span>
          <br />
        </div>
        <div className="Header-nav-Option">
          <span className="Option-Line-1">Hello, Sign in</span> <br />
          <span className="Option-Line-2">Account & Lists</span>
        </div>
        <div className="Header-nav-Option"></div>
        <div className="Header-nav-Option">
          <span className="Option-Line-1">Returns</span>
          <br />
          <span className="Option-Line-2">& Orders</span>
        </div>
        <Link to="/checkout">
          <div className="Header-nav-Option">
            <span className="Option-Line-1 AddCartCounter">0</span>
            <span className="Option-Line-2">
              <AddShoppingCartIcon className="AddCardIcon" />
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
