import React from 'react';
// import { Bar } from 'react-chartjs-2';
import './Dashboard.css';

// Sample chart data for students per department
const data = {
    labels: ['Engineering', 'Business', 'Arts', 'Science', 'Law'],
    datasets: [
        {
            label: 'Students',
            data: [250, 200, 150, 180, 120],
            backgroundColor: '#6a11cb',
            hoverBackgroundColor: '#2575fc',
        },
    ],
};

const Dashboard = () => {
    return (
        <div className="dashboard-container">
            <header className="dashboard-header">
                <h1>Welcome to the University Dashboard</h1>
                <p>Your one-stop overview of key university operations.</p>
            </header>

            <section className="dashboard-cards">
                <div className="card">
                    <h3>Total Students</h3>
                    <p>1,200</p>
                </div>
                <div className="card">
                    <h3>Total Staff</h3>
                    <p>250</p>
                </div>
                <div className="card">
                    <h3>Courses Offered</h3>
                    <p>80</p>
                </div>
                <div className="card">
                    <h3>Library Books</h3>
                    <p>5,000+</p>
                </div>
            </section>

            <section className="dashboard-chart">
                <h2>Student Distribution by Department</h2>
                {/*<Bar data={data} />*/}
            </section>

            <section className="dashboard-links">
                <h2>Quick Links</h2>
                <div className="link-cards">
                    <div className="link-card" onClick={() => alert('Go to Student Records')}>
                        <h3>Student Records</h3>
                        <p>View and manage student records</p>
                    </div>
                    <div className="link-card" onClick={() => alert('Go to Attendance')}>
                        <h3>Attendance</h3>
                        <p>Track student attendance</p>
                    </div>
                    <div className="link-card" onClick={() => alert('Go to Fee Management')}>
                        <h3>Fee Management</h3>
                        <p>Manage fees and invoices</p>
                    </div>
                    <div className="link-card" onClick={() => alert('Go to Library')}>
                        <h3>Library</h3>
                        <p>Manage library resources</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Dashboard;
