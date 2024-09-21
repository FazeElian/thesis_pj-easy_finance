import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';

// Styles for this component
import "../assets/sass/components/Header.scss";

// Navigation between routes
import { Link } from 'react-router-dom';

// imgs - Icons
  // Logo
  import Logo from "../assets/img/Logo (v.02).webp";

  // Come Back icon
  import ComeBackIcon from "../assets/img/icons/right-arrow-come-back.webp";

const Header = (props) => {
  // Come back button states
  const [ comeBackBtn, setComeBackBtn ] = useState(false);

  useEffect(() => {
    if (props.btnState === "true") {
      setComeBackBtn(true)
    } else {
      setComeBackBtn(false)
    }
  }, [props.btnState]);

  return (
    <>
      <header className={`header ${props.bgColor}`}>
        <nav className="nav-logo">
          <Link to="/">
            <img src={Logo} alt="Logo" />
            <h1>Easy <br />Finance</h1>
          </Link>
        </nav>

        {comeBackBtn && (
          <Link to="/" className="cont-come-back-btn">
            <h2>Volver</h2>
            <img src={ComeBackIcon} alt="" />
          </Link>
        )}
      </header>

      {/* For have component on routes */}
      <Outlet />
    </>
  )
}

export default Header;