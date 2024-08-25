import React from 'react'
import { Link, Outlet } from 'react-router-dom'

// Styles
import "../../assets/css/components/company/CompanyHeader.css";

// Images - Icons
  // Logo
  import Logo from "../../assets/img/Logo (v.02).png";

const CompanyHeader = () => {
  return (
    <>
      <header className="header-company">
        <div className="logo--header-company">
          <Link to="/"><img src={Logo} alt="" /></Link>
        </div>
      </header>
      <Outlet />
    </>
  )
}

export default CompanyHeader