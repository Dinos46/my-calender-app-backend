const { post, query, put, remove } = require('./event.service');

const getAllEvents = async (req, res) => {
    try {
        const evs = await query();
        res.send(evs);
    } catch (err) {
        console.error('cant get events somthing went wrong', err);
    };
};

const addEvent = async (req, res) => {
    try {
        const ev = await post(req.body);
        res.send(ev);
    } catch (err) {
        console.error('cant add event somthing went wrong', err);
    };
};

const editEvent = async (req, res) => {
    try {
        res.send(put(req.body));
    } catch (err) {
        console.error('cant get events somthing went wrong', err)
    };
};

const removeEvent = async (req, res) => {
    try {
        const { _id } = req.body;
        res.send(remove(_id));
    } catch (err) {
        console.error(`cant remove event ${id} somthing went wrong`, err);
    };
};

module.exports = {
    getAllEvents,
    addEvent,
    editEvent,
    removeEvent
};