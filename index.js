const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const path = require('path');
var cors = require('cors');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const cookieParser = require('cookie-parser');
const authRoute = require('./routes/auth');
const dashBoardRoute = require('./routes/dashboard');

dotenv.config();

//connecting to db

 mongoose.connect(process.env.DB_CONNECT, { useUnifiedTopology: true, useNewUrlParser: true })
    .then(() => console.log('Mongo Connected'))
    .catch((err) => console.log(err));

//To get requests from port 8080

app.use(express.json());
app.use(cors({origin: 'http://localhost:8080'}));


//Session
app.set('trust proxy', 1)

app.use(session({
    secret: process.env.SECRET_SESSION,
    resave: false,
    saveUninitialized: false,
    store: new MongoStore({ mongooseConnection: mongoose.connection }),
    cookie: {
        maxAge: 1000*24*60*60,
    }
}));


app.use(cookieParser())
app.use('/api/user', authRoute);
app.use('/api/dashboard', dashBoardRoute)

app.listen(3000, ()=> console.log('Server Running'));

