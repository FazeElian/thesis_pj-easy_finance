import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

import "../../assets/css/views/DashboardView.css";

const DashboardView = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const checkAuth = async () => {
      // Get token from local storage
      const token = localStorage.getItem('token');
      
      // Redirection to login view if there's no token
      if (!token) {
        navigate('/login'); 
        alert("Debes iniciar sesión");
        return;
      }
  
      try {
        // Verify the token with a request to the backend API
        await axios.get('http://localhost:5000/api/student/dashboard', {
          headers: { Authorization: `Bearer ${token}` },
        });
      } catch (error) {
        console.error('Token de autenticación no válido o expirado', error);
        localStorage.removeItem('token');

        // Redirection to login view if the token is invalid or expired
        navigate('/login');
        alert("Vuelve a iniciar sesión");
      }
    };
  
    checkAuth();
  }, [navigate]);
  

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
    alert("Has cerrado sesión");
  };

  return (
    <main className="content">
      <h1>Galería de Juegos</h1>
      <button className="btn-log-out" onClick={handleLogout}>
        Cerrar Sesión
      </button>
      <section className="games-gallery">
        <div className="card-game">
          <div className="card-game--img">
            <Link to="/game-url">
              <img src="https://www.esrb.org/wp-content/uploads/2020/11/V1_ESRB_blog_Educational-Benefit-Video-Games-01.jpg" alt="Game" />
            </Link>
          </div>
          <div className="card-game--txt">
            <Link to="/game-url" className="game-name">Game Name</Link>
            <h2>Game Description</h2>
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
            <h2>Game Description</h2>
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
            <h2>Game Description</h2>
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
            <h2>Game Description</h2>
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
            <h2>Game Description</h2>
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
            <h2>Game Description</h2>
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
            <h2>Game Description</h2>
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
            <h2>Game Description</h2>
            <Link to="/game-url" className="btn-play">Play</Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default DashboardView;
