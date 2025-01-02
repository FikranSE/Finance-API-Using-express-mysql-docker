const penjualanService = require('../service/penjualanService');

function getAllPenjualan(req, res) {
    penjualanService.getAllPenjualan(req, res);
}

function createPenjualan(req, res) {
    penjualanService.createPenjualan(req, res);
}

function getPenjualan(req, res) {
    penjualanService.getPenjualanById(req, res);
}

function updatePenjualan(req, res) {
    penjualanService.updatePenjualan(req, res);
}

function deletePenjualan(req, res) {
    penjualanService.deletePenjualan(req, res);
}

module.exports = {
    getAllPenjualan,
    createPenjualan,
    getPenjualan,
    updatePenjualan,
    deletePenjualan,
};
