const { DataTypes } = require('sequelize');
const sequelize = require('../config/database'); 

const Course = sequelize.define('Course', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  credit: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
}, {
  tableName: 'Courses',
  timestamps: false, 
});

module.exports = Course;
