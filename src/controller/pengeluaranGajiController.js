const pengeluaranGajiService = require('../service/pengeluaranGajiService');

function getPengeluaranGaji(req, res) {
    pengeluaranGajiService.getAllPengeluaranGaji(req, res);
}

function createPengeluaranGaji(req, res) {
    pengeluaranGajiService.createPengeluaranGaji(req, res);
}

function getPengeluaranGajiById(req, res) {
    pengeluaranGajiService.getPengeluaranGajiById(req, res);
}

function updatePengeluaranGaji(req, res) {
    pengeluaranGajiService.updatePengeluaranGaji(req, res);
}

function deletePengeluaranGaji(req, res) {
    pengeluaranGajiService.deletePengeluaranGaji(req, res);
}

module.exports = {
    getPengeluaranGaji,
    createPengeluaranGaji,
    getPengeluaranGajiById,
    updatePengeluaranGaji,
    deletePengeluaranGaji,
};
