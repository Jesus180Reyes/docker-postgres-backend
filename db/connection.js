const {Sequelize} = require("sequelize");
require('dotenv').config();
const MYSQL_DATABASE = process.env.MYSQL_DATABASE;
const MYSQL_USER = process.env.MYSQL_USER;
const MYSQL_PASSWORD = process.env.MYSQL_PASSWORD;
const MYSQL_HOST = process.env.MYSQL_HOST;
const MYSQL_PORT = process.env.MYSQL_PORT;
const db = new Sequelize(MYSQL_DATABASE,MYSQL_USER ,MYSQL_PASSWORD, {
    host: MYSQL_HOST,
    dialect:'postgres',
    port: MYSQL_PORT,
    
    // logging:false,
    
});

module.exports = db;