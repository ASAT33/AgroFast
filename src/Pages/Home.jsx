import React from "react";
import "./Home.css";
import Header from "../components/Header";
import Products from "./Products";

export default function Home() {
  return (
    <div className="home">
      <div className="home_container">
        <img className="home_image" src="src\assets\AgroFast.png"></img>

        {/*Productos de Temporada*/}
        <div className="home_row">
          <Products
            title="Saco de Naranjas"
            image="src\assets\sacodenaranje.jpg"
            info="18.00"
          />
        </div>

        {/*Productos Por Region*/}
        <div className="home_row">
          <Products title="Tomate" image="src\assets\tomate.jpg" info="3.00" />
          <Products title="Melon" image="src\assets\melon.jpg" info="13.00" />
          <Products
            title="Perejil"
            image="src\assets\perejil.jpg"
            info="2.50"
          />
        </div>

        {/*Productos varios*/}
        <div className="home_row">
          <Products title="Guineo" image="src\assets\guineo.jpg" info="4.00" />
          <Products title="Piña" image="src\assets\pinña.jpg" info="5.00" />
        </div>
      </div>
    </div>
  );
}
