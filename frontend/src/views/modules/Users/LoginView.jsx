import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

// Styles for users module
import "../../../assets/css/views/Users/UsersModule.css";

import { useDocumentTitle } from '../../../hooks/useDocumentTitle';

// Images - Icons
  // Logo
  import Logo from "../../../assets/img/Logo (v.02).webp";

  // Arrow left icon
  import ArrowleftIcon from "../../../assets/img/icons/arrow-left-come-back.webp";

const LoginView = () => {
  // custom hook for tabs title
  useDocumentTitle("Iniciar Sesión");

  // States for form data -> default values too
  const [ formData, setFormData ] = useState({
    email: '',
    password: '',
  });

  // States for form input values
  const { email, password } = formData;

  // When the input values change, is gonna change the values on the form data state
  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // React router dom hook for redirection
  const navigate = useNavigate();

  // When the form is submit
  const onSubmit = async (e) => {
    e.preventDefault();

    const BaseAppUrl = process.env.REACT_APP_URL;
    try {
      const response = await axios.post(`${BaseAppUrl}/api/users/login`, formData);
      console.error(response.data);

      // Verify if the form is collecting the data from inputs
      console.log(formData);

      localStorage.setItem('token', response.data.token);
      alert("Has iniciado Sesión");
      navigate('/student/dashboard');
    } catch (err) {
      console.error(err.response ? err.response.data : err.message);
      console.error('Error: ' + err.response?.data?.message);
    }
  };

  // Password visibility states
  const [ passwordVisible, setPasswordVisible ] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  }

  return (
    <main className="content-index">
      {/* Come back container */}
      <div className="cont-come-back--index">
        <Link to="/">
          <img src={ArrowleftIcon} alt="Volver" />
          <h2>Volver</h2>
        </Link>
      </div>

      {/* Form */}
      <form className="form">
        <img src={Logo} alt="" />
        <h1>Iniciar Sesión</h1>
        <br />
        <div className="form-group">
          <input 
            type="email" 
            value={email}
            onChange={onChange}
            name="email" 
            id="email" 
            placeholder="Correo Electrónico" 
            required 
          />
        </div>
        <div className="form-group">
          <input 
            type={passwordVisible ? 'text' : 'password'}            
            value={password}
            onChange={onChange} 
            name="password" 
            id="password" 
            placeholder="Contraseña" 
            required 
          />
        </div>
        <div className="cont-show-password">
          <input 
            type="checkbox" 
            name="show-password" 
            id="show-password-check"
            onClick={togglePasswordVisibility} 
          />
          <h2>Ver contraseña</h2>
        </div>
        <button className="btn-submit" type="submit" onClick={() => navigate("/student/dashboard/")}>
          Iniciar Sesión
        </button>
        <div className="register-login-user">
          <h2>¿Olvidaste tu contraseña? <Link to="/forgot-password">Recupérala aquí</Link></h2>
          <h2>¿No tienes una cuenta? <Link to="/register">Regístrate aquí.</Link></h2>
        </div>
      </form>
    </main>
  )
}

export default LoginView