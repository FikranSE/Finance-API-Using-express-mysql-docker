const express = require('express');
const rugiController = require('../controller/rugiController');
const rugiRoutes = express.Router();
const validateRequest = require('../middleware/validateRequest'); // Ensure validation middleware is correctly implemented

/**
 * @swagger
 *
 * /rugi:
 *   get:
 *     summary: Retrieve all rugi
 *     responses:
 *       200:
 *         description: A list of rugi
 */
rugiRoutes.get('/rugi', rugiController.getRugi);

/**
 * @swagger
 *
 * /rugi:
 *   post:
 *     summary: Create a new rugi
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nama:
 *                 type: string
 *               jumlah:
 *                 type: number
 *               tanggal:
 *                 type: string
 *                 format: date
 *     responses:
 *       201:
 *         description: Rugi created successfully
 *       400:
 *         description: Invalid request
 */
rugiRoutes.post('/rugi', validateRequest.createRugi, rugiController.createRugi);

/**
 * @swagger
 *
 * /rugi/{id}:
 *   get:
 *     summary: Retrieve a rugi by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: A single rugi object
 *       404:
 *         description: Rugi not found
 */
rugiRoutes.get('/rugi/:id', validateRequest.getRugi, rugiController.getRugiById);

/**
 * @swagger
 * /rugis/{id}:
 *   put:
 *     summary: Update a rugi by ID
 *     tags: [Rugis]
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
 *               nama:
 *                 type: string
 *               jumlah:
 *                 type: number
 *               tanggal:
 *                 type: string
 *                 format: date
 *     responses:
 *       200:
 *         description: Rugi updated successfully
 *       404:
 *         description: Rugi not found
 */
rugiRoutes.put('/:id', validateRugi, rugiController.updateRugi);

/**
 * @swagger
 * /rugis/{id}:
 *   delete:
 *     summary: Delete a rugi by ID
 *     tags: [Rugis]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Rugi deleted successfully
 *       404:
 *         description: Rugi not found
 */
rugiRoutes.delete('/:id', rugiController.deleteRugi);

module.exports = rugiRoutes;
