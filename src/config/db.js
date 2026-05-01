const { Sequelize } = require('sequelize');

// Replace 'database_name', 'username', and 'password' with your actual database credentials
const sequelize = new Sequelize('finecool', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
  logging: false, // Set to true if you want to see SQL queries in the console
});

const connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log('Database connection has been established successfully to 192.168.29.160.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
};

module.exports = { sequelize, connectDB };
