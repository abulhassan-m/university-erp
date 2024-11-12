import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from '../pages/Login';
import Attendance from '../pages/Attendance';
import LandingPage from '../pages/LandingPage';

const AppRoutes = () => (
    <Router>
        <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/attendance/:courseId" element={<Attendance />} />
            {/* Add other routes for courses, exams, etc. */}
        </Routes>
    </Router>
);

export default AppRoutes;
