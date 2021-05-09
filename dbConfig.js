const Sequelize = require('sequelize');
const db = new Sequelize('sdc', 'postgres', '', {
  host: 'localhost',
  dialect: 'postgres',
  operatorAliases: false,

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
});

module.exports = db;