// src/routes/authRoutes.js
const express = require('express');
const authController = require('../controller/authController');
const { validateRegister, validateLogin } = require('../middleware/validateRequest');

const authRoutes = express.Router();

/**
 * @swagger
 *
 * /auth/register:
 *   post:
 *     summary: Register a new user
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: Serhat
 *               surname:
 *                 type: string
 *                 example: SARI
 *               mail:
 *                 type: string
 *                 example: serhat@gmail.com
 *               password:
 *                 type: string
 *                 example: serhat123
 *     responses:
 *       201:
 *         description: User created successfully
 *       400:
 *         description: Invalid request
 */
authRoutes.post('/register', validateRegister, authController.register);

/**
 * @swagger
 *
 * /auth/login:
 *   post:
 *     summary: Login a user
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               mail:
 *                 type: string
 *                 example: serhat@gmail.com
 *               password:
 *                 type: string
 *                 example: serhat123
 *     responses:
 *       200:
 *         description: Login successful
 *       400:
 *         description: Invalid request
 *       404:
 *         description: Person not found
 */
authRoutes.post('/login', validateLogin, authController.login);

module.exports = authRoutes;
