// src/routes/index.js
const express = require('express');
const routes = express.Router();

const authRoutes = require('./authRoutes');
const pajakRoutes = require('./pajakRoutes');
const penjualanRoutes = require('./penjualanRoutes');
const pengeluaranGajiRoutes = require('./pengeluaranGajiRoutes');
const pengeluaranOperasionalRoutes = require('./pengeluaranOperasionalRoutes');
const labaRoutes = require('./labaRoutes');
const rugiRoutes = require('./rugiRoutes');
const totalPenjualanRoutes = require('./totalPenjualanRoutes');

const verifyToken = require('../middleware/verifyToken'); // Correct import

// Public routes
routes.use('/auth', authRoutes);

// Protected routes
routes.use('/pajaks', verifyToken, pajakRoutes);
routes.use('/penjualans', verifyToken, penjualanRoutes);
routes.use('/pengeluaran-gaji', verifyToken, pengeluaranGajiRoutes);
routes.use('/pengeluaran-operasionals', verifyToken, pengeluaranOperasionalRoutes);
routes.use('/labas', verifyToken, labaRoutes);
routes.use('/rugis', verifyToken, rugiRoutes);
routes.use('/total-penjualans', verifyToken, totalPenjualanRoutes);

module.exports = routes;
