import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../adminStyle.css';

function ForoFoAd() {
  const [mensaje, setMensaje] = useState('');
  const [mensajesForo, setMensajesForo] = useState([]);

  useEffect(() => {
    async function fetchMessages() {
      try {
        const response = await axios.get('http://localhost:4000/api/foro/660cff915b1492661bdb0e50/mensaje');
        setMensajesForo(response.data);
      } catch (error) {
        console.error('Error al obtener mensajes:', error);
      }
    }

    fetchMessages();
  }, []);

  const handleChange = (e) => {
    setMensaje(e.target.value);
  };

  const enviarMensaje = async () => {
    try {
      await axios.post('http://localhost:4000/api/foro/660cff915b1492661bdb0e50/mensaje', { idAutor: 'idDelAutor', contenido: mensaje });
      console.log('Mensaje enviado:', mensaje);
      setMensaje('');// Actualiza la lista de mensajes después de enviar uno nuevo
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
