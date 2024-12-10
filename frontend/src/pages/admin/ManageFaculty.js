// ManageFaculty.js
import React, { useState } from 'react';
import Sidebar from '../../components/Sidebar';

const dummyFaculty = [
    { id: 1, name: 'Dr. James Smith', email: 'james.smith@example.com' },
    { id: 2, name: 'Prof. Sarah White', email: 'sarah.white@example.com' },
];

const ManageFaculty = () => {
    const [faculty, setFaculty] = useState(dummyFaculty);
    const [newFaculty, setNewFaculty] = useState({ name: '', email: '' });

    const addFaculty = () => {
        const id = faculty.length + 1; // Generate new ID
        const updatedFaculty = [...faculty, { id, ...newFaculty }];
        setFaculty(updatedFaculty);
        setNewFaculty({ name: '', email: '' });
    };

    const deleteFaculty = (id) => {
        const updatedFaculty = faculty.filter((facultyMember) => facultyMember.id !== id);
        setFaculty(updatedFaculty);
    };

    return (
        <div className="flex">
            <Sidebar role="admin" />
            <div className="p-6 flex-1">
                <h1 className="text-2xl font-bold mb-4">Manage Faculty</h1>
                {/* Add Faculty */}
                <div className="mb-6">
                    <h2 className="text-xl font-semibold">Add Faculty</h2>
                    <input
                        type="text"
                        placeholder="Name"
                        value={newFaculty.name}
                        onChange={(e) => setNewFaculty({ ...newFaculty, name: e.target.value })}
                        className="border p-2 mr-2"
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        value={newFaculty.email}
                        onChange={(e) => setNewFaculty({ ...newFaculty, email: e.target.value })}
                        className="border p-2 mr-2"
                    />
                    <button onClick={addFaculty} className="bg-blue-500 text-white p-2 rounded">
                        Add Faculty
                    </button>
                </div>

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

export default ManageFaculty;
