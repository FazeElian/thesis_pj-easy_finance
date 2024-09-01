import React from 'react'
import { Link } from "react-router-dom";

// Styles for this component
import "../assets/css/views/Index2View.css";

// Images - icons
    // Logo
    import Logo from "../assets/img/Logo (v.02).webp";

    // Menu Icon
    import MenuIcon from "../assets/img/icons/menu.webp";

    // Glosary
    import Glosary from "../assets/img/Glosary.jpg";

    // Games
    import Game1Img from "../assets/img/Game1.jpg";
    import Game2Img from "../assets/img/Game2.jpg";
    import Game3Img from "../assets/img/Game3.jpg";

const Index2View = () => {
  return (
    <>
        <header className="header--index2">
            <nav className="nav-logo--index2">
                <img src={Logo} alt="" />
                <h2>Easy <br />Finance</h2>
            </nav>
            <button className="btn-menu--index2">
                <img src={MenuIcon} alt="" />
            </button>
        </header>
        <section className="banner--index2">
            <h2>Jugando aprendes, ahorrando creces: <h3>¡Bienvenido a la diversión financiera!</h3></h2>
        </section>
        <div className="block-section" />
        <section className="games-gallery--index2">
            <h1>Galería de Juegos</h1>
            <div className="items-games-gallery--index2">
                <div className="item-games-gallery--index2">
                    <Link to="/">
                        <img src={Glosary} alt="" />
                    </Link>
                </div>
                <div className="item-games-gallery--index2">
                    <Link to="/">
                        <img src={Game1Img} alt="" />
                    </Link>                
                </div>
                <div className="item-games-gallery--index2">
                    <Link to="/">
                        <img src={Game2Img} alt="" />
                    </Link>                
                </div>
                <div className="item-games-gallery--index2">
                    <Link to="/">
                        <img src={Game3Img} alt="" />
                    </Link>                
                </div>
            </div>
        </section>
        <footer className="footer">
            Footer
        </footer>
    </>
  )
}

export default Index2View