const { Router } = require('express');
const router = Router();

const { createForo, getForos, postMessage, getMessages } = require('../controllers/Foro.controllers');
const colaboradorCtrl = require('../controllers/Colaborador.controllers');
const adminCtrl = require('../controllers/Admin.controllers');

router.route('/')
    .get(getForos)
    .post(createForo);
 
// Define la ruta para obtener los IDs de colaboradores y administradores
router.get('/ids', async (req, res) => {
    try {
        const colaboradorIds = await colaboradorCtrl.getColaboradorIds();
        const adminIds = await adminCtrl.getAdminIds();
        const idsUnificados = colaboradorIds.concat(adminIds);
        res.json(idsUnificados);
    } catch (error) {
        res.status(500).json({ message: 'Failed to get colaboradores and admins IDs', error: error.message });
    }
}); 

// Ruta para enviar un mensaje al foro
router.route('/:foroId/mensaje')
    .get(getMessages)
    .post(postMessage);

module.exports = router;
