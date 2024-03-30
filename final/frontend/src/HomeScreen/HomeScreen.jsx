// En HomeScreen.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


const HomeScreen = () => {
  const [nombre, setNombre] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState({ role: '', authenticated: false });

  /*const usuariosTemporales = [
    { username: 'admin', password: 'admin123', role: 'admin' },
    { username: 'usuario', password: 'usuario123', role: 'usuario' }
  ];*/

  const handleLogin = async () => {
    try {
        // Realizar la solicitud POST al backend para autenticar al usuario
        const response = await axios.post('http://localhost:4000/api/login', { nombre, password });
        //console.log('response', response.data);
        
        // Verificar si la solicitud fue exitosa y el usuario está autenticado
        if (response && response.data !== null) {
            // Si el usuario está autenticado, establecer el estado correspondiente
            setLoggedIn({ role: response.data.role, authenticated: true });
            //console.log("LoggedIn:",loggedIn); 
        } else {
            // Si la autenticación falla, mostrar un mensaje de error
            alert('Usuario o contraseña incorrectos');
        }
    } catch (error) {
      // Manejar cualquier error que pueda ocurrir durante la solicitud
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
