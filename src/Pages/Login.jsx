import React from 'react';
import './Login.css'; 

function Login() {
  return (
    <div className="container">
      <div className="login-container">
        <h2>Iniciar Sesión</h2>
        <form>
          <div className="input-group">
            <label htmlFor="username">Usuario:</label>
            <input type="text" id="username" />
          </div>
          <div className="input-group">
            <label htmlFor="password">Contraseña:</label>
            <input type="password" id="password" />
          </div>
          <button type="submit">Iniciar Sesión</button>
          <h3>-----¿Nuevo Usuario?-----</h3>
          <button type="submit">Registrarse</button>
        </form>
        
      </div>
    </div>
  );
}

export default Login;
