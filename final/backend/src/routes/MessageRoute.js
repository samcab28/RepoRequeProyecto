const express = require('express');
const router = express.Router();
const Message = require('../models/Message');

router.post('/', async (req, res) => {
  const { content } = req.body;
  try {
    const newMessage = new Message({ content });
    await newMessage.save();
    res.status(201).send(newMessage);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
