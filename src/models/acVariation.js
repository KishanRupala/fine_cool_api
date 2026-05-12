const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/db");

const acVariation = sequelize.define(
  "ac_variations",
  {
    variation_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
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

    created_at: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    tableName: "ac_variations",
    timestamps: false,
  },
);

// Sync model with database (Optional: uncomment to auto-create the table)
// Removed { alter: true } to prevent the "Too many keys specified" bug in MySQL
acVariation.sync({ alter: true }).then(() => {
  console.log("Ac Variation table created or updated successfully!");
});
module.exports = acVariation;
