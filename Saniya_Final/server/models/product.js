const mongoose = require('mongoose');

// Define the course schema
const courseSchema = new mongoose.Schema({
  courseName: {
    type: String,
    required: true,
  },
  fees: {
    type: Number,
    required: true,
  },
  section: {
    type: String,
    required: true,
  },
  dateAdded: {
    type: Date,
    default: Date.now,
  },
});

const Course = mongoose.model('Course', courseSchema);

module.exports = Course;
