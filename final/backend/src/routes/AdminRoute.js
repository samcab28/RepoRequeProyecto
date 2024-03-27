const { Router } = require('express');
const router = Router();

const { getAdmins, createAdmin, getAdminById, deleteAdmin, updateAdmin } = require('../controllers/Admin.controllers');

router.route('/')
    .get(getAdmins)
    .post(createAdmin);

router.route('/:id')
    .get(getAdminById)
    .put(updateAdmin)
    .delete(deleteAdmin);

module.exports = router;
