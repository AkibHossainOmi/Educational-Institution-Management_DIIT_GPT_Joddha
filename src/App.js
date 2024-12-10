import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import AdminDashboard from './components/AdminDashboard';
import FacultyDashboard from './components/FacultyDashboard';
import StudentDashboard from './components/StudentDashboard';
import Login from './components/Login';
import Signup from './components/Signup';

// Import pages for Admin Dashboard features
import ManageUsers from './pages/ManageUsers';
import ManageCourses from './pages/ManageCourses';
import ManageSchedules from './pages/ManageSchedules';
import ManageAttendance from './pages/ManageAttendance';
import ManageGrades from './pages/ManageGrades';

// Import pages for Faculty Dashboard features
import FacultyCourses from './pages/FacultyCourses';
import UploadMaterials from './pages/UploadMaterials';
import SetSchedules from './pages/SetSchedules';
import MarkAttendance from './pages/MarkAttendance';
import EnterGrades from './pages/EnterGrades';

function App() {
    return (
        <Router>
            <Routes>
                {/* General Routes */}
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />

                {/* Admin Dashboard */}
                <Route path="/admin-dashboard" element={<AdminDashboard />} />
                <Route path="/manage-users" element={<ManageUsers />} />
                <Route path="/manage-courses" element={<ManageCourses />} />
                <Route path="/manage-schedules" element={<ManageSchedules />} />
                <Route path="/manage-attendance" element={<ManageAttendance />} />
                <Route path="/manage-grades" element={<ManageGrades />} />

                {/* Faculty Dashboard */}
                <Route path="/faculty-dashboard" element={<FacultyDashboard />} />
                <Route path="/faculty-courses" element={<FacultyCourses />} />
                <Route path="/upload-materials" element={<UploadMaterials />} />
                <Route path="/set-schedules" element={<SetSchedules />} />
                <Route path="/mark-attendance" element={<MarkAttendance />} />
                <Route path="/enter-grades" element={<EnterGrades />} />

                {/* Student Dashboard */}
                <Route path="/student-dashboard" element={<StudentDashboard />} />
            </Routes>
        </Router>
    );
}

export default App;
