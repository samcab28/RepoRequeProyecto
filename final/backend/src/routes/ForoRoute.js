const { Router } = require('express');
const router = Router();

const { createForo, getForos } = require('../controllers/Foro.controllers');

router.route('/')
    .get(getForos)
    .post(createForo);
    
module.exports = router;