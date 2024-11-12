import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/LandingPage.css';

const LandingPage = () => {
    return (
        <div className="landing-page">
            <header className="landing-header">
                <h1>University ERP System</h1>
                <p>Streamline, organize, and enhance your university experience.</p>
                <Link to="/login">
                    <button className="get-started-btn">Get Started</button>
                </Link>
            </header>

            <section className="features">
                <div className="feature-box">
                    <h2>User Management</h2>
                    <p>Manage accounts for students, faculty, and administrators with ease.</p>
                </div>
                <div className="feature-box">
                    <h2>Course Management</h2>
                    <p>Organize courses, schedules, and assignments all in one place.</p>
                </div>
                <div className="feature-box">
                    <h2>Attendance Tracking</h2>
                    <p>Keep track of attendance records for each course.</p>
                </div>
                <div className="feature-box">
                    <h2>Exams & Grading</h2>
                    <p>Manage exams and grading with a comprehensive interface.</p>
                </div>
            </section>
        </div>
    );
};

export default LandingPage;
