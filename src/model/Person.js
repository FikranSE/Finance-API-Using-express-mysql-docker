// src/model/Person.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Person = sequelize.define('Person', {
    person_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    person_name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    person_surname: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    person_mail: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    person_password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, {
    tableName: 'persons',
    timestamps: false,
});

module.exports = Person;
