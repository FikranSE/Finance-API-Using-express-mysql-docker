// src/service/labaService.js
// bagian ariq
const Laba = require('../model/Laba'); // Pastikan model 'Laba' ada dan diekspor dengan benar

const getAllLaba = async () => {
    return Laba.findAll();
};

const createLaba = async (data) => {
    return Laba.create(data);
};

const getLaba = async (id) => {
    return Laba.findByPk(id);
};

module.exports = {
    getAllLaba,
    createLaba,
    getLaba,
};
