var express = require('express');
const { success } = require('../helpers/util.helper');
var router = express.Router();

router.get('/api-key', (req, res, next) => {
    /* 
    #swagger.tags = ['Api Key'];
    #swagger.summary = "Get API key";
    #swagger.description = "Get API key";
    #swagger.operationId = "getApiKey";
    */
    success(res, { apiKey: process.env.APP_KEY });
});

module.exports = router;