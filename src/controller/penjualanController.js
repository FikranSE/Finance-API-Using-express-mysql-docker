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
};//fikran
