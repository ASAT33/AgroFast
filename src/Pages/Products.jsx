import React, { useState } from "react";
import "./Product.css";
import productos from '../datos/productos.json';
import { Link } from "react-router-dom";

function Products() {
  const [busqueda, setBusqueda] = useState("");
  const [orden, setOrden] = useState("default");
  const [categoria, setCategoria] = useState("all");

  const productosFiltrados = productos.filter(producto =>
    producto.title.toLowerCase().includes(busqueda.toLowerCase()) &&
    (categoria === "all" || producto.categoria === categoria)
  ).sort((a, b) => {
    if (orden === "menor_precio") {
      return parseFloat(a.Precio) - parseFloat(b.Precio);
    } else if (orden === "mayor_precio") {
      return parseFloat(b.Precio) - parseFloat(a.Precio);
    } else {
      return 0;
    }
  });

  return (
    <div className="products">
      <div className="search-filter-container">{/* Buscador*/}
        <input className="search-filter-container-input"
          type="text"
          placeholder="Buscar producto..."
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
        />
        <div className="filtro">
          <label>Ordenar por:</label>
          <select value={orden} onChange={(e) => setOrden(e.target.value)}>
            <option value="default">Por defecto</option>
            <option value="menor_precio">Menor precio</option>
            <option value="mayor_precio">Mayor precio</option>
          </select>
          
          <label>Filtrar por Categoria:</label>
          <select value={categoria} onChange={(e) => setCategoria(e.target.value)}>
            <option value="all">Todas</option>
            <option value="fruta">Fruta</option>
            <option value="legumbre">Legumbre</option>
            <option value="granos">Granos</option>
          </select>
        </div>
      </div>
      <div className="products">
        {productosFiltrados.map((producto, index) => (
          <Link to={`/producto/${producto.index}`} className="products_link">
            <div className="product">
            <div className="product_info">
              <p>{producto.title}</p>
              <p className="product_price">
                <small>$</small>
                <strong>{producto.Precio}</strong>
              </p>
              <div className="product_rating"></div>
            </div>
            <img className="product_image" src={`src/assets/${producto.image}`} alt={producto.title} />
            {/* <button className="product_button">Agregar al carrito</button>*/}
          </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Products