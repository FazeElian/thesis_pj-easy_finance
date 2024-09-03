import { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const useAuthCheck = () => {
    const navigate = useNavigate();

    useEffect(() => {
      const checkAuth = async () => {
        // Get token from local storage
        const token = localStorage.getItem('token');
        
        // Redirection to login view if there's no token
        if (!token) {
          navigate('/login'); 
          return alert("Debes iniciar sesión");
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
          return;
        }
      };
    
      checkAuth();
    }, [navigate]);
}

export default useAuthCheck