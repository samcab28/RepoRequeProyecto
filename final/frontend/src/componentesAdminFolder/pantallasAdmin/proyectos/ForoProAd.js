import { useEffect, useState } from "react";
import io from "socket.io-client";
import axios from "axios"; // Importa axios para hacer solicitudes HTTP

const socket = io.connect("http://localhost:4000");

function ForoFoAd() {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [username, setUsername] = useState("");

  // Función para obtener los mensajes del foro desde el servidor
  async function fetchMessages() {
    try {
      const response = await axios.get("http://localhost:4000/api/message");
      setMessages(response.data);
    } catch (error) {
      console.error("Error al obtener mensajes del foro:", error);
    }
  }

  function sendMessage() {
    const messageWithUsername = `${username}: ${message}`;
    socket.emit("send_message", { message: messageWithUsername });
    setMessage("");
  }

  useEffect(() => {
    // Obtener los mensajes del foro al montar el componente
    fetchMessages();

    socket.on("receive_message", (data) => {
      setMessages(prevMessages => [...prevMessages, data.message]);
    });

    // Limpiar el event listener cuando el componente se desmonta
    return () => {
      socket.off("receive_message");
    };
  }, []);

  useEffect(() => {
    const storedUsername = localStorage.getItem('username');
    if (storedUsername) {
      setUsername(storedUsername);
    }
  }, []);

  return (
    <div className="App" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', minHeight: '100vh' }}>
      <div style={{ flex: 1 }}>
        <h2 style={{ color: '#000000' }}>Foro Proyectos</h2>
        <ul style={{ textAlign: 'left' }}>
        {messages.map((msg, index) => (
        <li key={index}>
          {msg && msg.author ? (
            <strong>{msg.author}: </strong>
          ) : null}
          {msg && msg.content}
        </li>
      ))}
        </ul>
      </div>
      <div style={{ height: '60px', maxWidth: '400px', width: '100%', background: '#fff', position: 'fixed', bottom: 0, left: 0, right: 0, borderTop: '1px solid #ccc', display: 'flex', justifyContent: 'center', alignItems: 'center', margin: 'auto' }}>
        <input
          placeholder="Message"
          onChange={(e) => setMessage(e.target.value)}
          value={message}
          style={{ width: 'calc(100%-120px)', marginRight: '10px', maxWidth: 'calc(100% - 120px)' }}
        />
        <button onClick={sendMessage} style={{ width: '100px' }}>Send</button>
      </div>
    </div>
  );
}

export default ForoFoAd;
