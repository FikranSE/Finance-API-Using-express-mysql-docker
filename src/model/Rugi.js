const { DataTypes } = require('sequelize');
const sequelize = require('../config/database'); // Ensure correct path

const Rugi = sequelize.define('Rugi', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nama: { // Use 'nama' as per model definition
        type: DataTypes.STRING,
        allowNull: false,
    },
    jumlah: { // Use 'jumlah' as per model definition
        type: DataTypes.DECIMAL(15, 2),
        allowNull: false,
    },
    tanggal: { // Assuming 'tanggal' field is needed
        type: DataTypes.DATE,
        allowNull: false,
    },
}, {
    tableName: 'rugi',
    timestamps: false,
});

module.exports = Rugi;
