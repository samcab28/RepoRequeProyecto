const { Schema, model } = require('mongoose');

const mensajeSchema = new Schema({
  idAutor: {type: Schema.Types.ObjectId, ref: 'Colaborador', required: true},
  contenido: { type: String, required: true, trim: true },
}, {
  timestamps: true, // Esto agrega automáticamente los campos 'createdAt' y 'updatedAt'
});

const colaboradoresSchema = new Schema({
  nombre: { type: String, required: true, trim: true },
  departamento: { type: String, required: true, trim: true },
});

const ForoSchema = new Schema({
  proyecto: { type: Schema.Types.ObjectId, ref: 'Proyecto', required: true },
  mensaje: { type: [mensajeSchema], default: [], required: false },
  colaboradores: { type: [colaboradoresSchema], default: [], required: false },
});

module.exports = model('Foro', ForoSchema);
