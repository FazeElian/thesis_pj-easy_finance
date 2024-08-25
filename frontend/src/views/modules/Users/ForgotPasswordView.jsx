import React from 'react'
import { useDocumentTitle } from '../../../hooks/useDocumentTitle';
import { Link } from 'react-router-dom';

// Styles for users module
import "../../../assets/css/views/Users/UsersModule.css";

// Images - Icons
  // Arrow left icon
  import ArrowleftIcon from "../../../assets/img/icons/arrow-left-come-back.png";

const ForgotPasswordView = () => {
  // custom hook for tabs title
  useDocumentTitle("Recuperar contraseña");

  return (
    <main className="content-index">
      {/* Come back container */}
      <div className="cont-come-back--index">
        <Link to="/login">
          <img src={ArrowleftIcon} alt="Volver" />
          <h2>Volver</h2>
        </Link>
      </div>

      {/* Form */}
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