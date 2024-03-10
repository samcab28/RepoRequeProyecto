import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import '../stilos.css';

import DropDown from '../componets/common/dropdown';

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



const StyledButton = styled.button`
  width: 50%;
  background-color: #333;
  color: white;
  padding: 10px 20px;
  border: none;
  margin-top: 20px;
  cursor: pointer;

  &:hover {
    background-color: #555;
  }
`;

const SidebarButton = () => {
  return (
    <StyledButton as={Link} to="/">
      Volver al inicio
    </StyledButton>
  );
};


const Sidebar = () => {
  return (
    <SidebarWrapper>
      <SidebarHeader>Sidebar</SidebarHeader>
      <SidebarNav style={{}}>
        <DropDown position='flex' className={'space-x-8'} title={'Proyectos'} options={[
          { text: 'Crear', onClick: () => { console.log('hola mundo') } },
          { text: 'Consultar', onClick: () => { console.log('hola mundo') } },
          { text: 'Modificar', onClick: () => { console.log('hola mundo 2') } },
          { text: 'Crear reunion', onClick: () => { console.log('hola mundo') } },
          { text: 'Foro', onClick: () => { console.log('hola mundo') } }
        ]} />
        <DropDown position='flex' className={'space-x-8'} title={'Colaboradores'} options={[
          { text: 'Crear', onClick: () => { console.log('hola mundo') } },
          { text: 'Modificar', onClick: () => { console.log('hola mundo 2') } },
          { text: 'Consultar', onClick: () => { console.log('hola mundo 3') } }
        ]} />
        <DropDown position='flex' className={'space-x-8'} title={'Informes'} options={[
          { text: 'Informes', onClick: () => { console.log('hola mundo') } }
        ]} />
        <DropDown position='flex' className={'space-x-8'} title={'Foro'} options={[
          { text: 'Foro general', onClick: () => { console.log('hola mundo') } }
        ]} />
        <SidebarButton />
      </SidebarNav>
    </SidebarWrapper>
  );
};

export default Sidebar;
