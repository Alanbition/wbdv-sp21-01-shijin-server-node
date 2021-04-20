const express = require('express')
const app = express()
const mongoose = require('mongoose');
const uri = "mongodb+srv://admin:admin@cluster0.4dcbr.mongodb.net/whiteboard?retryWrites=true&w=majority"
mongoose.connect(uri,
    {useNewUrlParser: true, useUnifiedTopology: true});
//'mongodb://localhost:27017/whiteboard'
// const session = require('express-session')
// app.use(session({
//     secret: 'keyboard cat',
//     resave: false,
//     saveUninitialized: true,
//     // cookie: { secure: true }
// }))


app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers',
        'Content-Type, X-Requested-With, Origin');
    res.header('Access-Control-Allow-Methods',
        'GET, POST, PUT, PATCH, DELETE, OPTIONS');
    next();
});

var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
require('./controllers/quiz-attempts-controller')(app)
require('./controllers/quizzes-controller')(app)
require('./controllers/questions-controller')(app)
require('dotenv').config();
app.listen(process.env.PORT || 3000);
