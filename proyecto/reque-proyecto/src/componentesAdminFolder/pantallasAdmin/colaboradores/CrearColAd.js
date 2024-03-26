import React, { useState } from 'react';

const CrearColAd = () => {
  const [nombre, setNombre] = useState('');
  const [cedula, setCedula] = useState('');
  const [correo, setCorreo] = useState('');
  const [departamento, setDepartamento] = useState('');
  const [telefono, setTelefono] = useState('');
  const [estado, setEstado] = useState('');
  const [datosGuardados, setDatosGuardados] = useState(null);

  const handleGuardar = () => {
    const datos = { nombre, cedula, correo, departamento, telefono, estado };
    setDatosGuardados(datos);
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
        Departamento:
        <input type="text" value={departamento} onChange={(e) => setDepartamento(e.target.value)} />
      </label>
      <br />
      <label>
        Teléfono:
        <input type="text" value={telefono} onChange={(e) => setTelefono(e.target.value)} />
      </label>
      <br />
      <label>
        Estado:
        <input type="text" value={estado} onChange={(e) => setEstado(e.target.value)} />
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
