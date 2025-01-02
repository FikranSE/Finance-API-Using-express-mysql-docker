// src/middleware/validateRequest.js
const Joi = require('joi');

// Validation Schemas

// Authentication Schemas
const registerSchema = Joi.object({
    name: Joi.string().required(),
    surname: Joi.string().required(),
    mail: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
});

const loginSchema = Joi.object({
    mail: Joi.string().email().required(),
    password: Joi.string().required(),
});

// Pajak Schemas
const pajakSchema = Joi.object({
    nama_pajak: Joi.string().required(),
    persentase: Joi.number().precision(2).required(),
    jumlah: Joi.number().precision(2).required(),
    total_pajak: Joi.number().precision(2).required(),
});

// Laba Schemas
const labaSchema = Joi.object({
    nilai: Joi.number().precision(2).required(),
    // createdAt and updatedAt are handled by Sequelize
});

// Penjualan Schemas
const penjualanSchema = Joi.object({
    total_penjualan: Joi.number().precision(2).required(),
    tanggal: Joi.date().required(),
});

// Pengeluaran Gaji Schemas
const pengeluaranGajiSchema = Joi.object({
    nama_karyawan: Joi.string().required(),
    gaji: Joi.number().precision(2).required(),
    bulan: Joi.string().required(),
    tahun: Joi.number().integer().required(),
});

// Pengeluaran Operasional Schemas
const pengeluaranOperasionalSchema = Joi.object({
    jenis_pengeluaran: Joi.string().required(),
    jumlah: Joi.number().precision(2).required(),
    tanggal: Joi.date().required(),
});

// Rugi Schemas
const rugiSchema = Joi.object({
    nama: Joi.string().required(),
    jumlah: Joi.number().precision(2).required(),
    tanggal: Joi.date().required(),
});

// Total Penjualan Schemas
const totalPenjualanSchema = Joi.object({
    product: Joi.string().required(),
    quantity: Joi.number().integer().required(),
    price: Joi.number().precision(2).required(),
    total: Joi.number().precision(2).required(),
});

// Middleware Factory
const validateRequest = (schema) => {
    return (req, res, next) => {
        const { error } = schema.validate(req.body);
        if (error) {
            return res.status(400).json({ message: error.details[0].message });
        }
        next();
    };
};

// Export Validators
module.exports = {
    validateRegister: validateRequest(registerSchema),
    validateLogin: validateRequest(loginSchema),
    validatePajak: validateRequest(pajakSchema),
    validateLaba: validateRequest(labaSchema),
    validatePenjualan: validateRequest(penjualanSchema),
    validatePengeluaranGaji: validateRequest(pengeluaranGajiSchema),
    validatePengeluaranOperasional: validateRequest(pengeluaranOperasionalSchema),
    validateRugi: validateRequest(rugiSchema),
    validateTotalPenjualan: validateRequest(totalPenjualanSchema),
};
