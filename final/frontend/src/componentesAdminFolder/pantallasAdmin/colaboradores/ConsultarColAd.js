import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ConsultarColAd = () => {
  const [users, setUsers] = useState([]);
  const [newUserName, setNewUserName] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get('http://localhost:4000/api/users/');
      setUsers(res.data);
    };
    fetchData();
  }, []);

  const handleSaveUser = async () => {
    await axios.post('http://localhost:4000/api/users/', { username: newUserName });
    setNewUserName('');
    const res = await axios.get('http://localhost:4000/api/users/');
    setUsers(res.data);
  };

  return (
    <div>
      <h1>Pantalla de consulta de colaboradores de administradores</h1>
      <ul>
        {users.map(user => (
          <li key={user.id}>{user.username}</li>
        ))}
      </ul>
      <input
        type="text"
        value={newUserName}
        onChange={(e) => setNewUserName(e.target.value)}
        placeholder="Ingrese un nuevo nombre de usuario"
      />
      <button onClick={handleSaveUser}>Guardar</button>
    </div>
  );
};

export default ConsultarColAd;
