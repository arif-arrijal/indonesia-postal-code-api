const { Op } = require("sequelize");
const model = require('../models/provinsi.model');

class ProvinsiRepository {
    static async findAll(keyword) {
        let options = {};
        if (keyword) {
            options = {
                where: {
                    name: {
                        [Op.like]: `%${keyword}%`
                    }
                }
            }
        }
        return model.findAll(options);
    }
}

module.exports = {
    ProvinsiRepository
}