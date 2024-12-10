import React, { useEffect, useState } from 'react';
import Sidebar from '../../components/Sidebar';

const StudentGrades = () => {
    const [grades, setGrades] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    // Fetch the student's grades (using dummy data)
    useEffect(() => {
        const fetchGrades = async () => {
            try {
                // Simulate an API call with dummy data
                const dummyGrades = [
                    {
                        courseName: "Introduction to Programming",
                        grade: "A",
                        credits: 3,
                        facultyName: "John Doe",
                    },
                    {
                        courseName: "Data Structures and Algorithms",
                        grade: "A-",
                        credits: 4,
                        facultyName: "Jane Smith",
                    },
                    {
                        courseName: "Database Management Systems",
                        grade: "B+",
                        credits: 3,
                        facultyName: "Michael Brown",
                    },
                    {
                        courseName: "Web Development",
                        grade: "A",
                        credits: 3,
                        facultyName: "Emily Davis",
                    },
                ];
                setGrades(dummyGrades);
                setLoading(false);
            } catch (err) {
                setError('Failed to fetch grades.');
                setLoading(false);
            }
        };
        fetchGrades();
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
                <h1 className="text-3xl font-bold mb-6">Grades</h1>
                <table className="table-auto w-full border-collapse border border-gray-300">
                    <thead>
                        <tr className="bg-gray-200">
                            <th className="border border-gray-300 px-4 py-2 text-left">Course Name</th>
                            <th className="border border-gray-300 px-4 py-2 text-left">Grade</th>
                            <th className="border border-gray-300 px-4 py-2 text-left">Credits</th>
                            <th className="border border-gray-300 px-4 py-2 text-left">Faculty</th>
                        </tr>
                    </thead>
                    <tbody>
                        {grades.map((grade, index) => (
                            <tr key={index} className="hover:bg-gray-100">
                                <td className="border border-gray-300 px-4 py-2">{grade.courseName}</td>
                                <td className="border border-gray-300 px-4 py-2">{grade.grade}</td>
                                <td className="border border-gray-300 px-4 py-2">{grade.credits}</td>
                                <td className="border border-gray-300 px-4 py-2">{grade.facultyName}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default StudentGrades;
