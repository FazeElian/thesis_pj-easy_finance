import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

// Styles for this view component
import "../../assets/css/views/DashboardView.css";

const DashboardView = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const checkAuth = async () => {
      const token = localStorage.getItem('token');

      if (!token) {
        navigate('/login'); // Redirige al login si no hay token
        return;
      }

      try {
        const response = await axios.get('http://localhost:5000/api/student', {
          headers: { Authorization: `Bearer ${token}` },
        });
        setData(response.data);
      } catch (error) {
        console.error('Token de autenticación no válido o expirado', error);
        localStorage.removeItem('token');
        navigate('/login'); // Redirige al login si el token es inválido o expirado
      } finally {
        setLoading(false);
      }
    };

    checkAuth();
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login'); // Redirige al login después de cerrar sesión
    alert("Has cerrado sesión");
  };

  if (loading) {
    return <div>Cargando...</div>; // Muestra un mensaje o spinner mientras carga
  }

  return (
    <main className="content">
      <h1>Galería de Juegos</h1>
      <button className="btn-log-out" onClick={handleLogout}>
        Cerrar Sesión
      </button>
      <section className="games-gallery">
        {/* Asegúrate de que cada tarjeta de juego tenga enlaces y contenido relevantes */}
        {/* Ejemplo de tarjeta de juego */}
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
        {/* Repite el código anterior para más tarjetas de juego */}
      </section>
    </main>
  );
};

export default DashboardView;
