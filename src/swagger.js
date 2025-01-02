// src/swagger.js
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

// Swagger options
const options = {
    swaggerDefinition: {
        components: {
            securitySchemes: {
                bearerAuth: {
                    type: 'http',
                    in: 'header',
                    name: 'Authorization',
                    description: 'Bearer token to access these api endpoints',
                    scheme: 'bearer',
                    bearerFormat: 'JWT',
                },
            },
        },
        security: [
            {
                bearerAuth: [],
            },
        ],
        openapi: '3.0.0',
        info: {
            title: 'Blog API',
            version: '1.0.0',
        },
        servers: [{ url: '/api' }],
    },
    apis: ['./route/*.js'], // Ensure the path here is correct
};


const specs = swaggerJsdoc(options);

module.exports = { specs, swaggerUi };
