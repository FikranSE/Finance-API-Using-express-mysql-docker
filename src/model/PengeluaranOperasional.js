const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const PengeluaranOperasional = sequelize.define(
    "pengeluaran_operasional",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        jenis_pengeluaran: { // Correct field name
            type: DataTypes.STRING,
            allowNull: false,
        },
        jumlah: {
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
        tableName: "pengeluaran_operasional",
    }
);

module.exports = PengeluaranOperasional;
