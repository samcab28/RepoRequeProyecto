import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ConsultarColAd = () => {
    const [searchId, setSearchId] = useState('');
    const [colaborador, setColaborador] = useState(null);
    const [colaboradoresList, setColaboradoresList] = useState([]);
    const [selectedField, setSelectedField] = useState('');
    const [newData, setNewData] = useState('');

    const handleSearch = async () => {
        try {
            const response = await axios.get(`http://localhost:4000/api/colaborador/${searchId}`);
            setColaborador(response.data);
        } catch (error) {
            console.error('Error searching for collaborator:', error);
        }
    };

    const handleDelete = async () => {
        try {
            await axios.delete(`http://localhost:4000/api/colaborador/${colaborador._id}`);
            setColaborador(null);
            loadColaboradoresList();
        } catch (error) {
            console.error('Error deleting collaborator:', error);
        }
    };

    const handleUpdate = async () => {
        try {
            await axios.put(`http://localhost:4000/api/colaborador/${colaborador._id}`, { [selectedField]: newData });
            setColaborador(null);
            loadColaboradoresList();
        } catch (error) {
            console.error('Error updating collaborator:', error);
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

    useEffect(() => {
        if (searchId === '') {
            setColaborador(null);
        }
        loadColaboradoresList();
    }, [searchId]);

    return (
        <div>
            <input
                type="text"
                placeholder="Search by ID"
                value={searchId}
                onChange={(e) => setSearchId(e.target.value)}
            />
            <button onClick={handleSearch}>Search</button>
            {colaborador && (
                <div>
                    <h3>Información del Colaborador:</h3>
                    <p>ID: {colaborador._id}</p>
                    <p>Nombre: {colaborador.nombre}</p>
                    <p>Cedula: {colaborador.cedula}</p>
                    <p>Correo: {colaborador.correo}</p>
                    <p>Departamento: {colaborador.departamento}</p>
                    <p>Telefono: {colaborador.telefono}</p>
                    <p>Estado: {colaborador.estado}</p>
                    <button onClick={handleDelete}>Delete</button>
                    <div>
                        <select value={selectedField} onChange={(e) => setSelectedField(e.target.value)}>
                            <option value="nombre">Nombre</option>
                            <option value="cedula">Cedula</option>
                            <option value="correo">Correo</option>
                            <option value="departamento">Departamento</option>
                            <option value="telefono">Telefono</option>
                            <option value="estado">Estado</option>
                        </select>
                        <input type="text" value={newData} onChange={(e) => setNewData(e.target.value)} />
                        <button onClick={handleUpdate}>Update</button>
                    </div>
                </div>
            )}
            {colaboradoresList.length > 0 && (
                <div>
                    <h3>Colaboradores:</h3>
                    <ul>
                        {colaboradoresList.map((colaborador) => (
                            <li key={colaborador._id}>{colaborador._id} - {colaborador.nombre}</li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default ConsultarColAd;
