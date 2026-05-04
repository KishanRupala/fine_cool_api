const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/db");

const User = sequelize.define(
  "User",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    contact_no: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    role_name: {
      type: DataTypes.STRING(50),
      defaultValue: "Technician",
      allowNull: true,
    },
    role_id: {
      type: DataTypes.INTEGER,
      defaultValue: 3,
      allowNull: true,
    },
    isActive: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
  },
  {
    tableName: "users",
    timestamps: true, // This automatically adds `createdAt` and `updatedAt`
  },
);

// Sync model with database (Optional: uncomment to auto-create the table)
// Removed { alter: true } to prevent the "Too many keys specified" bug in MySQL
User.sync({ alter: true }).then(() => {
  console.log("User table created or updated successfully!");
});

module.exports = User;
