import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';

import SidebarUsuario from './SidebarUsuario';

const ComponentesAdmin = () => {
  return (
    <div style={{ display: 'flex' }}>
      <SidebarUsuario />
      <Link to="/">
        <button>Volver al inicio</button>
      </Link>
    </div>
  );
};

export default ComponentesAdmin;
