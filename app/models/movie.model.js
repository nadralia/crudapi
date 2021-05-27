const Sequelize = require('sequelize');
const db = require('../config/db.config');

const Movie = db.define('movies', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    budget: {
        type: Sequelize.STRING,
        allowNull: false
    },
    genres: {
        type: Sequelize.JSONB,
        allowNull: false
    },
    homepage: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

module.exports = Movie;