const express = require('express');
const router = express.Router();
const { removeEvent, editEvent, addEvent, getAllEvents } = require('./event.controller');

router.route('/:id')
    .delete(removeEvent)
    .put(editEvent)
router.get('/', getAllEvents);
router.post('/', addEvent);

module.exports = router;