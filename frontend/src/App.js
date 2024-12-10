import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import AdminDashboard from './pages/admin/AdminDashboard';
import FacultyDashboard from './pages/FacultyDashboard';
import StudentDashboard from './pages/student/StudentDashboard';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import ManageUsers from "./pages/admin/ManageUsers";
import ManageCourses from "./pages/admin/ManageCourses";
import StudentCourses from './pages/student/StudentCourses';
import StudentGrades from './pages/student/StudentGrades';
import StudentEnrollCourses from './pages/student/StudentEnrollCourses';
import StudentSchedule from './pages/student/StudentSchedule';
import StudentAttendance from './pages/student/StudentAttendance';

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
              <Route path="/student/courses" element={<StudentCourses />} />
              <Route path="/student/grades" element={<StudentGrades />} />
              <Route path="/student/enroll" element={<StudentEnrollCourses />} />
              <Route path="/student/schedule" element={<StudentSchedule />} /> 
              <Route path="/student/attendance" element={<StudentAttendance />} />
          </Routes>
        </div>
      </Router>
  );
}

export default App;
