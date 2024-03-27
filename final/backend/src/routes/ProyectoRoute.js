const { Router } = require('express');
const router = Router();

const { getProyectos, createProyecto, getProyectoById, deleteProyecto, updateProyecto,addTaskToProyecto,editTask } = require('../controllers/Proyecto.controllers');


router.route('/')
    .get(getProyectos)
    .post(createProyecto);

router.route('/:id')
    .get(getProyectoById)
    .put(updateProyecto)
    .delete(deleteProyecto);

router.route('/:id/add-task')
    .put(addTaskToProyecto);

router.route('/:id/edit-task/:taskId')
    .put(editTask);

module.exports = router;
