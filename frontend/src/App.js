import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import AdminDashboard from './pages/admin/AdminDashboard';
import FacultyDashboard from './pages/faculty/FacultyDashboard';
import StudentDashboard from './pages/student/StudentDashboard';
import Login from './pages/auth/Login';
import SignUp from './pages/auth/SignUp';
import ManageUsers from "./pages/admin/ManageUsers";
import ManageCourses from "./pages/admin/ManageCourses";
import ManageStudent from "./pages/admin/ManageStudents";
import ManageFaculty from "./pages/admin/ManageFaculty";
import StudentCourses from './pages/student/StudentCourses';
import StudentGrades from './pages/student/StudentGrades';
import StudentEnrollCourses from './pages/student/StudentEnrollCourses';
import StudentSchedule from './pages/student/StudentSchedule';
import StudentAttendance from './pages/student/StudentAttendance';
import StudentProfile from './pages/student/StudentProfile';
import CourseMaterials from './pages/student/CourseMaterials';
import FacultyProfile from './pages/faculty/FacultyProfile';

function App() {
  return (
      <Router>
        <div>
          <Navbar />
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/admin/dashboard" element={<AdminDashboard />} />
            <Route path="/faculty/dashboard" element={<FacultyDashboard />} />
            <Route path="/student/dashboard" element={<StudentDashboard />} />
              <Route path="/admin/users" element={<ManageUsers />} />
              <Route path="/admin/courses" element={<ManageCourses />} />
              <Route path="/admin/manage-students" element={<ManageStudent />} />
              <Route path="/admin/manage-faculty" element={<ManageFaculty />} />
              <Route path="/student/courses" element={<StudentCourses />} />
              <Route path="/student/grades" element={<StudentGrades />} />
              <Route path="/student/enroll" element={<StudentEnrollCourses />} />
              <Route path="/student/schedule" element={<StudentSchedule />} /> 
              <Route path="/student/attendance" element={<StudentAttendance />} />
              <Route path="/student/profile" element={<StudentProfile />} /> 
              <Route path="/student/course-materials" element={<CourseMaterials />} />
              <Route path="/faculty/profile" element={<FacultyProfile />} />

          </Routes>
        </div>
      </Router>
  );
}

export default App;
