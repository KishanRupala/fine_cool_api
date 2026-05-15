const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/db");

const Roles = sequelize.define(
  "roles",
  {
    role_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    role_name: {
      type: DataTypes.STRING(50),
      allowNull: false,
      unique: true,
      set(value) {
        const formatted = value
          .toLowerCase()
          .replace(/\b\w/g, (char) => char.toUpperCase());

        this.setDataValue("role_name", formatted);
      },
    },
  },
  {
    tableName: "roles",
    timestamps: true,
  },
);


module.exports = Roles;
