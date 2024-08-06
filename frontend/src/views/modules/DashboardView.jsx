import React from 'react'
import { Link } from "react-router-dom"

// Styles for this view component
import "../../assets/css/views/DashboardView.css";

const DashboardView = () => {
  return (
    <main className="content">
      <h1>Galería de Juegos</h1>
      <section className="games-gallery">
        <div to="/game-url" className="card-game">
          <div className="card-game--img">
            <Link to="/game-url">
              <img src="https://www.esrb.org/wp-content/uploads/2020/11/V1_ESRB_blog_Educational-Benefit-Video-Games-01.jpg" alt="" />
            </Link>
          </div>
          <div className="card-game--txt">
            <Link to="/game-url" className="game-name">Game Name</Link>
            <h2>Game Description</h2>
            <Link to="/game-url" className="btn-play">Play</Link>
          </div>
        </div>
        <div to="/game-url" className="card-game">
          <div className="card-game--img">
            <Link to="/game-url">
              <img src="https://www.esrb.org/wp-content/uploads/2020/11/V1_ESRB_blog_Educational-Benefit-Video-Games-01.jpg" alt="" />
            </Link>
          </div>
          <div className="card-game--txt">
            <Link to="/game-url" className="game-name">Game Name</Link>
            <h2>Game Description</h2>
            <Link to="/game-url" className="btn-play">Play</Link>
          </div>
        </div>
        <div to="/game-url" className="card-game">
          <div className="card-game--img">
            <Link to="/game-url">
              <img src="https://www.esrb.org/wp-content/uploads/2020/11/V1_ESRB_blog_Educational-Benefit-Video-Games-01.jpg" alt="" />
            </Link>
          </div>
          <div className="card-game--txt">
            <Link to="/game-url" className="game-name">Game Name</Link>
            <h2>Game Description</h2>
            <Link to="/game-url" className="btn-play">Play</Link>
          </div>
        </div>
        <div to="/game-url" className="card-game">
          <div className="card-game--img">
            <Link to="/game-url">
              <img src="https://www.esrb.org/wp-content/uploads/2020/11/V1_ESRB_blog_Educational-Benefit-Video-Games-01.jpg" alt="" />
            </Link>
          </div>
          <div className="card-game--txt">
            <Link to="/game-url" className="game-name">Game Name</Link>
            <h2>Game Description</h2>
            <Link to="/game-url" className="btn-play">Play</Link>
          </div>
        </div>
        <div to="/game-url" className="card-game">
          <div className="card-game--img">
            <Link to="/game-url">
              <img src="https://www.esrb.org/wp-content/uploads/2020/11/V1_ESRB_blog_Educational-Benefit-Video-Games-01.jpg" alt="" />
            </Link>
          </div>
          <div className="card-game--txt">
            <Link to="/game-url" className="game-name">Game Name</Link>
            <h2>Game Description</h2>
            <Link to="/game-url" className="btn-play">Play</Link>
          </div>
        </div>
        <div to="/game-url" className="card-game">
          <div className="card-game--img">
            <Link to="/game-url">
              <img src="https://www.esrb.org/wp-content/uploads/2020/11/V1_ESRB_blog_Educational-Benefit-Video-Games-01.jpg" alt="" />
            </Link>
          </div>
          <div className="card-game--txt">
            <Link to="/game-url" className="game-name">Game Name</Link>
            <h2>Game Description</h2>
            <Link to="/game-url" className="btn-play">Play</Link>
          </div>
        </div>
        <div to="/game-url" className="card-game">
          <div className="card-game--img">
            <Link to="/game-url">
              <img src="https://www.esrb.org/wp-content/uploads/2020/11/V1_ESRB_blog_Educational-Benefit-Video-Games-01.jpg" alt="" />
            </Link>
          </div>
          <div className="card-game--txt">
            <Link to="/game-url" className="game-name">Game Name</Link>
            <h2>Game Description</h2>
            <Link to="/game-url" className="btn-play">Play</Link>
          </div>
        </div>
        <div to="/game-url" className="card-game">
          <div className="card-game--img">
            <Link to="/game-url">
              <img src="https://www.esrb.org/wp-content/uploads/2020/11/V1_ESRB_blog_Educational-Benefit-Video-Games-01.jpg" alt="" />
            </Link>
          </div>
          <div className="card-game--txt">
            <Link to="/game-url" className="game-name">Game Name</Link>
            <h2>Game Description</h2>
            <Link to="/game-url" className="btn-play">Play</Link>
          </div>
        </div>
      </section>
    </main>
  )
}

export default DashboardView