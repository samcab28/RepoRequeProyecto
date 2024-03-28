import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CrearProyecto = () => {
  const [nombre, setNombre] = useState('');
  const [recursos, setRecursos] = useState('');
  const [presupuesto, setPresupuesto] = useState('');
  const [colaboradores, setColaboradores] = useState([]);
  const [estado, setEstado] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [fecha_inicio, setFecha_inicio] = useState('');
  const [responsable, setResponsable] = useState('');
  const [colaboradoresDisponibles, setColaboradoresDisponibles] = useState([]);
  const [responsablesDisponibles, setResponsablesDisponibles] = useState([]);
  const [datosGuardados, setDatosGuardados] = useState(null);

  useEffect(() => {
    // Obtener la lista de colaboradores disponibles
    axios.get('http://localhost:4000/api/colaborador')
      .then(response => {
        setColaboradoresDisponibles(response.data);
      })
      .catch(error => {
        console.error('Error al obtener los colaboradores:', error);
      });

    // Obtener la lista de responsables disponibles
    axios.get('http://localhost:4000/api/Admin')
      .then(response => {
        setResponsablesDisponibles(response.data);
      })
      .catch(error => {
        console.error('Error al obtener los responsables:', error);
      });
  }, []);

  const handleGuardar = () => {
    // Check if any field is undefined
    if (!nombre || !recursos || !presupuesto || !colaboradores || !estado || !descripcion ||
        !fecha_inicio || !responsable    ) {
      alert('Por favor, completa todos los campos antes de guardar.');
      return; // Exit the function early
    }
  
    const datos = { nombre, recursos, presupuesto, colaboradores, estado, descripcion, fecha_inicio, responsable };
    setDatosGuardados(datos);
  
    // Enviar los datos al servidor para crear el proyecto
    axios.post('http://localhost:4000/api/proyecto/', datos)
      .then(response => {
        console.log('Proyecto creado exitosamente:', response.data);
      })
      .catch(error => {
        console.error('Error al crear el proyecto:', error);
      });
  };
  
  return (
    <div>
      <h1>Pantalla de Crear Proyectos de Administradores</h1>
      <label>
        Nombre:
        <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} />
      </label>
      <br />
      <label>
        Recursos:
        <input type="text" value={recursos} onChange={(e) => setRecursos(e.target.value)} />
      </label>
      <br />
      <label>
        Presupuesto:
        <input type="text" value={presupuesto} onChange={(e) => setPresupuesto(e.target.value)} />
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
        Estado:
        <input type="text" value={estado} onChange={(e) => setEstado(e.target.value)} />
      </label>
      <br />
      <label>
        Descripción:
        <textarea value={descripcion} onChange={(e) => setDescripcion(e.target.value)} />
      </label>
      <br />
      <label>
        Fecha de Inicio:
        <input type="date" value={fecha_inicio} onChange={(e) => setFecha_inicio(e.target.value)} />
      </label>
      <br />
      <label>
        Responsable:
        <select value={responsable} onChange={(e) => setResponsable(e.target.value)}>
          <option value="">---</option>
          {responsablesDisponibles.map(responsable => (
            <option key={responsable._id} value={responsable._id}>{responsable.nombre} - {responsable._id}</option>
          ))}
        </select>
      </label>

      <br />
      <button onClick={handleGuardar}>Guardar</button>
      {datosGuardados && (
        <div>
          <h2>Datos guardados:</h2>
          <pre>{JSON.stringify(datosGuardados, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default CrearProyecto;
