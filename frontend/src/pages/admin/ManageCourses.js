import React, { useState } from 'react';
import Sidebar from '../../components/Sidebar'; // Adjust the path based on your file structure

const dummyCourses = [
    { id: 1, name: 'Mathematics 101', description: 'Basic Mathematics', credits: 3 },
    { id: 2, name: 'Physics 201', description: 'Intermediate Physics', credits: 4 },
    { id: 3, name: 'Chemistry 101', description: 'Introduction to Chemistry', credits: 3 },
];

const ManageCourses = () => {
    const [courses, setCourses] = useState(dummyCourses);
    const [newCourse, setNewCourse] = useState({ name: '', description: '', credits: 0 });

    const addCourse = () => {
        const id = courses.length + 1; // Generate a new ID
        const updatedCourses = [...courses, { id, ...newCourse }];
        setCourses(updatedCourses);
        setNewCourse({ name: '', description: '', credits: 0 });
    };

    const deleteCourse = (id) => {
        const updatedCourses = courses.filter((course) => course.id !== id);
        setCourses(updatedCourses);
    };

    return (
        <div className="flex">
            <Sidebar role="admin" />
            <div className="p-6 flex-1">
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
        </div>
    );
};

export default ManageCourses;
