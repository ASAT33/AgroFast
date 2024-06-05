import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Header from "./components/Header";
import Home from "./Pages/Home";
import Carrito from "./Pages/Carrito";
import VistaProducto from "./Pages/VistaProducto";
import Sidebar from "./components/Sidebar";
import Login from "./Pages/Login";
function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Sidebar />
        <Routes>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/carrito" element={<Carrito />}></Route>
          <Route path="/producto/:index" element={<VistaProducto />} />
          <Route path="/login" element={<Login />}></Route>
        </Routes>
      </BrowserRouter>
      
    </>
  );
}

export default App;
