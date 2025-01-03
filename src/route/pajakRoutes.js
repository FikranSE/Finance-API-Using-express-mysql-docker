// src/routes/pajakRoutes.js
const express = require('express');
const pajakController = require('../controller/pajakController');
const { validatePajak } = require('../middleware/validateRequest');

const pajakRoutes = express.Router();

/**
 * @swagger
 * tags:
 *   name: Pajaks
 *   description: API for managing pajaks
 */

/**
 * @swagger
 * /pajaks:
 *   get:
 *     summary: Retrieve all pajaks
 *     tags: [Pajaks]
 *     responses:
 *       200:
 *         description: A list of pajaks.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Pajak'
 *       500:
 *         description: Server error
 */
pajakRoutes.get('/', pajakController.getAllPajaks);

/**
 * @swagger
 * /pajaks:
 *   post:
 *     summary: Create a new pajak
 *     tags: [Pajaks]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/PajakInput'
 *     responses:
 *       201:
 *         description: Pajak created successfully
 *       400:
 *         description: Invalid input
 *       500:
 *         description: Server error
 */
pajakRoutes.post('/', validatePajak, pajakController.createPajak);

/**
 * @swagger
 * /pajaks/{id}:
 *   get:
 *     summary: Retrieve a pajak by ID
 *     tags: [Pajaks]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Pajak ID
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: A single pajak object
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Pajak'
 *       404:
 *         description: Pajak not found
 *       500:
 *         description: Server error
 */
pajakRoutes.get('/:id', pajakController.getPajak);
//endfikran

/**
 * @swagger
 * /pajaks/{id}:
 *   put:
 *     summary: Update a pajak by ID
 *     tags: [Pajaks]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Pajak ID
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/PajakInput'
 *     responses:
 *       200:
 *         description: Pajak updated successfully
 *       404:
 *         description: Pajak not found
 *       500:
 *         description: Server error
 */
pajakRoutes.put('/:id', validatePajak, pajakController.updatePajak);

/**
 * @swagger
 * /pajaks/{id}:
 *   delete:
 *     summary: Delete a pajak by ID
 *     tags: [Pajaks]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Pajak ID
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Pajak deleted successfully
 *       404:
 *         description: Pajak not found
 *       500:
 *         description: Server error
 */
pajakRoutes.delete('/:id', pajakController.deletePajak);

module.exports = pajakRoutes;
