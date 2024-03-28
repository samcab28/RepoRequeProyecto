const { Schema, model } = require('mongoose');

const reunionesSchema = new Schema(
    {
      proyecto: { type: Schema.Types.ObjectId, ref: 'Proyecto', required: true },
      tema: { type: String, required: true, trim: true },
      medio: { type: String, required: true, trim: true },
      colaboradores: [{ type: Schema.Types.ObjectId, ref: 'Colaborador' }]
    },
    {
      timestamps: true,
    }
  );
  
  module.exports = model('Reunion', reunionesSchema);
  