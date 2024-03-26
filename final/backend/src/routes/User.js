const { Router } = require('express');
const router = Router();

const { getUsers, createUser, getUserById, deleteUser } = require('../controllers/users.controllers');

router.route('/')
    .get(getUsers)
    .post(createUser);

router.route('/:id')
    .get(getUserById)
    .delete(deleteUser);

module.exports = router;
module.exports = router;