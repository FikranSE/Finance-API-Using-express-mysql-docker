//aldo
// src/routes/totalPenjualanRoutes.js
const express = require('express');
const totalPenjualanController = require('../controller/totalPenjualanController');
const { validateTotalPenjualan } = require('../middleware/validateRequest');

const totalPenjualanRoutes = express.Router();

/**
 * @swagger
 * tags:
 *   name: Total Penjualans
 *   description: API for managing total penjualans
 */

/**
 * @swagger
 * /total-penjualans:
 *   get:
 *     summary: Retrieve all total penjualans
 *     tags: [Total Penjualans]
 *     responses:
 *       200:
 *         description: A list of total penjualans
 */
totalPenjualanRoutes.get('/', totalPenjualanController.getTotalPenjualan);

/**
 * @swagger
 * /total-penjualans:
 *   post:
 *     summary: Create a new total penjualan
 *     tags: [Total Penjualans]
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
totalPenjualanRoutes.post('/', validateTotalPenjualan, totalPenjualanController.createTotalPenjualan);

/**
 * @swagger
 * /total-penjualans/{id}:
 *   get:
 *     summary: Retrieve a total penjualan by ID
 *     tags: [Total Penjualans]
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
totalPenjualanRoutes.get('/:id', totalPenjualanController.getTotalPenjualanById);

//satria
/**
 * @swagger
 * /total-penjualans/{id}:
 *   put:
 *     summary: Update a total penjualan by ID
 *     tags: [Total Penjualans]
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
totalPenjualanRoutes.put('/:id', validateTotalPenjualan, totalPenjualanController.updateTotalPenjualan);

/**
 * @swagger
 * /total-penjualans/{id}:
 *   delete:
 *     summary: Delete a total penjualan by ID
 *     tags: [Total Penjualans]
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
totalPenjualanRoutes.delete('/:id', totalPenjualanController.deleteTotalPenjualan);

module.exports = totalPenjualanRoutes;
