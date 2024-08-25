import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';

// Styles for users module
import "../../../assets/css/views/Users/UsersModule.css";

import { useDocumentTitle } from '../../../hooks/useDocumentTitle';

// Images - Icons
  // Logo
  import Logo from "../../../assets/img/Logo (v.02).png";

const RegisterView = () => {
  // custom hook for tabs title
  useDocumentTitle("Registrarse");

  // States for form data -> default values too
  const [ formData, setFormData ] = useState({
    email: '',
    username: '',
    password: '',
  });

  // States for form input values
  const { email, username, password } = formData;

  // When the input values change, is gonna change the values on the form data state
  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // React router dom hook for redirection
  const navigate = useNavigate();

  // When the form is submit
  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/users/register', formData);
      console.error(response.data);
      alert("Te has registrado");
      navigate("/login");
    } catch (err) {
      console.error(err.response.data);
    }
  };

  // Password visibility states
  const [ passwordVisible, setPasswordVisible ] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  }

  return (
    <main className="content-index">
      <form className="form" onSubmit={onSubmit}>
        <img src={Logo} alt="" />
        <h1>Registrarse</h1>
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
            type="text" 
            value={username}
            onChange={onChange}
            name="username" 
            id="username" 
            placeholder="Nombre de Usuario" 
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
        <button className="btn-submit" type="submit">
          Registrarse
        </button>
        <div className="register-login-user">
          <h2>¿Ya tienes una cuenta? <Link to="/login">Inicia sesión aquí</Link></h2>
        </div>
      </form>
    </main>
  )
}

export default RegisterView