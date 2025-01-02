const { DataTypes } = require('sequelize');
const sequelize = require('../config/database'); // Ensure correct path

const Laba = sequelize.define('Laba', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nilai: {
        type: DataTypes.DECIMAL,
        allowNull: false,
    },
    createdAt: { // Ensure timestamps are managed correctly
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
    }, 
    updatedAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
    },
}, {
    tableName: 'laba',
    timestamps: true, // Enable timestamps
});

module.exports = Laba;
