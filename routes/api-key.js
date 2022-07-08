var express = require('express');
const { success } = require('../helpers/util.helper');
var router = express.Router();

router.get('/api-key', (req, res, next) => {
    success(res, { apiKey: process.env.APP_KEY });
});

module.exports = router;