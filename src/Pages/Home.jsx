import React from "react";
import "./Home.css";

import Products from "./Products";

export default function Home() {
  return (
    <div className="home">
      <div className="home_container">

        <Products />
      </div>
    </div>
  );
}
