const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
  content: String,
  // Otros campos que desees agregar, como el usuario que envió el mensaje, la fecha y la hora, etc.
});

const Message = mongoose.model('Message', messageSchema);

module.exports = Message;
