import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CrearReunion = () => {
  const [proyectoId, setProyectoId] = useState('');
  const [tema, setTema] = useState('');
  const [medio, setMedio] = useState('');
  const [link, setLink] = useState('');
  const [fecha, setFecha] = useState('');
  const [hora, setHora] = useState('');
  const [duracionHoras, setDuracionHoras] = useState('');
  const [colaboradores, setColaboradores] = useState([]);
  const [administradores, setAdministradores] = useState([]);
  const [proyectosList, setProyectosList] = useState([]);
  const [colaboradoresDisponibles, setColaboradoresDisponibles] = useState([]);
  const [administradoresDisponibles, setAdministradoresDisponibles] = useState([]);
  const [datosGuardados, setDatosGuardados] = useState(null);

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
    if (!proyectoId || !tema || !medio || !link || !fecha || !colaboradores || !administradores || !duracionHoras) {
      alert('Por favor, completa todos los campos antes de guardar.');
      return; // Exit the function early
    }
  
    const colaboradoresSeleccionados = colaboradores.concat(administradores);
    const datos = {
      proyecto: proyectoId,
      tema,
      medio,
      link,
      fecha: new Date(`${fecha}T${hora}:00`),
      duracionHoras,
      colaboradores: colaboradoresSeleccionados,
      //administradores, // lo puse para la validacion
    };  
    
  
      try {
        const response = await axios.get(`http://localhost:4000/api/proyecto/${proyectoId}`);
        if (response && !response.data) {
          console.log('holaaaaaaaa');
          alert('No se encontró ningún proyecto con el ID proporcionado!');
          return; // Exit the function early
        }
        alert('Tarea creada.');
      
        // Aquí, si la respuesta contiene datos y un ID de proyecto, puedes proceder con la creación de la reunión
        setDatosGuardados(datos);
        await axios.post('http://localhost:4000/api/reunion', datos);
        console.log('Reunión creada exitosamente');
        // Limpiar los campos después de crear la reunión
        setProyectoId('');
        setTema('');
        setMedio('');
        setLink('');
        setFecha('');
        setHora('');
        setDuracionHoras('');
        setColaboradores([]);
      } catch (error) {
        alert('No se encontró ningún proyecto con el ID proporcionado.');
        setProyectoId('');
        setTema('');
        setMedio('');
        setLink('');
        setFecha('');
        setHora('');
        setDuracionHoras('');
        setColaboradores([]);
        console.error('Error al crear la reunión:', error);
      }
      
  };
  
  

  return (
    <div className='SimpleContainer'>
      <h1>Pantalla de Crear Reunión de Proyectos de Administradores</h1>
      <p>
        ID del Proyecto:
        <input className='TextField' type="text" value={proyectoId} onChange={(e) => setProyectoId(e.target.value)} />
      </p>
      <br />
      <p>
        Tema:
        <input className='TextField' type="text" value={tema} onChange={(e) => setTema(e.target.value)} />
      </p>
      <br />
      <p>
        Medio:
        <input className='TextField' type="text" value={medio} onChange={(e) => setMedio(e.target.value)} />
      </p>
      <br />
      <p>
        Enlace:
        <input className='TextField' type="text" value={link} onChange={(e) => setLink(e.target.value)} />
      </p>
      <br />
      <p>
        Fecha:
        <input className='TextField' type="date" value={fecha} onChange={(e) => setFecha(e.target.value)} />
      </p>
      <br />
      <p>
        Hora:
        <input className='TextField' type="time" value={hora} onChange={(e) => setHora(e.target.value)} />
      </p>
      <br />
      <p>
        Duración en Horas:
        <input className='TextField' type="number" value={duracionHoras} onChange={(e) => setDuracionHoras(e.target.value)} />
      </p>
      <br />
      <p>
        Colaboradores:
        <select className='DropDownSimple' multiple value={colaboradores} onChange={(e) => setColaboradores(Array.from(e.target.selectedOptions, option => option.value))}>
          {colaboradoresDisponibles.map(colaborador => (
            <option key={colaborador._id} value={colaborador._id}>{colaborador.nombre} - {colaborador._id}</option>
          ))}
        </select>
      </p>
      <br />
      <br />
      <br />
      <br />
      <p>
        Administradores:
        <select className='DropDownSimple' multiple value={administradores} onChange={(e) => setAdministradores(Array.from(e.target.selectedOptions, option => option.value))}>
          {administradoresDisponibles.map(administrador => (
            <option key={administrador._id} value={administrador._id}>{administrador.nombre} - {administrador._id}</option>
          ))}
        </select>
      </p>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <button className='ButtonOffset' onClick={handleCrearReunion}>Crear Reunión</button>
      <div>
          <h3>Proyectos disponibles:</h3>
          <ul>
              {proyectosList.map((proyecto) => (
                  <li key={proyecto._id}>{proyecto._id} - {proyecto.nombre}</li>
              ))}
          </ul>
      </div>
      {datosGuardados && (
        <div>
          <h2>Datos guardados:</h2>
          <pre>{JSON.stringify(datosGuardados, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default CrearReunion;
