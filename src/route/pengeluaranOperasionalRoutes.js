// src/routes/pengeluaranOperasionalRoutes.js
// bagian ariq
const express = require('express');
const pengeluaranOperasionalController = require('../controller/pengeluaranOperasionalController');
const { validatePengeluaranOperasional } = require('../middleware/validateRequest');

const pengeluaranOperasionalRoutes = express.Router();

/**
 * @swagger
 * tags:
 *   name: Pengeluaran Operasional
 *   description: API for managing pengeluaran operasional
 */

/**
 * @swagger
 * /pengeluaran-operasionals:
 *   get:
 *     summary: Retrieve all pengeluaran operasionals
 *     tags: [Pengeluaran Operasional]
 *     responses:
 *       200:
 *         description: An array of pengeluaran operasionals
 */
pengeluaranOperasionalRoutes.get('/', pengeluaranOperasionalController.getAllPengeluaranOperasional);

/**
 * @swagger
 * /pengeluaran-operasionals:
 *   post:
 *     summary: Create a new pengeluaran operasional
 *     tags: [Pengeluaran Operasional]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               jenis_pengeluaran:
 *                 type: string
 *               jumlah:
 *                 type: number
 *               tanggal:
 *                 type: string
 *                 format: date
 *     responses:
 *       201:
 *         description: Pengeluaran operasional created successfully
 *       400:
 *         description: Invalid request
 */
pengeluaranOperasionalRoutes.post('/', validatePengeluaranOperasional, pengeluaranOperasionalController.createPengeluaranOperasional);

/**
 * @swagger
 * /pengeluaran-operasionals/{id}:
 *   get:
 *     summary: Retrieve a pengeluaran operasional by ID
 *     tags: [Pengeluaran Operasional]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: A pengeluaran operasional object
 *       404:
 *         description: Pengeluaran operasional not found
 */
pengeluaranOperasionalRoutes.get('/:id', pengeluaranOperasionalController.getPengeluaranOperasionalById);

//bagian satria
/**
 * @swagger
 * /pengeluaran-operasionals/{id}:
 *   put:
 *     summary: Update a pengeluaran operasional by ID
 *     tags: [Pengeluaran Operasional]
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
 *               jenis_pengeluaran:
 *                 type: string
 *               jumlah:
 *                 type: number
 *               tanggal:
 *                 type: string
 *                 format: date
 *     responses:
 *       200:
 *         description: Pengeluaran operasional updated successfully
 *       404:
 *         description: Pengeluaran operasional not found
 *       500:
 *         description: Server error
 */
pengeluaranOperasionalRoutes.put('/:id', validatePengeluaranOperasional, pengeluaranOperasionalController.updatePengeluaranOperasional);

/**
 * @swagger
 * /pengeluaran-operasionals/{id}:
 *   delete:
 *     summary: Delete a pengeluaran operasional by ID
 *     tags: [Pengeluaran Operasional]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Pengeluaran operasional deleted successfully
 *       404:
 *         description: Pengeluaran operasional not found
 */
pengeluaranOperasionalRoutes.delete('/:id', pengeluaranOperasionalController.deletePengeluaranOperasional);

module.exports = pengeluaranOperasionalRoutes;
