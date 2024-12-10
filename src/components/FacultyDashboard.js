import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/FacultyDashboard.css';

function FacultyDashboard() {
    return (
        <div className="faculty-dashboard container mt-5">
            <h1 className="text-center mb-4">Faculty Dashboard</h1>

            <div className="row g-4">
                {/* Manage Courses */}
                <div className="col-md-4">
                    <div className="card shadow-sm">
                        <div className="card-body text-center">
                            <Link to="/manage-courses" className="dashboard-link">
                                Manage Courses
                            </Link>
                        </div>
                    </div>
                </div>

               

                {/* Set Schedules */}
                <div className="col-md-4">
                    <div className="card shadow-sm">
                        <div className="card-body text-center">
                            <Link to="/manage-schedules" className="dashboard-link">
                                Set Schedules
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row g-4 mt-4">
                {/* Mark Attendance */}
                <div className="col-md-6">
                    <div className="card shadow-sm">
                        <div className="card-body text-center">
                            <Link to="/mark-attendance" className="dashboard-link">
                                Mark Attendance
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Enter Grades */}
                <div className="col-md-6">
                    <div className="card shadow-sm">
                        <div className="card-body text-center">
                            <Link to="/manage-grades" className="dashboard-link">
                                Enter Grades
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FacultyDashboard;