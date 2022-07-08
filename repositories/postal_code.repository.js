const { Op } = require("sequelize")
const PostalCode = require("../models/postal_code.model")

class PostalCodeRepository {
    static findKabupatenByProvinceId(id, keyword) {
        let options = {
            where: {
                kode_provinsi: id
            },
            attributes: ['kode_provinsi', 'kabupaten'],
            group: ['kode_provinsi', 'kabupaten']
        }

        if (keyword) {
            options.where.kabupaten = {
                [Op.iLike] : `%${keyword}%`
            }
        }

        return PostalCode.findAll(options);
    }

    static findKecamatanByKabupaten(kabupaten, keyword) {
        let options = {
            where: {
                kabupaten: kabupaten
            },
            attributes: ['kode_provinsi', 'kabupaten', 'kecamatan'],
            group: ['kode_provinsi', 'kabupaten', 'kecamatan']
        }

        if (keyword) {
            options.where.kecamatan = {
                [Op.iLike] : `%${keyword}%`
            }
        }

        return PostalCode.findAll(options);
    }

    static findKelurahanByKecamatan(kecamatan, keyword) {
        let options = {
            where: {
                kecamatan: kecamatan
            },
            attributes: ['kode_provinsi', 'kabupaten', 'kecamatan', 'kelurahan', 'kode_pos'],
            group: ['kode_provinsi', 'kabupaten', 'kecamatan', 'kelurahan', 'kode_pos']
        }

        if (keyword) {
            options.where.kelurahan = {
                [Op.iLike] : `%${keyword}%`
            }
        }

        return PostalCode.findAll(options);
    }
}

module.exports = {
    PostalCodeRepository
}