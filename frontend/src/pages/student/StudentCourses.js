import React, { useEffect, useState } from 'react';
import Sidebar from '../../components/Sidebar';

const StudentCourses = () => {
    const [courses, setCourses] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [selectedCourse, setSelectedCourse] = useState(null); // To store selected course for viewing details

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
                        syllabus: "Introduction to variables, loops, functions, and object-oriented programming.",
                        schedule: "Monday and Wednesday, 10:00 AM - 12:00 PM",
                    },
                    {
                        id: 2,
                        name: "Data Structures and Algorithms",
                        description: "Explore foundational data structures and algorithms.",
                        facultyName: "Jane Smith",
                        credits: 4,
                        syllabus: "Study of arrays, linked lists, trees, graphs, sorting, and searching algorithms.",
                        schedule: "Tuesday and Thursday, 2:00 PM - 4:00 PM",
                    },
                    {
                        id: 3,
                        name: "Database Management Systems",
                        description: "Understand the concepts of relational databases.",
                        facultyName: "Michael Brown",
                        credits: 3,
                        syllabus: "Relational databases, SQL, normalization, and database design.",
                        schedule: "Monday and Friday, 1:00 PM - 3:00 PM",
                    },
                    {
                        id: 4,
                        name: "Web Development",
                        description: "Learn to build modern web applications.",
                        facultyName: "Emily Davis",
                        credits: 3,
                        syllabus: "Frontend and backend development, HTML, CSS, JavaScript, and Node.js.",
                        schedule: "Wednesday and Friday, 10:00 AM - 12:00 PM",
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

    const handleViewDetails = (course) => {
        setSelectedCourse(course); // Set selected course to show details
    };

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
                                <span className="font-bold">Description:</span> {course.description}
                            </p>
                            <p className="text-gray-700 mb-2">
                                <span className="font-bold">Faculty:</span> {course.facultyName}
                            </p>
                            <p className="text-gray-700">
                                <span className="font-bold">Credits:</span> {course.credits}
                            </p>
                            <button
                                className="mt-4 w-full py-2 px-4 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
                                onClick={() => handleViewDetails(course)}
                            >
                                View Details
                            </button>
                        </div>
                    ))}
                </div>

                {/* Render course details when a course is selected */}
                {selectedCourse && (
                    <div className="mt-6 p-4 border rounded-lg shadow-md bg-white">
                        <h2 className="text-2xl font-semibold text-blue-600">
                            Course Details: {selectedCourse.name}
                        </h2>
                        <p className="text-gray-700 mb-2">
                            <span className="font-bold">Description:</span> {selectedCourse.description}
                        </p>
                        <p className="text-gray-700 mb-2">
                            <span className="font-bold">Faculty:</span> {selectedCourse.facultyName}
                        </p>
                        <p className="text-gray-700 mb-2">
                            <span className="font-bold">Credits:</span> {selectedCourse.credits}
                        </p>
                        <p className="text-gray-700 mb-2">
                            <span className="font-bold">Syllabus:</span> {selectedCourse.syllabus}
                        </p>
                        <p className="text-gray-700">
                            <span className="font-bold">Schedule:</span> {selectedCourse.schedule}
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default StudentCourses;
