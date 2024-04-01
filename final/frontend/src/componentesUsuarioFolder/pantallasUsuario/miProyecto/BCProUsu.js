import React, { useState, useEffect, useCallback } from 'react';
import { Line } from 'react-chartjs-2';
import axios from 'axios';

const BCProUsu = () => {
  const [burndownData, setBurndownData] = useState(null);
  const [selectedProjectId, setSelectedProjectId] = useState('');
  const [projectsList, setProjectsList] = useState([]);

  const fetchProjects = useCallback(async () => {
    try {
      const response = await axios.get('http://localhost:4000/api/proyecto');
      setProjectsList(response.data);
    } catch (error) {
      console.error('Error fetching projects:', error);
    }
  }, []);

  useEffect(() => {
    fetchProjects();
  }, [fetchProjects]);

  const handleProjectSelect = async () => {
    try {
      const response = await axios.get(`http://localhost:4000/api/burndown/${selectedProjectId}`);
      const burndownData = response.data.burndownData;
      setBurndownData(burndownData);
    } catch (error) {
      console.error('Error fetching burndown data:', error);
    }
  };

  return (
    <div>
      <h1 style={{ color: "black" }}>Burndown Chart del Proyecto</h1>
      <div>
        <label htmlFor="projectSelect">Selecciona un proyecto:</label>
        <select id="projectSelect" value={selectedProjectId} onChange={(e) => setSelectedProjectId(e.target.value)}>
          <option value="">Selecciona un proyecto</option>
          {projectsList?.map(project => (
            <option key={project._id} value={project._id}>{project.nombre}</option>
          ))}
        </select>
        <button onClick={handleProjectSelect}>Seleccionar</button>
      </div>
      {burndownData && (
        <div style={{ width: '100%', height: '500px' }}>
          <BurndownChart burndownData={burndownData} />
        </div>
      )}
    </div>
  );
};

const BurndownChart = ({ burndownData }) => {
  const { totalWork, remainingWork } = burndownData;
  const completedWork = totalWork - remainingWork;

  const data = {
    labels: ['Inicio', 'Fin'],
    datasets: [
      {
        label: 'Trabajo Restante',
        data: [totalWork, remainingWork],
        fill: false,
        borderColor: 'red',
      },
      {
        label: 'Trabajo Completado',
        data: [0, completedWork],
        fill: false,
        borderColor: 'green',
      },
    ],
  };

  return (
    <div>
      <h2>Burndown Chart</h2>
      <Line data={data} />
    </div>
  );
};

export default BCProUsu;
