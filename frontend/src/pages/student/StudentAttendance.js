import React, { useEffect, useState } from 'react';
import Sidebar from '../../components/Sidebar';
import axios from 'axios';

const StudentAttendance = () => {
    const [attendance, setAttendance] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    // Fetch student's attendance (dummy data)
    useEffect(() => {
        const fetchAttendance = async () => {
            try {
                // Simulate fetching attendance data (replace this with an API call later)
                const dummyAttendance = [
                    {
                        courseName: "Introduction to Programming",
                        totalClasses: 30,
                        attendedClasses: 25,
                        percentage: 83.33,
                        semester: 1, // 1st Semester
                    },
                    {
                        courseName: "Data Structures",
                        totalClasses: 20,
                        attendedClasses: 18,
                        percentage: 90.00,
                        semester: 1, // 1st Semester
                    },
                    {
                        courseName: "Web Development",
                        totalClasses: 25,
                        attendedClasses: 20,
                        percentage: 80.00,
                        semester: 2, // 2nd Semester
                    },
                    {
                        courseName: "Database Management Systems",
                        totalClasses: 15,
                        attendedClasses: 12,
                        percentage: 80.00,
                        semester: 2, // 2nd Semester
                    },
                ];
                setAttendance(dummyAttendance);
                setLoading(false);
            } catch (err) {
                setError('Failed to fetch attendance.');
                setLoading(false);
            }
        };
        fetchAttendance();
    }, []);

    // Group attendance by semester
    const groupBySemester = (attendance) => {
        return attendance.reduce((acc, course) => {
            const semesterKey = `${course.semester}st Semester`;  // Format as "1st Semester", "2nd Semester"
            if (!acc[semesterKey]) {
                acc[semesterKey] = [];
            }
            acc[semesterKey].push(course);
            return acc;
        }, {});
    };

    const groupedAttendance = groupBySemester(attendance);

    if (loading) {
        return (
            <div className="flex items-center justify-center h-screen">
                <p className="text-lg font-bold">Loading attendance...</p>
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
                <h1 className="text-3xl font-bold mb-6">My Attendance</h1>
                {Object.keys(groupedAttendance).map((semester) => (
                    <div key={semester} className="mb-8">
                        <h2 className="text-2xl font-semibold text-blue-600 mb-4">{semester}</h2>
                        <div className="space-y-6">
                            {groupedAttendance[semester].map((course, index) => (
                                <div
                                    key={index}
                                    className="p-4 border rounded-lg shadow-md bg-white hover:shadow-lg transition duration-300"
                                >
                                    <h2 className="text-xl font-semibold text-blue-600">{course.courseName}</h2>
                                    <p className="text-gray-700">
                                        <span className="font-bold">Total Classes:</span> {course.totalClasses}
                                    </p>
                                    <p className="text-gray-700">
                                        <span className="font-bold">Attended Classes:</span> {course.attendedClasses}
                                    </p>
                                    <p className="text-gray-700">
                                        <span className="font-bold">Attendance Percentage:</span> {course.percentage}%
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default StudentAttendance;
