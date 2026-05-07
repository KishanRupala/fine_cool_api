const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/db");
const bcrypt = require("bcryptjs");

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
      allowNull: false,
    },
    role_id: {
      type: DataTypes.INTEGER,
      defaultValue: 3,
      allowNull: false,
    },
    isActive: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
    token:{
      type:DataTypes.TEXT,
      allowNull:true,
    }
  },
  {
    tableName: "users",
    timestamps: true, // This automatically adds `createdAt` and `updatedAt`
  },
);

User.beforeCreate(async (user) => {
  if (user.password) {
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);
  } 
});
User.beforeUpdate(async (user) => {
  if (user.changed("password")) {
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);
  } 
});

User.prototype.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

// Sync model with database (Optional: uncomment to auto-create the table)
// Removed { alter: true } to prevent the "Too many keys specified" bug in MySQL
// User.sync({ alter: false }).then(() => {
//   console.log("User table created or updated successfully!");
// });

module.exports = User;
