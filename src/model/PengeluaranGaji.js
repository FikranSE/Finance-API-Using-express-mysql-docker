const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const PengeluaranGaji = sequelize.define(
    "pengeluaran_gaji",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        nama_karyawan: { // Correct field name
            type: DataTypes.STRING,
            allowNull: false,
        },
        gaji: {
            type: DataTypes.DECIMAL(15, 2),
            allowNull: false,
        },
        bulan: { // Assuming 'bulan' represents the month
            type: DataTypes.STRING(20),
            allowNull: false,
        },
        tahun: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    },
    {
        timestamps: false,
        tableName: "pengeluaran_gaji",
    }
);

module.exports = PengeluaranGaji;
