import React from 'react'

// Styles for users module
import "../../../assets/css/views/Users/UsersModule.css";

import { useDocumentTitle } from '../../../hooks/useDocumentTitle';

const ForgotPasswordView = () => {
  // custom hook for tabs title
  useDocumentTitle("Reestablecer contraseña");

  return (
    <main className="content">
      <form className="form">
        <h1>Restablecer contraseña</h1>
        <br />
        <div className="form-group">
          <label htmlFor="email">Correo Electrónico</label>
          <input type="email" name="email" id="email" placeholder="Añade un correo electrónico para cambio de contraseña" required />
        </div>
        <button className="btn-submit" type="submit">
          Enviar código
        </button>
      </form>
    </main>
  )
}

export default ForgotPasswordView