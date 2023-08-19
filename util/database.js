const Sequelize = require('sequelize');

const sequelize = new Sequelize(
    'node-new',
    'root',
    'Ali@9934', 
    {dialect: 'mysql',  host: 'localhost'}
)

module.exports = sequelize;