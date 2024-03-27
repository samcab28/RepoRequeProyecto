import React, { useEffect, useState } from 'react';
import axios from 'axios';

const TareasProAd = () => {
    const [searchId, setSearchId] = useState('');
    const [proyecto, setProyecto] = useState(null);
    const [proyectosList, setProyectosList] = useState([]);
    const [newTaskName, setNewTaskName] = useState('');
    const [newTaskDescription, setNewTaskDescription] = useState('');
    const [selectedTaskAssignee, setSelectedTaskAssignee] = useState('');
    const [colaboradoresList, setColaboradoresList] = useState([]);
    const [editingTask, setEditingTask] = useState(null);
    const [editedTaskName, setEditedTaskName] = useState('');
    const [editedTaskDescription, setEditedTaskDescription] = useState('');
    const [editedTaskAssignee, setEditedTaskAssignee] = useState('');

    const handleSearch = async () => {
        try {
            const response = await axios.get(`http://localhost:4000/api/proyecto/${searchId}`);
            setProyecto(response.data);
            loadColaboradoresList();
        } catch (error) {
            console.error('Error searching for project:', error);
        }
    };

    const handleEditTask = async (taskId) => {
        try {
            await axios.put(`http://localhost:4000/api/proyecto/${proyecto._id}/edit-task/${taskId}`, {
                nombre: editedTaskName,
                descripcion: editedTaskDescription,
                responsable: editedTaskAssignee
            });
            setEditingTask(null);
            setEditedTaskName('');
            setEditedTaskDescription('');
            setEditedTaskAssignee('');
            handleSearch();
        } catch (error) {
            console.error('Error editing task:', error);
        }
    };

    useEffect(() => {
        loadProyectosList();
    }, []);

    const loadProyectosList = async () => {
        try {
            const response = await axios.get('http://localhost:4000/api/proyecto');
            setProyectosList(response.data);
        } catch (error) {
            console.error('Error loading projects list:', error);
        }
    };

    const loadColaboradoresList = async () => {
        try {
            const response = await axios.get('http://localhost:4000/api/colaborador');
            setColaboradoresList(response.data);
        } catch (error) {
            console.error('Error loading collaborators list:', error);
        }
    };

    return (
        <div>
            <h1>Asignación de tareas de los proyectos</h1>
            <input
                type="text"
                placeholder="Search by ID"
                value={searchId}
                onChange={(e) => setSearchId(e.target.value)}
            />
            <button onClick={handleSearch}>Search</button>
            {proyecto && (
                <div>
                    <h3>Información del Proyecto:</h3>
                    <p>ID: {proyecto._id}</p>
                    <p>Nombre: {proyecto.nombre}</p>
                    <p>Recursos: {proyecto.recursos}</p>
                    <p>Presupuesto: {proyecto.presupuesto}</p>
                    <p>Colaboradores: {proyecto.colaboradores.join(', ')}</p>
                    <p>Estado: {proyecto.estado}</p>
                    <p>Descripción: {proyecto.descripcion}</p>
                    <p>Fecha de Inicio: {proyecto.fecha_inicio}</p>
                    <p>Responsable: {proyecto.responsable}</p>
                    <div>
                        <h3>Lista de Tareas:</h3>
                        <ul>
                            {proyecto.tareas.map((tarea) => (
                                <li key={tarea._id}>
                                    {editingTask === tarea._id ? (
                                        <div>
                                            <input
                                                type="text"
                                                value={editedTaskName}
                                                onChange={(e) => setEditedTaskName(e.target.value)}
                                            />
                                            <textarea
                                                value={editedTaskDescription}
                                                onChange={(e) => setEditedTaskDescription(e.target.value)}
                                            />
                                            <select
                                                value={editedTaskAssignee}
                                                onChange={(e) => setEditedTaskAssignee(e.target.value)}
                                            >
                                                <option value="">Seleccionar encargado</option>
                                                {colaboradoresList.map((colaborador) => (
                                                    <option key={colaborador._id} value={colaborador._id}>{colaborador.nombre}</option>
                                                ))}
                                            </select>
                                            <button onClick={() => handleEditTask(tarea._id)}>Guardar cambios</button>
                                        </div>
                                    ) : (
                                        <div>
                                            <p>Nombre: {tarea.nombre}</p>
                                            <p>Descripción: {tarea.descripcion}</p>
                                            <p>Responsable: {tarea.responsable}</p>
                                            <button onClick={() => setEditingTask(tarea._id)}>Modificar tarea</button>
                                        </div>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            )}
            <div>
                <h3>Proyectos:</h3>
                <ul>
                    {proyectosList.map((proyecto) => (
                        <li key={proyecto._id}>{proyecto._id} - {proyecto.nombre}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default TareasProAd;
