import React from "react";
import { useParams } from "react-router-dom";
import productos from "../datos/productos.json";
import "./VistaProducto.css";

function VistaProducto() {
  const { index } = useParams();
  const productoIndex = parseInt(index, 10);
  const producto = productos[productoIndex];

  if (!producto) {
    return <div>Producto no encontrado</div>;
  }

  return (
    <div className="vista-producto">
      <div className="producto-detalles">
        <div className="producto-imagen">
          <img src={`src/assets/${producto.image}`} alt={producto.title} />
        </div>
        <div className="producto-info">
          <h2>{producto.title}</h2>
          <p className="producto-precio">${producto.Precio}</p>
          <div className="producto-rating">
            <span>★★★★☆</span> {/* Podemos poner una especie de puntaje del productor*/}
          </div>
          <p className="producto-detalles">Descripcion  </p>
          <p className="producto-descripcion">{producto.Descripcion}</p>
          

          <button className="agregar-carrito">Añadir al Carrito</button>
        </div>
      </div>
      <div className="producto-reviews">
        <h3>Comentarios</h3>
        <div className="review">
          <div className="review-autor">
            <strong>Pepe</strong>
            <span>Julio 11, 2022</span>
          </div>
          <div className="review-rating">★★★★☆</div>
          <p>Muy buen vendedor</p>
        </div>
        <div className="review">
          <div className="review-autor">
            <strong>Maria</strong>
            <span>Febrero 22, 2022</span>
          </div>
          <div className="review-rating">★★★★☆</div>
          <p>Bien</p>
        </div>
      </div>
    </div>
  );
}

export default VistaProducto;
