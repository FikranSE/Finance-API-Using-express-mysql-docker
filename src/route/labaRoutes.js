// src/routes/labaRoutes.js
// bagian ariq

const express = require('express');
const labaController = require('../controller/labaController');
const { validateLaba } = require('../middleware/validateRequest');
const labaRoutes = express.Router();

/**
 * @swagger
 * tags:
 *   name: Labas
 *   description: API for managing laba
 */

/**
 * @swagger
 * /labas:
 *   get:
 *     summary: Retrieve all laba
 *     tags: [Labas]
 *     responses:
 *       200:
 *         description: A list of laba
 */
labaRoutes.get('/', labaController.getAllLaba);

/**
 * @swagger
 * /labas:
 *   post:
 *     summary: Create a new laba
 *     tags: [Labas]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nilai:
 *                 type: number
 *     responses:
 *       201:
 *         description: Laba created successfully
 *       400:
 *         description: Invalid request
 */
labaRoutes.post('/', validateLaba, labaController.createLaba);

/**
 * @swagger
 * /labas/{id}:
 *   get:
 *     summary: Retrieve a laba by ID
 *     tags: [Labas]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: A single laba object
 *       404:
 *         description: Laba not found
 */
labaRoutes.get('/:id', labaController.getLaba);

module.exports = labaRoutes;

