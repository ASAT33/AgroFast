import React from "react";
import "./Header.css";
import { useNavigate, Link  } from "react-router-dom";
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
        
      </div>
      <div className="header_nav"></div>
      <div className="header_optionBasket">
        <ShoppingBasketIcon
          className="header_shoppingicon" onClick={() => { nav("/carrito");
          }}></ShoppingBasketIcon>
        <span className="header_optionbasket_count">0</span>
      </div>
      <div className="header_option">
        <span className="header_option_user">Bienvenido</span>
        <Link to="/login" className="header_option_user">Log in</Link>
      </div>
      <div className="header_option">
        <span className="header_option_orders">Returns &</span>
        <span className="header_option_orders">Orders</span>
      </div>
    </div>
  );
}
