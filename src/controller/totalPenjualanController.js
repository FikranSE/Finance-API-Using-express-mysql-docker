//aldo
// src/controller/totalPenjualanController.js
const TotalPenjualan = require('../model/TotalPenjualan');

const getTotalPenjualan = async (req, res) => {
    try {
        const penjualan = await TotalPenjualan.findAll();
        res.status(200).json(penjualan);
    } catch (err) {
        res.status(500).json({ message: 'Error retrieving total penjualan', error: err.message });
    }
};

const createTotalPenjualan = async (req, res) => {
    try {
        const { product, quantity, price, total } = req.body;
        const penjualan = await TotalPenjualan.create({ product, quantity, price, total });
        res.status(201).json(penjualan);
    } catch (err) {
        res.status(400).json({ message: 'Failed to create total penjualan', error: err.message });
    }
};

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

//satria
const updateTotalPenjualan = async (req, res) => {
    try {
        const { product, quantity, price, total } = req.body;
        const [updatedRows] = await TotalPenjualan.update(
            { product, quantity, price, total },
            { where: { id: req.params.id } }
        );

        if (updatedRows === 0) {
            return res.status(404).json({ message: 'Penjualan not found' });
        }

        res.status(200).json({ message: 'Penjualan updated successfully' });
    } catch (err) {
        res.status(400).json({ message: 'Error updating total penjualan', error: err.message });
    }
};

const deleteTotalPenjualan = async (req, res) => {
    try {
        const deletedRows = await TotalPenjualan.destroy({
            where: { id: req.params.id }
        });

        if (deletedRows === 0) {
            return res.status(404).json({ message: 'Penjualan not found' });
        }

        res.status(200).json({ message: 'Penjualan deleted successfully' });
    } catch (err) {
        res.status(500).json({ message: 'Error deleting total penjualan', error: err.message });
    }
};

module.exports = {
    getTotalPenjualan,
    createTotalPenjualan,
    getTotalPenjualanById,
    updateTotalPenjualan,
    deleteTotalPenjualan
};
