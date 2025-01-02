const Pajak = require('../model/Pajak'); // Ensure correct model import

function getAllPajaks(req, res) {
    Pajak.findAll()
        .then((pajaks) => {
            return res.status(200).json({ pajaks });
        })
        .catch((err) => {
            return res.status(500).json({
                message: err.message || 'Some error occurred while retrieving Pajaks.',
            });
        });
}

function createPajak(req, res) {
    Pajak.create({
        nama_pajak: req.body.nama_pajak, // Correct field name
        persentase: req.body.persentase, // Correct field name
        jumlah: req.body.jumlah,         // Correct field name
        total_pajak: req.body.total_pajak, // Correct field name
    })
    .then((data) => {
        return res.status(201).json({
            message: "Pajak created successfully",
            data: {
                id: data.id, // Use 'id' as per model
                nama_pajak: data.nama_pajak,
                persentase: data.persentase,
                jumlah: data.jumlah,
                total_pajak: data.total_pajak,
            },
        });
    })
    .catch((err) => {
        return res.status(500).json({
            message: err.message || 'Some error occurred while creating Pajak.',
        });
    });
}

function getPajak(req, res) {
    Pajak.findByPk(req.params.id) // Use 'id' instead of 'pajak_id'
        .then((pajak) => {
            if (!pajak) {
                return res.status(404).json({
                    message: 'Pajak not found with id ' + req.params.id,
                });
            }
            return res.status(200).json({ pajak });
        })
        .catch((err) => {
            return res.status(500).json({
                message: err.message || 'Some error occurred while retrieving Pajak.',
            });
        });
}

function updatePajak(req, res) {
    Pajak.update({
        nama_pajak: req.body.nama_pajak, // Correct field name
        persentase: req.body.persentase, // Correct field name
        jumlah: req.body.jumlah,         // Correct field name
        total_pajak: req.body.total_pajak, // Correct field name
    }, {
        where: {
            id: req.params.id, // Use 'id' instead of 'pajak_id'
        }
    })
    .then((affectedRows) => {
        if (affectedRows[0] === 0) { // Sequelize returns [affectedCount]
            return res.status(404).json({
                message: 'Pajak not found with id ' + req.params.id,
            });
        }
        return res.status(200).json({
            message: "Pajak updated successfully",
        });
    })
    .catch((err) => {
        return res.status(500).json({
            message: err.message || 'Some error occurred while updating Pajak.',
        });
    });
}

function deletePajak(req, res) {
    Pajak.destroy({
        where: {
            id: req.params.id, // Use 'id' instead of 'pajak_id'
        }
    })
    .then((deletedRows) => {
        if (deletedRows === 0) {
            return res.status(404).json({
                message: 'Pajak not found with id ' + req.params.id,
            });
        }
        return res.status(200).json({
            message: "Pajak deleted successfully",
        });
    })
    .catch((err) => {
        return res.status(500).json({
            message: err.message || 'Some error occurred while deleting Pajak.',
        });
    });
}

module.exports = {
    getAllPajaks,
    createPajak,
    getPajak,
    updatePajak,
    deletePajak,
};
