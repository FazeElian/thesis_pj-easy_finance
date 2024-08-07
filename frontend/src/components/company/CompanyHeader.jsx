import React from 'react'
import { Link, Outlet } from 'react-router-dom'

// Styles
import "../../assets/css/components/company/CompanyHeader.css";

const CompanyHeader = () => {
  return (
    <>
      <header className="header-company">
        <h1><Link to="/">Logo App</Link></h1>
        <div className="header-company--btns">
          <Link to="login" className="header-company--btn header-company--btn-login">Iniciar Sesión</Link>
          <Link to="register" className="header-company--btn header-company--btn-register">Registrarse</Link>
        </div>
      </header>
      <Outlet />
    </>
  )
}

export default CompanyHeader