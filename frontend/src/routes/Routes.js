import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Attendance from '../components/Attendance';
import AttendanceManager from '../components/AttendanceManager';
import AttendanceTracker from '../components/AttendanceTracker';
import CreditCalculation from '../components/CreditCalculation';
import Dashboard from '../components/Dashboard'; // Assume a Dashboard component exists
import ExamQuestionManager from '../components/ExamQuestionManager';
import ExamResultEntry from '../components/ExamResultEntry';
import ExamResultsViewer from '../components/ExamResultsViewer';
import ExamTimeTable from '../components/ExamTimeTable';
import FeeAlerts from '../components/FeeAlerts';
import FeeStructure from '../components/FeeStructure';
import ForgotPassword from '../components/ForgotPassword';
import LeaveManagement from '../components/LeaveManagement';
import LeaveRequestForm from '../components/LeaveRequestForm';
import LeaveRequests from '../components/LeaveRequests';
import Login from '../components/Login';
import PayrollDashboard from '../components/PayrollDashboard';
import PayrollDetail from '../components/PayrollDetail';
import PayrollForm from '../components/PayrollForm';
import PayrollList from '../components/PayrollList';
import PayrollManager from '../components/PayrollManager';
import PerformanceTracker from '../components/PerformanceTracker';
import ResetPassword from '../components/ResetPassword';
import StaffDashboard from '../components/StaffDashboard';
import StaffDetail from '../components/StaffDetail';
import StaffRegistration from '../components/StaffRegistration';
import Students from '../components/Students';
import StudentDashboard from '../components/StudentDashboard';
import StudentFeePayment from '../components/StudentFeePayment';
import StudentRegistration from '../components/StudentRegistration';
import TimePeriodTableViewer from '../components/TimePeriodTableViewer';
import LandingPage from '../pages/LandingPage';
import CourseList from '../components/CourseList';
import CourseDetails from '../components/CourseDetails';

const AppRoutes = () => (
    <Router>
        <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/attendance/:courseId" element={<Attendance />} />
            <Route path="/attendances" element={<Attendance />} />  
            <Route path="/attendance-manage" element={<AttendanceManager />} />
            <Route path="/attendance" element={<AttendanceTracker />} />
            <Route path="/credit-cal" element={<CreditCalculation />} />
            <Route path="/courses" element={<CourseList />} />
            <Route path="/courses/:courseId" element={<CourseDetails />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/exam-q-manager" element={<ExamQuestionManager />} />
            <Route path="/exam-results-entry" element={<ExamResultEntry />} />
            <Route path="/exam-results" element={<ExamResultsViewer />} />
            <Route path="/exam-schedule" element={<ExamTimeTable />} />
            <Route path="/fee-alerts" element={<FeeAlerts />} />
            <Route path="/fee-structure" element={<FeeStructure />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/leave-manage" element={<LeaveManagement />} />
            <Route path="/leave-request-form" element={<LeaveRequestForm />} />
            <Route path="/leave-request" element={<LeaveRequests />} />
            <Route path="/login" element={<Login />} />
            <Route path="/payroll-db" element={<PayrollDashboard />} />
            <Route path="/payroll-detail" element={<PayrollDetail />} />
            <Route path="/payroll-form" element={<PayrollForm />} />
            <Route path="/payroll" element={<PayrollList/>} />
            <Route path="/payroll-manage" element={<PayrollManager/>} />
            <Route path="/performance-tracker" element={<PerformanceTracker/>} />
            <Route path="/reset-passwd" element={<ResetPassword/>} />
            <Route path="/staff-db" element={<StaffDashboard/>} />
            <Route path="/staff-detail" element={<StaffDetail/>} />
            <Route path="/staff-registration" element={<StaffRegistration/>} />
            <Route path="/students" element={<Students />} /> 
            <Route path="/students-db" element={<StudentDashboard />} />
            <Route path="/student-fee-payment" element={<StudentFeePayment studentId={1} />} /> {/* Pass in actual student ID */}
            <Route path="/register" element={<StudentRegistration />} />
            <Route path="/daily-schedule" element={<TimePeriodTableViewer />} />
            {/* <Route path="/" element={<Login />} /> 
             Add other routes for courses, exams, etc. */}
        </Routes>
    </Router>
);

export default AppRoutes;