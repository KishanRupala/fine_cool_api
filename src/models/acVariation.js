const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/db");

const acVariation = sequelize.define(
  "ac_variations",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },

    job_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    capacity: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },

    location: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },

    complains: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    deleted_at: {
      type: DataTypes.DATE,
      allowNull: true,
    },
  },
  {
    tableName: "ac_variations",
     timestamps: true,
    paranoid: true,
    deletedAt: "deleted_at",
  },
);

module.exports = acVariation;
