const Course = require('../models/courseModel');
const handleError = require('../utils/errorHandler'); 


async function createCourse(req, res) {
  const { name, description, credit } = req.body;

  try {
    const course = await Course.create({ name, description, credit });
    res.status(201).json({ message: 'Course created successfully', course });
  } catch (error) {
    handleError(res, error);
  }
}


async function getAllCourses(req, res) {
  try {
    const courses = await Course.findAll();
    res.status(200).json(courses);
  } catch (error) {
    handleError(res, error);
  }
}


async function getCourseById(req, res) {
  const { id } = req.params;

  try {
    const course = await Course.findByPk(id);
    if (course) {
      res.status(200).json(course);
    } else {
      res.status(404).json({ message: 'Course not found' });
    }
  } catch (error) {
    handleError(res, error);
  }
}


async function updateCourse(req, res) {
  const { id } = req.params;
  const { name, description, credit } = req.body;

  try {
    const course = await Course.findByPk(id);
    if (course) {
      course.name = name || course.name;
      course.description = description || course.description;
      course.credit = credit || course.credit;

      await course.save();
      res.status(200).json({ message: 'Course updated successfully', course });
    } else {
      res.status(404).json({ message: 'Course not found' });
    }
  } catch (error) {
    handleError(res, error);
  }
}


async function deleteCourse(req, res) {
  const { id } = req.params;

  try {
    const course = await Course.findByPk(id);
    if (course) {
      await course.destroy();
      res.status(200).json({ message: 'Course deleted successfully' });
    } else {
      res.status(404).json({ message: 'Course not found' });
    }
  } catch (error) {
    handleError(res, error);
  }
}

module.exports = {
  createCourse,
  getAllCourses,
  getCourseById,
  updateCourse,
  deleteCourse,
};
