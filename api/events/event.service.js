const Event = require('../../services/db.service');
const mongoose = require('mongoose');

const query = async () => {
    try {
        return await Event.find().exec();
    } catch (error) {
        console.error('cant get events', err);
    };
};

const post = async ({ description, date }) => {
    try {
        const ev = new Event({
            _id: new mongoose.Types.ObjectId(),
            description,
            date
        });
        return await ev.save().exec();
    } catch (err) {
        console.error('cant add event', err);
    };
};

const put = async (ev) => {
    try {
        return await Event.findByIdAndUpdate(ev._id, { $set: ev }, { new: true });
    } catch (error) {
        console.error('cant edit event', err);
    };
};

const remove = async (_id) => {
    try {
        return await Event.remove({ _id }).exec();
    } catch (err) {
        console.error('cant remove event', err);
    };
};

module.exports = {
    query,
    post,
    put,
    remove
};