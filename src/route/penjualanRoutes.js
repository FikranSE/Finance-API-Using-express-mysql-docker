const express = require('express');
const penjualanController = require('../controller/penjualanController');
const penjualanRoutes = express.Router();
const validateRequest = require('../middleware/validateRequest'); // Ensure validation middleware is correctly implemented

/**
 * @swagger
 * /penjualan:
 *   get:
 *     summary: Retrieve all penjualan
 *     responses:
 *       200:
 *         description: A list of penjualan
 */
penjualanRoutes.get('/penjualan', penjualanController.getAllPenjualan);

/**
 * @swagger
 * /penjualan:
 *   post:
 *     summary: Create a new penjualan
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               total_penjualan:
 *                 type: number
 *                 example: 100000
 *               tanggal:
 *                 type: string
 *                 format: date
 *                 example: '2023-12-01'
 *     responses:
 *       201:
 *         description: Penjualan created successfully
 */
penjualanRoutes.post('/penjualan', validateRequest.createPenjualan, penjualanController.createPenjualan);

/**
 * @swagger
 * /penjualan/{id}:
 *   get:
 *     summary: Retrieve a penjualan by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: A single penjualan object
 *       404:
 *         description: Penjualan not found
 */
penjualanRoutes.get('/penjualan/:id', penjualanController.getPenjualan);

/**
 * @swagger
 * /penjualan/{id}:
 *   put:
 *     summary: Update a penjualan by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               total_penjualan:
 *                 type: number
 *               tanggal:
 *                 type: string
 *                 format: date
 *     responses:
 *       200:
 *         description: Penjualan updated successfully
 *       400:
 *         description: Invalid request
 *       404:
 *         description: Penjualan not found
 */
penjualanRoutes.put('/penjualan/:id', validateRequest.updatePenjualan, penjualanController.updatePenjualan);

/**
 * @swagger
 * /penjualan/{id}:
 *   delete:
 *     summary: Delete a penjualan by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Penjualan deleted successfully
 *       404:
 *         description: Penjualan not found
 */
penjualanRoutes.delete('/penjualan/:id', penjualanController.deletePenjualan);

module.exports = penjualanRoutes;
