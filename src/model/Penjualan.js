const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Penjualan = sequelize.define(
    "penjualan",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        total_penjualan: {
            type: DataTypes.DECIMAL(15, 2),
            allowNull: false,
        },
        tanggal: {
            type: DataTypes.DATE,
            allowNull: false,
        },
    },
    {
        timestamps: false,
        tableName: "penjualan",
    }
);

module.exports = Penjualan;
