import { useEffect, useState } from "react";
import io from "socket.io-client";
const socket = io.connect("http://localhost:4000");


function ForoFoAd() {
<<<<<<< Updated upstream
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]); // Estado para almacenar los mensajes recibidos
  const [messageReceived, setMessageReceived] = useState("");
  const [username, setUsername] = useState(""); // Estado para almacenar el nombre de usuario

  function sendMessage() {
    console.log(message);
    /*socket.emit("send_message", { message: message });*/
    const messageWithUsername = `${username}: ${message}`;
    socket.emit("send_message", { message: messageWithUsername });
    setMessage(""); // Limpiar el campo de entrada después de enviar el mensaje
  }
=======
  const [mensaje, setMensaje] = useState('');
  const [mensajesForo, setMensajesForo] = useState([]);
  const [idAutor, setIdAutor] = useState('');

  const fetchMessages = async () => {
    try {
      const response = await axios.get('http://localhost:4000/api/foro/660cff915b1492661bdb0e50/mensaje');
      setMensajesForo(response.data);
      
      // Obtener el ID del autor utilizando el endpoint del router
      const idAutorResponse = await axios.post('http://localhost:4000/api/login', { nombre: 'nombreDelAutor' });
      const idAutor = idAutorResponse.data.userId;
      setIdAutor(idAutor);
    } catch (error) {
      console.error('Error al obtener mensajes:', error);
    }
  };
>>>>>>> Stashed changes

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

<<<<<<< Updated upstream
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
=======
  const enviarMensaje = async () => {
    try {
      // Realiza la solicitud POST para enviar el mensaje
      await axios.post(
        'http://localhost:4000/api/foro/660cff915b1492661bdb0e50/mensaje',
        { idAutor, contenido: mensaje }
      );

      console.log('Mensaje enviado:', mensaje);
      setMensaje('');
      fetchMessages();
    } catch (error) {
      console.error('Error al enviar mensaje:', error);
    }
  };
>>>>>>> Stashed changes

  return (
    <div className="App" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', minHeight: '100vh' }}>
      <div style={{ flex: 1 }}>
        <h2 style = {{color: '#ffffff' }}>Foro General</h2>
        {/*Mostrar el historial de mensajes*/}
        <ul style={{ textAlign: 'left' }}>
          {messages.map((msg, index) => (
            <li key={index}>{msg}</li>
          ))}
        </ul>
      </div>
      {/* Formulario para enviar mensajes */}
      <div style={{ height: '60px', maxWidth: '400px', width: '100%', background: '#fff', position: 'fixed', 
                    bottom: 0, left: 0, right: 0, borderTop: '1px solid #ccc', display: 'flex', justifyContent: 'center', 
                    alignItems: 'center', margin: 'auto' }}>
        <input
          placeholder="Message"
          onChange={(e) => {
            setMessage(e.target.value);
          }}
          style={{ width: 'calc(100%-120px)', marginRight: '10px', maxWidth: 'calc(100% - 120px)' }}
        />
        <button onClick={sendMessage} style={{ width: '100px' }}>Send</button>
      </div>
    </div>
  );
  
  
  
  
  
  
  
  
  
}

export default ForoFoAd;