import React from 'react'
import { Link } from 'react-router-dom'

// Styles for users module
import "../../../assets/css/views/Users/UsersModule.css";

const RegisterView = () => {
  return (
    <main className="content">
      <form className="form">
        <h1>Registrarse</h1>
        <br />
        <div className="form-group">
          <label htmlFor="email">Correo Electrónico</label>
          <input type="email" name="email" id="email" placeholder="Ingresa tu Correo Electrónico" required />
        </div>
        <div className="form-group">
          <label htmlFor="username">Nombre de Usuario</label>
          <input type="text" name="username" id="username" placeholder="Ingresa un Nombre de Usuario" required />
        </div>
        <div className="form-group">
          <label htmlFor="password">Contraseña</label>
          <input type="password" name="password" id="password" placeholder="Ingresa tu Contraseña" required />
          <h2>Ya tienes una cuenta? <Link to="/login">Iniciar Sesión</Link></h2>
        </div>
        <button className="btn-submit" type="submit">
          Registrarse
        </button>
      </form>
    </main>
  )
}

export default RegisterView