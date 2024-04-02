import { useEffect, useState } from "react";
import io from "socket.io-client";
const socket = io.connect("http://localhost:4000");


function Foro() {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]); // Estado para almacenar los mensajes recibidos
  const [messageReceived, setMessageReceived] = useState("");

  function sendMessage() {
    console.log(message);
    socket.emit("send_message", { message: message });
    setMessage(""); // Limpiar el campo de entrada después de enviar el mensaje
  }

  useEffect(() => {
    console.log(socket);

    socket.on("connect_error", (err) => {
      // the reason of the error, for example "xhr poll error"
      console.log(err.message);
    
      // some additional description, for example the status code of the initial HTTP response
      console.log(err.description);
    
      // some additional context, for example the XMLHttpRequest object
      console.log(err.context);
    });
    
    socket.on("receive_message", (data) => {
      console.log("MINCHUS");
      setMessageReceived(data.message);
      setMessages(prevMessages => [...prevMessages, data.message]); // Actualizar el estado de mensajes al recibir un nuevo mensaje
    });

    // Limpiar el event listener cuando el componente se desmonta
    return () => {
      socket.off("receive_message");
    };
  }, [messages]);

  return (
    <div className="App">
      <input
        placeholder="Message"
        onChange={(e) => {
          setMessage(e.target.value);
        }}
      />
      <button onClick={sendMessage}>Send message</button>
      <h1>Message: {messageReceived}</h1>
      <h2>Message History:</h2>
      {/* Mostrar el historial de mensajes */}
      <ul>
        {messages.map((msg, index) => (
          <li key={index}>{msg}</li>
        ))}
      </ul>
    </div>
  );
}

export default Foro;


/*const Foro = () => {
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
      <h1>Foro Proyectos</h1>
      <input type="text" id="message" placeholder="Enter Message" />
      <button onClick={handleSend}>Enviar</button>
      //{/* Mostrar los mensajes en el DOM }
      <div id="messages">
        {messages.map((message, index) => (
          <p key={index}>{message}</p>
        ))}
      </div>
    </div>
  );
};
*/

