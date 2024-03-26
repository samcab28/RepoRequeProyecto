import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ConsultarColAd = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get('http://localhost:4000/api/users/');
      setUsers(res.data);
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1>Pantalla de consulta de colaboradores de administradores</h1>
      <ul>
        {users.map(user => (
          <li key={user.id}>{user.username}</li>
        ))}
      </ul>
    </div>
  );
};

export default ConsultarColAd;
