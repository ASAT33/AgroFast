import React, { useState } from "react";
import "./Sidebar.css";
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
     <div className="toggle-btn" onClick={toggleSidebar}>
  <i className="icon menu-icon"></i>
</div>
      {isOpen && (
        <>
          <div className="menu-item">
            <i className="icon user-icon"></i>
            <span>Perfil</span>
          </div>
          <div className="menu-item">
            <Link to="/home" className="sidebar-links"><i className="icon home-icon"></i>
              Inicio</Link>
          </div>
          <div className="menu-item">
            <Link to="/carrito" className="sidebar-links"><i className="icon cart-icon"></i>
              <span>Carrito de compras</span></Link>
          </div>
          <div className="menu-item">
            <i className="icon favorites-icon"></i>
            <span>Favoritos</span>
          </div>
          <div className="menu-item">
            <i className="icon orders-icon"></i>
            <span>Ordenes</span>
          </div>
          <div className="menu-item">
            <i className="icon notifications-icon"></i>
            <span>Notificaciones</span>
          </div>
          <div className="location">
            <h3>Ubicación actual</h3>
            <div className="location-info">
              <i className="icon location-icon"></i>
              <span>Panamá, Panamá<br/>UTP</span>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Sidebar;
