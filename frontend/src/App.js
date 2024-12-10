import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import AdminDashboard from './pages/AdminDashboard';
import FacultyDashboard from './pages/FacultyDashboard';
import StudentDashboard from './pages/StudentDashboard';
import Login from './pages/Login';
import SignUp from './pages/SignUp';

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
          </Routes>
        </div>
      </Router>
  );
}

export default App;
