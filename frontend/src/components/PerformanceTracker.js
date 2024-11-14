import React, { useState } from 'react';
import axios from 'axios';
import { Container, TextField, Button, Typography } from '@mui/material';

const PerformanceTracker = () => {
    const [performanceData, setPerformanceData] = useState({ staff_id: '', date: '', remarks: '' });

    const handleChange = (e) => {
        setPerformanceData({ ...performanceData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('/api/staff/performance/', performanceData);
            alert("Performance record updated!");
        } catch (error) {
            console.error("Error updating performance record:", error);
        }
    };

    return (
        <Container>
            <Typography variant="h4" gutterBottom>Performance Tracking</Typography>
            <form onSubmit={handleSubmit}>
                <TextField name="staff_id" label="Staff ID" fullWidth margin="normal" onChange={handleChange} />
                <TextField name="date" label="Date" type="date" fullWidth margin="normal" InputLabelProps={{ shrink: true }} onChange={handleChange} />
                <TextField name="remarks" label="Remarks" fullWidth multiline rows={4} margin="normal" onChange={handleChange} />
                <Button type="submit" variant="contained" color="primary">Update Performance</Button>
            </form>
        </Container>
    );
};

export default PerformanceTracker;
