import React from "react";
import "./Carrito.css";

const Carrito = () => {
  const productos = [
    { id: 1, nombre: 'Producto 1', detalle: 'Detalle del producto 1', precio: 199, stock: true },
    { id: 2, nombre: 'Producto 2', detalle: 'Detalle del producto 2', precio: 99, stock: true },
    { id: 3, nombre: 'Producto 3', detalle: 'Detalle del producto 3', precio: 299, stock: false }
  ];

  return (
    <div className="carrito-container">
      <div className="carrito">
        {productos.map(producto => (
          <div className="carrito-item" key={producto.id}>
            <div className="carrito-image"></div>
            <div className="carrito-details">
              <div className="carrito-name">{producto.nombre}</div>
              <div className="carrito-extra">{producto.detalle}</div>
              <div className="carrito-price">${producto.precio}</div>
              <div className="carrito-stock">{producto.stock ? 'Si Hay' : 'No Hay'}</div>
            </div>
            <div className="carrito-quantity">
              <select>
                <option value="1">1</option>
                {producto.stock && <option value="2">2</option>}
              </select>
              <button className="carrito-remove">X</button>
            </div>
          </div>
        ))}
      </div>

      <div className="carrito-resumen">
        <div className="carrito-subtotal">
          <span>Subtotal</span>
          <span>${productos.reduce((total, producto) => total + producto.precio, 0)}</span>
        </div>
        <div className="carrito-total">
          <span>TOTAL</span>
          <span>${productos.reduce((total, producto) => total + producto.precio, 0) + 8}</span>
        </div>
        <button className="carrito-checkout-button">Pagar</button>
      </div>
    </div>
  );
};

export default Carrito;
