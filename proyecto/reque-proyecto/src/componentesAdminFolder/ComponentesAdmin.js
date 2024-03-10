import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';

import SidebarAdmin from './SidebarAdmin';

import DropDown from '../componets/common/dropdown';


const ComponentesAdmin = () => {
  return (
    <div style={{ display: 'flex' }}>
      <SidebarAdmin></SidebarAdmin>
      <Link to="/">
        <button>Volver al inicio</button>
      </Link>
    </div>
  );
};

export default ComponentesAdmin;
