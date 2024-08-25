import React from 'react'
import { useDocumentTitle } from '../hooks/useDocumentTitle'
import { Link } from "react-router-dom";

// Styles for this component
import "../assets/css/views/IndexView.css";

// Images - Icons
import Logo from "../assets/img/Logo (v.02).png";

const IndexView = () => {
  // custom hook for tabs title
  useDocumentTitle("Página Principal");

  return (
    <main className="content-index">
        <div className="cont-welcome--index">
          <img src={Logo} alt="" />
          <h1>¡Bienvenido a Easy Finance!</h1>
          <p>Gestiona tus finanzas mientras juegas: nuestros juegos y
          desafíos te ayudarán a ahorrar y tomar decisiones financieras 
          más inteligentes.</p>

          <div className="action-btns--index">
            <Link to="/login" className="btn-action--index btn-action-login--index">Entra Ahora</Link>
            <Link to="/register" className="btn-action--index btn-action-register--index">Crea tu Cuenta</Link>
          </div>
        </div>
    </main>
  )
}

export default IndexView