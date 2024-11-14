import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from '../components/Login';
import LandingPage from '../pages/LandingPage';
import ForgotPassword from '../components/ForgotPassword';
import Dashboard from '../components/Dashboard'; // Assume a Dashboard component exists
import Students from '../components/Students';
import Attendance from '../components/Attendance';
import StudentDashboard from '../components/StudentDashboard';
import StudentRegistration from '../components/StudentRegistration';
import AttendanceTracker from '../components/AttendanceTracker';
import TimePeriodTableViewer from '../components/TimePeriodTableViewer';
import ExamTimeTable from '../components/ExamTimeTable';
import ExamResultsViewer from '../components/ExamResultsViewer';
import LeaveRequestForm from '../components/LeaveRequestForm';
import FeeStructure from '../components/FeeStructure';
import StudentFeePayment from '../components/StudentFeePayment';
import FeeAlerts from '../components/FeeAlerts';

const AppRoutes = () => (
    <Router>
        <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/attendance/:courseId" element={<Attendance />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/students" element={<Students />} />
            <Route path="/attendances" element={<Attendance />} />   
            <Route path="/students-db" element={<StudentDashboard />} />
            <Route path="/register" element={<StudentRegistration />} />
            <Route path="/attendance" element={<AttendanceTracker />} />
            <Route path="/daily-schedule" element={<TimePeriodTableViewer />} />
            <Route path="/exam-schedule" element={<ExamTimeTable />} />
            <Route path="/exam-results" element={<ExamResultsViewer />} />
            <Route path="/leave-request" element={<LeaveRequestForm />} />
                <Route path="/fee-structure" element={<FeeStructure />} />
                <Route path="/student-fee-payment" element={<StudentFeePayment studentId={1} />} /> {/* Pass in actual student ID */}
                <Route path="/fee-alerts" element={<FeeAlerts />} />
            {/* <Route path="/" element={<Login />} /> 
             Add other routes for courses, exams, etc. */}
        </Routes>
    </Router>
);

export default AppRoutes;