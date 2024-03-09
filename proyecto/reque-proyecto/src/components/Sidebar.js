import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const SidebarWrapper = styled.div`
  width: 250px;
  height: 100vh;
  background-color: #333;
  color: #fff;
  padding: 20px;
`;

const Sidebar = () => {
  return (
    <SidebarWrapper>
      <h2>Sidebar</h2>
      <ul>
        <li><Link to="/link1">Link 1</Link></li>
        <li><Link to="/link2">Link 2</Link></li>
        <li><Link to="/link3">Link 3</Link></li>
      </ul>
    </SidebarWrapper>
  );
};

export default Sidebar;
