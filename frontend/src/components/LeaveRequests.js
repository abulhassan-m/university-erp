import React, { useState } from 'react';
import './LeaveRequests.css';

const LeaveRequests = () => {
    const [leaveRequests, setLeaveRequests] = useState([]);
    const [newRequest, setNewRequest] = useState({ start_date: '', end_date: '', reason: '' });

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('/api/leave-requests/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newRequest),
        })
        .then(response => response.json())
        .then(data => setLeaveRequests([...leaveRequests, data]));
    };

    return (
        <div className="leave-requests-container">
            <h1>Leave Requests</h1>
            <form onSubmit={handleSubmit}>
                <input type="date" placeholder="Start Date" onChange={(e) => setNewRequest({ ...newRequest, start_date: e.target.value })} />
                <input type="date" placeholder="End Date" onChange={(e) => setNewRequest({ ...newRequest, end_date: e.target.value })} />
                <textarea placeholder="Reason" onChange={(e) => setNewRequest({ ...newRequest, reason: e.target.value })}></textarea>
                <button type="submit">Submit Leave Request</button>
            </form>
            <div className="leave-requests-list">
                {leaveRequests.map(request => (
                    <div key={request.id} className="leave-request-card">
                        <p>From: {request.start_date} - To: {request.end_date}</p>
                        <p>Reason: {request.reason}</p>
                        <p>Status: {request.status}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default LeaveRequests;
