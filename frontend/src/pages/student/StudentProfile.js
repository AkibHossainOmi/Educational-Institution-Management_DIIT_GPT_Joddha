import React, { useState, useEffect } from 'react';
import Sidebar from '../../components/Sidebar';
import axios from 'axios';

const StudentProfile = () => {
    const [studentData, setStudentData] = useState({
        name: '',
        email: '',
        phone: '',
        address: '',
    });
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    // Fetch current student data (dummy data for now)
    useEffect(() => {
        const fetchStudentData = async () => {
            try {
                // Simulate fetching the student's current profile data (replace this with an API call)
                const dummyData = {
                    name: 'John Doe',
                    email: 'john.doe@example.com',
                    phone: '123-456-7890',
                    address: '123 Main St, City, Country',
                };
                setStudentData(dummyData);
                setLoading(false);
            } catch (err) {
                setError('Failed to fetch student data.');
                setLoading(false);
            }
        };

        fetchStudentData();
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setStudentData({
            ...studentData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            // Simulate API call to update student data
            // Replace this with a real API call
            await axios.post('/api/student/update-profile', studentData);
            setSuccess('Profile updated successfully!');
            setError('');
        } catch (err) {
            setError('Failed to update profile.');
        }
        setLoading(false);
    };

    if (loading) {
        return (
            <div className="flex items-center justify-center h-screen">
                <p className="text-lg font-bold">Loading profile...</p>
            </div>
        );
    }

    return (
        <div className="flex">
            <Sidebar role="student" />
            <div className="flex-grow p-6">
                <h1 className="text-3xl font-bold mb-6">My Profile</h1>
                
                {success && <div className="text-green-500 mb-4">{success}</div>}
                {error && <div className="text-red-500 mb-4">{error}</div>}

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label className="block text-gray-700 font-semibold">Name</label>
                        <input
                            type="text"
                            name="name"
                            value={studentData.name}
                            onChange={handleChange}
                            className="w-full p-3 border rounded-md"
                        />
                    </div>

                    <div>
                        <label className="block text-gray-700 font-semibold">Email</label>
                        <input
                            type="email"
                            name="email"
                            value={studentData.email}
                            onChange={handleChange}
                            className="w-full p-3 border rounded-md"
                            disabled
                        />
                    </div>

                    <div>
                        <label className="block text-gray-700 font-semibold">Phone</label>
                        <input
                            type="text"
                            name="phone"
                            value={studentData.phone}
                            onChange={handleChange}
                            className="w-full p-3 border rounded-md"
                        />
                    </div>

                    <div>
                        <label className="block text-gray-700 font-semibold">Address</label>
                        <input
                            type="text"
                            name="address"
                            value={studentData.address}
                            onChange={handleChange}
                            className="w-full p-3 border rounded-md"
                        />
                    </div>

                    <div className="flex justify-end">
                        <button
                            type="submit"
                            className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                        >
                            Update Profile
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default StudentProfile;
