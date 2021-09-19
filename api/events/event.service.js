const Event = require('../../services/db.service');
const mongoose = require('mongoose');

const query = async () => {
    try {
        return await Event.find().exec();
    } catch (error) {
        console.error('cant get events', err);
    };
};

const getById = async (_id) => {
    try {
        return await await Event.findById({ _id });
    } catch (error) {
        console.error('cant get events', err);
    };
};

const post = async ({ description: { description }, date }) => {
    try {
        const ev = new Event({
            _id: new mongoose.Types.ObjectId(),
            description,
            date
        });
        return await ev.save();
    } catch (err) {
        console.error('cant add event', err);
    };
};

const put = async (ev) => {
    try {
        const eve = await Event.findByIdAndUpdate({ _id: ev._id }, { description: ev.description }, { new: true });
        return eve
    } catch (err) {
        console.error('cant edit event', err);
    };
};

const remove = async (_id) => {
    try {
        return await Event.findOneAndDelete(_id);
    } catch (err) {
        console.error('cant remove event', err);
    };
};

module.exports = {
    query,
    getById,
    post,
    put,
    remove
};