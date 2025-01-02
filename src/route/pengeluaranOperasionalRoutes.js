const express = require('express');
const pengeluaranOperasionalController = require('../controller/pengeluaranOperasionalController');
const pengeluaranOperasionalRoutes = express.Router();
const validateRequest = require('../middleware/validateRequest'); // Ensure validation middleware is correctly implemented

/**
 * @swagger
 *
 * /pengeluaran-operasionals:
 *   get:
 *     summary: Retrieve all pengeluaran operasionals
 *     responses:
 *       200:
 *         description: An array of pengeluaran operasionals
 */
pengeluaranOperasionalRoutes.get('/pengeluaran-operasionals', pengeluaranOperasionalController.getAllPengeluaranOperasional);

/**
 * @swagger
 *
 * /pengeluaran-operasionals:
 *   post:
 *     summary: Create a new pengeluaran operasional
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
pengeluaranOperasionalRoutes.post('/pengeluaran-operasionals', validateRequest.createPengeluaranOperasional, pengeluaranOperasionalController.createPengeluaranOperasional);

/**
 * @swagger
 *
 * /pengeluaran-operasionals/{id}:
 *   get:
 *     summary: Retrieve a pengeluaran operasional by ID
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
pengeluaranOperasionalRoutes.get('/pengeluaran-operasionals/:id', validateRequest.getPengeluaranOperasional, pengeluaranOperasionalController.getPengeluaranOperasionalById);

/**
 * @swagger
 *
 * /pengeluaran-operasionals/{id}:
 *   put:
 *     summary: Update a pengeluaran operasional by ID
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
 */
pengeluaranOperasionalRoutes.put('/pengeluaran-operasionals/:id', validateRequest.updatePengeluaranOperasional, pengeluaranOperasionalController.updatePengeluaranOperasional);

/**
 * @swagger
 *
 * /pengeluaran-operasionals/{id}:
 *   delete:
 *     summary: Delete a pengeluaran operasional by ID
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
pengeluaranOperasionalRoutes.delete('/pengeluaran-operasionals/:id', validateRequest.deletePengeluaranOperasional, pengeluaranOperasionalController.deletePengeluaranOperasional);

module.exports = pengeluaranOperasionalRoutes;
