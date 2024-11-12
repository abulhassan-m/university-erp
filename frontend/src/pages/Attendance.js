import React, { useEffect, useState } from 'react';
import { fetchAttendance, markAttendance } from '../services/attendance';

const Attendance = ({ courseId, date }) => {
    const [attendanceRecords, setAttendanceRecords] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const records = await fetchAttendance(courseId, date);
            setAttendanceRecords(records);
        };
        fetchData();
    }, [courseId, date]);

    const handleMarkAttendance = async (studentId, isPresent) => {
        await markAttendance(courseId, studentId, date, isPresent);
        setAttendanceRecords((prev) =>
            prev.map((record) =>
                record.student === studentId ? { ...record, is_present: isPresent } : record
            )
        );
    };

    return (
        <div>
            <h2>Attendance for {date}</h2>
            <ul>
                {attendanceRecords.map((record) => (
                    <li key={record.student}>
                        {record.student_name}: {record.is_present ? 'Present' : 'Absent'}
                        <button onClick={() => handleMarkAttendance(record.student, true)}>Present</button>
                        <button onClick={() => handleMarkAttendance(record.student, false)}>Absent</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Attendance;
