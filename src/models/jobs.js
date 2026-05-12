const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/db");

const Jobs = sequelize.define(
  "jobs",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    contact_no: {
      type: DataTypes.STRING(13),
      allowNull: false,
      trim: true,
    },
    address: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    city: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    state: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    pincode: {
      type: DataTypes.STRING(6),
      allowNull: false,
      trim: true,
    },
    ac_type: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    job_type: {
      type: DataTypes.STRING(20),
      allowNull: false,
    },
    contract_period: {
      type: DataTypes.STRING(20),
      allowNull: false,
    },
    service_type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    date: {
      type: DataTypes.STRING(20),
      allowNull: false,
    },
    price: {
      type: DataTypes.STRING(20),
      allowNull: false,
    },
    remarks: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    deleted_at: {
      type: DataTypes.STRING(20),
      allowNull: false,
      defaultValue: "",
    },
  },
  {
    tableName: "Jobs",
    timestamps: true,
  },
);

// Sync model with database (Optional: uncomment to auto-create the table)
// Removed { alter: true } to prevent the "Too many keys specified" bug in MySQL
// Jobs.sync({ alter: true }).then(() => {
//   console.log("Job table created or updated successfully!");
// });

module.exports = Jobs;
