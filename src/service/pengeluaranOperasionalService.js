const PengeluaranOperasional = require('../model/PengeluaranOperasional'); // Ensure correct path

function getAllPengeluaranOperasional(req, res) {
    PengeluaranOperasional.findAll()
        .then((data) => {
            res.status(200).json(data);
        })
        .catch((err) => {
            res.status(500).json({
                message: err.message || "Some error occurred while retrieving pengeluaran operasional.",
            });
        });
}

function createPengeluaranOperasional(req, res) {
    PengeluaranOperasional.create({
        jenis_pengeluaran: req.body.jenis_pengeluaran, // Correct field name
        jumlah: req.body.jumlah,
        tanggal: req.body.tanggal,
    })
    .then((data) => {
        res.status(201).json({
            message: "Pengeluaran operasional created successfully",
            data: data,
        });
    })
    .catch((err) => {
        res.status(500).json({
            message: err.message || "Some error occurred while creating pengeluaran operasional.",
        });
    });
}

function getPengeluaranOperasionalById(req, res) {
    PengeluaranOperasional.findByPk(req.params.id)
        .then((data) => {
            if (!data) {
                return res.status(404).json({ message: "Pengeluaran operasional not found with id " + req.params.id });
            }
            res.status(200).json(data);
        })
        .catch((err) => {
            res.status(500).json({
                message: err.message || "Some error occurred while retrieving pengeluaran operasional.",
            });
        });
}

function updatePengeluaranOperasional(req, res) {
    PengeluaranOperasional.update(
        {
            jenis_pengeluaran: req.body.jenis_pengeluaran, // Correct field name
            jumlah: req.body.jumlah,
            tanggal: req.body.tanggal,
        },
        {
            where: {
                id: req.params.id,
            },
        }
    )
    .then((affectedRows) => {
        if (affectedRows[0] === 0) {
            return res.status(404).json({ message: "Pengeluaran operasional not found with id " + req.params.id });
        }
        res.status(200).json({ message: "Pengeluaran operasional updated successfully." });
    })
    .catch((err) => {
        res.status(500).json({
            message: err.message || "Some error occurred while updating pengeluaran operasional.",
        });
    });
}

function deletePengeluaranOperasional(req, res) {
    PengeluaranOperasional.destroy({
        where: {
            id: req.params.id,
        },
    })
    .then((deletedRows) => {
        if (deletedRows === 0) {
            return res.status(404).json({ message: "Pengeluaran operasional not found with id " + req.params.id });
        }
        res.status(200).json({ message: "Pengeluaran operasional deleted successfully." });
    })
    .catch((err) => {
        res.status(500).json({
            message: err.message || "Some error occurred while deleting pengeluaran operasional.",
        });
    });
}

module.exports = {
    getAllPengeluaranOperasional,
    createPengeluaranOperasional,
    getPengeluaranOperasionalById,
    updatePengeluaranOperasional,
    deletePengeluaranOperasional,
};
