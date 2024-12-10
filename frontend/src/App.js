import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import AdminDashboard from './pages/admin/AdminDashboard';
import FacultyDashboard from './pages/FacultyDashboard';
import StudentDashboard from './pages/StudentDashboard';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import ManageUsers from "./pages/admin/ManageUsers";
import ManageCourses from "./pages/admin/ManageCourses";

function App() {
  return (
      <Router>
        <div>
          <Navbar />
          <Routes>
            <Route path="/" element={<AdminDashboard />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/admin/dashboard" element={<AdminDashboard />} />
            <Route path="/faculty/dashboard" element={<FacultyDashboard />} />
            <Route path="/student/dashboard" element={<StudentDashboard />} />
              <Route path="/admin/users" element={<ManageUsers />} />
              <Route path="/admin/courses" element={<ManageCourses />} />
          </Routes>
        </div>
      </Router>
  );
}

export default App;
