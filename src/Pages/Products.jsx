import React from "react";
import "./Product.css";

export default function Products({ title, image, info }) {
  return (
    <div className="product">
      <div className="product_info">
        <p>{title}</p>
        <p className="=product_price">
          <small>$</small>
          <strong>{info}</strong>
        </p>
        <div className="product_rating">
          <p>*</p>
        </div>
      </div>
      <img className="product_image" src={image}></img>
      <button className="product_button">Agregar al carrito</button>
    </div>
  );
}
