import React, { useEffect, useState } from 'react';
import Sidebar from '../../components/Sidebar';
import axios from 'axios';

const StudentEnrollCourses = () => {
    const [courses, setCourses] = useState([]);
    const [enrolledCourses, setEnrolledCourses] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    
    // Fetch available courses (dummy data)
    useEffect(() => {
        const fetchCourses = async () => {
            try {
                // Simulate fetching available courses with dummy data
                const dummyCourses = [
                    {
                        id: 1,
                        name: "Introduction to Programming",
                        description: "Learn the basics of programming.",
                        prerequisites: [],
                        availableSlots: 5,
                    },
                    {
                        id: 2,
                        name: "Data Structures and Algorithms",
                        description: "Study fundamental data structures and algorithms.",
                        prerequisites: ["Introduction to Programming"],
                        availableSlots: 0,
                    },
                    {
                        id: 3,
                        name: "Database Management Systems",
                        description: "Learn how to manage and interact with databases.",
                        prerequisites: [],
                        availableSlots: 3,
                    },
                    {
                        id: 4,
                        name: "Web Development",
                        description: "Learn web technologies and frameworks.",
                        prerequisites: ["Introduction to Programming"],
                        availableSlots: 2,
                    },
                ];
                setCourses(dummyCourses);
                setLoading(false);
            } catch (err) {
                setError('Failed to fetch courses.');
                setLoading(false);
            }
        };
        fetchCourses();
    }, []);

    const handleEnroll = (course) => {
        if (course.availableSlots <= 0) {
            alert(`No available slots for ${course.name}`);
            return;
        }

        const hasPrerequisites = course.prerequisites.every((prerequisite) =>
            enrolledCourses.includes(prerequisite)
        );

        if (!hasPrerequisites) {
            alert(`You must complete the prerequisites for ${course.name}`);
            return;
        }

        // Enroll in the course
        setEnrolledCourses((prev) => [...prev, course.name]);
        alert(`Successfully enrolled in ${course.name}`);
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
                <h1 className="text-3xl font-bold mb-6">Available Courses</h1>
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
                                <span className="font-bold">Available Slots:</span> {course.availableSlots}
                            </p>
                            <p className="text-gray-700 mb-2">
                                <span className="font-bold">Prerequisites:</span>{" "}
                                {course.prerequisites.length === 0
                                    ? "None"
                                    : course.prerequisites.join(", ")}
                            </p>
                            <button
                                className="mt-4 w-full py-2 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
                                onClick={() => handleEnroll(course)}
                                disabled={course.availableSlots <= 0}
                            >
                                {course.availableSlots > 0
                                    ? "Enroll Now"
                                    : "No Slots Available"}
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default StudentEnrollCourses;
