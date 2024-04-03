const { Router } = require('express');
const router = Router();

const { getColaboradores, createColaborador, getColaboradorById, deleteColaborador, updateColaborador } = require('../controllers/Colaborador.controllers');

router.route('/')
    .get(getColaboradores)
    //.get(getColaboradoresId)
    .post(createColaborador);


// En la ruta correspondiente
router.get('/ids', async (req, res) => {
    try {
        const colaboradorIds = await colaboradorCtrl.getColaboradorIds();
        res.json(colaboradorIds);
    } catch (error) {
        res.status(500).json({ message: 'Failed to get colaborador IDs', error: error.message });
    }
});

router.route('/:id')
    .get(getColaboradorById)
    .put(updateColaborador)
    .delete(deleteColaborador);

module.exports = router;
