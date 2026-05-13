const { Sequelize } = require("sequelize");

// Replace 'database_name', 'username', and 'password' with your actual database credentials
const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASS,
  {
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
    logging: false, // Set to true if you want to see SQL queries in the console
  },
);

const connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log(
      `Database connection has been established successfully to ${process.env.DB_HOST}`,
    );
  } catch (error) {
    console.error("Unable to connect to the database:", error);
    process.exit(1);
  }
};

module.exports = { sequelize, connectDB };
