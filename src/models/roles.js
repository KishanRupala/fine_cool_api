const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/db');

const Roles = sequelize.define('Role', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  role_name: {
    type: DataTypes.STRING(50),
    allowNull: false,
    unique: true,
  },
  role_id:{
    type:DataTypes.INTEGER,
    unique:true,
    allowNull:false,
  }
}, {
  tableName: 'roles', 
  timestamps: false,
});

// Sync model with database (Optional: uncomment to auto-create the table)
Roles.sync({ alter: false }).then(() => {
  console.log('Roles table created or updated successfully!');
});

module.exports = Roles;