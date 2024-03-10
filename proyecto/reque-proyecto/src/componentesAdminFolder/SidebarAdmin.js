import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

//importar el molde del dropdown
import DropDown from '../componets/common/dropdown';

//importaciones de pantallas de proyectos
import CrearProAd from './pantallasAdmin/proyectos/CrearProAd';
import ConsultarProAd from './pantallasAdmin/proyectos/ConsultarProAd';
import ModificarProAd from './pantallasAdmin/proyectos/ModificarProAd';
import ForoProAd from './pantallasAdmin/proyectos/ForoProAd';
import CrearReunionProAd from './pantallasAdmin/proyectos/CrearReunionProAd';

//importaciones de pantalla de consulta 
import ConsultarColAd from './pantallasAdmin/colaboradores/ConsultarColAd';
import ModificarColAd from './pantallasAdmin/colaboradores/ModificarColAd';
import CrearColAd from './pantallasAdmin/colaboradores/CrearColAd';

//importaciones de pantalla de informes
import InformesInfAd from './pantallasAdmin/informes/InformesInfAd';

//importaciones de pantalla de foro
import ForoFoAd from './pantallasAdmin/foroAdmin/ForoFoAd';

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

const Sidebar = ({ setCurrentScreen }) => {
  const handleOptionClick = (screen) => {
    setCurrentScreen(screen);
  };

  return (
    <SidebarWrapper>
      <SidebarHeader>Sidebar</SidebarHeader>
      <SidebarNav>
        <DropDown position='flex' title={'Proyectos'} options={[
          { text: 'Crear', onClick: () => { handleOptionClick(<CrearProAd />) } },
          { text: 'Consultar', onClick: () => { handleOptionClick(<ConsultarProAd />) } },
          { text: 'Modificar', onClick: () => { handleOptionClick(<ModificarProAd />) } },
          { text: 'Crear reunion', onClick: () => { handleOptionClick(<CrearReunionProAd/>) } },
          { text: 'Foro', onClick: () => {  handleOptionClick(<ForoProAd />) } }
        ]} />
        <DropDown position='flex' title={'Colaboradores'} options={[
          { text: 'Crear', onClick: () => { handleOptionClick(<CrearColAd/>) } },
          { text: 'Modificar', onClick: () => { handleOptionClick(<ModificarColAd />) } },
          { text: 'Consultar', onClick: () => { handleOptionClick(<ConsultarColAd />) } }
        ]} />
        <DropDown position='flex' title={'Informes'} options={[
          { text: 'Informes', onClick: () => { handleOptionClick(<InformesInfAd />)} }
        ]} />
        <DropDown position='flex' title={'Foro'} options={[
          { text: 'Foro general', onClick: () => { handleOptionClick(<ForoFoAd />)} }
        ]} />
        <SidebarButton />
      </SidebarNav>
    </SidebarWrapper>
  );
};

export default Sidebar;
