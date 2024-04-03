import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../adminStyle.css';

function ForoFoAd() {
  const [mensaje, setMensaje] = useState('');
  const [mensajesForo, setMensajesForo] = useState([]);

  const fetchMessages = async () => {
    try {
      const response = await axios.get('http://localhost:4000/api/foro/660cff915b1492661bdb0e50/mensaje');
      setMensajesForo(response.data);
    } catch (error) {
      console.error('Error al obtener mensajes:', error);
    }
  };

  useEffect(() => {
    fetchMessages();
  }, []);

  const handleChange = (e) => {
    setMensaje(e.target.value);
  };

  const enviarMensaje = async () => {

    try {

      //---------------------------------------------------------------------------
      // Obtener el ID del autor del localStorage
      const idAutor = localStorage.getItem('userId');
     
      // Verificar que el ID del autor esté presente
      if (!idAutor) {
        console.error('Error: ID del autor no encontrado en localStorage');
        return;
      }

      // Realizar la solicitud GET para obtener la información del usuario
      const response = await axios.get(`http://localhost:4000/api/Admin/${idAutor}`);
      let nombreAutor = ' ';
      
      if (response && response.data) {
        //caso ser administrador
        nombreAutor = response.data.nombre;
        console.log(nombreAutor);
      } else {
        //caso ser colaborador
        const colab = await axios.get(`http://localhost:4000/api/colaborador/${idAutor}`);
        nombreAutor = colab.data.nombre;
        console.log(nombreAutor);
      }
     //---------------------------------------------------------------------------
    
     //const nombreAutor = response.data.nombre;
      // Realizar la solicitud POST para enviar el mensaje
      await axios.post(
        'http://localhost:4000/api/foro/660cff915b1492661bdb0e50/mensaje',
        { nombreAutor, idAutor, contenido: mensaje }
      );

      console.log('Mensaje enviado:', mensaje);
      setMensaje('');
      fetchMessages();
    } catch (error) {
      console.error('Error al enviar mensaje:', error);
    }
  };

  return (
    <div className="container">
      <h1>Pruebas de foro de Administradores</h1>

      <div className="messages">
        {mensajesForo.map((mensaje, index) => (
          <div key={index} className="message">
            <p>{mensaje.idAutor}: {mensaje.contenido}</p>
          </div>
        ))}
      </div>

      <div className="footer">
        <input type="text" value={mensaje} onChange={handleChange} />
        <button onClick={enviarMensaje}>Enviar mensaje</button>
      </div>
    </div>
  );
}

export default ForoFoAd;
