const totalPenjualanService = require('../service/totalPenjualanService');

// Mendapatkan semua data total penjualan
function getTotalPenjualan(req, res) {
    totalPenjualanService.getTotalPenjualan(req, res);
}

// Membuat data total penjualan baru
function createTotalPenjualan(req, res) {
    totalPenjualanService.createTotalPenjualan(req, res);
}

// Mendapatkan data total penjualan berdasarkan ID
function getTotalPenjualanById(req, res) {
    totalPenjualanService.getTotalPenjualanById(req, res);
}

// Mengupdate data total penjualan berdasarkan ID
function updateTotalPenjualan(req, res) {
    totalPenjualanService.updateTotalPenjualan(req, res);
}

// Menghapus data total penjualan berdasarkan ID
function deleteTotalPenjualan(req, res) {
    totalPenjualanService.deleteTotalPenjualan(req, res);
}

module.exports = {
    getTotalPenjualan,
    createTotalPenjualan,
    getTotalPenjualanById,
    updateTotalPenjualan,
    deleteTotalPenjualan
};
