import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Header from "./components/Header";
import Home from "./Pages/Home";
import Carrito from "./Pages/Carrito";
import Footer from "./components/Footer";
import VistaProducto from "./Pages/VistaProducto";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/carrito" element={<Carrito />}></Route>
          <Route path="/producto/:index" element={<VistaProducto />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
