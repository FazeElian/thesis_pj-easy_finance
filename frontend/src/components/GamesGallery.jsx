import React from 'react'
import { Link } from 'react-router-dom';

// Styles for this component
import "../assets/css/components/GamesGallery.css";
// import "../assets/sass/backgroundGamesGallery.scss"; // Sass for bg

// User authentication check custom hook
// import useAuthCheck from "../../hooks/useAuthCheck";

import { useDocumentTitle } from '../hooks/useDocumentTitle';

// Images - Icons
  // Game 1
  import Game1 from "../assets/img/Game1.jpg";

  // Game 2
  import Game2 from "../assets/img/Game2.jpg";

const GamesGalleryView = () => {
  // custom hook for tabs title
  useDocumentTitle("Galería de Juegos");

  // User authentication function
  // useAuthCheck();

  const baseRouteGame = "/student/games";

  return (
    <main className="content content-gallery">
      <section className="games-gallery">
        <div to={baseRouteGame + "/expense-or-need"} className="card-game">
          <div className="card-game--img">
            <Link to={baseRouteGame + "/expense-or-need"}>
              <img src={Game1} alt="Game" />
            </Link>
          </div>
          <div className="card-game--txt">
            <Link to={baseRouteGame + "/expense-or-need"} className="game-name">¿Gasto o Necesidad?</Link>
            <h2>Es un juego donde debes elegir entre diferentes objetos y luego debes clasificarlos como un gasto o como una necesidad</h2>
            <div className='cont-btn-play'>
              <Link to={baseRouteGame + "/expense-or-need"} className="btn-play">Jugar</Link>
            </div>
          </div>
        </div>
        <div className="card-game">
          <div className="card-game--img">
            <Link to={baseRouteGame + "/memory-concepts"}>
              <img src={Game2} alt="Game" />
            </Link>
          </div>
          <div className="card-game--txt">
            <Link to={baseRouteGame + "/memory-concepts"} className="game-name">Conecta y Aprende</Link>
            <h2>Es un juego donde se empareja imágenes y conceptos de finanzas convirtiéndose en una aventura divertida y de aprendizaje.</h2>
            <div className='cont-btn-play'>
              <Link to={baseRouteGame + "/memory-concepts"} className="btn-play">Jugar</Link>
            </div>          
          </div>
        </div>
        <div className="card-game">
          <div className="card-game--img">
            <Link to={baseRouteGame + "/memory-concepts"}>
              <img src="https://prodimage.images-bn.com/pimages/0819441015555_p0_v1_s1200x630.jpg" alt="Game" />
            </Link>
          </div>
          <div className="card-game--txt">
            <Link to={baseRouteGame + "/memory-concepts"} className="game-name">Conecta y Aprende</Link>
            <h2>Es un juego donde se empareja imágenes y conceptos de finanzas convirtiéndose en una aventura divertida y de aprendizaje.</h2>
            <div className='cont-btn-play'>
              <Link to={baseRouteGame + "/memory-concepts"} className="btn-play">Jugar</Link>
            </div>          
          </div>
        </div>
        <div className="card-game">
          <div className="card-game--img">
            <Link to={baseRouteGame + "/memory-concepts"}>
              <img src="https://prodimage.images-bn.com/pimages/0819441015555_p0_v1_s1200x630.jpg" alt="Game" />
            </Link>
          </div>
          <div className="card-game--txt">
            <Link to={baseRouteGame + "/memory-concepts"} className="game-name">Conecta y Aprende</Link>
            <h2>Es un juego donde se empareja imágenes y conceptos de finanzas convirtiéndose en una aventura divertida y de aprendizaje.</h2>
            <div className='cont-btn-play'>
              <Link to={baseRouteGame + "/memory-concepts"} className="btn-play">Jugar</Link>
            </div>          
          </div>
        </div>
      </section>
    </main>
  );
}

export default GamesGalleryView