const { DataTypes } = require('sequelize');
const sequelize = require('../config/database'); // Import database config

// Define the User model
const User = sequelize.define('User', {
  name: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING(255),
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  role: {
    type: DataTypes.ENUM('Admin', 'Faculty', 'Student'),
    allowNull: false,
  },
}, {
  tableName: 'Users',
  timestamps: false,
});

module.exports = User;
