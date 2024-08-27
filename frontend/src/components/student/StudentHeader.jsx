import { useState, useEffect, useRef } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom"

// Styles for this component
import "../../assets/css/components/student/StudentHeader.css";

// Images - icons
  // Menu Icon
  import MenuIcon from "../../assets/img/icons/menu.webp";

const StudentHeader = () => {
  const navigate = useNavigate();

  // Log out function
  const Logout = () => {
    localStorage.removeItem('token');
    navigate('/login');
    alert("Has cerrado sesión con éxito");
  };

  
  // Side bar menu states
  const [ sideBarMenu, setSideBarMenu ] = useState();

  // Handle Menu function
  const handleMenu = () => {
    setSideBarMenu(!sideBarMenu);
  }

  useEffect(() => {
    const handleScrollMenu = () => {
      const scrollThreshold = 200; // Scroll amount
      if (window.scrollY > scrollThreshold && sideBarMenu) {
        setSideBarMenu(false);
      }
    };

    window.addEventListener('scroll', handleScrollMenu);

    return () => {
      window.removeEventListener('scroll', handleScrollMenu);
    };
  }, [sideBarMenu]);   

  // Side bar menu container reference
  const sideBarMenuRef = useRef(null);

  // When the user clicks outside the side bar container function
  const handleClickOutside = (event) => {
    if (sideBarMenuRef.current && !sideBarMenuRef.current.contains(event.target)) {
      setSideBarMenu(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <>
      <header className="header">
        <nav className="nav-logo">
          Logo
        </nav>
        <nav className="nav-menu">
          <Link to="/student/dashboard" className="item-nav-menu">Inicio</Link>
          <Link to="/student/games" className="item-nav-menu">Galería de Juegos</Link>
          <Link to="/student/personal-budget" className="item-nav-menu">Mi Presupuesto</Link>
          <Link to="/student/help" className="item-nav-menu">Ayuda</Link>
        </nav>
        <nav className="nav-user">
          <button className="btn-nav-menu" onClick={handleMenu}>
            <h2>Menú</h2>
            <img src={MenuIcon} alt="Nav Menu button" />
          </button>
        </nav>
        <nav className={ `nav-side-bar ${sideBarMenu ? "active" : ""}` } ref={sideBarMenuRef}>
          <h1>Menú Lateral</h1>

          <button className="btn-log-out" onClick={Logout}>
            Cerrar Sesión
          </button>
        </nav>
      </header>
      <Outlet />
    </>
  )
}

export default StudentHeader