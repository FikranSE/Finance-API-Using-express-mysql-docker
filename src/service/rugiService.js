const Rugi = require('../model/Rugi'); // Correct import

// Fungsi untuk mendapatkan semua data Rugi
function getRugi(req, res) {
    Rugi.findAll()
        .then(rugi => {
            res.status(200).json(rugi);
        })
        .catch(err => {
            console.error(err);
            res.status(500).json({ message: 'Error retrieving data', error: err.message });
        });
}

// Fungsi untuk membuat data Rugi baru
function createRugi(req, res) {
    const { nama, jumlah, tanggal } = req.body; // Match model fields

    Rugi.create({
        nama,
        jumlah,
        tanggal,
    })
    .then(rugi => {
        res.status(201).json(rugi);
    })
    .catch(err => {
        console.error(err);
        res.status(400).json({ message: 'Failed to create Rugi', error: err.message });
    });
}

// Fungsi untuk mendapatkan data Rugi berdasarkan ID
function getRugiById(req, res) {
    const { id } = req.params;

    Rugi.findByPk(id)
        .then(rugi => {
            if (!rugi) {
                return res.status(404).json({ message: 'Rugi not found' });
            }
            res.status(200).json(rugi);
        })
        .catch(err => {
            console.error(err);
            res.status(500).json({ message: 'Error retrieving Rugi', error: err.message });
        });
}

// Fungsi untuk memperbarui data Rugi
function updateRugi(req, res) {
    const { id } = req.params;
    const { nama, jumlah, tanggal } = req.body;

    Rugi.update(
        { nama, jumlah, tanggal },
        { where: { id } }
    )
    .then(([affectedRows]) => {
        if (affectedRows === 0) {
            return res.status(404).json({ message: 'Rugi not found' });
        }
        res.status(200).json({ message: 'Rugi updated successfully' });
    })
    .catch(err => {
        console.error(err);
        res.status(400).json({ message: 'Error updating Rugi', error: err.message });
    });
}

// Fungsi untuk menghapus data Rugi
function deleteRugi(req, res) {
    const { id } = req.params;

    Rugi.destroy({
        where: { id }
    })
    .then(deletedRows => {
        if (deletedRows === 0) {
            return res.status(404).json({ message: 'Rugi not found' });
        }
        res.status(200).json({ message: 'Rugi deleted successfully' });
    })
    .catch(err => {
        console.error(err);
        res.status(500).json({ message: 'Error deleting Rugi', error: err.message });
    });
}

module.exports = {
    getRugi,
    createRugi,
    getRugiById,
    updateRugi,
    deleteRugi,
};
