import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ManageCourses = () => {
    const [courses, setCourses] = useState([]);
    const [newCourse, setNewCourse] = useState({ name: '', description: '', credits: 0 });

    useEffect(() => {
        fetchCourses();
    }, []);

    const fetchCourses = async () => {
        try {
            const response = await axios.get('/api/courses');
            setCourses(response.data);
        } catch (error) {
            console.error('Error fetching courses:', error);
        }
    };

    const addCourse = async () => {
        try {
            await axios.post('/api/courses', newCourse);
            fetchCourses();
            setNewCourse({ name: '', description: '', credits: 0 });
        } catch (error) {
            console.error('Error adding course:', error);
        }
    };

    const deleteCourse = async (id) => {
        try {
            await axios.delete(`/api/courses/${id}`);
            fetchCourses();
        } catch (error) {
            console.error('Error deleting course:', error);
        }
    };

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">Manage Courses</h1>

            <div className="mb-6">
                <input
                    type="text"
                    placeholder="Course Name"
                    value={newCourse.name}
                    onChange={(e) => setNewCourse({ ...newCourse, name: e.target.value })}
                    className="border p-2 mr-2"
                />
                <input
                    type="text"
                    placeholder="Description"
                    value={newCourse.description}
                    onChange={(e) => setNewCourse({ ...newCourse, description: e.target.value })}
                    className="border p-2 mr-2"
                />
                <input
                    type="number"
                    placeholder="Credits"
                    value={newCourse.credits}
                    onChange={(e) => setNewCourse({ ...newCourse, credits: e.target.value })}
                    className="border p-2 mr-2"
                />
                <button onClick={addCourse} className="bg-blue-500 text-white p-2 rounded">
                    Add Course
                </button>
            </div>

            <table className="w-full border">
                <thead>
                <tr className="bg-gray-200">
                    <th className="border px-4 py-2">Name</th>
                    <th className="border px-4 py-2">Description</th>
                    <th className="border px-4 py-2">Credits</th>
                    <th className="border px-4 py-2">Actions</th>
                </tr>
                </thead>
                <tbody>
                {courses.map((course) => (
                    <tr key={course.id}>
                        <td className="border px-4 py-2">{course.name}</td>
                        <td className="border px-4 py-2">{course.description}</td>
                        <td className="border px-4 py-2">{course.credits}</td>
                        <td className="border px-4 py-2">
                            <button
                                onClick={() => deleteCourse(course.id)}
                                className="bg-red-500 text-white p-2 rounded"
                            >
                                Delete
                            </button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default ManageCourses;
