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
      <h2>{producto.title}</h2>
      <img src={`src/assets/${producto.image}`} alt={producto.title} className="producto_imagen"/>
      <p className="producto-precio">Precio: ${producto.Precio}</p>
      <p className="producto-descripcion">{producto.Descripcion}</p>
      <p className="producto-temporada">Temporada: {producto.temporada}</p>
    </div>
  );
}

export default VistaProducto;
