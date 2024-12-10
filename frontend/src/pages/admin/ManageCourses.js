import React, { useState, useEffect } from 'react';
import Sidebar from '../../components/Sidebar'; // Adjust the path based on your file structure

const ManageCourses = () => {
    const [courses, setCourses] = useState([]);
    const [newCourse, setNewCourse] = useState({ name: '', description: '', credit: 0 });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    // Fetch courses on component mount
    useEffect(() => {
        fetchCourses();
    }, []);

    const fetchCourses = async () => {
        setLoading(true);
        setError('');
        try {
            const response = await fetch('http://localhost:8000/api/courses', {
                method: 'GET',
            });
            if (!response.ok) throw new Error('Failed to fetch courses');
            const data = await response.json();
            setCourses(data);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    const addCourse = async () => {
        if (!newCourse.name || !newCourse.description || newCourse.credit <= 0) {
            setError('All fields are required and credit must be greater than 0');
            return;
        }

        setLoading(true);
        setError('');
        try {
            const response = await fetch('http://localhost:8000/api/courses', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newCourse),
            });
            if (!response.ok) throw new Error('Failed to add course');
            const addedCourse = await response.json();
            setCourses([...courses, addedCourse]);
            setNewCourse({ name: '', description: '', credit: 0 });
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    const deleteCourse = async (id) => {
        setLoading(true);
        setError('');
        try {
            const response = await fetch(`http://localhost:8000/api/courses/${id}`, {
                method: 'DELETE',
            });
            if (!response.ok) throw new Error('Failed to delete course');
            setCourses(courses.filter((course) => course.id !== id));
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex">
            <Sidebar role="admin" />
            <div className="p-6 flex-1">
                <h1 className="text-2xl font-bold mb-4">Manage Courses</h1>

                {error && <p className="text-red-500 mb-4">{error}</p>}
                {loading && <p>Loading...</p>}

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
                        value={newCourse.credit}
                        onChange={(e) => setNewCourse({ ...newCourse, credit: +e.target.value })}
                        className="border p-2 mr-2"
                    />
                    <button
                        onClick={addCourse}
                        className="bg-blue-500 text-white p-2 rounded"
                        disabled={loading}
                    >
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
                            <td className="border px-4 py-2">{course.credit}</td>
                            <td className="border px-4 py-2">
                                <button
                                    onClick={() => deleteCourse(course.id)}
                                    className="bg-red-500 text-white p-2 rounded"
                                    disabled={loading}
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageCourses;
