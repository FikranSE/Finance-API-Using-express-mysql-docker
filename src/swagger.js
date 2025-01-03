
// src/swagger.js
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

// Swagger options
const options = {
    swaggerDefinition: {
        openapi: '3.0.0',
        info: {
            title: 'Finance API',
            version: '1.0.0',
            description: 'API documentation for Finance Management System',
        },
        servers: [
            {
                url: 'http://127.0.0.1:3001/api', // Ganti dengan URL produksi jika perlu
            },
        ],
        components: {
            securitySchemes: {
                bearerAuth: {
                    type: 'http',
                    scheme: 'bearer',
                    bearerFormat: 'JWT',
                    in: 'header',
                    name: 'Authorization',
                    description: 'Bearer token to access these api endpoints',
                },
            },
            schemas: {
                // Person Schemas
                Person: {
                    type: 'object',
                    properties: {
                        person_id: { type: 'integer' },
                        person_name: { type: 'string' },
                        person_surname: { type: 'string' },
                        person_mail: { type: 'string', format: 'email' },
                        person_password: { type: 'string', format: 'password' },
                    },
                },
                PersonInput: {
                    type: 'object',
                    required: ['person_name', 'person_surname', 'person_mail', 'person_password'],
                    properties: {
                        person_name: { type: 'string' },
                        person_surname: { type: 'string' },
                        person_mail: { type: 'string', format: 'email' },
                        person_password: { type: 'string', format: 'password' },
                    },
                },

                // Pajak Schemas
                Pajak: {
                    type: 'object',
                    properties: {
                        id: { type: 'integer' },
                        nama_pajak: { type: 'string' },
                        persentase: { type: 'number' },
                        jumlah: { type: 'number' },
                        total_pajak: { type: 'number' },
                    },
                },
                PajakInput: {
                    type: 'object',
                    required: ['nama_pajak', 'persentase', 'jumlah', 'total_pajak'],
                    properties: {
                        nama_pajak: { type: 'string' },
                        persentase: { type: 'number' },
                        jumlah: { type: 'number' },
                        total_pajak: { type: 'number' },
                    },
                },

                // Laba Schemas
                Laba: {
                    type: 'object',
                    properties: {
                        id: { type: 'integer' },
                        nilai: { type: 'number' },
                        createdAt: { type: 'string', format: 'date-time' },
                        updatedAt: { type: 'string', format: 'date-time' },
                    },
                },
                LabaInput: {
                    type: 'object',
                    required: ['nilai'],
                    properties: {
                        nilai: { type: 'number' },
                    },
                },

                // Penjualan Schemas
                Penjualan: {
                    type: 'object',
                    properties: {
                        id: { type: 'integer' },
                        total_penjualan: { type: 'number' },
                        tanggal: { type: 'string', format: 'date' },
                    },
                },
                PenjualanInput: {
                    type: 'object',
                    required: ['total_penjualan', 'tanggal'],
                    properties: {
                        total_penjualan: { type: 'number' },
                        tanggal: { type: 'string', format: 'date' },
                    },
                },

                // Pengeluaran Gaji Schemas
                PengeluaranGaji: {
                    type: 'object',
                    properties: {
                        id: { type: 'integer' },
                        nama_karyawan: { type: 'string' },
                        gaji: { type: 'number' },
                        bulan: { type: 'string' },
                        tahun: { type: 'integer' },
                    },
                },
                PengeluaranGajiInput: {
                    type: 'object',
                    required: ['nama_karyawan', 'gaji', 'bulan', 'tahun'],
                    properties: {
                        nama_karyawan: { type: 'string' },
                        gaji: { type: 'number' },
                        bulan: { type: 'string' },
                        tahun: { type: 'integer' },
                    },
                },

                // Pengeluaran Operasional Schemas
                PengeluaranOperasional: {
                    type: 'object',
                    properties: {
                        id: { type: 'integer' },
                        jenis_pengeluaran: { type: 'string' },
                        jumlah: { type: 'number' },
                        tanggal: { type: 'string', format: 'date' },
                    },
                },
                PengeluaranOperasionalInput: {
                    type: 'object',
                    required: ['jenis_pengeluaran', 'jumlah', 'tanggal'],
                    properties: {
                        jenis_pengeluaran: { type: 'string' },
                        jumlah: { type: 'number' },
                        tanggal: { type: 'string', format: 'date' },
                    },
                },

                // Rugi Schemas
                Rugi: {
                    type: 'object',
                    properties: {
                        id: { type: 'integer' },
                        nama: { type: 'string' },
                        jumlah: { type: 'number' },
                        tanggal: { type: 'string', format: 'date' },
                    },
                },
                RugiInput: {
                    type: 'object',
                    required: ['nama', 'jumlah', 'tanggal'],
                    properties: {
                        nama: { type: 'string' },
                        jumlah: { type: 'number' },
                        tanggal: { type: 'string', format: 'date' },
                    },
                },

                // Total Penjualan Schemas
                TotalPenjualan: {
                    type: 'object',
                    properties: {
                        id: { type: 'integer' },
                        product: { type: 'string' },
                        quantity: { type: 'integer' },
                        price: { type: 'number' },
                        total: { type: 'number' },
                    },
                },
                TotalPenjualanInput: {
                    type: 'object',
                    required: ['product', 'quantity', 'price', 'total'],
                    properties: {
                        product: { type: 'string' },
                        quantity: { type: 'integer' },
                        price: { type: 'number' },
                        total: { type: 'number' },
                    },
                },

                // Tambahkan schema lain sesuai kebutuhan
            },
        },
        security: [
            {
                bearerAuth: [],
            },
        ],
        tags: [
            {
                name: 'Auth',
                description: 'Authentication endpoints',
            },
            {
                name: 'Pajaks',
                description: 'API for managing pajaks',
            },
            {
                name: 'Labas',
                description: 'API for managing laba',
            },
            {
                name: 'Penjualans',
                description: 'API for managing penjualans',
            },
            {
                name: 'Pengeluaran Gaji',
                description: 'API for managing pengeluaran gaji',
            },
            {
                name: 'Pengeluaran Operasional',
                description: 'API for managing pengeluaran operasional',
            },
            {
                name: 'Rugis',
                description: 'API for managing rugis',
            },
            {
                name: 'Total Penjualans',
                description: 'API for managing total penjualans',
            },
            // Tambahkan tags lain sesuai kebutuhan
        ],
    },
    apis: ['./routes/*.js'], // Pastikan path sudah benar
};

const specs = swaggerJsdoc(options);

module.exports = { specs, swaggerUi };
