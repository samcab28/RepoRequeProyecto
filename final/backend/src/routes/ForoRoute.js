const { Router } = require('express');
const router = Router();

const { createForo, getForos,postMessage, getMessages, postParticipantes } = require('../controllers/Foro.controllers');
const proyectoCtrl = require('../controllers/Proyecto.controllers');
const Proyecto = require('../models/ProyectoModel');
const Foro = require('../models/ForoModel');

router.route('/')
    .get(getForos)
    .post(createForo);
 

// Ruta para obtener los participantes de un proyecto específico

router.get('/:foroId/participantes', async (req, res) => {
    const { proyecto } = req.params;

    try {
        const foro = await Foro.findById(proyecto);
        const proyectoInfo = await Proyecto.findById(proyecto);
        if (!foro) {
            return res.status(404).json({ message: 'Foro no encontrado' });
        }
        if (!proyectoInfo) {
            return res.status(404).json({ message: 'Proyecto no encontrado' });
        }

        // Obtener los IDs de colaboradores y el ID del responsable del proyecto
        const colaboradoresYResponsableIds = proyectoCtrl.obtenerIdsColaboradoresYResponsable(proyectoInfo.colaboradores, proyectoInfo.responsable);
        

        foro.colaboradores.push(colaboradoresYResponsableIds);
        await foro.save();

        res.json(colaboradoresYResponsableIds);
    } catch (error) {
        res.status(500).json({ message: 'Failed to get participantes', error: error.message });
    }
});



router.route('/:foroId/mensaje')
    .get(getMessages)
    .post(postMessage);


module.exports = router;
