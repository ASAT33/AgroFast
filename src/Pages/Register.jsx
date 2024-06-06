import React from 'react';
import './Login.css'; 

function Register() {
  return (
    <div className="container">
      <div className="login-container">
        <h2>Registro</h2>
        <form>
          <div className="input-group">
            <label htmlFor="username">Correo:</label>
            <input type="text" id="username" />
          </div>
          <div className="input-group">
            <label htmlFor="number">Cedula:</label>
            <input type="text" id="number" />
          </div>
          <div className="input-group">
            <label htmlFor="number">Numero de telefono:</label>
            <input type="text" id="number" />
          </div>
          <div className="input-group">
            <label htmlFor="password">Contraseña:</label>
            <input type="password" id="password" />
          </div>
          <button type="submit">Aceptar</button>
        </form>
        
      </div>
    </div>
  );
}

export default Register;
