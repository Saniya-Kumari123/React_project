import React, { useState, useEffect } from "react";
import axios from "axios";

const Course = () => {
  const [courses, setCourses] = useState([]);
  const [course, setCourse] = useState({
    courseId: "",
    courseName: "",
    fees: "",
    section: "",
  });
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchCourses();
  }, []);

  const fetchCourses = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/courses");
      setCourses(response.data);
    } catch (error) {
      console.error("Error fetching courses:", error);
      setError("Failed to fetch courses. Please try again later.");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCourse({ ...course, [name]: value });
  };

  const handleSubmit = async (action) => {
    try {
      switch (action) {
        case "add":
          await axios.post("http://localhost:5000/api/courses", course);
          console.log("Course added successfully.");
          break;
        case "update":
          await axios.put(
            `http://localhost:5000/api/courses/${course.courseId}`,
            course
          );
          console.log("Course updated successfully.");
          break;
        case "delete":
          await axios.delete(
            `http://localhost:5000/api/courses/${course.courseId}`
          );
          console.log("Course deleted successfully.");
          break;
        default:
          break;
      }
      setCourse({
        courseId: "",
        courseName: "",
        fees: "",
        section: "",
      });
      fetchCourses();
    } catch (error) {
      console.error("Error performing operation:", error);
      setError("Failed to perform the operation. Please try again later.");
    }
  };

  return (
    <div className="container" style={{ backgroundColor: "#f8f9fa" }}>
      {error && <p>{error}</p>}
      <h2 className="text-center" style={{ color: "purple" }}>
        Course Management
      </h2>
      <form>
        <h3>Add/Update/Delete Course</h3>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            name="courseId"
            value={course.courseId}
            onChange={handleChange}
            placeholder="Enter Course ID (required for update/delete)"
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            name="courseName"
            value={course.courseName}
            onChange={handleChange}
            placeholder="Enter Course Name"
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            name="fees"
            value={course.fees}
            onChange={handleChange}
            placeholder="Enter Course Fees"
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            name="section"
            value={course.section}
            onChange={handleChange}
            placeholder="Enter Course Section"
          />
        </div>
        <div className="text-center">
          <button
            className="btn btn-success mx-2 rounded-pill"
            onClick={() => handleSubmit("add")}
            type="button"
          >
            Add Course
          </button>
          <button
            className="btn btn-primary mx-2 rounded-pill"
            onClick={() => handleSubmit("update")}
            type="button"
          >
            Update Course
          </button>
          <button
            className="btn btn-danger mx-2 rounded-pill"
            onClick={() => handleSubmit("delete")}
            type="button"
          >
            Delete Course
          </button>
        </div>
      </form>
      <h2 className="text-center mt-5" style={{ color: "purple" }}>
        Course List
      </h2>
      <div className="rounded" style={{ overflow: "hidden" }}>
        <table
          className="table table-bordered mt-4"
          style={{ color: "purple" }}
        >
          <thead>
            <tr>
              <th>Course ID</th>
              <th>Course Name</th>
              <th>Fees</th>
              <th>Section</th>
              <th>Date Added</th>
            </tr>
          </thead>
          <tbody>
            {courses.map((course) => (
              <tr key={course._id}>
                <td>{course._id}</td>
                <td>{course.courseName}</td>
                <td>{course.fees}</td>
                <td>{course.section}</td>
                <td>{new Date(course.dateAdded).toLocaleDateString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <style jsx>{`
        .container {
          max-width: 800px;
          margin: 0 auto;
          padding: 20px;
        }
        .text-center {
          text-align: center;
        }
        .mb-3 {
          margin-bottom: 15px;
        }
        .btn {
          cursor: pointer;
        }
        .rounded-pill {
          border-radius: 50px;
        }
        .rounded {
          border-radius: 10px;
          overflow: hidden; /* Ensures the table corners are rounded */
        }
      `}</style>
    </div>
  );
};

export default Course;
