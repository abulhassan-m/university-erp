import React, { useEffect, useState } from 'react';
import './Attendance.css';

const Attendance = () => {
    const [attendance, setAttendance] = useState([]);

    useEffect(() => {
        fetch('/api/attendance/')
            .then(response => response.json())
            .then(data => setAttendance(data));
    }, []);

    return (
        <div className="attendance-container">
            <h1>Attendance Records</h1>
            <table className="attendance-table">
                <thead>
                    <tr>
                        <th>User</th>
                        <th>Date</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {attendance.map(record => (
                        <tr key={record.id}>
                            <td>{record.user}</td>
                            <td>{record.date}</td>
                            <td>{record.status}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Attendance;
