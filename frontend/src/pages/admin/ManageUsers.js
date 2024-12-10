import React, { useState } from 'react';
import Sidebar from '../../components/Sidebar'; // Adjust the path based on your file structure

const dummyStudents = [
    { id: 1, name: 'John Doe', email: 'john.doe@example.com' },
    { id: 2, name: 'Alice Johnson', email: 'alice.johnson@example.com' },
];

const dummyFaculty = [
    { id: 1, name: 'Dr. James Smith', email: 'james.smith@example.com' },
    { id: 2, name: 'Prof. Sarah White', email: 'sarah.white@example.com' },
];

const dummyCourses = [
    { id: 1, name: 'Mathematics 101', description: 'Basic Mathematics', credits: 3 },
    { id: 2, name: 'Physics 201', description: 'Intermediate Physics', credits: 4 },
];

const ManageUsers = () => {
    const [students, setStudents] = useState(dummyStudents);
    const [faculty, setFaculty] = useState(dummyFaculty);
    const [courses, setCourses] = useState(dummyCourses);
    const [newStudent, setNewStudent] = useState({ name: '', email: '' });
    const [newFaculty, setNewFaculty] = useState({ name: '', email: '' });
    const [facultyAssignment, setFacultyAssignment] = useState({ facultyId: '', courseId: '' });



    const deleteStudent = (id) => {
        const updatedStudents = students.filter((student) => student.id !== id);
        setStudents(updatedStudents);
    };

    const deleteFaculty = (id) => {
        const updatedFaculty = faculty.filter((facultyMember) => facultyMember.id !== id);
        setFaculty(updatedFaculty);
    };

    const assignFacultyToCourse = () => {
        // Handle assigning faculty to a course (dummy logic)
        alert(`Assigned Faculty ${facultyAssignment.facultyId} to Course ${facultyAssignment.courseId}`);
        setFacultyAssignment({ facultyId: '', courseId: '' });
    };

    return (
        <div className="flex">
            <Sidebar role="admin" />
            <div className="p-6 flex-1">
                <h1 className="text-2xl font-bold mb-4">Manage Users</h1>



                {/* Faculty Assignment */}
                <div className="mb-6">
                    <h2 className="text-xl font-semibold">Assign Faculty to Course</h2>
                    <select
                        value={facultyAssignment.facultyId}
                        onChange={(e) => setFacultyAssignment({ ...facultyAssignment, facultyId: e.target.value })}
                        className="border p-2 mr-2"
                    >
                        <option value="">Select Faculty</option>
                        {faculty.map((facultyMember) => (
                            <option key={facultyMember.id} value={facultyMember.id}>
                                {facultyMember.name}
                            </option>
                        ))}
                    </select>
                    <select
                        value={facultyAssignment.courseId}
                        onChange={(e) => setFacultyAssignment({ ...facultyAssignment, courseId: e.target.value })}
                        className="border p-2 mr-2"
                    >
                        <option value="">Select Course</option>
                        {courses.map((course) => (
                            <option key={course.id} value={course.id}>
                                {course.name}
                            </option>
                        ))}
                    </select>
                    <button
                        onClick={assignFacultyToCourse}
                        className="bg-blue-500 text-white p-2 rounded"
                    >
                        Assign Faculty
                    </button>
                </div>

                {/* Students List */}
                <h2 className="text-xl font-semibold mb-4">Students</h2>
                <table className="w-full border mb-6">
                    <thead>
                    <tr className="bg-gray-200">
                        <th className="border px-4 py-2">Name</th>
                        <th className="border px-4 py-2">Email</th>
                        <th className="border px-4 py-2">Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    {students.map((student) => (
                        <tr key={student.id}>
                            <td className="border px-4 py-2">{student.name}</td>
                            <td className="border px-4 py-2">{student.email}</td>
                            <td className="border px-4 py-2">
                                <button
                                    onClick={() => deleteStudent(student.id)}
                                    className="bg-red-500 text-white p-2 rounded"
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>

                {/* Faculty List */}
                <h2 className="text-xl font-semibold mb-4">Faculty</h2>
                <table className="w-full border">
                    <thead>
                    <tr className="bg-gray-200">
                        <th className="border px-4 py-2">Name</th>
                        <th className="border px-4 py-2">Email</th>
                        <th className="border px-4 py-2">Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    {faculty.map((facultyMember) => (
                        <tr key={facultyMember.id}>
                            <td className="border px-4 py-2">{facultyMember.name}</td>
                            <td className="border px-4 py-2">{facultyMember.email}</td>
                            <td className="border px-4 py-2">
                                <button
                                    onClick={() => deleteFaculty(facultyMember.id)}
                                    className="bg-red-500 text-white p-2 rounded"
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageUsers;
