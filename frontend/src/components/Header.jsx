import { useState, useEffect, useRef } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom"

// Styles for this component
import "../assets/css/components/Header.css";

// Images - icons
  // App Logo
  import Logo from "../assets/img/Logo (v.02).webp";

  // User Icon
  import UserIcon from "../assets/img/icons/user.png";

const Header = () => {
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
        <div className="header-block">
          <h1>Galería de Juegos</h1>
        </div>
        <div className="header-block-logo">
          <Link to="/student/dashboard/">
            <img src={Logo} alt="" />
          </Link>
        </div>
        <div className="header-block header-block-menu">
          <button className="btn-nav-menu" onClick={handleMenu}>
            <img src={UserIcon} alt="Nav Menu button" />
          </button>
        </div>
        {/* }
          <nav className={ `nav-side-bar ${sideBarMenu ? "active" : ""}` } ref={sideBarMenuRef}>
            <h1>Menú Lateral</h1>

            <button className="btn-log-out" onClick={Logout}>
              Cerrar Sesión
            </button>
          </nav> 
        */}
      </header>
      <Outlet />
    </>
  )
}

export default Header