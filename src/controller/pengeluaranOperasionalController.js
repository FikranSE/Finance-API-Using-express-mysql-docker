const pengeluaranOperasionalService = require('../service/pengeluaranOperasionalService');

function getPengeluaranOperasional(req, res) {
    pengeluaranOperasionalService.getAllPengeluaranOperasional(req, res);
}

function createPengeluaranOperasional(req, res) {
    pengeluaranOperasionalService.createPengeluaranOperasional(req, res);
}

function getPengeluaranOperasionalById(req, res) {
    pengeluaranOperasionalService.getPengeluaranOperasionalById(req, res);
}

function updatePengeluaranOperasional(req, res) {
    pengeluaranOperasionalService.updatePengeluaranOperasional(req, res);
}

function deletePengeluaranOperasional(req, res) {
    pengeluaranOperasionalService.deletePengeluaranOperasional(req, res);
}

module.exports = {
    getAllPengeluaranOperasional: getPengeluaranOperasional,
    createPengeluaranOperasional,
    getPengeluaranOperasionalById,
    updatePengeluaranOperasional,
    deletePengeluaranOperasional,
};
