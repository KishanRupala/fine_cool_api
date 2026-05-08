const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/db");

const Roles = sequelize.define(
  "Role",
  {
    role_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrementt: true,
    },
    role_name: {
      type: DataTypes.STRING(50),
      allowNull: false,
      unique: true,
    }
  },
  {
    tableName: "roles",
    timestamps: true,
  },
);

// Sync model with database (Optional: uncomment to auto-create the table)
// Roles.sync({ alter: true }).then(() => {
//   console.log("Roles table created or updated successfully!");
// });

module.exports = Roles;
