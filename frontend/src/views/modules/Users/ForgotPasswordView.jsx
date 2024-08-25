import React from 'react'

// Styles for users module
import "../../../assets/css/views/Users/UsersModule.css";

import { useDocumentTitle } from '../../../hooks/useDocumentTitle';

const ForgotPasswordView = () => {
  // custom hook for tabs title
  useDocumentTitle("Recuperar contraseña");

  return (
    <main className="content-index">
      <form className="form">
        <h1>Recuperar contraseña</h1>
        <br />
        <div className="form-group">
          <input type="email" name="email" id="email" placeholder="Correo electrónico para cambio de contraseña" required />
        </div>
        <button className="btn-submit" type="submit">
          Enviar código
        </button>
      </form>
    </main>
  )
}

export default ForgotPasswordView