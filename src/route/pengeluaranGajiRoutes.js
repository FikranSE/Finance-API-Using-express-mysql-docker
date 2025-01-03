const express = require('express');
const pengeluaranGajiController = require('../controller/pengeluaranGajiController');
const { validatePengeluaranGaji } = require('../middleware/validateRequest');

const pengeluaranGajiRoutes = express.Router();

/**
 * @swagger
 * tags:
 *   name: Pengeluaran Gaji
 *   description: API for managing pengeluaran gaji
 */

/**
 * @swagger
 * /pengeluaran-gaji:
 *   get:
 *     summary: Retrieve all pengeluaran gaji records
 *     tags: [Pengeluaran Gaji]
 *     responses:
 *       200:
 *         description: A list of pengeluaran gaji records
 */
pengeluaranGajiRoutes.get('/', pengeluaranGajiController.getAllPengeluaranGaji);

/**
 * @swagger
 * /pengeluaran-gaji:
 *   post:
 *     summary: Create a new pengeluaran gaji record
 *     tags: [Pengeluaran Gaji]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nama_karyawan:
 *                 type: string
 *               gaji:
 *                 type: number
 *               bulan:
 *                 type: string
 *               tahun:
 *                 type: integer
 *     responses:
 *       201:
 *         description: Pengeluaran Gaji created successfully
 *       400:
 *         description: Invalid request
 */
pengeluaranGajiRoutes.post('/', validatePengeluaranGaji, pengeluaranGajiController.createPengeluaranGaji);

/**
 * @swagger
 * /pengeluaran-gaji/{id}:
 *   get:
 *     summary: Retrieve a pengeluaran gaji by ID
 *     tags: [Pengeluaran Gaji]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: A pengeluaran gaji record
 *       404:
 *         description: Pengeluaran Gaji not found
 */
pengeluaranGajiRoutes.get('/:id', pengeluaranGajiController.getPengeluaranGajiById);

/**
 * @swagger
 * /pengeluaran-gaji/{id}:
 *   put:
 *     summary: Update a pengeluaran gaji by ID
 *     tags: [Pengeluaran Gaji]
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
 *               nama_karyawan:
 *                 type: string
 *               gaji:
 *                 type: number
 *               bulan:
 *                 type: string
 *               tahun:
 *                 type: integer
 *     responses:
 *       200:
 *         description: Pengeluaran Gaji updated successfully
 *       404:
 *         description: Pengeluaran Gaji not found
 */
pengeluaranGajiRoutes.put('/:id', validatePengeluaranGaji, pengeluaranGajiController.updatePengeluaranGaji);

/**
 * @swagger
 * /pengeluaran-gaji/{id}:
 *   delete:
 *     summary: Delete a pengeluaran gaji by ID
 *     tags: [Pengeluaran Gaji]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Pengeluaran Gaji deleted successfully
 *       404:
 *         description: Pengeluaran Gaji not found
 */
pengeluaranGajiRoutes.delete('/:id', pengeluaranGajiController.deletePengeluaranGaji);

module.exports = pengeluaranGajiRoutes;
//endfikran