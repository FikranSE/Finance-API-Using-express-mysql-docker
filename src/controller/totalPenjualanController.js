const TotalPenjualan = require('../model/TotalPenjualan');

// Mendapatkan semua data total penjualan
const getTotalPenjualan = async (req, res) => {
    try {
        const penjualan = await TotalPenjualan.findAll();
        res.status(200).json(penjualan);
    } catch (err) {
        res.status(500).json({ message: 'Error retrieving total penjualan', error: err.message });
    }
};

// Membuat data total penjualan baru
const createTotalPenjualan = async (req, res) => {
    try {
        const { product, quantity, price, total } = req.body;
        const penjualan = await TotalPenjualan.create({ product, quantity, price, total });
        res.status(201).json(penjualan);
    } catch (err) {
        res.status(400).json({ message: 'Failed to create total penjualan', error: err.message });
    }
};

// Mendapatkan data total penjualan berdasarkan ID
const getTotalPenjualanById = async (req, res) => {
    try {
        const penjualan = await TotalPenjualan.findByPk(req.params.id);
        if (!penjualan) {
            return res.status(404).json({ message: 'Penjualan not found' });
        }
        res.status(200).json(penjualan);
    } catch (err) {
        res.status(500).json({ message: 'Error retrieving total penjualan', error: err.message });
    }
};

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
