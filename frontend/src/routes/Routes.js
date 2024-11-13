import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from '../components/Login';
import LandingPage from '../pages/LandingPage';
import ForgotPassword from '../components/ForgotPassword';
import Dashboard from '../components/Dashboard'; // Assume a Dashboard component exists
import Students from '../components/Students';
import Attendance from '../components/Attendance';

const AppRoutes = () => (
    <Router>
        <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/attendance/:courseId" element={<Attendance />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/students" element={<Students />} />
            <Route path="/attendance" element={<Attendance />} />
            {/* <Route path="/" element={<Login />} /> 
             Add other routes for courses, exams, etc. */}
        </Routes>
    </Router>
);

export default AppRoutes;