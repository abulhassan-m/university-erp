import React, { useEffect, useState } from 'react';
import './Students.css';

const Students = () => {
    const [students, setStudents] = useState([]);
    const [formData, setFormData] = useState({ enrollment_number: '', department: '', year: '', courses: [] });

    useEffect(() => {
        fetch('/api/students/')
            .then(response => response.json())
            .then(data => setStudents(data));
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('/api/students/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData),
        })
            .then(response => response.json())
            .then(data => setStudents([...students, data]));
    };

    return (
        <div className="students-container">
            <h1>Manage Students</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Enrollment Number" onChange={(e) => setFormData({ ...formData, enrollment_number: e.target.value })} />
                <input type="text" placeholder="Department" onChange={(e) => setFormData({ ...formData, department: e.target.value })} />
                <input type="number" placeholder="Year" onChange={(e) => setFormData({ ...formData, year: e.target.value })} />
                <button type="submit">Add Student</button>
            </form>
            <div className="students-list">
                {students.map((student) => (
                    <div key={student.id} className="student-card">
                        <h3>{student.user.first_name} {student.user.last_name}</h3>
                        <p>Department: {student.department}</p>
                        <p>Year: {student.year}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Students;
