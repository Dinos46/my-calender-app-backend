const mongoose = require('mongoose');

const eventSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    description: String,
    date: String
});

module.exports = mongoose.model('event', eventSchema);