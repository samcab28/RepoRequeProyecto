import React, { useEffect } from 'react';

const Foro = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = '/socket.io/socket.io.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const chatHtml = `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Chat APP</title>
      </head>
      <body>
        <h1>Foro Proyecto</h1>
    
        <input type="text" id="message" placeholder="Enter Message" />
        <button id="sendBtn">Send</button>
    
        <div id="messages"></div>
    
        <script>
          const socket = io();
          const sendBtn = document.getElementById("sendBtn");
          const messageInput = document.getElementById("message");
          const allMessages = document.getElementById("messages");
    
          socket.on("message", (message) => {
            const p = document.createElement("p");
            p.innerText = message;
            allMessages.appendChild(p);
          });
    
          sendBtn.addEventListener("click", (e) => {
            const message = messageInput.value;
            console.log(message);
            socket.emit("user-message", message);
          });
        </script>
      </body>
    </html>
  `;

  return (
    <div dangerouslySetInnerHTML={{ __html: chatHtml }} />
  );
};

export default Foro;
