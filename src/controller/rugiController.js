const Rugi = require('../model/Rugi');

const getRugi = async (req, res) => {
    try {
        const rugi = await Rugi.findAll();
        res.status(200).json(rugi);
    } catch (err) {
        res.status(500).json({ message: 'Error retrieving data', error: err.message });
    }
};

const createRugi = async (req, res) => {
    try {
        const { nama, jumlah, tanggal } = req.body;
        const newRugi = await Rugi.create({ nama, jumlah, tanggal });
        res.status(201).json(newRugi);
    } catch (err) {
        res.status(400).json({ message: 'Failed to create Rugi', error: err.message });
    }
};

const getRugiById = async (req, res) => {
    try {
        const rugi = await Rugi.findByPk(req.params.id);
        if (!rugi) {
            return res.status(404).json({ message: 'Rugi not found' });
        }
        res.status(200).json(rugi);
    } catch (err) {
        res.status(500).json({ message: 'Error retrieving Rugi', error: err.message });
    }
};

const updateRugi = async (req, res) => {
    try {
        const { nama, jumlah, tanggal } = req.body;
        const [updatedRows] = await Rugi.update(
            { nama, jumlah, tanggal },
            { where: { id: req.params.id } }
        );

        if (updatedRows === 0) {
            return res.status(404).json({ message: 'Rugi not found' });
        }

        res.status(200).json({ message: 'Rugi updated successfully' });
    } catch (err) {
        res.status(400).json({ message: 'Error updating Rugi', error: err.message });
    }
};

const deleteRugi = async (req, res) => {
    try {
        const deletedRows = await Rugi.destroy({
            where: { id: req.params.id }
        });

        if (deletedRows === 0) {
            return res.status(404).json({ message: 'Rugi not found' });
        }

        res.status(200).json({ message: 'Rugi deleted successfully' });
    } catch (err) {
        res.status(500).json({ message: 'Error deleting Rugi', error: err.message });
    }
};

module.exports = {
    getRugi,
    createRugi,
    getRugiById,
    updateRugi,
    deleteRugi,
};

