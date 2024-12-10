import React, { useState, useEffect } from 'react';
import Sidebar from '../../components/Sidebar';

const FacultyProfile = () => {
    // Example data (could be fetched from an API)
    const [facultyData, setFacultyData] = useState({
        name: 'Dr. John Smith',
        email: 'john.smith@university.com',
        department: 'Mathematics',
        phone: '123-456-7890',
        office: 'Building A, Room 101',
        courses: [
            { name: 'Mathematics 101', students: 35, grade: 'A+' },
            { name: 'Physics 201', students: 40, grade: 'B+' },
            { name: 'Computer Science 301', students: 30, grade: 'A' },
        ],
        attendance: [
            { course: 'Mathematics 101', attendanceRate: '98%' },
            { course: 'Physics 201', attendanceRate: '92%' },
            { course: 'Computer Science 301', attendanceRate: '96%' },
        ],
    });

    useEffect(() => {
        // Fetch faculty data here from an API or database
        // setFacultyData(response.data);
    }, []);

    return (
        <div className="flex">
            <Sidebar role="faculty" />
            <div className="flex-grow p-6">
                <h1 className="text-3xl font-bold mb-4">Faculty Profile</h1>

                {/* Profile Overview */}
                <div className="mb-6">
                    <h2 className="text-2xl font-bold mb-2">Personal Information</h2>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="p-4 bg-white shadow rounded">
                            <p className="font-semibold">Name:</p>
                            <p>{facultyData.name}</p>
                        </div>
                        <div className="p-4 bg-white shadow rounded">
                            <p className="font-semibold">Email:</p>
                            <p>{facultyData.email}</p>
                        </div>
                        <div className="p-4 bg-white shadow rounded">
                            <p className="font-semibold">Phone:</p>
                            <p>{facultyData.phone}</p>
                        </div>
                        <div className="p-4 bg-white shadow rounded">
                            <p className="font-semibold">Office:</p>
                            <p>{facultyData.office}</p>
                        </div>
                    </div>
                </div>

                {/* Department Information */}
                <div className="mb-6">
                    <h2 className="text-2xl font-bold mb-2">Department</h2>
                    <div className="p-4 bg-white shadow rounded">
                        <p>{facultyData.department}</p>
                    </div>
                </div>

                {/* Courses Faculty is Teaching */}
                <div className="mb-6">
                    <h2 className="text-2xl font-bold mb-4">Courses</h2>
                    <div className="overflow-x-auto">
                        <table className="table-auto w-full bg-white shadow rounded">
                            <thead>
                                <tr className="bg-gray-200">
                                    <th className="px-4 py-2 text-left">Course Name</th>
                                    <th className="px-4 py-2 text-left">Students</th>
                                    <th className="px-4 py-2 text-left">Grade</th>
                                </tr>
                            </thead>
                            <tbody>
                                {facultyData.courses.map((course, index) => (
                                    <tr key={index}>
                                        <td className="border px-4 py-2">{course.name}</td>
                                        <td className="border px-4 py-2">{course.students}</td>
                                        <td className="border px-4 py-2">{course.grade}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Attendance Records */}
                <div className="mb-6">
                    <h2 className="text-2xl font-bold mb-4">Attendance Records</h2>
                    <div className="overflow-x-auto">
                        <table className="table-auto w-full bg-white shadow rounded">
                            <thead>
                                <tr className="bg-gray-200">
                                    <th className="px-4 py-2 text-left">Course Name</th>
                                    <th className="px-4 py-2 text-left">Attendance Rate</th>
                                </tr>
                            </thead>
                            <tbody>
                                {facultyData.attendance.map((record, index) => (
                                    <tr key={index}>
                                        <td className="border px-4 py-2">{record.course}</td>
                                        <td className="border px-4 py-2">{record.attendanceRate}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Edit Profile Section */}
                <div className="mt-6">
                    <button className="bg-yellow-500 text-white px-4 py-2 rounded">Edit Profile</button>
                </div>
            </div>
        </div>
    );
};

export default FacultyProfile;
