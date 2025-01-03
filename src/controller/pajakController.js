// src/controllers/pajakController.js
const Pajak = require('../models/Pajak');

// Get all Pajaks
const getAllPajaks = async (req, res) => {
    try {
        const pajaks = await Pajak.findAll();
        res.status(200).json(pajaks);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving pajaks', error: error.message });
    }
};

// Create a new Pajak
const createPajak = async (req, res) => {
    try {
        const { nama_pajak, persentase, jumlah, total_pajak } = req.body;
        const newPajak = await Pajak.create({ nama_pajak, persentase, jumlah, total_pajak });
        res.status(201).json(newPajak);
    } catch (error) {
        res.status(400).json({ message: 'Failed to create pajak', error: error.message });
    }
};

// Get Pajak by ID
const getPajak = async (req, res) => {
    try {
        const pajak = await Pajak.findByPk(req.params.id);
        if (!pajak) {
            return res.status(404).json({ message: 'Pajak not found' });
        }
        res.status(200).json(pajak);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving pajak', error: error.message });
    }
};
// satria
// Update Pajak 
const updatePajak = async (req, res) => {
    try {
        const { nama_pajak, persentase, jumlah, total_pajak } = req.body;
        const [updatedRows] = await Pajak.update(
            { nama_pajak, persentase, jumlah, total_pajak },
            { where: { id: req.params.id } }
        );

        if (updatedRows === 0) {
            return res.status(404).json({ message: 'Pajak not found' });
        }

        res.status(200).json({ message: "Pajak updated successfully" });
    } catch (error) {
        res.status(500).json({ message: 'Error updating pajak', error: error.message });
    }
};

// Delete Pajak
const deletePajak = async (req, res) => {
    try {
        const deletedRows = await Pajak.destroy({ where: { id: req.params.id } });

        if (deletedRows === 0) {
            return res.status(404).json({ message: 'Pajak not found' });
        }

        res.status(200).json({ message: 'Pajak deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting pajak', error: error.message });
    }
};

module.exports = {
    getAllPajaks,
    createPajak,
    getPajak,
    updatePajak,
    deletePajak,
};


// Export controller functions
module.exports = {
    getAllPajaks,
    createPajak,
    getPajak,
    updatePajak,
    deletePajak,
};
