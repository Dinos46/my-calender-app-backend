const express = require('express');
const router = express.Router();
const {
    removeEvent,
    editEvent,
    addEvent,
    getAllEvents,
    getEvent
} = require('./event.controller');

router.route('/:_id')
    .delete(removeEvent)
    .get(getEvent)
    .put(editEvent)
router.get('/', getAllEvents);
router.post('/', addEvent);

module.exports = router;