import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <p> AgroFast&copy;2024 </p>
        <ul className="footer-links">
          <li>
            <a href="/about">Sobre nosotros</a>
          </li>
          <li>
            <a href="/contact">Contacto</a>
          </li>
          <li>
            <a href="/privacy">Política de privacidad</a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
