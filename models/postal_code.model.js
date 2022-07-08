const { Model, DataTypes } = require("sequelize");
const { db } = require('../core/db.core');

class PostalCode extends Model {}

PostalCode.init({
    id: {
        primaryKey: true,
        type: DataTypes.BIGINT,
    },
    kabupaten: {
        field: 'city',
        type: DataTypes.STRING
    },
    kecamatan: {
        field: 'sub_district',
        type: DataTypes.STRING
    },
    kelurahan: {
        field: 'urban',
        type: DataTypes.STRING
    },
    kode_pos: {
        field: 'postal_code',
        type: DataTypes.STRING
    },
    kode_provinsi: {
        field: 'province_code',
        type: DataTypes.BIGINT
    }
}, {
    sequelize: db,
    tableName: 'db_postal_code_data',
    freezeTableName: true,
    timestamps: false
});

module.exports = PostalCode;