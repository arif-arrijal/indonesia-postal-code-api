var express = require('express');
const { wait, success, error } = require('../helpers/util.helper');
const { ApiService } = require('../services/api.service');
var router = express.Router();

router.get('/provinsi', async function(req, res, next) {
    /* 
    #swagger.tags = ['Postal Code'];
    #swagger.summary = "Get all provinces";
    #swagger.description = "Get all provinces with ID";
    #swagger.operationId = "getAllProvinces";
    #swagger.security = [{
        "apiKeyAuth": []
    }] 
    */
    let keyword = req.query.keyword;

    let result = await wait(ApiService.getProvinsi(keyword));
    if (result.data) {
        success(res, result.data);
    } else {
        error(res, result.error);
    }
});

router.get('/kabupaten/:provinsiId', async function(req, res, next) {
    /* 
    #swagger.tags = ['Postal Code'];
    #swagger.summary = "Get all cities by province ID";
    #swagger.description = "Get all cities by province ID";
    #swagger.operationId = "getAllCitiesByProvinceId";
    #swagger.parameters['provinsiId'] = {
        in: "path",
        name: "provinsiId",
        description: "Province ID",
    }
    #swagger.security = [{
        "apiKeyAuth": []
    }] 
    */
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
    /* 
    #swagger.tags = ['Postal Code'];
    #swagger.summary = "Get all districts by city ID";
    #swagger.description = "Get all districts by city ID";
    #swagger.operationId = "getAllDistrictsByCityId";
    #swagger.parameters['kabupaten'] = {
        in: "path",
        name: "kabupaten",
        description: "Parent kabupaten that will be search",
    }
    #swagger.security = [{
        "apiKeyAuth": []
    }] 
    */
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
    /* 
    #swagger.tags = ['Postal Code'];
    #swagger.summary = "Get all villages by district ID";
    #swagger.description = "Get all villages by district ID";
    #swagger.operationId = "getAllVillagesByDistrictId";
    #swagger.parameters['kecamatan'] = {
        in: "path",
        name: "kecamatan",
        description: "Parent kecamatan that will be search",
    }
    #swagger.security = [{
        "apiKeyAuth": []
    }] 
    */
    let kecamatan = req.params.kecamatan;

    let result = await wait(ApiService.getKelurahan(kecamatan));
    if (result.data) {
        success(res, result.data);
    } else {
        error(res, result.error);
    }
});

module.exports = router;