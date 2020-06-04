const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const path = require('path');

const authRoute = require('./routes/auth');
dotenv.config();

mongoose.connect(process.env.DB_CONNECT, { useUnifiedTopology: true, useNewUrlParser: true })
    .then(() => console.log('Mongo Connected'))
    .catch((err) => console.log(err));


app.use(express.json());

app.use(express.static('client'));
app.get('*', (req, res) => {
    res.sendFile(path.resolve('client',  'index.html'));
});

app.use('/api/user', authRoute);

app.listen(3000, ()=> console.log('Server Running'));

