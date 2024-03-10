import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';

import SidebarUsuario from './SidebarUsuario';

import DropDown from '../componets/common/dropdown';

const ComponentesAdmin = () => {
  return (
    <div style={{ display: 'flex' }}>
      <SidebarUsuario />
    </div>
  );
};

export default ComponentesAdmin;
