const Laba = require('../model/laba'); // Ensure correct model import

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
