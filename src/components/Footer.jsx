import React from 'react'

// Styles for this component
import "../assets/sass/components/Footer.scss";

// Navigation between links
import { Link } from 'react-router-dom';

// Images - icons
  // Logo
  import Logo from "../assets/img/Logo (v.02).webp";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="content-footer">
          <div className="logo-footer">
            <img src={Logo} alt="" />
            Easy <br /> Finance
          </div>
          <div className="list-footer">
            <ul className="list-items-footer">
              <Link to="/glosario/">Glosario</Link>
              <Link to="/juegos/conecta-y-aprende">Conecta y Aprende</Link>
              <Link to="/juegos/supervivencia-financiera">Supervivencia Financiera</Link>
              <Link to="/juegos/compra-y-ahorra" style={{ marginBottom: 0 }}>Compra y Ahorra</Link>
            </ul>
          </div>
          <div className="attribution-footer">
            <div className="group-attribution-footer">
              <h2>Images designed with <Link to="https://www.freepik.com/" style={{ color: '#3876F2' }}>FreePik</Link></h2>
            </div>
            <div className="group-attribution-footer">
              <h2>All icons are from <Link to="https://iconos8.es/" style={{ color: '#1FBF37' }}>Icons8</Link></h2>
            </div>
          </div>
        </div>
        <div className="attribution-bottom-footer">
          <div className="item-attribution-bottom-footer">
            <h2>Images designed with <Link to="https://www.freepik.com/" style={{ color: '#3876F2' }}>FreePik</Link></h2>
          </div>
          <div className="item-attribution-bottom-footer">
            <h2>All icons are from <Link to="https://iconos8.es/" style={{ color: '#1FBF37' }}>Icons8</Link></h2>
          </div>
        </div>
        <div className="bottom-footer">
          <h2>Proyecto Desarrollado por: <Link to="https://github.com/FazeElian"> Elián Ibarra</Link></h2>
        </div>
      </footer>
    </>
  )
}

export default Footer