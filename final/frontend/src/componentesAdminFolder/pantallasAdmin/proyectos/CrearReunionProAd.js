import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CrearReunion = () => {
  const [proyectoId, setProyectoId] = useState('');
  const [tema, setTema] = useState('');
  const [medio, setMedio] = useState('');
  const [colaboradores, setColaboradores] = useState([]);
  const [administradores, setAdministradores] = useState([]);
  const [proyectosList, setProyectosList] = useState([]);
  const [colaboradoresDisponibles, setColaboradoresDisponibles] = useState([]);
  const [administradoresDisponibles, setAdministradoresDisponibles] = useState([]);

  useEffect(() => {
    loadProyectosList();
    loadColaboradoresDisponibles();
    loadAdministradoresDisponibles();
  }, []);

  const loadProyectosList = async () => {
    try {
      const response = await axios.get('http://localhost:4000/api/proyecto');
      setProyectosList(response.data);
    } catch (error) {
      console.error('Error loading projects list:', error);
    }
  };

  const loadColaboradoresDisponibles = async () => {
    try {
      const response = await axios.get('http://localhost:4000/api/colaborador');
      setColaboradoresDisponibles(response.data);
    } catch (error) {
      console.error('Error loading available collaborators:', error);
    }
  };

  const loadAdministradoresDisponibles = async () => {
    try {
      const response = await axios.get('http://localhost:4000/api/Admin');
      setAdministradoresDisponibles(response.data);
    } catch (error) {
      console.error('Error loading available administrators:', error);
    }
  };

  const handleCrearReunion = async () => {
    const datos = { proyecto: proyectoId, tema, medio, colaboradores, administradores };
    try {
      await axios.post('http://localhost:4000/api/reunion', datos);
      console.log('Reunión creada exitosamente');
      // Limpiar los campos después de crear la reunión
      setProyectoId('');
      setTema('');
      setMedio('');
      setColaboradores([]);
      setAdministradores([]);
    } catch (error) {
      console.error('Error al crear la reunión:', error);
    }
  };

  return (
    <div>
      <h1>Pantalla de Crear Reunión de Proyectos de Administradores</h1>
      <label>
        ID del Proyecto:
        <input type="text" value={proyectoId} onChange={(e) => setProyectoId(e.target.value)} />
      </label>
      <br />
      <label>
        Tema:
        <input type="text" value={tema} onChange={(e) => setTema(e.target.value)} />
      </label>
      <br />
      <label>
        Medio:
        <input type="text" value={medio} onChange={(e) => setMedio(e.target.value)} />
      </label>
      <br />
      <label>
        Colaboradores:
        <select multiple value={colaboradores} onChange={(e) => setColaboradores(Array.from(e.target.selectedOptions, option => option.value))}>
          {colaboradoresDisponibles.map(colaborador => (
            <option key={colaborador._id} value={colaborador._id}>{colaborador.nombre} - {colaborador._id}</option>
          ))}
        </select>
      </label>
      <br />
      <label>
        Administradores:
        <select multiple value={administradores} onChange={(e) => setAdministradores(Array.from(e.target.selectedOptions, option => option.value))}>
          {administradoresDisponibles.map(administrador => (
            <option key={administrador._id} value={administrador._id}>{administrador.nombre} - {administrador._id}</option>
          ))}
        </select>
      </label>
      <br />
      <button onClick={handleCrearReunion}>Crear Reunión</button>
    </div>
  );
};

export default CrearReunion;
