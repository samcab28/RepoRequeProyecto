// En HomeScreen.js
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const HomeScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState({ role: '', authenticated: false });
  const navigate = useNavigate();

  const usuariosTemporales = [
    { username: 'admin', password: 'admin123', role: 'admin' },
    { username: 'usuario', password: 'usuario123', role: 'usuario' }
  ];

  const handleLogin = () => {
    // Validar el usuario y contraseña
    const user = usuariosTemporales.find(user => user.username === username && user.password === password);
    if (user) {
      // Si la validación es exitosa, establecer como usuario autenticado
      setLoggedIn({ role: user.role, authenticated: true });
    } else {
      // Si la validación falla, mostrar un mensaje de error
      alert('Usuario o contraseña incorrectos');
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
                    value={username} 
                    onChange={(e) => setUsername(e.target.value)} 
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
