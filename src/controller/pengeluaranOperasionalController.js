// ariq
// src/controller/pengeluaranOperasionalController.js
const PengeluaranOperasional = require('../model/PengeluaranOperasional');

const getAllPengeluaranOperasional = async (req, res) => {
    try {
        const pengeluaranOperasional = await PengeluaranOperasional.findAll();
        res.status(200).json(pengeluaranOperasional);
    } catch (err) {
        res.status(500).json({
            message: err.message || "Some error occurred while retrieving pengeluaran operasional.",
        });
    }
};

const createPengeluaranOperasional = async (req, res) => {
    try {
        const { jenis_pengeluaran, jumlah, tanggal } = req.body;
        const newPengeluaranOperasional = await PengeluaranOperasional.create({ jenis_pengeluaran, jumlah, tanggal });
        res.status(201).json({
            message: "Pengeluaran operasional created successfully",
            data: newPengeluaranOperasional,
        });
    } catch (err) {
        res.status(500).json({
            message: err.message || "Some error occurred while creating pengeluaran operasional.",
        });
    }
};

// satria
const getPengeluaranOperasionalById = async (req, res) => {
    try {
        const pengeluaranOperasional = await PengeluaranOperasional.findByPk(req.params.id);
        if (!pengeluaranOperasional) {
            return res.status(404).json({ message: "Pengeluaran operasional not found" });
        }
        res.status(200).json(pengeluaranOperasional);
    } catch (err) {
        res.status(500).json({
            message: err.message || "Some error occurred while retrieving pengeluaran operasional.",
        });
    }
};

const updatePengeluaranOperasional = async (req, res) => {
    try {
        const { jenis_pengeluaran, jumlah, tanggal } = req.body;
        const [updatedRows] = await PengeluaranOperasional.update(
            { jenis_pengeluaran, jumlah, tanggal },
            { where: { id: req.params.id } }
        );

        if (updatedRows === 0) {
            return res.status(404).json({ message: "Pengeluaran operasional not found" });
        }

        res.status(200).json({ message: "Pengeluaran operasional updated successfully." });
    } catch (err) {
        res.status(500).json({
            message: err.message || "Some error occurred while updating pengeluaran operasional.",
        });
    }
};

const deletePengeluaranOperasional = async (req, res) => {
    try {
        const deletedRows = await PengeluaranOperasional.destroy({ where: { id: req.params.id } });

        if (deletedRows === 0) {
            return res.status(404).json({ message: "Pengeluaran operasional not found" });
        }

        res.status(200).json({ message: "Pengeluaran operasional deleted successfully." });
    } catch (err) {
        res.status(500).json({
            message: err.message || "Some error occurred while deleting pengeluaran operasional.",
        });
    }
};

module.exports = {
    getAllPengeluaranOperasional,
    createPengeluaranOperasional,
    getPengeluaranOperasionalById,
    updatePengeluaranOperasional,
    deletePengeluaranOperasional,
};
