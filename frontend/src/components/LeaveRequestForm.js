// LeaveRequestForm.js
import React, { useState } from 'react';
import axios from 'axios';
import { Container, TextField, Button, Typography } from '@mui/material';

const LeaveRequestForm = () => {
    const [formData, setFormData] = useState({
        start_date: '',
        end_date: '',
        reason: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('/api/student/leave_requests/', formData);
            alert("Leave request submitted!");
        } catch (error) {
            console.error("Error submitting leave request:", error);
        }
    };

    return (
        <Container>
            <Typography variant="h4" gutterBottom>Submit Leave Request</Typography>
            <form onSubmit={handleSubmit}>
                <TextField name="start_date" label="Start Date" type="date" fullWidth margin="normal" InputLabelProps={{ shrink: true }} onChange={handleChange} />
                <TextField name="end_date" label="End Date" type="date" fullWidth margin="normal" InputLabelProps={{ shrink: true }} onChange={handleChange} />
                <TextField name="reason" label="Reason" fullWidth multiline rows={4} margin="normal" onChange={handleChange} />
                <Button type="submit" variant="contained" color="primary">Submit</Button>
            </form>
        </Container>
    );
};

export default LeaveRequestForm;