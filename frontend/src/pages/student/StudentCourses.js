import React, { useEffect, useState } from 'react';
import Sidebar from '../../components/Sidebar';

const StudentCourses = () => {
    const [courses, setCourses] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    // Fetch the student's enrolled courses (using dummy data)
    useEffect(() => {
        const fetchCourses = async () => {
            try {
                // Simulate an API call with dummy data
                const dummyData = [
                    {
                        id: 1,
                        name: "Introduction to Programming",
                        description: "Learn the basics of programming using Python.",
                        facultyName: "John Doe",
                        credits: 3,
                    },
                    {
                        id: 2,
                        name: "Data Structures and Algorithms",
                        description: "Explore foundational data structures and algorithms.",
                        facultyName: "Jane Smith",
                        credits: 4,
                    },
                    {
                        id: 3,
                        name: "Database Management Systems",
                        description: "Understand the concepts of relational databases.",
                        facultyName: "Michael Brown",
                        credits: 3,
                    },
                    {
                        id: 4,
                        name: "Web Development",
                        description: "Learn to build modern web applications.",
                        facultyName: "Emily Davis",
                        credits: 3,
                    },
                ];
                setCourses(dummyData);
                setLoading(false);
            } catch (err) {
                setError('Failed to fetch courses.');
                setLoading(false);
            }
        };
        fetchCourses();
    }, []);

    if (loading) {
        return (
            <div className="flex items-center justify-center h-screen">
                <p className="text-lg font-bold">Loading...</p>
            </div>
        );
    }

    if (error) {
        return (
            <div className="flex items-center justify-center h-screen">
                <p className="text-lg font-bold text-red-500">{error}</p>
            </div>
        );
    }

    return (
        <div className="flex">
            <Sidebar role="student" />
            <div className="flex-grow p-6">
                <h1 className="text-3xl font-bold mb-6">Enrolled Courses</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {courses.map((course) => (
                        <div
                            key={course.id}
                            className="p-4 border rounded-lg shadow-md bg-white hover:shadow-lg transition duration-300"
                        >
                            <h2 className="text-xl font-semibold mb-2 text-blue-600">
                                {course.name}
                            </h2>
                            <p className="text-gray-700 mb-2">
                                <span className="font-bold">Description:</span>{' '}
                                {course.description}
                            </p>
                            <p className="text-gray-700 mb-2">
                                <span className="font-bold">Faculty:</span> {course.facultyName}
                            </p>
                            <p className="text-gray-700">
                                <span className="font-bold">Credits:</span> {course.credits}
                            </p>
                            <button
                                className="mt-4 w-full py-2 px-4 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
                                onClick={() => window.alert(`Viewing details for ${course.name}`)}
                            >
                                View Details
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default StudentCourses;
