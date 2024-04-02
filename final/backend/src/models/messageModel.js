//MessageModel.js
const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
  author: { type: String, required: true }, // Nombre del autor del mensaje
  content: { type: String, required: true }, // Contenido del mensaje
  createdAt: { type: Date, default: Date.now } // Fecha de creación del mensaje
});

module.exports = mongoose.model('Message', messageSchema);
