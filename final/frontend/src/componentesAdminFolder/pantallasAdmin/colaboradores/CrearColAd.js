import React, { useState } from 'react';
import axios from 'axios';

const CrearColAd = () => {
  const [nombre, setNombre] = useState('');
  const [cedula, setCedula] = useState('');
  const [correo, setCorreo] = useState('');
  const [contrasena, setContrasena] = useState('');
  const [departamento, setDepartamento] = useState('');
  const [telefono, setTelefono] = useState('');
  const [estado, setEstado] = useState('');
  const [datosGuardados, setDatosGuardados] = useState(null);

  const handleGuardar = async () => {
    const colaborador = { nombre, cedula, correo, password: contrasena, departamento, telefono, estado };
    try {
      await axios.post('http://localhost:4000/api/colaborador/', colaborador);
      setDatosGuardados(colaborador);
    } catch (error) {
      console.error('Error al guardar el colaborador:', error);
    }
  };

  return (
    <div>
      <h1>Pantalla de Crear Colaboradores de Administradores</h1>
      <label>
        Nombre:
        <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} />
      </label>
      <br />
      <label>
        Cédula:
        <input type="text" value={cedula} onChange={(e) => setCedula(e.target.value)} />
      </label>
      <br />
      <label>
        Correo:
        <input type="email" value={correo} onChange={(e) => setCorreo(e.target.value)} />
      </label>
      <br />
      <label>
        Password:
        <input type="text" value={contrasena} onChange={(e) => setContrasena(e.target.value)} />
      </label>
      <br />
      <label>
        Departamento:
        <select value={departamento} onChange={(e) => setDepartamento(e.target.value)}>
          <option value="finanzas">finanzas</option>
          <option value="limpieza">limpieza</option>
          <option value="recursos humanos">recursos humanos</option>
          <option value="marketing">marketing</option>
          <option value="gerencia">erencia</option>
        </select>
      </label>
      <br />
      <label>
        Teléfono:
        <input type="text" value={telefono} onChange={(e) => setTelefono(e.target.value)} />
      </label>
      <br />
      <label>
        Estado:
        <select value={estado} onChange={(e) => setEstado(e.target.value)}>
          <option value="disponible">Disponible</option>
          <option value="ocupado">Ocupado</option>
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

export default CrearColAd;
