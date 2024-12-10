const FacultyCourses = require('../models/facultyCoursesModel');
const User = require('../models/userModel');
const Course = require('../models/courseModel');
const handleError = require('../utils/errorHandler');

// Assign a course to a faculty
async function assignCourseToFaculty(req, res) {
    const { faculty_id, course_id } = req.body;

    // Validate input
    if (!faculty_id || !course_id) {
        return res.status(400).json({ message: 'faculty_id and course_id are required' });
    }

    try {
        // Check if faculty exists
        const faculty = await User.findOne({ where: { id: faculty_id, role: 'faculty' } });
        if (!faculty) {
            return res.status(404).json({ message: 'Faculty member not found' });
        }

        // Check if course exists
        const course = await Course.findByPk(course_id);
        if (!course) {
            return res.status(404).json({ message: 'Course not found' });
        }

        // Assign course to faculty
        const facultyCourse = await FacultyCourses.create({ faculty_id, course_id });
        res.status(201).json({ message: 'Course assigned to faculty successfully', facultyCourse });
    } catch (error) {
        console.error('Error in assignCourseToFaculty:', error); // Log the error for debugging
        handleError(res, error);
    }
}


// Get all courses assigned to a specific faculty
async function getCoursesByFaculty(req, res) {
    const { faculty_id } = req.params;

    try {
        const courses = await FacultyCourses.findAll({
            where: { faculty_id },
            include: { model: Course }
        });

        res.status(200).json(courses);
    } catch (error) {
        handleError(res, error);
    }
}

// Get all faculties assigned to a specific course
async function getFacultiesByCourse(req, res) {
    const { course_id } = req.params;

    try {
        const faculties = await FacultyCourses.findAll({
            where: { course_id },
            include: { model: User, where: { role: 'faculty' } }
        });

        res.status(200).json(faculties);
    } catch (error) {
        handleError(res, error);
    }
}

module.exports = {
    assignCourseToFaculty,
    getCoursesByFaculty,
    getFacultiesByCourse
};
