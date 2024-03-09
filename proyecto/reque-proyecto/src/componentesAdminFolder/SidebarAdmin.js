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

const SidebarHeader = styled.h2`
  margin-bottom: 20px;
`;

const SidebarNav = styled.nav`
  display: flex;
  flex-direction: column;
`;

const SidebarLink = styled(Link)`
  color: white;
  text-decoration: none;
  padding: 10px 20px;
  margin-bottom: 5px;
  border-left: 3px solid transparent;

  &:hover {
    border-left: 3px solid #fff;
  }
`;

const Sidebar = () => {
  return (
    <SidebarWrapper>
      <SidebarHeader>Sidebar</SidebarHeader>
      <SidebarNav>
        <SidebarLink to="/">Proyectos</SidebarLink>
        <SidebarLink to="/">Colaboradores</SidebarLink>
        <SidebarLink to="/">Informes</SidebarLink>
        <SidebarLink to="/">Foro</SidebarLink>
      </SidebarNav>
    </SidebarWrapper>
  );
};

export default Sidebar;
