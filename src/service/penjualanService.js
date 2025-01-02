const Penjualan = require('../model/Penjualan');

function getAllPenjualan(req, res) {
    Penjualan.findAll() // Correct Sequelize method
        .then((penjualan) => {
            res.status(200).json(penjualan);
        })
        .catch((err) => {
            res.status(500).json({ message: 'Server error', error: err.message });
        });
}

function createPenjualan(req, res) {
    const { total_penjualan, tanggal } = req.body; // Match model fields

    Penjualan.create({
        total_penjualan: total_penjualan,
        tanggal: tanggal,
    })
    .then((penjualan) => {
        res.status(201).json(penjualan);
    })
    .catch((err) => {
        res.status(400).json({ message: 'Failed to create penjualan', error: err.message });
    });
}

function getPenjualanById(req, res) {
    Penjualan.findByPk(req.params.id)
        .then((penjualan) => {
            if (!penjualan) {
                return res.status(404).json({ message: 'Penjualan not found' });
            }
            res.status(200).json(penjualan);
        })
        .catch((err) => {
            res.status(500).json({ message: 'Error retrieving penjualan', error: err.message });
        });
}

function updatePenjualan(req, res) {
    const { total_penjualan, tanggal } = req.body;

    Penjualan.update(
        { total_penjualan, tanggal },
        { where: { id: req.params.id } }
    )
    .then(([affectedRows]) => {
        if (affectedRows === 0) {
            return res.status(404).json({ message: 'Penjualan not found' });
        }
        res.status(200).json({ message: 'Penjualan updated successfully' });
    })
    .catch((err) => {
        res.status(400).json({ message: 'Error updating penjualan', error: err.message });
    });
}

function deletePenjualan(req, res) {
    Penjualan.destroy({
        where: { id: req.params.id }
    })
    .then((deletedRows) => {
        if (deletedRows === 0) {
            return res.status(404).json({ message: 'Penjualan not found' });
        }
        res.status(200).json({ message: 'Penjualan deleted successfully' });
    })
    .catch((err) => {
        res.status(500).json({ message: 'Error deleting penjualan', error: err.message });
    });
}

module.exports = {
    getAllPenjualan,
    createPenjualan,
    getPenjualanById,
    updatePenjualan,
    deletePenjualan,
};
