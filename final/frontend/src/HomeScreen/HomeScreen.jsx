import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const HomeScreen = () => {
  const [nombre, setNombre] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState({ role: '', authenticated: false });

  useEffect(() => {
    // Verificar si hay información de usuario en el almacenamiento local al cargar la página
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      // Si hay información de usuario, establecer el estado loggedIn en consecuencia
      setLoggedIn(JSON.parse(storedUser));
    }
  }, []);

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:4000/api/login', { nombre, password });

      if (response && response.data !== null) {
        setLoggedIn({ role: response.data.role, authenticated: true });
        // Almacenar la información del usuario en el almacenamiento local
        localStorage.setItem('user', JSON.stringify({ role: response.data.role, authenticated: true }));
      } else {
        alert('Usuario o contraseña incorrectos');
      }
    } catch (error) {
      console.error('Error al iniciar sesión:', error);
      alert('Error al iniciar sesión. Por favor, inténtelo de nuevo más tarde.');
    }
  };

  return (
    <div className='mainContainer'>
      <h1 className='titulo'>Iniciar Sesión</h1>
      <form>
        <div className='formContainer' >
          <label htmlFor="usuario" className="labelWithMargin" style={{ marginRight: '44px' }}>Usuario:</label>
          <input 
            type="text" 
            id="usuario" 
            name="usuario" 
            className="labelWithMargin inputField" 
            value={nombre} 
            onChange={(e) => setNombre(e.target.value)} 
          />
        </div>
        <div className='formContainer' >
          <label htmlFor="contraseña" className="labelWithMargin">Contraseña:</label>
          <input 
            type="password" 
            id="contraseña" 
            name="contraseña" 
            className="labelWithMargin inputField" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
          />
        </div>
      </form>
      <div>
        <button onClick={handleLogin} className='button'>Iniciar Sesión</button>
        {loggedIn.authenticated && (
          <div>
            {loggedIn.role === 'admin' && (
              <Link to="/admin">
                <button className='button'>Admin</button>
              </Link>
            )}
            {loggedIn.role === 'usuario' && (
              <Link to="/usuario">
                <button className='button'>Usuario</button>
              </Link>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default HomeScreen;
