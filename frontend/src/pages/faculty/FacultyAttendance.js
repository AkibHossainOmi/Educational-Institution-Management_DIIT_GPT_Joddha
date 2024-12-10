import React, { useState } from 'react';
import Sidebar from '../../components/Sidebar';
import { useNavigate } from 'react-router-dom';

const FacultyAttendance = () => {
    const navigate = useNavigate();

    // Sample student data for each course
    const studentsList = {
        'Mathematics 101': [
            { id: 1, name: 'John Doe' },
            { id: 2, name: 'Emma Watson' },
            { id: 3, name: 'Michael Brown' },
        ],
        'Physics 201': [
            { id: 4, name: 'Alice Johnson' },
            { id: 5, name: 'Sam Wilson' },
            { id: 6, name: 'David Lee' },
        ],
        'Computer Science 301': [
            { id: 7, name: 'Samuel Lee' },
            { id: 8, name: 'Charlotte Davis' },
            { id: 9, name: 'James Smith' },
        ],
    };

    // Default course and attendance data
    const [selectedCourse, setSelectedCourse] = useState('');
    const [attendanceData, setAttendanceData] = useState([]);
    const [currentSession, setCurrentSession] = useState(''); // Store the date as a string in 'yyyy-mm-dd' format

    const handleCourseChange = (course) => {
        setSelectedCourse(course);
        const studentList = studentsList[course];
        const initialAttendance = studentList.map(student => ({
            ...student,
            attendance: 'Absent', // Default attendance is "Absent"
        }));
        setAttendanceData(initialAttendance);
    };

    const handleAttendanceChange = (index, status) => {
        const updatedAttendance = [...attendanceData];
        updatedAttendance[index].attendance = status;
        setAttendanceData(updatedAttendance);
    };

    const handleSave = () => {
        // Simulate saving the attendance for the session
        alert('Attendance for ' + currentSession + ' saved!');
    };

    return (
        <div className="flex">
            {/* Sidebar */}
            <Sidebar role="faculty" />

            {/* Main Content */}
            <div className="flex-grow p-6">
                <h1 className="text-3xl font-bold mb-4">Faculty Attendance</h1>

                {/* Course Selection */}
                <div className="mb-6">
                    <select
                        value={selectedCourse}
                        onChange={(e) => handleCourseChange(e.target.value)}
                        className="p-2 border rounded w-full"
                    >
                        <option value="">Select a Course</option>
                        <option value="Mathematics 101">Mathematics 101</option>
                        <option value="Physics 201">Physics 201</option>
                        <option value="Computer Science 301">Computer Science 301</option>
                    </select>
                </div>

                {/* Attendance Session Date with Native Date Picker */}
                {selectedCourse && (
                    <div className="mb-4">
                        <label className="text-sm text-gray-600">Class Session:</label>
                        <input
                            type="date"
                            value={currentSession}
                            onChange={(e) => setCurrentSession(e.target.value)}
                            className="p-2 border rounded mt-2 w-full"
                        />
                    </div>
                )}

                {/* Attendance Table */}
                {selectedCourse && attendanceData.length > 0 && (
                    <div className="overflow-x-auto">
                        <table className="table-auto w-full bg-white shadow rounded">
                            <thead>
                                <tr className="bg-gray-200">
                                    <th className="px-4 py-2 text-left">Student Name</th>
                                    <th className="px-4 py-2 text-left">Attendance</th>
                                </tr>
                            </thead>
                            <tbody>
                                {attendanceData.map((student, index) => (
                                    <tr key={student.id}>
                                        <td className="border px-4 py-2">{student.name}</td>
                                        <td className="border px-4 py-2">
                                            <select
                                                value={student.attendance}
                                                onChange={(e) => handleAttendanceChange(index, e.target.value)}
                                                className="p-1 border rounded"
                                            >
                                                <option value="Present">Present</option>
                                                <option value="Absent">Absent</option>
                                                <option value="Late">Late</option>
                                            </select>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}

                {/* Save Button */}
                <div className="mt-6">
                    <button
                        onClick={handleSave}
                        className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                    >
                        Save Attendance
                    </button>
                </div>
            </div>
        </div>
    );
};

export default FacultyAttendance;
