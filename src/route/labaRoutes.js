const express = require('express');
const labaController = require('../controller/labaController');
const labaRoutes = express.Router();

/**
 * @swagger
 * /laba:
 *   get:
 *     summary: Retrieve all laba
 *     responses:
 *       200:
 *         description: A list of laba
 */
labaRoutes.get('/laba', labaController.getAllLaba);

/**
 * @swagger
 * /laba:
 *   post:
 *     summary: Create a new laba
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
 */
labaRoutes.post('/laba', labaController.createLaba);

/**
 * @swagger
 * /laba/{id}:
 *   get:
 *     summary: Retrieve a laba by ID
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
labaRoutes.get('/laba/:id', labaController.getLaba);

module.exports = labaRoutes;
