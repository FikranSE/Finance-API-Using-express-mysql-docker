const express = require('express');
const totalPenjualanController = require('../controller/totalPenjualanController');
const totalPenjualanRoutes = express.Router();
const validateRequest = require('../middleware/validateRequest'); // Ensure validation middleware is correctly implemented

/**
 * @swagger
 *
 * /total-penjualans:
 *   get:
 *     summary: Retrieve all total penjualans
 *     responses:
 *       200:
 *         description: A list of total penjualans
 */
totalPenjualanRoutes.get('/total-penjualans', totalPenjualanController.getTotalPenjualan);

/**
 * @swagger
 *
 * /total-penjualans:
 *   post:
 *     summary: Create a new total penjualan
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               product:
 *                 type: string
 *               quantity:
 *                 type: integer
 *               price:
 *                 type: number
 *               total:
 *                 type: number
 *     responses:
 *       201:
 *         description: Total penjualan created successfully
 *       400:
 *         description: Invalid request
 */
totalPenjualanRoutes.post('/total-penjualans', validateRequest.createTotalPenjualan, totalPenjualanController.createTotalPenjualan);

/**
 * @swagger
 *
 * /total-penjualans/{id}:
 *   get:
 *     summary: Retrieve a total penjualan by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: A single total penjualan object
 *       404:
 *         description: Total penjualan not found
 */
totalPenjualanRoutes.get('/total-penjualans/:id', totalPenjualanController.getTotalPenjualanById);

/**
 * @swagger
 *
 * /total-penjualans/{id}:
 *   put:
 *     summary: Update a total penjualan by ID
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
 *               product:
 *                 type: string
 *               quantity:
 *                 type: integer
 *               price:
 *                 type: number
 *               total:
 *                 type: number
 *     responses:
 *       200:
 *         description: Total penjualan updated successfully
 *       400:
 *         description: Invalid request
 *       404:
 *         description: Total penjualan not found
 */
totalPenjualanRoutes.put('/total-penjualans/:id', validateRequest.updateTotalPenjualan, totalPenjualanController.updateTotalPenjualan);

/**
 * @swagger
 *
 * /total-penjualans/{id}:
 *   delete:
 *     summary: Delete a total penjualan by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Total penjualan deleted successfully
 *       404:
 *         description: Total penjualan not found
 */
totalPenjualanRoutes.delete('/total-penjualans/:id', validateRequest.deleteTotalPenjualan, totalPenjualanController.deleteTotalPenjualan);

module.exports = totalPenjualanRoutes;
