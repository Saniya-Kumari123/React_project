const express = require('express');
const Course = require('../models/product');

const router = express.Router();

// Create a new course
router.post('/', async (req, res) => {
  try {
    const course = new Course({
      courseName: req.body.courseName,
      courseId: req.body.courseId,
      fees: req.body.fees,
      section: req.body.section,
      description: req.body.description,
    });

    const savedCourse = await course.save();
    res.json(savedCourse);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Retrieve all courses
router.get('/', async (req, res) => {
  try {
    const courses = await Course.find();
    res.json(courses);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Update a course by ID
router.put('/:id', async (req, res) => {
  try {
    const updatedCourse = await Course.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(updatedCourse);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Delete a course by ID
router.delete('/:id', async (req, res) => {
  try {
    const removedCourse = await Course.findByIdAndDelete(req.params.id);
    res.json(removedCourse);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
