// Navigation between routes
import { Link } from "react-router-dom";

// Header component
import Header from "../components/Header";

// Styles for this view
import "../assets/sass/views/IndexView.scss";

// Images - Icons
  // Games
  import Glosary from "../assets/img/Glosary.webp";
  import Game1 from "../assets/img/Game1.webp";
  import Game2 from "../assets/img/Game2.webp";
  import Game3 from "../assets/img/Game3.webp";

export default function IndexView() {
  return (
    <>
      {/* Header */}
      <Header 
        bgColor="bg-blue-low-opacity" 
        btnColor="bg-blue"
      />

      <main className="py-top">
        <section className="banner">
          <div className="banner-content">
            <h1>Jugando aprendes, ahorrando creces: </h1>
            <h2>¡Bienvenido a la diversión financiera!.</h2>
          </div>
        </section>
        <div className="bg-orange block-small2"></div>
        <section className="games-gallery">
          <div className="title-games-gallery">
            Galería de Juegos
          </div>
          <div className="games-gallery-items">
            <div className="item-games-gallery">
              <Link to="/glosario">
                <img src={Glosary} alt="Juego 1" />
              </Link>
            </div>
            <div className="item-games-gallery">
              <Link to="/juegos/conecta-y-aprende">
                <img src={Game1} alt="Juego 1" />
              </Link>            
            </div>
            <div className="item-games-gallery">
              <Link to="/juegos/supervivencia-financiera">
                <img src={Game2} alt="Juego 1" />
              </Link>            
            </div>
            <div className="item-games-gallery">
              <Link to="/juegos/compra-y-ahorra">
                <img src={Game3} alt="Juego 1" />
              </Link>            
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
