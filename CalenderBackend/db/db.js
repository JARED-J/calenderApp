const Sequelize = require('sequelize')

const db = new Sequelize('postgres://localhost:5432/calenderApp', {logging: false});

module.exports = db;
