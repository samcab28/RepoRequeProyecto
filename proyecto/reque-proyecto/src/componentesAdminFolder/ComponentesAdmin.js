import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';

import SidebarAdmin from './SidebarAdmin';


const ComponentesAdmin = () => {
  return (
    <div style={{ display: 'flex' }}>
      <SidebarAdmin />
      <Link to="/">
        <button>Volver al inicio</button>
      </Link>
    </div>
  );
};

export default ComponentesAdmin;
