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
// app.use(AuthenticationMiddleware);
app.use('/', apiRouter);
app.use('/docs', swaggerUI.serve, swaggerUI.setup(swaggerDocument, swaggerOptions));

module.exports = app;
