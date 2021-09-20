const { post, query, put, remove, getById } = require('./event.service');

const getAllEvents = async (req, res) => {
    try {
        const evs = await query();
        res.send(evs);
    } catch (err) {
        console.error('cant get events somthing went wrong', err);
    };
};

const getEvent = async (req, res) => {
    try {
        const { _id } = req.params;
        const ev = await getById(_id);
        res.send(ev);
    } catch (err) {
        console.error('cant get event somthing went wrong', err);
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
        const ev = await put(req.body);
        res.send(ev);
    } catch (err) {
        console.error('cant get events somthing went wrong', err)
    };
};

const removeEvent = async (req, res) => {
    try {
        const { _id } = req.params;
        await remove(_id);
        res.send(_id);
    } catch (err) {
        console.error(`cant remove event ${id} somthing went wrong`, err);
    };
};

module.exports = {
    getAllEvents,
    getEvent,
    addEvent,
    editEvent,
    removeEvent
};