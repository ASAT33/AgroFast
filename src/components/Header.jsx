import React from "react";
import "./Header.css";
import { useNavigate } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";

export default function Header() {
  let nav = useNavigate();
  return (
    <div className="header">
      <img
        className="logo"
        src="src\assets\Agro-Fast_plain.svg"
        onClick={() => {
          nav("/home");
        }}></img>
      <div className="header_search">
        <input className="header_searchin" type="text"></input>
        <SearchIcon className="header_searchicon"></SearchIcon>
      </div>
      <div className="header_nav"></div>
      <div className="header_optionBasket">
        <ShoppingBasketIcon
          className="header_shoppingicon"
          onClick={() => {
            nav("/carrito");
          }}></ShoppingBasketIcon>
        <span className="header_optionbasket_count">0</span>
      </div>
      <div className="header_option">
        <span className="header_option_user">Hello Guest</span>
        <span className="header_option_user">Sign in</span>
      </div>
      <div className="header_option">
        <span className="header_option_orders">Returns &</span>
        <span className="header_option_orders">Orders</span>
      </div>
    </div>
  );
}
