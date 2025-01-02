// src/index.js
const express = require('express');
const routes = require('./route');  // Main router
const { specs, swaggerUi } = require('./swagger');  // Swagger setup
const sequelize = require('./config/database'); // Database configuration
const errorHandler = require('./middleware/errorHandler'); // Global error handler

const app = express();

// Middleware to parse JSON
app.use(express.json());

// Swagger docs route
app.use('/api/docs', swaggerUi.serve, swaggerUi.setup(specs));

// Register all API routes through the main router
app.use('/api', routes);

// Global Error Handling Middleware
app.use(errorHandler);

// Test Database Connection and Sync Models
sequelize.authenticate()
    .then(() => {
        console.log('Database connected...');
        return sequelize.sync(); // Sync all models
    })
    .then(() => {
        console.log('Models synchronized.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });

// Start server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
