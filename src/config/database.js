// config/database.js
const { Sequelize } = require('sequelize');
const config = require('./index');

const sequelize = new Sequelize(
    config.DB_NAME,
    config.DB_USER,
    config.DB_PASSWORD,
    {
        host: config.DB_HOST,
        port: config.DB_PORT,
        dialect: 'mysql',
        logging: false,
    }
);

(async () => {
    try {
        await sequelize.authenticate();
        console.log('Koneksi ke database berhasil.');
        await sequelize.sync(); // Membuat tabel jika belum ada
        console.log('Tabel berhasil disinkronkan.');
    } catch (error) {
        console.error('Gagal menghubungkan ke database:', error);
    }
})();
 
module.exports = sequelize;
 