const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const path = require('path');
var cors = require('cors');
const session = require('express-session');

const authRoute = require('./routes/auth');
const dashBoardRoute = require('./routes/dashboard')
dotenv.config();

mongoose.connect(process.env.DB_CONNECT, { useUnifiedTopology: true, useNewUrlParser: true })
    .then(() => console.log('Mongo Connected'))
    .catch((err) => console.log(err));


app.use(express.json());
app.use(cors({origin: 'http://localhost:8080'}));


app.use(session({
    secret: process.env.SECRET_SESSION,
    resave: false,
    saveUninitialized: false

}));

app.use('/api/user', authRoute);
app.use('/api/dashboard', dashBoardRoute)

app.listen(3000, ()=> console.log('Server Running'));

