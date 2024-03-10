import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';

import SidebarAdmin from './SidebarAdmin';

import DropDown from '../componets/common/dropdown';


const ComponentesAdmin = () => {
  return (
    <div style={{ display: 'flex' }}>
      <SidebarAdmin></SidebarAdmin>
    </div>
  );
};

export default ComponentesAdmin;
