import React from 'react';
import Sidebar from '../../components/Sidebar';

const AdminDashboard = () => {
    return (
        <div className="flex">
            <Sidebar role="admin" />
            <div className="flex-grow p-6">
                <h1 className="text-3xl font-bold mb-4">Admin Dashboard</h1>
                <div className="grid grid-cols-3 gap-4">
                    <div className="p-4 bg-green-500 text-white rounded shadow">
                        <h2 className="text-xl font-bold">Total Students</h2>
                        <p>150</p>
                    </div>
                    <div className="p-4 bg-blue-500 text-white rounded shadow">
                        <h2 className="text-xl font-bold">Total Faculty</h2>
                        <p>25</p>
                    </div>
                    <div className="p-4 bg-purple-500 text-white rounded shadow">
                        <h2 className="text-xl font-bold">Courses Offered</h2>
                        <p>30</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;
