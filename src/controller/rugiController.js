const rugiService = require('../service/rugiService');  // Ensure correct path

// Fungsi untuk mendapatkan semua data Rugi
function getRugi(req, res) {
    rugiService.getRugi(req, res);
}

// Fungsi untuk membuat data Rugi baru
function createRugi(req, res) {
    rugiService.createRugi(req, res);
}

// Fungsi untuk mendapatkan data Rugi berdasarkan ID
function getRugiById(req, res) {
    rugiService.getRugiById(req, res);
}

// Fungsi untuk memperbarui data Rugi
function updateRugi(req, res) {
    rugiService.updateRugi(req, res);
}

// Fungsi untuk menghapus data Rugi
function deleteRugi(req, res) {
    rugiService.deleteRugi(req, res);
}

module.exports = {
    getRugi,
    createRugi,
    getRugiById,
    updateRugi,
    deleteRugi,
};
