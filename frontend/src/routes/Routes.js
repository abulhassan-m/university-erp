import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from '../components/Login';
import Attendance from '../pages/Attendance';
import LandingPage from '../pages/LandingPage';
import ForgotPassword from '../components/ForgotPassword';
import Dashboard from '../components/Dashboard'; // Assume a Dashboard component exists

const AppRoutes = () => (
    <Router>
        <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/attendance/:courseId" element={<Attendance />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/dashboard" element={<Dashboard />} />
            {/* <Route path="/" element={<Login />} /> 
             Add other routes for courses, exams, etc. */}
        </Routes>
    </Router>
);

export default AppRoutes;

