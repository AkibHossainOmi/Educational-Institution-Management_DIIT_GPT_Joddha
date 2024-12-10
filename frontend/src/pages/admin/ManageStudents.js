// ManageStudents.js
import React, { useState } from 'react';
import Sidebar from '../../components/Sidebar';

const dummyStudents = [
    { id: 1, name: 'John Doe', email: 'john.doe@example.com' },
    { id: 2, name: 'Alice Johnson', email: 'alice.johnson@example.com' },
];

const ManageStudents = () => {
    const [students, setStudents] = useState(dummyStudents);
    const [newStudent, setNewStudent] = useState({ name: '', email: '' });

    const addStudent = () => {
        const id = students.length + 1; // Generate new ID
        const updatedStudents = [...students, { id, ...newStudent }];
        setStudents(updatedStudents);
        setNewStudent({ name: '', email: '' });
    };

    const deleteStudent = (id) => {
        const updatedStudents = students.filter((student) => student.id !== id);
        setStudents(updatedStudents);
    };

    return (
        <div className="flex">
            <Sidebar role="admin" />
            <div className="p-6 flex-1">
                <h1 className="text-2xl font-bold mb-4">Manage Students</h1>
                {/* Add Student */}
                <div className="mb-6">
                    <h2 className="text-xl font-semibold">Add Student</h2>
                    <input
                        type="text"
                        placeholder="Name"
                        value={newStudent.name}
                        onChange={(e) => setNewStudent({ ...newStudent, name: e.target.value })}
                        className="border p-2 mr-2"
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        value={newStudent.email}
                        onChange={(e) => setNewStudent({ ...newStudent, email: e.target.value })}
                        className="border p-2 mr-2"
                    />
                    <button onClick={addStudent} className="bg-blue-500 text-white p-2 rounded">
                        Add Student
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
            </div>
        </div>
    );
};

export default ManageStudents;
