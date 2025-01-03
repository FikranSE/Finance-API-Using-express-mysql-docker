const express = require('express');
const penjualanController = require('../controller/penjualanController');
const { validatePenjualan } = require('../middleware/validateRequest');

const penjualanRoutes = express.Router();

/**
 * @swagger
 * tags:
 *   name: Penjualans
 *   description: API for managing penjualans
 */

/**
 * @swagger
 * /penjualans:
 *   get:
 *     summary: Retrieve all penjualan
 *     tags: [Penjualans]
 *     responses:
 *       200:
 *         description: A list of penjualans
 */
penjualanRoutes.get('/', penjualanController.getAllPenjualan);

/**
 * @swagger
 * /penjualans:
 *   post:
 *     summary: Create a new penjualan
 *     tags: [Penjualans]
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
 *       400:
 *         description: Invalid request
 */
penjualanRoutes.post('/', validatePenjualan, penjualanController.createPenjualan);

/**
 * @swagger
 * /penjualans/{id}:
 *   get:
 *     summary: Retrieve a penjualan by ID
 *     tags: [Penjualans]
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
penjualanRoutes.get('/:id', penjualanController.getPenjualan);

/**
 * @swagger
 * /penjualans/{id}:
 *   put:
 *     summary: Update a penjualan by ID
 *     tags: [Penjualans]
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
penjualanRoutes.put('/:id', validatePenjualan, penjualanController.updatePenjualan);

/**
 * @swagger
 * /penjualans/{id}:
 *   delete:
 *     summary: Delete a penjualan by ID
 *     tags: [Penjualans]
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
penjualanRoutes.delete('/:id', penjualanController.deletePenjualan);

module.exports = penjualanRoutes;

