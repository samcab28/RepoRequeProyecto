import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';

const Foro = () => {
  const [messages, setMessages] = useState([]); // Estado para almacenar los mensajes recibidos
  const [socket, setSocket] = useState(null); // Estado para almacenar la instancia de socket

  useEffect(() => {
    // Crea una instancia de socket y almacénala en el estado
    const newSocket = io('http://localhost:3000/admin');
    console.log('LUCAS');
    // Configura el socket para manejar mensajes entrantes
    newSocket.on('message', (message) => {
      console.log('MENSAJE: ',{message});
      setMessages(prevMessages => [...prevMessages, message]);
    });

    // Almacena el socket en el estado
    setSocket(newSocket);

    // Limpia el socket al desmontar el componente
    return () => {
      newSocket.disconnect();
    };
  }, []);

  const handleSend = () => {
    
    if (socket) { // Asegúrate de que el socket esté definido
      const messageInput = document.getElementById("message");
      const message = messageInput.value;
      console.log(message);
      socket.emit('user-message', message);
    }
  };

  return (
    <div>
      <h1>Foro General</h1>
      <input type="text" id="message" placeholder="Enter Message" />
      <button onClick={handleSend}>Send</button>
      {/* Mostrar los mensajes en el DOM */}
      <div id="messages">
        {messages.map((message, index) => (
          <p key={index}>{message}</p>
        ))}
      </div>
    </div>
  );
};

export default Foro;

