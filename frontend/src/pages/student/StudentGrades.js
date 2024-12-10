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
                        semester: 1,  // 1st Semester
                    },
                    {
                        courseName: "Data Structures and Algorithms",
                        grade: "A-",
                        credits: 4,
                        facultyName: "Jane Smith",
                        semester: 1,  // 1st Semester
                    },
                    {
                        courseName: "Database Management Systems",
                        grade: "B+",
                        credits: 3,
                        facultyName: "Michael Brown",
                        semester: 2,  // 2nd Semester
                    },
                    {
                        courseName: "Web Development",
                        grade: "A",
                        credits: 3,
                        facultyName: "Emily Davis",
                        semester: 2,  // 2nd Semester
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

    // Group grades by semester
    const groupBySemester = (grades) => {
        return grades.reduce((acc, grade) => {
            const semesterKey = `${grade.semester}st Semester`;  // Format as "1st Semester", "2nd Semester"
            if (!acc[semesterKey]) {
                acc[semesterKey] = [];
            }
            acc[semesterKey].push(grade);
            return acc;
        }, {});
    };

    const groupedGrades = groupBySemester(grades);

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
                {Object.keys(groupedGrades).map((semester) => (
                    <div key={semester} className="mb-8">
                        <h2 className="text-2xl font-semibold text-blue-600 mb-4">{semester}</h2>
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
                                {groupedGrades[semester].map((grade, index) => (
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
                ))}
            </div>
        </div>
    );
};

export default StudentGrades;
