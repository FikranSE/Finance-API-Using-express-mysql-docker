const Penjualan = require('../model/Penjualan');

const getAllPenjualan = async (req, res) => {
    try {
        const penjualan = await Penjualan.findAll();
        res.status(200).json(penjualan);
    } catch (err) {
        res.status(500).json({ message: 'Server error', error: err.message });
    }
};

const createPenjualan = async (req, res) => {
    try {
        const { total_penjualan, tanggal } = req.body;

        const penjualan = await Penjualan.create({
            total_penjualan,
            tanggal,
        });
        res.status(201).json(penjualan);
    } catch (err) {
        res.status(400).json({ message: 'Failed to create penjualan', error: err.message });
    }
};






const getPenjualan = async (req, res) => {
    try {
        const penjualan = await Penjualan.findByPk(req.params.id);
        if (!penjualan) {
            return res.status(404).json({ message: 'Penjualan not found' });
        }
        res.status(200).json(penjualan);
    } catch (err) {
        res.status(500).json({ message: 'Error retrieving penjualan', error: err.message });
    }
};

const updatePenjualan = async (req, res) => {
    try {
        const { total_penjualan, tanggal } = req.body;
        const [updatedRows] = await Penjualan.update(
            { total_penjualan, tanggal },
            { where: { id: req.params.id } }
        );

        if (updatedRows === 0) {
            return res.status(404).json({ message: 'Penjualan not found' });
        }

        res.status(200).json({ message: 'Penjualan updated successfully' });
    } catch (err) {
        res.status(400).json({ message: 'Error updating penjualan', error: err.message });
    }
};

const deletePenjualan = async (req, res) => {
    try {
        const deletedRows = await Penjualan.destroy({
            where: { id: req.params.id }
        });

        if (deletedRows === 0) {
            return res.status(404).json({ message: 'Penjualan not found' });
        }

        res.status(200).json({ message: 'Penjualan deleted successfully' });
    } catch (err) {
        res.status(500).json({ message: 'Error deleting penjualan', error: err.message });
    }
};

module.exports = {
    getAllPenjualan,
    createPenjualan,
    getPenjualan,
    updatePenjualan,
    deletePenjualan,
};
