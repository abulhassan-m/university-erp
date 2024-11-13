// AttendanceTracker.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Typography, List, ListItem, ListItemText } from '@mui/material';

const AttendanceTracker = () => {
    const [attendanceRecords, setAttendanceRecords] = useState([]);

    useEffect(() => {
        const fetchAttendance = async () => {
            const response = await axios.get('/api/student/attendance/');
            setAttendanceRecords(response.data);
        };
        fetchAttendance();
    }, []);

    return (
        <Container>
            <Typography variant="h4" gutterBottom>Attendance Tracker</Typography>
            <List>
                {attendanceRecords.map((record) => (
                    <ListItem key={record.id}>
                        <ListItemText
                            primary={`${record.date}: ${record.status}`}
                        />
                    </ListItem>
                ))}
            </List>
        </Container>
    );
};

export default AttendanceTracker;
