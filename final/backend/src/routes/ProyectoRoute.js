const { Router } = require('express');
const router = Router();

const { getProyectos, createProyecto, getProyectoById, deleteProyecto, updateProyecto } = require('../controllers/Proyecto.controllers');

router.route('/')
    .get(getProyectos)
    .post(createProyecto);

router.route('/:id')
    .get(getProyectoById)
    .put(updateProyecto)
    .delete(deleteProyecto);

module.exports = router;
