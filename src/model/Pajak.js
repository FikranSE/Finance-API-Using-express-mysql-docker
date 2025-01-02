const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Pajak = sequelize.define(
    "pajak",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        nama_pajak: { // Correct field name
            type: DataTypes.STRING,
            allowNull: false,
        },
        persentase: { // Correct field name
            type: DataTypes.DECIMAL(5, 2),
            allowNull: false,
        },
        jumlah: { // Correct field name
            type: DataTypes.DECIMAL(15, 2),
            allowNull: false,
        },
        total_pajak: { // Correct field name
            type: DataTypes.DECIMAL(15, 2),
            allowNull: false,
        },
    },
    {
        timestamps: false,
        tableName: "pajak",
    }
);

module.exports = Pajak;
