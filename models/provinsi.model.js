const { Model, DataTypes } = require("sequelize");
const { db } = require('../core/db.core');

class Provinsi extends Model {}

Provinsi.init({
    name: {
        field: 'province_name',
        type: DataTypes.STRING,
    },
    name_en: {
        field: 'province_name_en',
        type: DataTypes.STRING,
    },
    code: {
        field: 'province_code',
        type: DataTypes.BIGINT,
        primaryKey: true
    },
}, {
    sequelize: db,
    tableName: 'db_province_data',
    freezeTableName: true,
    timestamps: false
});

module.exports = Provinsi;