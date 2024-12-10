import React from 'react';
import Sidebar from '../../components/Sidebar';

const StudentDashboard = () => {
    return (
        <div className="flex">
            <Sidebar role="student" />
            <div className="flex-grow p-6">
                <h1 className="text-3xl font-bold mb-4">Student Dashboard</h1>
                <div className="grid grid-cols-3 gap-4">
                    {/* Enrolled Courses */}
                    <div className="p-4 bg-green-500 text-white rounded shadow">
                        <h2 className="text-xl font-bold">Enrolled Courses</h2>
                        <p>5</p>
                    </div>
                    {/* Attendance */}
                    <div className="p-4 bg-blue-500 text-white rounded shadow">
                        <h2 className="text-xl font-bold">Attendance</h2>
                        <p>95%</p>
                    </div>
                    {/* Grades */}
                    <div className="p-4 bg-purple-500 text-white rounded shadow">
                        <h2 className="text-xl font-bold">Average Grades</h2>
                        <p>A</p>
                    </div>
                </div>

                {/* Detailed Section */}
                <div className="mt-6">
                    <h2 className="text-2xl font-bold mb-4">Course Details</h2>
                    <div className="overflow-x-auto">
                        <table className="table-auto w-full bg-white shadow rounded">
                            <thead>
                                <tr className="bg-gray-200">
                                    <th className="px-4 py-2 text-left">Course Name</th>
                                    <th className="px-4 py-2 text-left">Faculty</th>
                                    <th className="px-4 py-2 text-left">Grade</th>
                                    <th className="px-4 py-2 text-left">Attendance</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="border px-4 py-2">Mathematics 101</td>
                                    <td className="border px-4 py-2">Dr. Smith</td>
                                    <td className="border px-4 py-2">A+</td>
                                    <td className="border px-4 py-2">98%</td>
                                </tr>
                                <tr>
                                    <td className="border px-4 py-2">Physics 201</td>
                                    <td className="border px-4 py-2">Prof. Johnson</td>
                                    <td className="border px-4 py-2">B+</td>
                                    <td className="border px-4 py-2">92%</td>
                                </tr>
                                <tr>
                                    <td className="border px-4 py-2">Computer Science 301</td>
                                    <td className="border px-4 py-2">Ms. Taylor</td>
                                    <td className="border px-4 py-2">A</td>
                                    <td className="border px-4 py-2">96%</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StudentDashboard;
