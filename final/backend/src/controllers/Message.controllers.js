const express = require('express');
const router = express.Router();
const Message = require('../models/MessageModel');

router.get('/', async (req, res) => {
  try {
    const messages = await Message.find();
    res.status(200).send(messages);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
