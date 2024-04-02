const Message = require('../models/messageModel');

exports.createMessage = async (req, res) => {
  try {
    const { author, content } = req.body;
    const messageCount = await Message.countDocuments();
    
    // Si hay más de 50 mensajes, eliminamos el más antiguo
    if (messageCount >= 50) {
      const oldestMessage = await Message.findOne().sort({ createdAt: 1 });
      await Message.findByIdAndDelete(oldestMessage._id);
    }

    const message = await Message.create({ author, content });
    res.status(201).json(message);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al crear el mensaje' });
  }
};

exports.getMessages = async (req, res) => {
  try {
    const messages = await Message.find().sort({ createdAt: -1 }).limit(50); // Obtener los últimos 50 mensajes
    res.status(200).json(messages.reverse()); // Invertir el orden para que los mensajes más recientes estén arriba
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener los mensajes' });
  }
};
