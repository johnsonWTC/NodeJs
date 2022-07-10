const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('NewDb', 'adminn', '1234', {
    host: 'localhost',
    dialect: 'mssql'
});


try {
    sequelize.authenticate();
    console.log('Connection has been established successfully.');
} catch (error) {
    console.error('Unable to connect to the database:', error);
}


console.log("hello world")