const TotalPenjualan = require('../model/TotalPenjualan'); // Correct import

// Fungsi untuk mendapatkan semua data penjualan
function getTotalPenjualan(req, res) {
    TotalPenjualan.findAll()
        .then(penjualan => {
            res.status(200).json(penjualan);
        })
        .catch(err => {
            console.error(err);
            res.status(500).json({ message: 'Error retrieving total penjualan', error: err.message });
        });
}

// Fungsi untuk membuat data total penjualan
function createTotalPenjualan(req, res) {
    const { product, quantity, price, total } = req.body; // Match model fields

    TotalPenjualan.create({
        product,
        quantity,
        price,
        total
    })
    .then(penjualan => {
        res.status(201).json(penjualan);
    })
    .catch(err => {
        console.error(err);
        res.status(400).json({ message: 'Failed to create total penjualan', error: err.message });
    });
}

// Fungsi untuk mendapatkan data penjualan berdasarkan ID
function getTotalPenjualanById(req, res) {
    const { id } = req.params;

    TotalPenjualan.findByPk(id)
        .then(penjualan => {
            if (!penjualan) {
                return res.status(404).json({ message: 'Penjualan not found' });
            }
            res.status(200).json(penjualan);
        })
        .catch(err => {
            console.error(err);
            res.status(500).json({ message: 'Error retrieving total penjualan', error: err.message });
        });
}

// Fungsi untuk memperbarui data penjualan
function updateTotalPenjualan(req, res) {
    const { id } = req.params;
    const { product, quantity, price, total } = req.body;

    TotalPenjualan.update(
        { product, quantity, price, total },
        { where: { id } }
    )
    .then(([affectedRows]) => {
        if (affectedRows === 0) {
            return res.status(404).json({ message: 'Penjualan not found' });
        }
        res.status(200).json({ message: 'Penjualan updated successfully' });
    })
    .catch(err => {
        console.error(err);
        res.status(400).json({ message: 'Error updating total penjualan', error: err.message });
    });
}

// Fungsi untuk menghapus data penjualan
function deleteTotalPenjualan(req, res) {
    const { id } = req.params;

    TotalPenjualan.destroy({
        where: { id }
    })
    .then(deletedRows => {
        if (deletedRows === 0) {
            return res.status(404).json({ message: 'Penjualan not found' });
        }
        res.status(200).json({ message: 'Penjualan deleted successfully' });
    })
    .catch(err => {
        console.error(err);
        res.status(500).json({ message: 'Error deleting total penjualan', error: err.message });
    });
}

module.exports = {
    getTotalPenjualan,
    createTotalPenjualan,
    getTotalPenjualanById,
    updateTotalPenjualan,
    deleteTotalPenjualan
};
