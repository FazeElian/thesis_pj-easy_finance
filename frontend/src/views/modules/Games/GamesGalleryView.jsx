import React from 'react'
import { Link } from 'react-router-dom';

// Styles for this component
import "../../../assets/css/views/Games/GamesView.css";

// User authentication check custom hook
import useAuthCheck from "../../../hooks/useAuthCheck";

const GamesGalleryView = () => {
  // User authentication function
  useAuthCheck();

  const baseRouteGame = "/student/games";

  return (
    <main className="content">
      <h1 className='title-view'>Galería de Juegos</h1>
      <section className="games-gallery">
        <div className="card-game">
          <div className="card-game--img">
            <Link to={baseRouteGame + "/expense-or-need"}>
              <img src="https://media.istockphoto.com/id/1027985460/vector/savings.jpg?s=612x612&w=0&k=20&c=lGrwO6laKc6hIyhLPTCFJLU-dbqCyb_1f8Ii8SznLPk=" alt="Game" />
            </Link>
          </div>
          <div className="card-game--txt">
            <Link to={baseRouteGame + "/expense-or-need"} className="game-name">¿Gasto o Necesidad?</Link>
            <h2>Elije entre diferentes objetos y clasifícalos entre un gasto o una necesidad</h2>
            <Link to={baseRouteGame + "/expense-or-need"} className="btn-play">Jugar</Link>
          </div>
        </div>
        <div className="card-game">
          <div className="card-game--img">
            <Link to="/game-url">
              <img src="https://www.esrb.org/wp-content/uploads/2020/11/V1_ESRB_blog_Educational-Benefit-Video-Games-01.jpg" alt="Game" />
            </Link>
          </div>
          <div className="card-game--txt">
            <Link to="/game-url" className="game-name">Game Name</Link>
            <h2>Game Description, Game Description, Game Description...</h2>
            <Link to="/game-url" className="btn-play">Play</Link>
          </div>
        </div>
        <div className="card-game">
          <div className="card-game--img">
            <Link to="/game-url">
              <img src="https://www.esrb.org/wp-content/uploads/2020/11/V1_ESRB_blog_Educational-Benefit-Video-Games-01.jpg" alt="Game" />
            </Link>
          </div>
          <div className="card-game--txt">
            <Link to="/game-url" className="game-name">Game Name</Link>
            <h2>Game Description, Game Description, Game Description...</h2>
            <Link to="/game-url" className="btn-play">Play</Link>
          </div>
        </div>
        <div className="card-game">
          <div className="card-game--img">
            <Link to="/game-url">
              <img src="https://www.esrb.org/wp-content/uploads/2020/11/V1_ESRB_blog_Educational-Benefit-Video-Games-01.jpg" alt="Game" />
            </Link>
          </div>
          <div className="card-game--txt">
            <Link to="/game-url" className="game-name">Game Name</Link>
            <h2>Game Description, Game Description, Game Description...</h2>
            <Link to="/game-url" className="btn-play">Play</Link>
          </div>
        </div>
        <div className="card-game">
          <div className="card-game--img">
            <Link to="/game-url">
              <img src="https://www.esrb.org/wp-content/uploads/2020/11/V1_ESRB_blog_Educational-Benefit-Video-Games-01.jpg" alt="Game" />
            </Link>
          </div>
          <div className="card-game--txt">
            <Link to="/game-url" className="game-name">Game Name</Link>
            <h2>Game Description, Game Description, Game Description...</h2>
            <Link to="/game-url" className="btn-play">Play</Link>
          </div>
        </div>
        <div className="card-game">
          <div className="card-game--img">
            <Link to="/game-url">
              <img src="https://www.esrb.org/wp-content/uploads/2020/11/V1_ESRB_blog_Educational-Benefit-Video-Games-01.jpg" alt="Game" />
            </Link>
          </div>
          <div className="card-game--txt">
            <Link to="/game-url" className="game-name">Game Name</Link>
            <h2>Game Description, Game Description, Game Description...</h2>
            <Link to="/game-url" className="btn-play">Play</Link>
          </div>
        </div>
        <div className="card-game">
          <div className="card-game--img">
            <Link to="/game-url">
              <img src="https://www.esrb.org/wp-content/uploads/2020/11/V1_ESRB_blog_Educational-Benefit-Video-Games-01.jpg" alt="Game" />
            </Link>
          </div>
          <div className="card-game--txt">
            <Link to="/game-url" className="game-name">Game Name</Link>
            <h2>Game Description, Game Description, Game Description...</h2>
            <Link to="/game-url" className="btn-play">Play</Link>
          </div>
        </div>
        <div className="card-game">
          <div className="card-game--img">
            <Link to="/game-url">
              <img src="https://www.esrb.org/wp-content/uploads/2020/11/V1_ESRB_blog_Educational-Benefit-Video-Games-01.jpg" alt="Game" />
            </Link>
          </div>
          <div className="card-game--txt">
            <Link to="/game-url" className="game-name">Game Name</Link>
            <h2>Game Description, Game Description, Game Description...</h2>
            <Link to="/game-url" className="btn-play">Play</Link>
          </div>
        </div>
      </section>
    </main>
  );
}

export default GamesGalleryView