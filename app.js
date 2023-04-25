const express = require('express');
const app = express()
require('dotenv').config()
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
var bodyParser = require('body-parser');
//middlewares
app.use(express.json())

//cookies
app.use(cookieParser())

//morgan middleware
app.use(morgan('tiny'))

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const exercise =require('./routes/exercise')
const programs =require('./routes/program')
app.use('/api/v1',exercise)
app.use('/api/v1',programs)


module.exports = app;