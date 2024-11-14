import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, TextField, Button, Typography, List, ListItem, ListItemText } from '@mui/material';

const AttendanceManager = () => {
    const [attendanceData, setAttendanceData] = useState([]);
    const [newAttendance, setNewAttendance] = useState({ staff_id: '', date: '', status: 'Present' });

    useEffect(() => {
        const fetchAttendance = async () => {
            try {
                const response = await axios.get('/api/staff/attendance/');
                setAttendanceData(response.data);
            } catch (error) {
                console.error("Error fetching attendance data:", error);
            }
        };
        fetchAttendance();
    }, []);

    const handleChange = (e) => {
        setNewAttendance({ ...newAttendance, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('/api/staff/attendance/', newAttendance);
            alert("Attendance marked successfully!");
            setAttendanceData([...attendanceData, newAttendance]);
        } catch (error) {
            console.error("Error marking attendance:", error);
        }
    };

    return (
        <Container>
            <Typography variant="h4" gutterBottom>Manage Attendance</Typography>
            <form onSubmit={handleSubmit}>
                <TextField name="staff_id" label="Staff ID" fullWidth margin="normal" onChange={handleChange} />
                <TextField name="date" label="Date" type="date" fullWidth margin="normal" InputLabelProps={{ shrink: true }} onChange={handleChange} />
                <TextField name="status" label="Status" fullWidth margin="normal" onChange={handleChange} />
                <Button type="submit" variant="contained" color="primary">Mark Attendance</Button>
            </form>
            <Typography variant="h5" gutterBottom>Attendance Records</Typography>
            <List>
                {attendanceData.map((record, index) => (
                    <ListItem key={index}>
                        <ListItemText primary={`Staff ID: ${record.staff_id} - Date: ${record.date} - Status: ${record.status}`} />
                    </ListItem>
                ))}
            </List>
        </Container>
    );
};

export default AttendanceManager;
