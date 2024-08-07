import React from 'react'
import { Link } from 'react-router-dom';

// Styles for users module
import "../../../assets/css/views/Users/UsersModule.css";

const LoginView = () => {
  return (
    <main className="content">
      <form className="form">
        <h1>Iniciar Sesión</h1>
        <br />
        <div className="form-group">
          <label htmlFor="email">Correo Electrónico</label>
          <input type="email" name="email" id="email" placeholder="Ingresa tu Correo Electrónico" required />
        </div>
        <div className="form-group">
          <label htmlFor="password">Contraseña</label>
          <input type="password" name="password" id="password" placeholder="Ingresa tu Contraseña" required />
          <h2>Olvidaste tu contraseña? <Link to="/forgot-password">Restablécela dando click aquí</Link></h2>
        </div>
        <button className="btn-submit" type="submit">
          Iniciar Sesión
        </button>
      </form>
    </main>
  )
}

export default LoginView