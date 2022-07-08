const { ProvinsiRepository } = require("../repositories/provinsi.repository")
const { PostalCodeRepository } = require("../repositories/postal_code.repository");


class ApiService {
    static async getProvinsi(keyword) {
        return await ProvinsiRepository.findAll(keyword);
    }

    static async getKota(provinsiId, keyword) {
        return await PostalCodeRepository.findKabupatenByProvinceId(provinsiId, keyword);
    }

    static async getKecamatan(kabupaten, keyword) {
        return await PostalCodeRepository.findKecamatanByKabupaten(kabupaten, keyword);
    }

    static async getKelurahan(kecamatan, keyword) {
        return await PostalCodeRepository.findKelurahanByKecamatan(kecamatan, keyword);
    }
}

module.exports = {
    ApiService
}