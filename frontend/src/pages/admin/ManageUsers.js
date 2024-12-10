import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ManageUsers = () => {
    const [users, setUsers] = useState([]);
    const [newUser, setNewUser] = useState({ name: '', email: '', role: 'student' });

    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = async () => {
        try {
            const response = await axios.get('/api/users');
            setUsers(response.data);
        } catch (error) {
            console.error('Error fetching users:', error);
        }
    };

    const addUser = async () => {
        try {
            await axios.post('/api/users', newUser);
            fetchUsers();
            setNewUser({ name: '', email: '', role: 'student' });
        } catch (error) {
            console.error('Error adding user:', error);
        }
    };

    const deleteUser = async (id) => {
        try {
            await axios.delete(`/api/users/${id}`);
            fetchUsers();
        } catch (error) {
            console.error('Error deleting user:', error);
        }
    };

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">Manage Users</h1>

            <div className="mb-6">
                <input
                    type="text"
                    placeholder="Name"
                    value={newUser.name}
                    onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
                    className="border p-2 mr-2"
                />
                <input
                    type="email"
                    placeholder="Email"
                    value={newUser.email}
                    onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
                    className="border p-2 mr-2"
                />
                <select
                    value={newUser.role}
                    onChange={(e) => setNewUser({ ...newUser, role: e.target.value })}
                    className="border p-2 mr-2"
                >
                    <option value="student">Student</option>
                    <option value="faculty">Faculty</option>
                </select>
                <button onClick={addUser} className="bg-blue-500 text-white p-2 rounded">
                    Add User
                </button>
            </div>

            <table className="w-full border">
                <thead>
                <tr className="bg-gray-200">
                    <th className="border px-4 py-2">Name</th>
                    <th className="border px-4 py-2">Email</th>
                    <th className="border px-4 py-2">Role</th>
                    <th className="border px-4 py-2">Actions</th>
                </tr>
                </thead>
                <tbody>
                {users.map((user) => (
                    <tr key={user.id}>
                        <td className="border px-4 py-2">{user.name}</td>
                        <td className="border px-4 py-2">{user.email}</td>
                        <td className="border px-4 py-2">{user.role}</td>
                        <td className="border px-4 py-2">
                            <button
                                onClick={() => deleteUser(user.id)}
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
    );
};

export default ManageUsers;
