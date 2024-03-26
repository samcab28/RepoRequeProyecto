import React, { useState } from 'react';

const CrearProyecto = () => {
  const [nombre, setNombre] = useState('');
  const [recursos, setRecursos] = useState('');
  const [presupuesto, setPresupuesto] = useState('');
  const [colaboradores, setColaboradores] = useState('');
  const [tareas, setTareas] = useState('');
  const [estado, setEstado] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [fechaInicio, setFechaInicio] = useState('');
  const [historialCambios, setHistorialCambios] = useState('');
  const [responsable, setResponsable] = useState('');
  const [datosGuardados, setDatosGuardados] = useState(null);

  const handleGuardar = () => {
    const datos = { nombre, recursos, presupuesto, colaboradores, tareas, estado, descripcion, fechaInicio, historialCambios, responsable };
    setDatosGuardados(datos);
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
        <input type="text" value={colaboradores} onChange={(e) => setColaboradores(e.target.value)} />
      </label>
      <br />
      <label>
        Tareas:
        <input type="text" value={tareas} onChange={(e) => setTareas(e.target.value)} />
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
        <input type="date" value={fechaInicio} onChange={(e) => setFechaInicio(e.target.value)} />
      </label>
      <br />
      <label>
        Historial de Cambios:
        <textarea value={historialCambios} onChange={(e) => setHistorialCambios(e.target.value)} />
      </label>
      <br />
      <label>
        Responsable:
        <input type="text" value={responsable} onChange={(e) => setResponsable(e.target.value)} />
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
