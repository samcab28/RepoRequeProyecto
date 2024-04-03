const { Schema, model } = require('mongoose');

const mensajeSchema = new Schema({
  idAutor: {type: Schema.Types.ObjectId, ref: 'Colaborador', required: true},
  contenido: { type: String, required: true, trim: true },
}, {
  timestamps: true, // Esto agrega automáticamente los campos 'createdAt' y 'updatedAt'
});


const ForoSchema = new Schema({
  proyecto: { type: Schema.Types.ObjectId, ref: 'Proyecto', required: false },
  mensaje: { type: [mensajeSchema], default: [], required: false },
});

module.exports = model('Foro', ForoSchema);
