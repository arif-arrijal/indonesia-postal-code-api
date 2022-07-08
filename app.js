var env = require('dotenv').config();
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var apiRouter = require('./routes/api');
const { AuthenticationMiddleware } = require('./middlewares/auth.middleware');
var swaggerUI = require('swagger-ui-express');
var swaggerDocument = require('./swagger.json');
var swaggerOptions = {
    explorer: true,
};

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// public route
app.use('/docs', swaggerUI.serve, swaggerUI.setup(swaggerDocument, swaggerOptions));
app.use('/api-key', (req, res, next) => {
    res.status(200).send({ apiKey: process.env.APP_KEY });
});

// auth route
app.use('/', AuthenticationMiddleware, apiRouter);

module.exports = app;
