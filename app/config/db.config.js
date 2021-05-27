const { Sequelize } = require('sequelize');
const db = new Sequelize('movies', 'postgres', 'nadra2922', {
    host: 'localhost',
    dialect: 'postgres',
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
});

module.exports = db;