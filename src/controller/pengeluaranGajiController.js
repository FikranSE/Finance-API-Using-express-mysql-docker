// src/controller/pengeluaranGajiController.js
const PengeluaranGaji = require('../model/PengeluaranGaji');

const getAllPengeluaranGaji = async (req, res) => {
    try {
        const pengeluaranGaji = await PengeluaranGaji.findAll();
        res.status(200).json(pengeluaranGaji);
    } catch (err) {
        res.status(500).json({
            message: err.message || "Some error occurred while retrieving Pengeluaran Gaji.",
        });
    }
};

const createPengeluaranGaji = async (req, res) => {
    try {
        const { nama_karyawan, gaji, bulan, tahun } = req.body;
        const newPengeluaranGaji = await PengeluaranGaji.create({ nama_karyawan, gaji, bulan, tahun });
        res.status(201).json({
            message: "Pengeluaran Gaji created successfully",
            data: newPengeluaranGaji,
        });
    } catch (err) {
        res.status(500).json({
            message: err.message || "Some error occurred while creating Pengeluaran Gaji.",
        });
    }
};

const getPengeluaranGajiById = async (req, res) => {
    try {
        const pengeluaranGaji = await PengeluaranGaji.findByPk(req.params.id);
        if (!pengeluaranGaji) {
            return res.status(404).json({ message: "Pengeluaran Gaji not found" });
        }
        res.status(200).json(pengeluaranGaji);
    } catch (err) {
        res.status(500).json({
            message: err.message || "Some error occurred while retrieving Pengeluaran Gaji.",
        });
    }
};//fikran


function updatePengeluaranGaji(req, res) {
    pengeluaranGajiService.updatePengeluaranGaji(req, res);
}

function deletePengeluaranGaji(req, res) {
    pengeluaranGajiService.deletePengeluaranGaji(req, res);
}

module.exports = {
    getPengeluaranGaji,
    createPengeluaranGaji,
    getPengeluaranGajiById,
    updatePengeluaranGaji,
    deletePengeluaranGaji,
};
