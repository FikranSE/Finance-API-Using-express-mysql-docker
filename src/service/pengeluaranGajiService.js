const PengeluaranGaji = require('../model/PengeluaranGaji');

function getAllPengeluaranGaji(req, res) {
    PengeluaranGaji.findAll()
        .then((data) => {
            res.status(200).json(data);
        })
        .catch((err) => {
            res.status(500).json({
                message: err.message || "Some error occurred while retrieving Pengeluaran Gaji.",
            });
        });
}

function createPengeluaranGaji(req, res) {
    PengeluaranGaji.create({
        nama_karyawan: req.body.nama_karyawan, // Correct field name
        gaji: req.body.gaji,
        bulan: req.body.bulan,
        tahun: req.body.tahun,
    })
    .then((data) => {
        res.status(201).json({
            message: "Pengeluaran Gaji created successfully",
            data: data,
        });
    })
    .catch((err) => {
        res.status(500).json({
            message: err.message || "Some error occurred while creating Pengeluaran Gaji.",
        });
    });
}

function getPengeluaranGajiById(req, res) {
    PengeluaranGaji.findByPk(req.params.id)
        .then((data) => {
            if (!data) {
                return res.status(404).json({ message: "Pengeluaran Gaji not found with id " + req.params.id });
            }
            res.status(200).json(data);
        })
        .catch((err) => {
            res.status(500).json({
                message: err.message || "Some error occurred while retrieving Pengeluaran Gaji.",
            });
        });
}

function updatePengeluaranGaji(req, res) {
    PengeluaranGaji.update(
        {
            nama_karyawan: req.body.nama_karyawan, // Correct field name
            gaji: req.body.gaji,
            bulan: req.body.bulan,
            tahun: req.body.tahun,
        },
        {
            where: {
                id: req.params.id,
            },
        }
    )
    .then((affectedRows) => {
        if (affectedRows[0] === 0) {
            return res.status(404).json({ message: "Pengeluaran Gaji not found with id " + req.params.id });
        }
        res.status(200).json({ message: "Pengeluaran Gaji updated successfully." });
    })
    .catch((err) => {
        res.status(500).json({
            message: err.message || "Some error occurred while updating Pengeluaran Gaji.",
        });
    });
}

function deletePengeluaranGaji(req, res) {
    PengeluaranGaji.destroy({
        where: {
            id: req.params.id,
        },
    })
    .then((deletedRows) => {
        if (deletedRows === 0) {
            return res.status(404).json({ message: "Pengeluaran Gaji not found with id " + req.params.id });
        }
        res.status(200).json({ message: "Pengeluaran Gaji deleted successfully." });
    })
    .catch((err) => {
        res.status(500).json({
            message: err.message || "Some error occurred while deleting Pengeluaran Gaji.",
        });
    });
}

module.exports = {
    getAllPengeluaranGaji,
    createPengeluaranGaji,
    getPengeluaranGajiById,
    updatePengeluaranGaji,
    deletePengeluaranGaji,
};
