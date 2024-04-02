//mmesageRoute.js
const express = require('express');
const router = express.Router();
const messageController = require('../controllers/message.controllers');

router.post('/', messageController.createMessage);
router.get('/', messageController.getMessages);

module.exports = router;
