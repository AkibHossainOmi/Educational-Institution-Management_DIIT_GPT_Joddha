import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import { AuthProvider, useAuth } from "./pages/auth/AuthContext";
import ProtectedRoute from "./pages/auth/ProtectedRoute";

import AdminDashboard from "./pages/admin/AdminDashboard";
import FacultyDashboard from "./pages/faculty/FacultyDashboard";
import StudentDashboard from "./pages/student/StudentDashboard";
import Login from "./pages/auth/Login";
import SignUp from "./pages/auth/SignUp";

import ManageUsers from "./pages/admin/ManageUsers";
import ManageCourses from "./pages/admin/ManageCourses";
import ManageStudent from "./pages/admin/ManageStudents";
import ManageFaculty from "./pages/admin/ManageFaculty";

import StudentCourses from "./pages/student/StudentCourses";
import StudentGrades from "./pages/student/StudentGrades";
import StudentEnrollCourses from "./pages/student/StudentEnrollCourses";
import StudentSchedule from "./pages/student/StudentSchedule";
import StudentAttendance from "./pages/student/StudentAttendance";
import StudentProfile from "./pages/student/StudentProfile";

import CourseMaterials from "./pages/student/CourseMaterials";
import FacultyProfile from "./pages/faculty/FacultyProfile";

const App = () => {
  return (
      <AuthProvider>
        <Router>
          <div>
            <Navbar />
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<SignUp />} />

              {/* Admin Routes */}
              <Route
                  path="/admin/*"
                  element={
                    <ProtectedRoute allowedRoles={["admin"]}>
                      <Routes>
                        <Route path="dashboard" element={<AdminDashboard />} />
                        <Route path="users" element={<ManageUsers />} />
                        <Route path="courses" element={<ManageCourses />} />
                        <Route path="manage-students" element={<ManageStudent />} />
                        <Route path="manage-faculty" element={<ManageFaculty />} />
                      </Routes>
                    </ProtectedRoute>
                  }
              />

              {/* Student Routes */}
              <Route
                  path="/student/*"
                  element={
                    <ProtectedRoute allowedRoles={["student"]}>
                      <Routes>
                        <Route path="dashboard" element={<StudentDashboard />} />
                        <Route path="courses" element={<StudentCourses />} />
                        <Route path="grades" element={<StudentGrades />} />
                        <Route path="enroll" element={<StudentEnrollCourses />} />
                        <Route path="schedule" element={<StudentSchedule />} />
                        <Route path="attendance" element={<StudentAttendance />} />
                        <Route path="profile" element={<StudentProfile />} />
                      </Routes>
                    </ProtectedRoute>
                  }
              />

              {/* Faculty Routes */}
              <Route
                  path="/faculty/*"
                  element={
                    <ProtectedRoute allowedRoles={["faculty"]}>
                      <Routes>
                        <Route path="dashboard" element={<FacultyDashboard />} />
                        <Route path="profile" element={<FacultyProfile />} />
                        <Route path="course-materials" element={<CourseMaterials />} />
                      </Routes>
                    </ProtectedRoute>
                  }
              />
            </Routes>
          </div>
        </Router>
      </AuthProvider>
  );
};

export default App;
