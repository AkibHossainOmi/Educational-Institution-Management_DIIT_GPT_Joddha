import React from 'react';
import Sidebar from '../../components/Sidebar';

const FacultyDashboard = () => {
    return (
        <div className="flex">
            <Sidebar role="faculty" />
            <div className="flex-grow p-6">
                <h1 className="text-3xl font-bold mb-4">Faculty Dashboard</h1>
                <div className="grid grid-cols-3 gap-4">
                    {/* Teaching Courses */}
                    <div className="p-4 bg-green-500 text-white rounded shadow">
                        <h2 className="text-xl font-bold">Teaching Courses</h2>
                        <p>3</p>
                    </div>
                    {/* Attendance Stats */}
                    <div className="p-4 bg-blue-500 text-white rounded shadow">
                        <h2 className="text-xl font-bold">Attendance Stats</h2>
                        <p>98%</p>
                    </div>
                    {/* Grade Summary */}
                    <div className="p-4 bg-purple-500 text-white rounded shadow">
                        <h2 className="text-xl font-bold">Average Grades</h2>
                        <p>A-</p>
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
                                    <th className="px-4 py-2 text-left">Student Count</th>
                                    <th className="px-4 py-2 text-left">Attendance</th>
                                    <th className="px-4 py-2 text-left">Average Grade</th>
                                    <th className="px-4 py-2 text-left">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="border px-4 py-2">Mathematics 101</td>
                                    <td className="border px-4 py-2">35</td>
                                    <td className="border px-4 py-2">98%</td>
                                    <td className="border px-4 py-2">A+</td>
                                    <td className="border px-4 py-2">
                                        <button className="text-blue-500">View</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="border px-4 py-2">Physics 201</td>
                                    <td className="border px-4 py-2">40</td>
                                    <td className="border px-4 py-2">92%</td>
                                    <td className="border px-4 py-2">B+</td>
                                    <td className="border px-4 py-2">
                                        <button className="text-blue-500">View</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="border px-4 py-2">Computer Science 301</td>
                                    <td className="border px-4 py-2">30</td>
                                    <td className="border px-4 py-2">96%</td>
                                    <td className="border px-4 py-2">A</td>
                                    <td className="border px-4 py-2">
                                        <button className="text-blue-500">View</button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Upload Materials Section */}
                <div className="mt-6">
                    <h2 className="text-2xl font-bold mb-4">Upload Course Materials</h2>
                    <button className="bg-green-500 text-white px-4 py-2 rounded">Upload New Material</button>
                </div>
            </div>
        </div>
    );
};

export default FacultyDashboard;