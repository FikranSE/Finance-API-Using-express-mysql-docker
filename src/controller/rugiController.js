const rugiService = require('../service/rugiService');  // Ensure correct path

// Fungsi untuk mendapatkan semua data Rugi
function getRugi(req, res) {
    rugiService.getRugi(req, res);
}

// Fungsi untuk membuat data Rugi baru
function createRugi(req, res) {
    rugiService.createRugi(req, res);
}

// Fungsi untuk mendapatkan data Rugi berdasarkan ID
function getRugiById(req, res) {
    rugiService.getRugiById(req, res);
}

// Fungsi untuk memperbarui data Rugi
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

