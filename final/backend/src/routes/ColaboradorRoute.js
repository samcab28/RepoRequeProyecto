const { Router } = require('express');
const router = Router();

const { getColaboradores, createColaborador, getColaboradorById, deleteColaborador, updateColaborador } = require('../controllers/Colaborador.controllers');

router.route('/')
    .get(getColaboradores)
    .post(createColaborador);

router.route('/:id')
    .get(getColaboradorById)
    .put(updateColaborador)
    .delete(deleteColaborador);

module.exports = router;
