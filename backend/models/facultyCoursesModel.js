const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const FacultyCourses = sequelize.define('FacultyCourses', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    faculty_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Users', // Table name
            key: 'id'
        },
        onDelete: 'CASCADE'
    },
    course_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Courses', // Table name
            key: 'id'
        },
        onDelete: 'CASCADE'
    }
}, {
    tableName: 'FacultyCourses',
    timestamps: false,
    uniqueKeys: {
        unique_pair: {
            fields: ['faculty_id', 'course_id']
        }
    }
});

module.exports = FacultyCourses;
