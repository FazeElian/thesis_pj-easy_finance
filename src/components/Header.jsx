import React, { useState } from 'react'
import { Outlet } from 'react-router-dom';

// Styles for this component
import "../assets/sass/components/Header.scss";

// Navigation between routes
import { Link } from 'react-router-dom';

// imgs - Icons
  // Logo
  import Logo from "../assets/img/Logo (v.02).webp";

  // Menu Icon
  import MenuIcon from "../assets/img/icons/menu.webp";

  // Home Icon
  import HomeIcon from "../assets/img/icons/home.webp";

  // Games Icon
  import GamesIcon from "../assets/img/icons/games.webp";

  // About Icon
  import AboutIcon from "../assets/img/icons/about.webp";

  // Research Project Icon
  import ResearchProjectIcon from "../assets/img/icons/research-project.webp";

const Header = () => {
  // Side bar Menu states
  const [ sideBar, setSideBar ] = useState(false);

  // Handle Side bar function
  const handleSideBar = () => {
    setSideBar(!sideBar);
  }

  return (
    <>
      <header className="header bg-yellow">
        <nav className="nav-logo">
          <Link href="/">
            <img src={Logo} alt="Logo" />
            <h1>Easy <br />Finance</h1>
          </Link>
        </nav>
        <button className="btn-nav-menu bg-blue" onClick={handleSideBar}>
          <img src={MenuIcon} alt="Menu" />
        </button>
        <nav className={ `nav-side-bar ${sideBar ? "active" : ""}` }>
          <h2>Menú de Navegación</h2>
          <ul className="side-bar-items">
            <Link href="/" className="side-bar-item">
              <img src={HomeIcon} alt="Inicio" />
              <h2>Inicio</h2>
            </Link>
            <Link href="/juegos" className="side-bar-item">
              <img src={GamesIcon} alt="Juegos" />
              <h2>Juegos</h2>
            </Link>
            <Link href="/" className="side-bar-item">
              <img src={AboutIcon} alt="Acerca de" />
              <h2>Acerca de</h2>
            </Link>
            <Link href="/" className="side-bar-item">
              <img src={ResearchProjectIcon} alt="Proyecto de Investigación" />
              <h2>Proyecto de Investigación</h2>
            </Link>
          </ul>
        </nav>
      </header>

      {/* For have component on routes */}
      <Outlet />
    </>
  )
}

export default Header;