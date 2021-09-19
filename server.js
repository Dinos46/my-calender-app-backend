const express = require('express');
const path = require('path');
const cors = require('cors');
const mongoose = require('mongoose');
//init app
const app = express();
app.use(express.json());
//init cross origin
if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.resolve(__dirname, 'public')));
} else {
    const corsOptions = {
        origin: ['http://127.0.0.1:3000', 'http://localhost:3000'],
        credentials: true
    };
};
app.use(cors());

//set up routes
const eventRouter = require('./api/events/event.routes');
app.use('/api/event', eventRouter);
//connect to data base
mongoose.connect(`mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PW}@cluster0.iszbm.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`);

app.get('/**', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`server runnig on port ${PORT}`));