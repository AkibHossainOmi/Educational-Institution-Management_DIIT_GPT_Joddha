import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/AdminDashboard.css';

function AdminDashboard() {
    return (
        <div className="admin-dashboard container mt-5">
            <h1 className="text-center mb-4">Admin Dashboard</h1>

            <div className="row">
                {/* User Management */}
                <div className="col-md-4">
                    <div className="card shadow-sm mb-4">
                        <div className="card-body text-center">
                            <Link to="/manage-users" className="dashboard-link">
                                User Management
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Course Management */}
                <div className="col-md-4">
                    <div className="card shadow-sm mb-4">
                        <div className="card-body text-center">
                            <Link to="/manage-courses" className="dashboard-link">
                                Course Management
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Schedule Management */}
                <div className="col-md-4">
                    <div className="card shadow-sm mb-4">
                        <div className="card-body text-center">
                            <Link to="/manage-schedules" className="dashboard-link">
                                Schedule Management
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row">
                {/* Attendance Management */}
                <div className="col-md-6">
                    <div className="card shadow-sm mb-4">
                        <div className="card-body text-center">
                            <Link to="/manage-attendance" className="dashboard-link">
                                Attendance Management
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Grade Management */}
                <div className="col-md-6">
                    <div className="card shadow-sm mb-4">
                        <div className="card-body text-center">
                            <Link to="/manage-grades" className="dashboard-link">
                                Grade Management
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AdminDashboard;
