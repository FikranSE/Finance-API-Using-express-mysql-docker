const express = require('express');
const rugiController = require('../controller/rugiController');
const { validateRugi } = require('../middleware/validateRequest');

const rugiRoutes = express.Router();

/**
 * @swagger
 * tags:
 *   name: Rugis
 *   description: API for managing rugis
 */

/**
 * @swagger
 * /rugis:
 *   get:
 *     summary: Retrieve all rugi
 *     tags: [Rugis]
 *     responses:
 *       200:
 *         description: A list of rugi
 */
rugiRoutes.get('/', rugiController.getRugi);

/**
 * @swagger
 * /rugis:
 *   post:
 *     summary: Create a new rugi
 *     tags: [Rugis]
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
rugiRoutes.post('/', validateRugi, rugiController.createRugi);

/**
 * @swagger
 * /rugis/{id}:
 *   get:
 *     summary: Retrieve a rugi by ID
 *     tags: [Rugis]
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
rugiRoutes.get('/:id', rugiController.getRugiById);

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
