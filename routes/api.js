var express = require('express');
const { wait, success, error } = require('../helpers/util.helper');
const { ApiService } = require('../services/api.service');
var router = express.Router();

router.get('/provinsi', async function(req, res, next) {
    let keyword = req.query.keyword;

    let result = await wait(ApiService.getProvinsi(keyword));
    if (result.data) {
        success(res, result.data);
    } else {
        error(res, result.error);
    }
});

router.get('/kabupaten/:provinsiId', async function(req, res, next) {
    let provinsiId = req.params.provinsiId;
    let keyword = req.query.keyword;

    let result = await wait(ApiService.getKota(provinsiId, keyword));
    if (result.data) {
        success(res, result.data);
    } else {
        error(res, result.error);
    }
});

router.get('/kecamatan/:kabupaten', async function(req, res, next) {
    let kabupaten = req.params.kabupaten;
    let keyword = req.query.keyword;

    let result = await wait(ApiService.getKecamatan(kabupaten, keyword));
    if (result.data) {
        success(res, result.data);
    } else {
        error(res, result.error);
    }
});

router.get('/kelurahan/:kecamatan', async function(req, res, next) {
    let kecamatan = req.params.kecamatan;

    let result = await wait(ApiService.getKelurahan(kecamatan));
    if (result.data) {
        success(res, result.data);
    } else {
        error(res, result.error);
    }
});

router.get('/api-key', async function(req, res, next) {
    success(res, { apiKey: process.env.APP_KEY });
});

module.exports = router;