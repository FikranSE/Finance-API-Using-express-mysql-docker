
//bagian fikran
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



// bagian ariq
const updatePengeluaranGaji = async (req, res) => {
    try {
        const { nama_karyawan, gaji, bulan, tahun } = req.body;
        const [updatedRows] = await PengeluaranGaji.update(
            { nama_karyawan, gaji, bulan, tahun },
            { where: { id: req.params.id } }
        );

        if (updatedRows === 0) {
            return res.status(404).json({ message: "Pengeluaran Gaji not found" });
        }

        res.status(200).json({ message: "Pengeluaran Gaji updated successfully." });
    } catch (err) {
        res.status(500).json({
            message: err.message || "Some error occurred while updating Pengeluaran Gaji.",
        });
    }
};

const deletePengeluaranGaji = async (req, res) => {
    try {
        const deletedRows = await PengeluaranGaji.destroy({ where: { id: req.params.id } });

        if (deletedRows === 0) {
            return res.status(404).json({ message: "Pengeluaran Gaji not found" });
        }

        res.status(200).json({ message: "Pengeluaran Gaji deleted successfully." });
    } catch (err) {
        res.status(500).json({
            message: err.message || "Some error occurred while deleting Pengeluaran Gaji.",
        });
    }
};

module.exports = {
    getAllPengeluaranGaji,
    createPengeluaranGaji,
    getPengeluaranGajiById,
    updatePengeluaranGaji,
    deletePengeluaranGaji,
};
