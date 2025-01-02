const { DataTypes } = require('sequelize');
const sequelize = require('../config/database'); // Ensure correct path

const TotalPenjualan = sequelize.define('TotalPenjualan', {
    id: { // Add primary key
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    product: {
        type: DataTypes.STRING,
        allowNull: false
    },
    quantity: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    price: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    total: {
        type: DataTypes.FLOAT,
        allowNull: false
    }
}, {
    tableName: 'total_penjualan',
    timestamps: false,
});

module.exports = TotalPenjualan;
