const express = require('express');
const {
    assignCourseToFaculty,
    getCoursesByFaculty,
    getFacultiesByCourse
} = require('../controllers/facultyCoursesController');

const router = express.Router();

// Assign a course to a faculty
router.post('/assign', assignCourseToFaculty);

// Get all courses for a specific faculty
router.get('/faculty/:faculty_id', getCoursesByFaculty);

// Get all faculties for a specific course
router.get('/course/:course_id', getFacultiesByCourse);

module.exports = router;
