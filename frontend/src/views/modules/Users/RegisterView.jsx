import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';

// Styles for users module
import "../../../assets/css/views/Users/UsersModule.css";

const RegisterView = () => {
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
      navigate("/student");
    } catch (err) {
      console.error(err.response.data);
    }
  };

  return (
    <main className="content">
      <form className="form" onSubmit={onSubmit}>
        <h1>Registrarse</h1>
        <br />
        <div className="form-group">
          <label htmlFor="email">Correo Electrónico</label>
          <input 
            type="email" 
            value={email}
            onChange={onChange}
            name="email" 
            id="email" 
            placeholder="Ingresa tu Correo Electrónico" 
            required 
          />
        </div>
        <div className="form-group">
          <label htmlFor="username">Nombre de Usuario</label>
          <input 
            type="text" 
            value={username}
            onChange={onChange}
            name="username" 
            id="username" 
            placeholder="Ingresa un Nombre de Usuario" 
            required 
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Contraseña</label>
          <input 
            type="password" 
            value={password}
            onChange={onChange}
            name="password" 
            id="password" 
            placeholder="Ingresa tu Contraseña" 
            required 
          />
          <h2>Ya tienes una cuenta? <Link to="/login">Iniciar Sesión</Link></h2>
        </div>
        <button className="btn-submit" type="submit">
          Registrarse
        </button>
      </form>
    </main>
  )
}

export default RegisterView